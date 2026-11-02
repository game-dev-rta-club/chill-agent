---
keyPoints: >-
  Autonomy, set per agent (per Root), says how far the agent goes without you:
  Normal, Auto Continue or Never Stop. A new conversation on a Root starts at Normal.
---

# Choose how far the agent goes on its own

**Autonomy** is set per agent (per Root): one level for the conversation working
on a Root. Set it in the comment box of any Goal of the tree; every Goal of the
tree shows the same level. The change is saved at once, without a comment. Hover
a level to read what it asks.

The same conversation keeps the level, and so does a continued one that takes the
Root over. Another conversation taking the Root starts at Normal. You can set the
level before any agent works on a Root; the first agent on it takes it over.

| Level | What it asks of the agent |
| --- | --- |
| Normal | Does what each comment asks, then waits for you. |
| Auto Continue | Carries out what you've agreed anywhere in the Root Goal and keeps its Goals up to date, finished ones marked Done. It suggests anything you haven't agreed to in the Goal instead of doing it. Questions come as Letters. No tool prompts. |
| Never Stop | Plans its own way to the Root Goal's success criteria, reads whatever helps on the web and this machine (not secrets such as keys or private mail), and keeps going: it digs deeper wherever the criteria might not hold yet and checks what has changed each time it resumes. In Claude Code it always schedules its next check. Letters only for your decisions, including anything irreversible or beyond this workspace. No tool prompts. Goals another live conversation is working on are left to it. |

To have the agent think more deeply or answer faster, tell it in your comment.
No level widens what you agreed or undoes a pause. Use the agent's Pause control
to hold work; Pause stops the end-of-turn requests too.

## When the agent hears about it

- **At the end of a turn.** chill sends the conversation one message that lists
  each Root it owns above Normal, by level name, with what that level asks and
  the Root's unfinished Goals. It ends with the rule for keeping Goals current.
- **When a Never Stop turn would end (Claude).** While the conversation has no
  scheduled check, chill keeps each turn from ending until the agent has
  brought its Goals up to date and scheduled a check. Lowering the level, Pause
  or a Done Root lets the turn end. If a check cannot be scheduled, the agent
  says so on the Root and the turn stays held until you lower the level or pause. Codex has no scheduled checks, so this does not apply there.
- **When you change a level.** The agent is told once, at its next step, what
  the new level asks. In Claude Code, checks it scheduled still wake it at their
  time unless it cancels them; the notice lists them so it can cancel those it no
  longer needs. An idle agent is told with your next comment or its next
  scheduled check.
- **At tool requests (Claude).** A request is approved when the conversation
  owns a Root and every Root it owns is at Auto Continue or Never Stop.
  Questions the agent asks you and paused work are left to you.

The end-of-turn message is sent once, then again only after something changes,
such as your feedback, a Goal or Canvas edit, or a level change. A turn with
nothing left to do ends with one short line and posts nothing on the Web. Claude
receives the message at the end of its response; for Codex, the Web server
watches the chat every 30 seconds and queues it after the run has ended.

## Coming from AutoContinue and Approve all

Autonomy replaces both switches. A Root whose AutoContinue was On starts at Auto
Continue; all others start at Normal. Approve all is not carried over: set a Root
to Auto Continue or Never Stop to have tool requests approved.

Never Stop was called Ultra Continue until November 2026. Roots that were at Ultra Continue are now at Never Stop.

Autonomy first had four levels, with Thorough between Normal and the level now
named Auto Continue; Thorough became Normal. It was then set per Goal; once per
workspace, each Root's level moves to its agent and Goals keep none of their own.

The CLI documents the exact rules, the API and the migration in
[Goals: Autonomy](https://github.com/game-dev-rta-club/chill-agent-cli/blob/main/docs/workspace/goals.md#autonomy-how-far-the-agent-goes-on-its-own).
