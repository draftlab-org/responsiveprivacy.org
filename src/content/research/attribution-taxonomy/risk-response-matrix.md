---
permalink: risk-response-matrix
title: Risk and Response Matrix
chapter: Attribution Taxonomy
chapterOrder: 2
order: 5
status: published
---

## Risk Level Definitions

| Risk Level | Definition                                                | Removal Urgency | Example Attributes                                               |
| :--------- | :-------------------------------------------------------- | :-------------- | :--------------------------------------------------------------- |
| Very High  | Enables immediate physical location or direct contact     | < 5 minutes    | Phone, physical address, real-time location                      |
| High       | Enables targeted contact or identification with effort    | < 30 minutes   | Email, full name + photo, messaging handles                     |
| Medium     | Increases targeting surface when combined with other data | < 2 hours      | Professional relationships, event participation, social profiles |
| Low        | Minimal targeting risk in isolation                       | < 24 hours     | Generic role, publication dates, credentials                     |

## Threat-Based Response Triggers

| Threat Type                              | Affected Scope    | Target Privacy Level | Response Time | Survey Data                     |
| :--------------------------------------- | :---------------- | :------------------- | :------------ | :------------------------------ |
| Direct threat to individual staff        | Individual        | Level 0-1            | < 5 minutes  | 12% require this speed          |
| Harassment campaign against organization | Site-wide         | Level 1-2            | < 30 minutes | 9% require this speed           |
| Partner organization under attack        | Selective/Network | Level 2              | < 1 hour     | 64% would act on partner threat |
| Government investigation/legal action    | Organization-wide | Level 2-3            | Same day      | 15% cite as trigger             |
| Doxxing incident                         | Immediate full    | Level 0              | Immediate     | Critical incident response      |
| Escalating online threats                | Graduated         | Level 2-3            | < 2 hours    | Varies by assessment            |

## Operational/Scheduled Triggers

| Trigger Type                   | Affected Scope           | Target Privacy Level | Implementation Window                                      |
| :----------------------------- | :----------------------- | :------------------- | :--------------------------------------------------------- |
| Individual staff request       | Individual               | Staff-determined     | Per organizational policy (32% want collaborative control) |
| Sensitive project launch       | Project team             | Level 2-3            | Scheduled advance                                          |
| Election/political period      | Organization-wide        | Level 2              | Scheduled advance                                          |
| High-visibility event/campaign | Relevant team            | Level 2-3            | Scheduled advance                                          |
| Security audit findings        | Specific vulnerabilities | Varies               | Per audit timeline                                         |

## Controls

### Control Distribution Model

Based on survey findings, the recommended control model:

- 32% want collaborative control: staff input and organizational authority for rapid action
- 12% trust organization to act independently: opt-in to pre-determined privacy settings
- 9% want approval rights: individual veto on visibility changes
- 6% want notification: informed but not consulted

Recommended implementation (hybrid approach with)

1. Individual default privacy preferences (set once)
2. Organizational override capability for threats
3. Post-action notification to affected staff
4. Restoration control returned to individuals when threat subsides

### Control Levels

| Scope Type       | Description                              | Implementation Mechanism                  | Use Cases                                              |
| :--------------- | :--------------------------------------- | :---------------------------------------- | :----------------------------------------------------- |
| Site-wide        | All staff across entire website          | Global privacy level setting              | Organization-wide threat response                      |
| Page-specific    | Specific pages (e.g., team page, about)  | Page-level privacy rules                  | Protecting staff pages while maintaining project pages |
| Component-level  | Specific sections within pages           | Component tagging with privacy attributes | Hiding bylines in blog posts while keeping content     |
| Individual-based | Per-person controls                      | Individual staff privacy profiles         | Personal threat scenarios, varying comfort levels      |
| Role-based       | By organizational position/vulnerability | Role-type privacy rules                   | Protecting higher-risk roles (directors, field staff)  |
| Attribute-based  | Specific data types across contexts      | Attribute-level privacy flags             | Removing all photos site-wide but keeping names        |

## Visibility & Compliance

### Compliance Integration in Attributes

Compliance-protected attributes (cannot be hidden even at Level 0-1 without legal review):

- Legal Entity Registration: Board members listed on public filings
- Editorial Accountability: bylines for published journalism
- Grant/Funding Acknowledgments: principal investigators, project leads where contractually required
- Regulatory Disclosures: industry-specific requirements (e.g., registered lobbyists)

These attributes should be:

1. Flagged in CMS with compliance-required tag
2. Subject to organizational legal review before removal
3. Displayed with minimum necessary information (e.g., name + role only, no contact)

### Legal/Regulatory Requirements

| Requirement Type                  | Must-Remain-Visible Elements                                                    | Override Capability           | Survey Data |
| :-------------------------------- | :------------------------------------------------------------------------------ | :---------------------------- | :---------- |
| Legal/Regulatory compliance       | Board of directors (registered entities), editorial responsibility (journalism) | No override                   |             |
| Funder contractual obligations    | Funded project acknowledgments, principal investigators                         | Negotiable with funders       |             |
| Professional standards            | Journalistic bylines, research authorship                                       | Context-dependent             |             |
| Community accountability          | Leadership identification, organizational governance                            | Soft requirement              |             |
| Accessibility/transparency values | Core team visibility, organizational structure                                  | Values-based (may compromise) |             |
