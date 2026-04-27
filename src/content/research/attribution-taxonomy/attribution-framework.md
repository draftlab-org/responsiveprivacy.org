---
permalink: attribution-framework
title: Attribution Framework
chapter: Attribution Taxonomy
chapterOrder: 2
order: 4
status: published
---

## Identity Attributes

Definition: Core identifying information that establishes who someone is

| Attribute ID | Attribute Name           | Risk Level | Current Display Rate | Privacy Level Threshold | Example Identifier             |
| :----------- | :----------------------- | :--------- | -------------------- | :---------------------- | :----------------------------- |
| ID-01        | Full Name                | High       | 21%                  | Level 2+                | `.staff-name`, `author.name`   |
| ID-02        | Photo/Headshot           | High       | 21%                  | Level 2+                | `.staff-photo`, `img.headshot` |
| ID-03        | Job Title/Role           | Medium     | 21%                  | Level 1+                | `.staff-title`, role           |
| ID-04        | Biography/Background     | Medium     | Varies               | Level 3+                | `.staff-bio`, bio-text         |
| ID-05        | Professional Credentials | Low        | Varies               | Level 3+                | `.credentials`, qualifications |

## Contact Vectors

Definition: Information enabling direct communication or location

| Attribute ID | Attribute Name          | Risk Level | Current Display Rate | Privacy Level Threshold | Example Identifier                     |
| :----------- | :---------------------- | :--------- | :------------------- | :---------------------- | :------------------------------------- |
| CV-01        | Email Address           | Very High  | 14%                  | Level 4 only            | `.email`, mailto: links                |
| CV-02        | Phone Number            | Very High  | 14%                  | Level 4 only            | `.phone`, tel: links                   |
| CV-03        | Office Location/Address | Very High  | Varies               | Level 4 only            | `.location`, `.address`                |
| CV-04        | Social Media Links      | Medium     | —                    | Level 3+                | `.social-links`, external profile URLs |
| CV-05        | Messaging Handles       | High       | Rare                 | Level 4 only            | `.messaging-handle`, chat identifiers  |

## Organizational Relationships

Definition: Information about professional affiliations and connections

| Attribute ID | Attribute Name            | Risk Level | Current Display Rate | Privacy Level Threshold | Example Identifier                |
| :----------- | :------------------------ | :--------- | :------------------- | :---------------------- | :-------------------------------- |
| OR-01        | Department/Team           | Low        | Varies               | Level 1+                | `.department`, `team-name`        |
| OR-02        | Board Membership          | Medium     | Varies               | Level 3+                | `.board-member`, governance role  |
| OR-03        | Partner Organizations     | Medium     | Varies               | Level 3+                | `.partner-org`, affiliation links |
| OR-04        | Project Associations      | Low-Medium | Varies               | Level 2+                | `.project-attribution`, bylines   |
| OR-05        | Advisory/Volunteer Status | Low        | Varies               | Level 3+                | `.advisory-role`, volunteer tag   |

## Temporal/Activity Data

Definition: Information about when and what someone does

| Attribute ID | Attribute Name             | Risk Level | Current Display Rate | Privacy Level Threshold | Example Identifier               |
| :----------- | :------------------------- | :--------- | :------------------- | :---------------------- | :------------------------------- |
| AD-01        | Work Schedule/Availability | High       | Rare                 | Level 4 only            | `.schedule`, calendar data       |
| AD-02        | Event Participation        | Medium     | Varies               | Level 3+                | `.event-speaker`, attendee lists |
| AD-03        | Publication Dates          | Low        | Varies               | Level 2+                | `.pub-date`, timestamp metadata  |
| AD-04        | Project Timelines          | Medium     | Varies               | Level 3+                | `.project-timeline`, date ranges |
| AD-05        | Bylines/Authorship         | Medium     | Varies               | Level 2+                | `.byline`, author metadata       |
