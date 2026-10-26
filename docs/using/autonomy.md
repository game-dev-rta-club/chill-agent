---
keyPoints: >-
  Autonomy, set per Goal from Lv 1 to Lv 4, says how far the agent goes without you.
  A new Goal copies its parent's level; Lv 1 adds nothing to the agent's usual work.
---

# Choose how far the agent goes on its own

Every Goal has an **Autonomy** level. Set it with the slider beside **Add file**
in the Goal's comment box; the change is saved at once, without a comment. Hover
a level to read what it asks. A new Goal starts with its parent's level, and a
new Root starts at Lv 1. Changing a parent later does not change its children.

| Level | What it asks of the agent |
| --- | --- |
| Lv 1 Normal | Work as usual. chill adds nothing. |
| Lv 2 Thorough | Think in your place and prefer accuracy to speed: research widely, then give its best answer, asking only what only you can decide. At the end of a turn, chill asks it once to do what it left open but could have settled itself. |
| Lv 3 Continue | Lv 2, and after each turn chill asks it to keep working on what you agreed for this Goal. Tool requests are approved. |
| Lv 4 Drive | Lv 3 for the whole project under this Root: it moves forward everything that doesn't need your decision and asks the rest as Letters. Goals another live conversation is working on are left to it. |

No level widens what you agreed or undoes a pause. Use the agent's Pause control
to hold work; Pause stops the end-of-turn requests too.

## When the agent hears about it

- **With your comments.** For each Goal at Lv 2 or higher, the feedback the agent
  receives names the level and asks for the Lv 2 way of working.
- **At the end of a turn.** chill sends the conversation one message, built from
  the highest level among its unfinished Goals, that lists each Goal at Lv 2 or
  higher with what its level asks. The message links to the skill's
  `references/auto-mode/continue.md`.
- **At tool requests (Claude).** A request is approved when any of the
  conversation's Goals is at Lv 4, or when all of them are at Lv 3 or higher.
  Questions the agent asks you and paused work are left to you.

The end-of-turn message is sent once, then again only after something changes,
such as your feedback, a Goal or Deliverable edit, or a level change. A turn with
nothing left to do ends with one short line and posts nothing on the Web. Claude
receives the message at the end of its response; for Codex, the Web server
watches the chat every 30 seconds and queues it after the run has ended.

## Coming from AutoContinue and Approve all

Autonomy replaces both switches. Goals under a Root whose AutoContinue was On
start at Lv 3; all others start at Lv 1. Approve all is not carried over: set a
Goal to Lv 3 or Lv 4 to have tool requests approved.

The CLI documents the exact rules, the API and the migration in
[Goals: Autonomy](https://github.com/game-dev-rta-club/chill-agent-cli/blob/main/docs/workspace/goals.md#autonomy-how-far-the-agent-goes-on-its-own).
