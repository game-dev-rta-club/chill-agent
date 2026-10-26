---
keyPoints: >-
  This repository is the chill-agent skill plus cli.json. Edit the skill in place;
  there is no build. cli.json selects the CLI that the starter runs through npx.
  Runtime code, extensions and setup live in chill-agent-cli.
---

# Change the skill and choose its CLI

The distributed product is one folder:
[plugins/chill-agent/skills/chill-agent/](../../plugins/chill-agent/skills/chill-agent/).
Install it as it is; nothing is generated from it.

| File | Role |
| --- | --- |
| `SKILL.md`, `references/` | Outcome and decision guidance for the agent |
| `cli.json` | `{"package": "<npm package spec>"}` naming the CLI to run |
| `scripts/start.mjs` | Checks Node.js, npm and Git, then runs `npx -y <package> setup prepare --version-file <cli.json> --agent-guide <SKILL.md>` |

Everything after that call belongs to
[chill-agent-cli](https://github.com/game-dev-rta-club/chill-agent-cli): Web,
Goal data, the Claude and Codex connections, Autonomy, notifications, the
public link and the first-use session. Its
[version file contract](https://github.com/game-dev-rta-club/chill-agent-cli/blob/main/docs/runtime/version-file.md)
defines what setup records and how Web follows a changed `cli.json`. Change that
behavior in the CLI repository, not here.

## Check a change

```sh
npm ci
npm run check
npm run check:install
```

`check` validates skill metadata, links and reachability, the `cli.json` shape and
the starter's arguments. `check:install` needs network access: it runs the starter
in a disposable project and home directory, lets npx fetch the selected CLI and
completes setup. CI runs `check` and `check:install` on macOS and Windows.

## Select a CLI

`cli.json` normally names a CLI release archive URL. To try an unreleased CLI
commit, push it and follow the CLI's
[development version guide](https://github.com/game-dev-rta-club/chill-agent-cli/blob/main/docs/development/use-development-version.md);
the value then looks like `github:game-dev-rta-club/chill-agent-cli#<full SHA>`.
Never point it at a local path or a moving branch. Each repository keeps its own
version number; see [Releasing](../../RELEASING.md) for adopting a CLI release.
