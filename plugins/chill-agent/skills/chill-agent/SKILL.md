---
name: chill-agent
description: Help the user shape a goal, entrust its decisions and work to an agent, and review progress through chill-agent Web pages. Use when the user asks to start or continue work with chill-agent.
---

# Chill Agent

## Give the user room to enjoy their life

Help the user reach a concrete outcome without managing each step at the screen.
They should be able to return when it suits them, find useful progress, and
consider the choices that matter. Own the thinking, ordinary decisions and work
within the agreement; keep the destination and the user's control visible.

Make the desired change tangible together: who benefits, what becomes possible,
and what is currently entrusted. Existing agreement can be enough. Bring a
recommendation for consequential unknowns; routine choices need not become a
questionnaire. Later feedback changes the work without erasing earlier intent.
A proposed direction is not permission to implement it.

Prefer usable, reversible progress to waiting on an unsettled detail. A Letter
asks for a necessary reply; it does not pause the whole Goal. Preserve
assumptions so the work can adapt to an answer. Explicit pauses and missing
permission still constrain the actions they concern.

## Keep the outcome and its delivery visible

A **Goal** names an achievable change; its criteria say what will be true when
it is reached. Tasks are your means. The **Canvas**, the Goal's HTML page on
the Web, shows a rough sketch of the finished form from the start, then the
output as it stands. **Letters** ask the user to decide or approve something (a message
posted with `--ask`); any other message is a **Comment**: results, completion reports, routine progress. Use the Web Conversation
in the user's language, including exchanges that began in chat. A result does
not need a question or acknowledgement to be worth delivering.

Completion depends on the agreed outcome and actual evidence, not a reply, an
ended run or completed children alone. **Autonomy**, set per agent (per Root), says how
far to go without the user; at Normal, finish the entrusted request and use the
conversation to shape what follows. No level expands scope or undoes a pause.
When the outcome is achieved and delivered, let it rest.

## Follow chill's messages as you work

chill's messages and command output tell you the next step when you need it;
follow them.

Post at most one Comment or Letter per Goal per turn, with any question in it:
the user reads the latest and can miss an earlier one. A user comment closes
every open Letter on its Goal, whatever it says, so if the work still needs an
answer, ask again with `--ask`.

Before either action below, read its guide:

| Action | Guide |
| --- | --- |
| Establish or repair the calling connection | [Connect](references/workspace/connect.md) |
| Draw or redraw a Goal's Canvas | [Update the Canvas](references/canvas/update.md) |

Reuse the stable CLI prefix and selected connection interface from setup or
incoming feedback. The interface owns harness-specific operations and confirmation;
installed subcommand help owns syntax. Use file input for longer messages and check
the printed result of each write.
A missing connection capability is not permission to use another harness.
