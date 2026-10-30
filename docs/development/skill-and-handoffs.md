---
keyPoints: >-
  What an agent must have in mind when it acts goes in chill's messages, which
  arrive again each time; SKILL.md holds the experience, concepts and habits
  read once; a guide only holds
  long how-to that does not fit a line (Canvas, connect).
---

# Maintain the skill and chill's messages

The skill and chill's messages aim at an outcome the user can enjoy without
managing each step. Explain
why a judgment matters so the agent can apply it to a new situation; a growing
list of case-specific prohibitions is easy to miss and hard to maintain.

## Put guidance where the agent has it when it acts

Agents rarely open a guide on their own, and what they read is gone once their
conversation is compacted. Text that chill sends again with each message stays.
So place each kind of text by when the agent needs it:

| Text | Place | Why |
| --- | --- | --- |
| A rule that must hold every time the agent touches a Goal | The CLI's messages: the Goal rule sentence printed at `goal create`, with each feedback message and in each end-of-turn (Keep going) message | It arrives again each time, also after compaction |
| What the agent needs in one situation (how to reply, `--ask`, notification, what each Autonomy level asks, the next step after a command) | The message or command output for that situation | It arrives when the situation does |
| The desired experience and the principles behind decisions; what Goals, Canvases, Letters, Comments and Autonomy are; habits whose loss after compaction costs little | [`SKILL.md`](../../plugins/chill-agent/skills/chill-agent/SKILL.md) | Read once, when a conversation joins chill |
| Long how-to that does not fit a line | A guide: [Update the Canvas](../../plugins/chill-agent/skills/chill-agent/references/canvas/update.md), [Connect](../../plugins/chill-agent/skills/chill-agent/references/workspace/connect.md) | Often not opened, so what must hold also goes in a message, as the Canvas clause of the rule sentence does |

The CLI owns the messages and the rule sentence (`lib/goal-rule.mjs` in
chill-agent-cli). To change what agents do while working, change the text they
have at that moment. Keep the rule sentence to what must hold every time: it is
read again and again. Before adding a guide,
check whether a line in a message would do.

The user chose to print the rule sentence in these three places only. An agent
at Normal Autonomy working on an existing Goal from a chat request, with no
feedback, `goal create` or end-of-turn message, has the rule only if an earlier
message is still in its context. The gap is accepted because users mostly work
through Goal comments; measure it before adding a fourth place.

A guide leads with its result and purpose. Detailed command syntax belongs in
installed help, and host differences in the runtime interface. When you change
or move guidance, change every place that states it (the CLI's messages,
`SKILL.md` and its guide table, the guides), and remove superseded files.
`node scripts/check-skill.mjs` validates reachability and links. The skill folder
is distributed as it is, without a build. These checks do not establish that the
purpose is understood.

[Connection guidance](../../plugins/chill-agent/skills/chill-agent/references/workspace/connect.md)
asks the runtime for the selected interface; shared guides contain no host-specific
receipt or activation rules. See the CLI's [harness boundaries](https://github.com/game-dev-rta-club/chill-agent-cli/blob/main/docs/development/harness-boundaries.md)
for that separate development topic.

## What each message carries

```text
Web feedback → CLI delivery → current context + reply commands + Goal rule
End-of-turn (Keep going) message → observed facts + Roots with their levels + Goal rule
goal create → the new Goal + Goal rule
```

The CLI does not know the skill's files. The end-of-turn (Keep going) message
names the conversation's Roots above Normal, by level name, with what each level asks, so
it stands on its own. One message covers both choosing useful work and checking
a decision to stop; the CLI sends it once per meaningful revision: a user
comment, a Goal or Canvas change, or a level change. Scheduling,
reservation and pause handling remain independent of guidance text.

`goal show --section context` uses the existing Goal reader. It retains scope,
criteria, new input and question references while linking to Canvas and Letter
bodies. No second summary store or inferred completion state is involved.

## Verify the format, then evaluate behavior

Package checks verify links, preserved feedback, working read commands and
unchanged delivery invariants. They do not establish the quality of agent
judgment. After the format is ready, use the separate
[evaluation workflow](evaluating-the-skill.md) for Q&A and isolated tool exercises.
Record which snapshot was tested; a source edit alone does not update a running
server or the skill already loaded in a chat. See [Skill and CLI](skill-and-cli.md).
