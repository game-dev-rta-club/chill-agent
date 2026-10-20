---
keyPoints: >-
  Move the agreed outcome forward and make sure the user can receive the result.
  One continuation pass owns both the next useful action and the decision to stop.
  Never end on a question or a suggestion the user must click; decide, record and
  keep working.
---

# Continue autonomously

The purpose of Auto mode is useful progress while the user is away. In this
same pass, compare the original desired change with actual results, choose the
next useful action, and carry it through. The user need not acknowledge work
or send a second nudge. Stay within the agreement and respect Off or a manual pause.

Start with the supplied index and a relevant Goal's current context. Read the
Deliverable or discussion where it changes your understanding. Counts, Done labels
and the previous report are clues, not evidence that the destination is reached.
If you would stop, consider what remains between the agreed outcome and the
usable result, rather than finding more tasks merely to stay busy.

An unanswered choice may affect only final placement or another reversible
detail. Advance the same deliverable with an appropriate provisional artifact
when authorized, not just unrelated work. Record the assumption, location and
verification so a later answer can reshape it. Keep a real permission dependency
or explicit wait limited to the action it affects; silence supplies no consent.

## Do not stop to ask

Auto mode exists for long unattended runs. A response that ends on something
for the user to answer or click stops that run, which is the stop the user did
not want.

- Decide what you can decide. Choose the reasonable option, record the choice
  and why in a Comment, and continue; the user can reshape it later.
- Do not hand work back through the agent app's own prompts: a native question,
  a suggestion to start something as a separate task or session, or a closing
  "Shall I …?". Do it yourself instead. When the app lets you, start the
  separate session or subagent yourself and report what it does.
- A problem found on the way, such as a failing test or a broken tool, is part
  of the usable result. Fix it, or start that work yourself when it is outside
  the current change, and report it. It is not busy work.
- A Letter is only for a decision the user alone can make, such as a product
  choice or a permission. It never ends the run: continue everything that does
  not depend on its answer.
- Write to the user in the user's language, even when this guide or a
  continuation message is in English.

## Before ending

Before ending, review the next action as well as the usable result. If agreed
work can advance, carry it forward. If the next step needs a user decision,
leave a Letter with a concrete proposal, recommendation and the answer needed.
Report results in a Comment, and [update the Deliverable](../deliverables/update.md) when the final output changes. Sending a report is
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
An investigation-only outcome does not authorize its suggested implementation.

Return the supplied monitor receipt as `worked` for actual progress, including
a previously missing result delivered in a Comment. If the outcome is delivered
and nothing agreed can advance, use `no-work` without another Web report. Report a failed receipt
accurately; the runtime owns future scheduling. Preserve other queues and pauses.
