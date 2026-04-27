---
permalink: restoration-framework
title: Restoration Framework
chapter: Attribution Taxonomy
chapterOrder: 2
order: 6
status: published
---

## Restoration Process (High Priority Feature)

Survey data shows restoration is a top feature requirement. Therefore, implementation must include:

1. State Preservation: system stores previous visibility configuration before privacy mode activation
2. Graduated Restoration:
   1. Option 1: restore to immediately previous state
   2. Option 2: restore one privacy level at a time (0 → 1 → 2, etc.)
   3. Option 3: restore to custom configuration
3. Individual Control Timeline: staff can control their personal restoration timing, independent of organizational site-wide restoration
4. Verification Step: admin/staff verification required before full restoration goes live
5. Notification: all affected parties notified before restoration
6. Audit Trail: all restoration actions logged with reason and authorization

## Restoration Criteria

| Criterion                            | Evaluation Method                    | Responsible Party                    | Timeframe                           |
| :----------------------------------- | :----------------------------------- | :----------------------------------- | :---------------------------------- |
| Threat assessment indicates safety   | Documented threat reduction          | Security team + affected individual | Ongoing monitoring                  |
| Fixed time period elapsed            | Pre-set privacy mode duration        | Automatic or admin review            | Hours to weeks depending on trigger |
| Geographic threat no longer relevant | Location-based threat tracking       | Security team                        | Case-by-case                        |
| Individual comfort restored          | Staff readiness assessment           | Individual staff member              | Staff-initiated                     |
| Operational need resolved            | Project completion, event conclusion | Project lead + staff                | Scheduled                           |

## Restoration Types

| Restoration Type     | Description                              | Trigger                             | Control                |
| :------------------- | :--------------------------------------- | :---------------------------------- | :--------------------- |
| Automatic Time-Based | Restores after preset duration           | Timer expiration                    | Organizational setting |
| Manual Immediate     | Admin restores entire site               | Admin action and staff notification | Collaborative          |
| Gradual Escalation   | Steps up one privacy level at intervals  | Scheduled or threat assessment      | Organizational         |
| Individual Opt-In    | Staff members restore their own profiles | Individual readiness                | Individual control     |
| Partial Restoration  | Restore specific attributes or pages     | Selective admin action              | Organizational         |
