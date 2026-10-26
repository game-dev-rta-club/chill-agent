---
keyPoints: >-
  Each Goal's Autonomy says how far to go without the user. At the end of a turn,
  do once what each listed level asks, then end with one short line when nothing remains.
---

# Continue autonomously

The user sets **Autonomy** on each Goal, in its comment box. A new Goal starts
with its parent's level. chill names the levels in its end-of-turn request;
nothing changes at Lv 1.

| Level | What the user asks |
| --- | --- |
| Lv 1 Normal | Work as usual. |
| Lv 2 Continue | After each turn, keep working on what was agreed for this Goal. Tool requests are approved. |
| Lv 3 Drive | Lv 2 for the whole tree under the Goal's Root: advance everything that does not need the user's judgment, ask those decisions as Letters and keep working elsewhere meanwhile. Leave Goals another live conversation holds. |

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
