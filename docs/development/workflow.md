---
keyPoints: >-
  The entrusted agent merges checked topic PRs into develop and keeps main stable.
  Merge CLI changes first, then point chill-agent.json at the pushed CLI commit; CI fetches
  exactly that commit. Before main promotion, chill-agent.json names a CLI release archive.
---
# Integrate the complete experience

Use the shared [development workflow](https://github.com/game-dev-rta-club/chill-agent-cli/blob/main/docs/development/workflow.md).
In sibling checkouts, read `chill-agent-cli/docs/development/workflow.md`.
The agreed model is topic → PR → `develop`, with the entrusted agent responsible
for review, checks, merge and branch cleanup. Routine merges into `develop` do
not wait for the user. `main` is the stable line. Version bumps, promotion and publication affecting
users require consultation with the user before execution; develop integration
authority does not include them.

This repository owns the skill and `chill-agent.json`. Program code, setup, Web and
every built-in extension belong to the CLI. Commit each verified milestone;
integrate a complete slice before opening another dependent topic.

## Integrate a new CLI capability

1. Merge and verify the CLI PR in its `develop` branch first.
2. Point `chill-agent.json` at that pushed CLI commit, as
   `github:game-dev-rta-club/chill-agent-cli#<full SHA>`. The CLI's
   `npm run use-in` writes it; see its
   [development version guide](https://github.com/game-dev-rta-club/chill-agent-cli/blob/main/docs/development/use-development-version.md).
   A branch name is not a pin.
3. Run `npm run check` and `npm run check:install`. CI runs both, so it fetches
   the same commit; a skill PR that needs a new CLI stays Draft until that passes.
4. Merge into `develop`, verify post-merge CI and clean up the topic branch.
5. Before promotion to `main`, set `chill-agent.json` to the exact stable CLI release
   archive URL and run the same checks. Do not publish a release merely to pass
   a check.

## Record integration, not only implementation

Report both repository commits, the tested `chill-agent.json` value, PR merge results and
any remaining blocker. [Skill and CLI](skill-and-cli.md) lists the checks.
Installed runtime snapshots are not source commits. A merge does not restart a user's Web server or Claude session.

Audit old branches against actual PRs and active
worktrees before deleting anything. Follow [Releasing](../../RELEASING.md) for
stable promotion and distribution; integration authority is not release authority.

Agent entry: [read before development](../../.agents/skills/chill-app-development/SKILL.md).
When changing this workflow, use [guideline authoring](guidelines.md).
