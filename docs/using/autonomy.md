---
keyPoints: >-
  Autonomy, set per agent (per Root), says how far the agent goes without you:
  Normal, Auto Continue or Ultra Continue. A new conversation on a Root starts at Normal.
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
| Auto Continue | Keeps working on what you've agreed, across the whole Root Goal. Questions come as Letters. No tool prompts. |
| Ultra Continue | Plans its own way to the Root Goal's success criteria and moves every Goal under it forward. Letters only for your decisions. No tool prompts. Goals another live conversation is working on are left to it. |

To have the agent think more deeply or answer faster, tell it in your comment.
No level widens what you agreed or undoes a pause. Use the agent's Pause control
to hold work; Pause stops the end-of-turn requests too.

## When the agent hears about it

- **At the end of a turn.** chill sends the conversation one message that lists
  each Root it owns above Normal, by level name, with what that level asks. It
  ends with the rule for keeping Goals current.
- **At tool requests (Claude).** A request is approved when the conversation
  owns a Root and every Root it owns is at Auto Continue or Ultra Continue.
  Questions the agent asks you and paused work are left to you.

The end-of-turn message is sent once, then again only after something changes,
such as your feedback, a Goal or Canvas edit, or a level change. A turn with
nothing left to do ends with one short line and posts nothing on the Web. Claude
receives the message at the end of its response; for Codex, the Web server
watches the chat every 30 seconds and queues it after the run has ended.

## Coming from AutoContinue and Approve all

Autonomy replaces both switches. A Root whose AutoContinue was On starts at Auto
Continue; all others start at Normal. Approve all is not carried over: set a Root
to Auto Continue or Ultra Continue to have tool requests approved.

Autonomy first had four levels, with Thorough between Normal and the level now
named Auto Continue; Thorough became Normal. It was then set per Goal; once per
workspace, each Root's level moves to its agent and Goals keep none of their own.

The CLI documents the exact rules, the API and the migration in
[Goals: Autonomy](https://github.com/game-dev-rta-club/chill-agent-cli/blob/main/docs/workspace/goals.md#autonomy-how-far-the-agent-goes-on-its-own).
