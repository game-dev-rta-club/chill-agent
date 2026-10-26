---
keyPoints: >-
  Claude runs on your computer while Web delivers feedback to the same conversation.
  Keep one receiver open with its reply waiter running, and recover Saved messages
  without resending them. This connection does not start Claude from Web.
---

# Use Web with Claude Code

Claude Code does the work on your computer. The Web page sends your feedback to
that conversation and shows its saved replies. Keep the computer awake and the
receiving Claude conversation running when you leave the terminal for your phone.
Opening Web alone does not start Claude.

[Install the skill](install.md)
and invoke `/chill-agent`; the agent prepares the project, asks you to review its
native hooks and connects a new Goal. Installing the skill alone does not complete
setup or grant tool permissions. Your installed version's setup help is the
source for supported options.

## Before leaving the computer

1. Check that the intended conversation is connected to the intended Goal.
2. Send one message from its Web page and wait for a reply from that same
   conversation. A push notification alone does not verify this round trip.
3. For reception between responses, the agent keeps a reply waiter running as a
   Claude background task. chill's results ask it to start one when none runs.
4. Resolve any required native tool approvals in Claude, or raise the Goal's
   [Autonomy](autonomy.md) to Lv 3 or Lv 4 to have them approved. No level keeps
   a closed Claude process alive.

Keep a single receiving process for the conversation. If it is already running,
opening the same conversation in another CLI can interfere with reception.
Automatic transfer between a background receiver and another CLI is not supported.

## Return to the same conversation

After the receiver has ended, return to the original project folder and use
`claude --resume` to select the same conversation. Retain the project's prepared
hooks and plugin setup. A resumed conversation that owns Goals is asked to start
its reply waiter again.

Do not create a different conversation or Goal to recover the old one's input.
A new conversation does not inherit the original context or connection.

## When a message stays Saved

Saved means the message is stored but has not yet been received by the agent.
Do not repeatedly send it or delete it to make the queue look clear.

Check the original receiver: is Claude still running, is its reply waiter still
running, and is a native permission prompt waiting? Also check that you opened the
connected conversation, rather than a new one. Resume or recover the inbox in
that same conversation using the connection guide. A stopped receiver or a
missing waiter needs recovery; refreshing Web does not start reception.

Keep the saved message until its receipt and reply are confirmed. If the cause
is unclear, retain its event ID and report the startup method and connection
state. The agent's [native connection guide](https://github.com/game-dev-rta-club/chill-agent-cli/blob/main/extensions/harnesses/claude-code.mjs)
covers inbox recovery and confirmed receipts.
