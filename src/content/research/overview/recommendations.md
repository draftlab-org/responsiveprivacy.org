---
permalink: recommendations
title: Design Recommendations
chapter: Overview
chapterOrder: 1
order: 4
status: published
---

The following section captures suggestions, based on research and experience, on how an organization can approach building their own responsive transparency mechanism. We include a mix of technical and organizational recommendations that can be used (and useful) for writing up a policy; updating a website CMS; defining organizational content taxonomy; etc.

## Recommendation #1: Build for Collaboration

Most Survey B’s sample—about 65%—want to work together with organizations whenever making decisions about their online visibility and responding to threats, rather than just letting organizations take over. In fact, none wanted their organization making decisions on its own, without any input from them. Right now, the survey data shows that organizations tend to split up responsibility across lots of different roles, so it’s not always clear to staff who actually is in charge. But both groups—individuals and organizations—are looking for partnership, and neither side wants complete control or to be left out entirely. Here’s a possible permission and notification structure that can enable collaborative decision making: :

**Permission system:**

- Staff level: Request protection, see status, provide input
- Approver level: Review requests, activate quickly, set policies
- Admin level: Configure workflows, manage users, access analytics
- Emergency override: Anyone with authority can act immediately for safety

**Notifications framework:**

- Staff requests → Designated approvers notified (email, SMS, in-app)
- Approvers act → Staff notified of status change
- Auto-approvals → Both parties receive confirmation
- Changes made → Audit trail visible to relevant parties

## Recommendation #2: Enable Graduated, Reversible Protection

Another big takeaway from the research is most respondents—about 72%—don’t actually want to go completely anonymous; they just want some details hidden, with a few that want things hidden sometimes. Surprisingly, none of the tools out there right now let you temporarily hide information. Both organizations and interviewees say they’re looking for smarter, more flexible ways to control who sees what, depending on the situation. A design response to consider is:

**Granular visibility controls:**

- By content type: Names, photos, bios, contact info, locations (independent toggles)
- By page: Homepage vs About vs Blog vs Program pages
- By component: Author bios, team listings, contact forms, event speakers
- By person: Individual staff can have different visibility settings

**Graduated visibility levels:**

- Public: Everything visible (default state)
- Limited: Name + role only, hide contact/bio/photo
- Minimal: Role + department only, hide name
- Anonymous: Remove all attributions
- Custom: User-defined combinations

**Temporal controls:**

- Duration-based: 24 hours, 7 days, 30 days, until manually restored
- Trigger-based: Until threat passes (staff confirms), until review date
- Scheduled: Activate/deactivate at specific times (sensitive publication periods)

## Recommendation #3: Build a Quick and Mindful Activation Trigger

About a third of all respondents said they want a response within 30 minutes, and almost half want help the same day. But right now, most systems take hours or even days to respond. On top of that, the privacy features have to work even when people are stressed out, using their phones, and might not be tech experts. When designing your activation trigger, take the following ideas for inspiration:

**One-click emergency activation:**

- Pre-configured emergency profiles (created during calm setup)
- (Mobile-accessible) "Activate Protection" button
- Auto-approvals for emergency level (if an organization's policy allows)
- Confirmation within 30 seconds, visibility change within 5 minutes

This approach, paired with user pathways developed on the basis of urgency, would address the need for speed optimization.

## Recommendation #4: Provide Decision Support

Another thing that stood out in the research: around 40-45% of respondents weren’t sure how to answer hypothetical privacy questions. Ostensibly, the smaller organizations and teams that make up the sample don’t really have good systems in place for identifying threats. So, in the context of their own organizations, most of this kind of staff are “not sure” how serious any specific risk is or exactly how they should resolve it. Of course, org size might not be correlated to this at all–it’s a matter of maturity of an organization.

In fact, **“_not sure_” was the most common answer when respondents had to recall important decision points in the surveys**. We can look at that in a couple ways: 1) respondents simply do not recall what happened; 2) respondents are struggling with decision points in the process of removals. We believe the overall trend indicates it is probably the latter. For example, a community manager might know a bot’s takeover of the org Instagram account and the current stream of inflammatory crypto posts is a technical and urgent issue, but has limited resources and no training for how to respond.

A design response to this should include the following:

1. Guided decision flows:
   1. E.g: "_What level of threat are you experiencing?_"
   2. User selects one of the following: [_Online harassment_] [_Doxxing concern_] [_Physical safety risk_] [_Not sure_]
2. Contextual guidance:
   1. Threat assessment prompts: _"Has this person found your home address?_" (higher urgency)
   2. Historical patterns: "_Other staff experiencing similar threats chose..."_ (anonymized)
   3. Risk indicators: "_Your photo + location + role \= elevated doxxing risk_"
3. Educational content:
   1. In-context help: "_What is doxxing?_" tooltips and explanations
   2. Scenario planning: "_If you activate protection, here's what will happen..._"
   3. Archive management: Checklist for comprehensive protection beyond the live site(s)

## Recommendation #5: Create Support for Both Reactive Responses and Preventive Protection

Research suggests that at least half of most CSOs and NPOs only do threat assessments after something bad happens—they’re basically reactive to threats occurring. Responses to Survey A showed about a third of organizations took steps to protect their staff ahead of time; presumably when staff work became sensitive or risky in nature.

In Survey B, 21% wanted protection as soon as there’s any warning, and 12% wanted it even before there’s an obvious threat. Additionally, the interviews highlight the need to react quickly when things suddenly get worse, but also to keep watching out for long-term risks that build up over time. Some ideas for combining reactive and preventative pathways in a response:

**Reactive pathway (the primary use case):**

1. Sensitive info isolated: threat occurs, an immediate activation of removal is available
2. Expected time of completion (emergency, urgent levels)
3. Post-incident reporting
4. Post-incident curricula for review and learning is included

**Preventive pathway (to normalize proactive protection):**

- Scheduled activations: "_We're publishing controversial report next week_"
- Event-based triggers: email, SMS text from key profile/user or “group”
- Periodic reminders: e.g., monthly prompt to assess current threat level

The feature/idea of activating responsive transparency rests in both pathways: a low-friction on and off feature that is both reactive and preventive in its activation.
