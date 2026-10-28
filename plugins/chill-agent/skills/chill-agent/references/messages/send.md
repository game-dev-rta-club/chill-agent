---
keyPoints: >-
  Deliver what the user needs to receive, with enough context to use or decide.
  A message that asks the user to decide or approve something carries --ask and
  appears as a Letter; any other message is a Comment. One message per
  response. Work moved to a Split Goal is discussed there; the parent gets one pointer.
---

# Send a message

If your message asks the user to decide or approve something, add
`--ask '<what to decide>'`; it then appears as a Letter. Any other message is a
Comment. Post either with `connection reply` in a Claude conversation, otherwise
with `goal comment`.

The Letters menu should show only what the user still has to decide: a Letter
waits there until they next comment on the Goal, and the Web may notify their
devices of it. So do not add a question to a report just to make it a Letter, and
withdraw a Letter whose question is no longer needed with `goal close-letter`.

Lead with the result, evidence, artifact link and limitations needed to use it.
For a real decision, show what the proposal changes, its current and finished
form, with your recommendation and what the answer changes. Check recent
Conversation so you do not repeat a report, a question still open in a Letter,
or one the user has answered.

Send one message per response, questions included: the user reads the newest
message first and can miss one above it.

For a consequential choice that belongs to the user, investigate available facts
and prepare enough authorized work to make your recommendation concrete. Explain
what the answer changes. A pending final folder, name or similar reversible
detail often allows the same artifact to be built and checked provisionally;
record that assumption and continue. A Letter is not permission, but neither is
it a pause on everything. Keep explicit waits and missing authorization limited
to their actual dependencies.

Use `--text-file` for longer messages and installed help for syntax. Check the
printed line. Progress stays in Conversation; saving a message changes
neither work selection nor Goal completion.

For a saved Letter, use `settings notice --id <goal> --event <event>` with the
stable prefix. Web alerts are Letter-only. A handled or web-push response means
the extension handled delivery; do not send again. Otherwise, when enabled,
use the exact returned host tool, recipient and message once, then its receipt
command for sent, failed or unconfirmed. Disabled or uncertain delivery is not
permission to switch routes or retry. Acceptance does not prove the user saw it.
Use installed help for syntax or current settings when needed; do not alter
notification preferences as part of reporting.

Reply where the work is. When a request moves into a Split Goal, continue the
conversation in that Goal, beside its Deliverable, and leave the parent one short
Comment that names it (Goal #N) instead of answering in both. Answer later
feedback on the parent about that work in the Split Goal as well, and reply on
the parent with the same one-line pointer, since only a reply there answers it.

Continue authorized work without waiting for an answer that it does not need.
An end-of-turn check with no new outcome or remaining work ends with one short
line; chill records it, so it needs no result message.
