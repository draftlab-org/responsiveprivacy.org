import { BrevoClient, BrevoError } from '@getbrevo/brevo';
import { verifySolution } from 'altcha-lib/v1';
import type { APIRoute } from 'astro';

export const prerender = false;

const MAX_MESSAGE_LENGTH = 5000;

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const escapeHtml = (s: string) =>
  s.replace(
    /[<>&"]/g,
    (c) =>
      ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' })[c] as string
  );

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  });

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.BREVO_API_KEY;
  const listId = Number(import.meta.env.BREVO_LIST_ID ?? '3');
  const notifyTo = import.meta.env.BREVO_NOTIFY_TO;
  const notifyFrom = import.meta.env.BREVO_NOTIFY_FROM;
  const notifyFromName =
    import.meta.env.BREVO_NOTIFY_FROM_NAME ?? 'Responsive Privacy';

  if (!apiKey || !notifyTo || !notifyFrom || !Number.isFinite(listId)) {
    return json({ error: 'Form is not configured' }, 500);
  }

  const altchaHmacKey = import.meta.env.ALTCHA_HMAC_KEY;
  if (!altchaHmacKey) {
    return json({ error: 'Form is not configured' }, 500);
  }

  let payload: {
    email?: string;
    message?: string;
    agreed?: boolean;
    website?: string;
    altcha?: string;
  };
  try {
    payload = await request.json();
  } catch {
    return json({ error: 'Invalid request body' }, 400);
  }

  // Honeypot: bots tend to fill every field. Silently succeed.
  if (payload.website && payload.website.trim() !== '') {
    return json({ ok: true });
  }

  if (!payload.altcha) {
    return json({ error: 'Verification required.' }, 400);
  }
  try {
    const verified = await verifySolution(payload.altcha, altchaHmacKey);
    if (!verified) {
      return json({ error: 'Verification failed. Please try again.' }, 400);
    }
  } catch (err) {
    console.error('ALTCHA verification error', err);
    return json({ error: 'Verification failed. Please try again.' }, 400);
  }

  const email = (payload.email ?? '').trim();
  const message = (payload.message ?? '').trim();

  if (!isValidEmail(email)) {
    return json({ error: 'A valid email address is required.' }, 400);
  }
  if (message.length === 0 || message.length > MAX_MESSAGE_LENGTH) {
    return json(
      {
        error: `Please write a message (up to ${MAX_MESSAGE_LENGTH} characters).`,
      },
      400
    );
  }

  const optedIn = payload.agreed === true;
  const brevo = new BrevoClient({ apiKey });

  try {
    await brevo.contacts.createContact({
      email,
      listIds: [listId],
      updateEnabled: true,
      attributes: { OPTED_IN: optedIn },
    });
  } catch (err) {
    if (err instanceof BrevoError) {
      console.error('Brevo contacts error', err.statusCode, err.body);
    } else {
      console.error('Brevo contacts error', err);
    }
    // Saving the contact is best-effort — the message email below is what the
    // user is relying on, so don't fail the whole request if Brevo's contact
    // store hiccups.
  }

  const htmlMessage = escapeHtml(message).replace(/\n/g, '<br>');
  try {
    await brevo.transactionalEmails.sendTransacEmail({
      sender: { email: notifyFrom, name: notifyFromName },
      to: [{ email: notifyTo }],
      replyTo: { email },
      subject: `New contact: ${email}`,
      htmlContent: `<p><strong>From:</strong> ${escapeHtml(email)}</p><p><strong>Opted in to updates:</strong> ${optedIn ? 'yes' : 'no'}</p><p>${htmlMessage}</p>`,
    });
  } catch (err) {
    if (err instanceof BrevoError) {
      console.error('Brevo email error', err.statusCode, err.body);
    } else {
      console.error('Brevo email error', err);
    }
    return json(
      { error: 'Could not send your message. Please try again.' },
      502
    );
  }

  return json({ ok: true });
};
