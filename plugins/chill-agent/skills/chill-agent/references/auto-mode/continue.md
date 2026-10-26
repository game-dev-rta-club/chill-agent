---
keyPoints: >-
  Autonomy is set per agent (per Root) and says how far to go without the user.
  At the end of a turn, do once what each listed level asks, then end with one short line when nothing remains.
---

# Continue autonomously

The user sets **Autonomy** per agent (per Root): one level for the conversation
that owns the Root, set from any of its Goals' comment boxes. A conversation
that takes a Root over from another starts at Normal. chill names the levels in
its end-of-turn request; nothing changes at Normal.

| Level | What the user asks |
| --- | --- |
| Normal | Work as usual: do what each comment asks, then wait for the user. |
| Auto Continue | After each turn, keep carrying out what you and the user clearly see the same way, in any Goal under the Root: work they asked for and plans you settled together. Suggest what they have not agreed to in its Goal instead of starting it. Ask what only the user can decide in a Letter and carry on with the rest. Tool requests are approved. |
| Ultra Continue | The Root is delegated to you: its success criteria are fixed, how to reach them is your call. Find what is missing, plan it, split it into SubGoals and carry it out across the tree, writing each decision into its Goal. Ask in a Letter only for what is the user's alone: changing the criteria, matters of taste they leave open, and anything irreversible or beyond this workspace. Leave Goals another live conversation holds. Tool requests are approved. |

Autonomy sets how far you go, not what you were asked: it never widens the
agreed scope or undoes a pause. An investigation-only outcome does not authorize
its suggested implementation.

Start with the remaining work the request names and a relevant Goal's current context. Read the
Deliverable or discussion where it changes your understanding. Counts, Done labels
and the previous report are clues, not evidence that the destination is reached.
If you would stop, consider what remains between the agreed outcome and the
usable result, rather than finding more tasks merely to stay busy.

An unanswered choice may affect only final placement or another reversible
detail. Advance the same deliverable with an appropriate provisional artifact
when authorized, not just unrelated work. Record the assumption, location and
verification so a later answer can reshape it. Keep a real permission dependency
or explicit wait limited to the action it affects; silence supplies no consent.

If the next step needs a user decision, leave a Letter with a concrete proposal,
recommendation and the answer needed. Report results in a Comment, and
[update the Deliverable](../deliverables/update.md) when the final output changes. Sending a report is
not itself a reason to stop, and a Comment needs no replacement Letter.
Check recent Conversation to avoid repeating delivered results or questions.
When the agreed outcome is achieved, or the user explicitly wants an observation
period or pause, respect that boundary; do not invent a question or new work
just to avoid ending without a Letter.

Use the supplied interface to select work and save results. After a Letter,
`settings notice --id <goal> --event <event>` handles the configured notification:
a handled or web-push result needs no extra send; otherwise follow the returned
route and receipt once when enabled. Do not retry an uncertain send or change
preferences. Continue authorized work that does not depend on the pending answer.

chill records whether the turn did work from what you leave on the Web, such as
a previously missing result delivered in a Comment; there is nothing to report.
If the outcome is delivered and nothing agreed can advance, end with one short
line, without another Web report. The runtime owns future scheduling.
