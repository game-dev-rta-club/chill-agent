---
keyPoints: >-
  Choose a user guide for everyday work or a development guide for composition
  and releases. CLI commands and host contracts live in the CLI repository.
---

# Find what you need

Start with [the README](../README.md) to install chill-agent. Then choose the
part you want to understand:

| You want to… | Read |
| --- | --- |
| Install the same skill in Codex or Claude | [Install the skill](using/install.md) |
| Agree on work, leave feedback and review the result | [Work together](using/working-together.md) |
| Receive Web feedback in an existing Claude conversation | [Use Web with Claude Code](using/claude-code.md) |
| Choose how far the agent goes on its own | [Autonomy](using/autonomy.md) |
| Hear when results or decisions need your attention | [Notifications](https://github.com/game-dev-rta-club/chill-agent-cli/blob/main/docs/using/notifications.md) |
| Open the workspace on your phone or keep a fixed URL | [Public link](https://github.com/game-dev-rta-club/chill-agent-cli/blob/main/docs/using/public-link.md) |
| Understand what the skill and the CLI each own | [Architecture](architecture.md) |
| Change the skill, check it or select its CLI | [Skill and CLI](development/skill-and-cli.md) |
| Change action guides or agent handoffs | [Skill and handoffs](development/skill-and-handoffs.md) |
| Check whether skill guidance leads to useful decisions | [Evaluate the skill](development/evaluating-the-skill.md) |
| Try an unreleased CLI commit with this skill | [Use a development version](https://github.com/game-dev-rta-club/chill-agent-cli/blob/main/docs/development/use-development-version.md) |
| Choose branches, commit milestones and prepare a PR | [Development workflow](development/workflow.md) |
| Publish an update | [Releasing](../RELEASING.md) |

For command formats, Goal storage, runtime updates or the extension API, use the
[CLI documentation](https://github.com/game-dev-rta-club/chill-agent-cli/blob/main/docs/README.md).
Its installed `--help` describes the commands your version supports.

These pages describe current source. The skill's `cli.json` selects the CLI, so
newer CLI screens appear only after `cli.json` adopts them. Host setup, runtime
behavior and extension internals are documented in the CLI repository.

Public guides are tracked in Git. Older local investigations may be retained in
an existing checkout, but are not published specifications or shipped features.

For guideline and task-entry maintenance, see [Writing development guidelines](development/guidelines.md).
