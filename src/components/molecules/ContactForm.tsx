import 'altcha';
import 'altcha/altcha.css';
import { useEffect, useRef, useState } from 'react';
import IconShield from '~icons/mdi/shield-lock-outline';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputBase =
	'w-full rounded-md border px-3 py-2 shadow-sm transition-colors focus:outline-none focus:ring-2';
const inputOk =
	'border-gray-300 focus:border-blue-500 focus:ring-blue-500';
const inputError =
	'border-red-500 focus:border-red-500 focus:ring-red-500';

export default function ContactForm() {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [agreed, setAgreed] = useState(false);
	const [website, setWebsite] = useState('');
	const [status, setStatus] = useState<Status>('idle');
	const [error, setError] = useState<string | null>(null);
	const formRef = useRef<HTMLFormElement>(null);

	const submitting = status === 'submitting';
	const inputClass = (hasError: boolean) =>
		`${inputBase} ${hasError ? inputError : inputOk}`;

	useEffect(() => {
		if (status !== 'success') return;
		// Reset the widget so it fetches a fresh challenge for the next submission.
		const widget = document.querySelector('altcha-widget') as
			| (HTMLElement & { reset?: () => void })
			| null;
		widget?.reset?.();
	}, [status]);

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus('submitting');
		setError(null);

		const form = e.currentTarget;
		const data = new FormData(form);
		const altcha = (data.get('altcha') as string | null) ?? '';

		if (!altcha) {
			setError('Please wait a moment for verification to finish, then try again.');
			setStatus('error');
			return;
		}

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ email, message, agreed, website, altcha }),
			});
			const body = (await res.json()) as { ok?: boolean; error?: string };
			if (!res.ok || !body.ok) {
				throw new Error(body.error ?? 'Something went wrong.');
			}
			setStatus('success');
			setEmail('');
			setMessage('');
			setAgreed(false);
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Something went wrong.');
			setStatus('error');
		}
	};

	if (status === 'success') {
		return (
			<div
				role="status"
				className="rounded-md border border-green-200 bg-green-50 p-6 text-center"
			>
				<p className="font-display text-lg font-semibold text-green-900">
					Thanks for getting in touch.
				</p>
				<p className="mt-2 text-sm text-green-800">
					Your message has been sent. We'll be in touch soon.
				</p>
			</div>
		);
	}

	return (
		<form
			ref={formRef}
			onSubmit={onSubmit}
			noValidate
			className="flex flex-col gap-5"
		>
			<div>
				<label
					htmlFor="contact-email"
					className="mb-1 block text-sm font-medium text-gray-700"
				>
					Email <span className="text-red-500">*</span>
				</label>
				<input
					id="contact-email"
					name="email"
					type="email"
					required
					autoComplete="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					disabled={submitting}
					className={inputClass(false)}
				/>
			</div>

			<div>
				<label
					htmlFor="contact-message"
					className="mb-1 block text-sm font-medium text-gray-700"
				>
					Message <span className="text-red-500">*</span>
				</label>
				<textarea
					id="contact-message"
					name="message"
					required
					rows={6}
					maxLength={5000}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					disabled={submitting}
					className={inputClass(false)}
				/>
			</div>

			<div className="flex items-start gap-3 rounded-md border border-gray-200 bg-gray-50 p-4">
				<IconShield
					className="mt-0.5 size-5 shrink-0 text-gray-500"
					aria-hidden="true"
				/>
				<div className="flex-1 text-sm text-gray-700">
					<label className="flex items-start gap-2">
						<input
							type="checkbox"
							name="agreed"
							checked={agreed}
							onChange={(e) => setAgreed(e.target.checked)}
							disabled={submitting}
							className="mt-1 size-4 shrink-0 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
						/>
						<span>
							I'd like to receive occasional updates about Responsive Privacy
							by email.
						</span>
					</label>
					<p className="mt-2 text-xs text-gray-600">
						Opting in is optional — your message will reach us either way. If
						you opt in, we'll only use your email for updates about Responsive
						Privacy, never for anything else, and you can unsubscribe at any
						time. Your details are stored with{' '}
						<a
							href="https://www.brevo.com/legal/privacypolicy/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Brevo
						</a>
						, a GDPR-compliant email service.
					</p>
				</div>
			</div>

			<altcha-widget
				challenge="/api/altcha/challenge"
				auto="onload"
				suppressHydrationWarning
			/>

			<input
				type="text"
				name="website"
				tabIndex={-1}
				autoComplete="off"
				value={website}
				onChange={(e) => setWebsite(e.target.value)}
				className="hidden"
				aria-hidden="true"
			/>

			{error && (
				<p role="alert" className="text-sm text-red-600">
					{error}
				</p>
			)}

			<button
				type="submit"
				disabled={submitting}
				className="button-base button-primary button-size-lg disabled:cursor-not-allowed disabled:opacity-60"
			>
				{submitting ? 'Sending…' : 'Send message'}
			</button>
		</form>
	);
}
