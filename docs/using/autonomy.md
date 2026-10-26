---
keyPoints: >-
  Autonomy, set per Goal from Lv 1 to Lv 3, says how far the agent goes without you.
  A new Goal copies its parent's level; Lv 1 adds nothing to the agent's usual work.
---

# Choose how far the agent goes on its own

Every Goal has an **Autonomy** level. Set it with the one-line slider beside
**Add file** in the Goal's comment box: the level's icon, then the levels, with
the current one named. The change is saved at once, without a comment. Hover the
icon or a level to read what it asks. A new Goal starts with its parent's level, and a
new Root starts at Lv 1. Changing a parent later does not change its children.

| Level | What it asks of the agent |
| --- | --- |
| Lv 1 Normal | Work as usual. chill adds nothing. |
| Lv 2 Continue | After each turn, chill asks it to keep working on what you agreed for this Goal. Tool requests are approved. |
| Lv 3 Drive | Lv 2 for the whole project under this Root: it moves forward everything that doesn't need your decision and asks the rest as Letters. Goals another live conversation is working on are left to it. |

To have the agent think more deeply or answer faster, tell it in your comment.
No level widens what you agreed or undoes a pause. Use the agent's Pause control
to hold work; Pause stops the end-of-turn requests too.

## When the agent hears about it

- **At the end of a turn.** chill sends the conversation one message, built from
  the highest level among its unfinished Goals, that lists each Goal at Lv 2 or
  higher with what its level asks. The message links to the skill's
  `references/auto-mode/continue.md`.
- **At tool requests (Claude).** A request is approved when any of the
  conversation's Goals is at Lv 3, or when all of them are at Lv 2 or higher.
  Questions the agent asks you and paused work are left to you.

The end-of-turn message is sent once, then again only after something changes,
such as your feedback, a Goal or Deliverable edit, or a level change. A turn with
nothing left to do ends with one short line and posts nothing on the Web. Claude
receives the message at the end of its response; for Codex, the Web server
watches the chat every 30 seconds and queues it after the run has ended.

## Coming from AutoContinue and Approve all

Autonomy replaces both switches. Goals under a Root whose AutoContinue was On
start at Lv 2 Continue; all others start at Lv 1. Approve all is not carried
over: set a Goal to Lv 2 or Lv 3 to have tool requests approved.

Autonomy first had four levels, with Lv 2 Thorough between Normal and Continue.
Once per workspace, chill moves each Goal to the three levels: Thorough becomes
Normal, Continue becomes Lv 2 and Drive becomes Lv 3.

The CLI documents the exact rules, the API and the migration in
[Goals: Autonomy](https://github.com/game-dev-rta-club/chill-agent-cli/blob/main/docs/workspace/goals.md#autonomy-how-far-the-agent-goes-on-its-own).
