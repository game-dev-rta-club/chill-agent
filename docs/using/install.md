---
keyPoints: >-
  Install the chill-agent skill folder for either host, then invoke it in the
  target project. Its starter fetches the CLI named in cli.json with npx and runs
  setup. The agent prepares an initial Goal and opens Web. Pulling a changed
  cli.json switches Web to that CLI.
---

# Install and invoke the skill

Install the complete **`chill-agent`** skill folder, including `cli.json` and
`scripts/start.mjs`. It contains no application code or node_modules. `cli.json`
names the CLI; the starter fetches it with npx on first invocation.
Do not copy SKILL.md alone.

| Host | Personal skill location | Project-local alternative |
| --- | --- | --- |
| Codex | `~/.agents/skills/chill-agent/` | `.agents/skills/chill-agent/` |
| Claude Code | `~/.claude/skills/chill-agent/` | `.claude/skills/chill-agent/` |

Use the host's normal skill installer or copy that complete folder to its skill
location. Avoid enabling an older chill-agent plugin and the standalone skill
at the same time. Restart/reload skill discovery if your host requires it.
In the target project, select **chill-agent** from the skill picker (Codex also
supports `$chill-agent`), or type `/chill-agent` in Claude Code. Describe the
outcome you want. No user-run `chill-agent-setup.mjs` command is needed.

The agent runs the starter on first use, creates or reuses an isolated
project data store, selects an available local port and starts Web. Existing
connected conversations continue using their established workspace. Invoking
the skill does not silently move their Goals to a different project.

## First connection

The first invocation follows this sequence:

1. **Check this computer.** The agent checks Node.js 24.15+ and npm, plus Git when
   `cli.json` names a commit, before downloading the CLI. It also checks `cloudflared`, which is
   needed for a phone or public link. If a tool is missing or unusable, it explains
   what it does and asks before installing or repairing it. You can choose local
   use without cloudflared. Installing it does not turn on public access.
2. **Prepare your first Goal.** If you supplied an outcome, its title starts
   with that request. If you just invoked the skill, the page starts with
   “Let's decide what you want to achieve” and a short welcome in Conversation. You answer
   the first question there, then the agent updates that same Goal as the
   direction becomes clear. It does not leave a separate setup Goal behind.
3. **Open the page.** The agent opens Web with its browser tool and provides a
   clickable link. It says what you can do next in plain language. If opening is
   unavailable, it provides the link without claiming to have opened it.

The first download needs network access. Automatic Web startup requires a supported
host on macOS, or Claude Code on Windows. Native tool access and Hook approval remain under
your host's control. If activation prevents Goal creation, the agent opens the
workspace page first, explains what is still needed and gives one concrete
action. A running Web is not proof that replies are connected.

Codex may ask you to review the chill-agent connection. The agent identifies the
actual review control offered by your installed host instead of assuming the
CLI's `/hooks` command is available in Desktop. See the official
[Hook review documentation](https://learn.chatgpt.com/docs/hooks#review-and-trust-hooks).
Claude needs a verified SessionStart handoff and may require exiting and resuming
the **same conversation** after Hook review. The agent explains this only when
needed; copying files alone cannot establish that connection.
See [Claude reception](claude-code.md) for how replies reach an idle conversation.

## Get the folder

Download **chill-agent-skill-<version>.tgz** from the
[releases](https://github.com/game-dev-rta-club/chill-agnet/releases), extract
it and install the `chill-agent/` folder using the locations above. A clone of
this repository works too: the folder is
`plugins/chill-agent/skills/chill-agent/`, used as it is without a build.

Official host references: [Codex skills](https://learn.chatgpt.com/docs/build-skills)
and [Claude Code skills](https://code.claude.com/docs/en/skills).

## Where the CLI lives and how it updates

The starter passes the `package` value in `cli.json` to npx unchanged. It is
normally a CLI release archive URL, or a pushed CLI commit while a team tries an
unreleased version. npm builds a commit on first install, which can take about a
minute; later runs reuse npm's cache. Setup copies the CLI into the project's
data store and remembers where `cli.json` is. Nothing is written to the project's
Git tree, and data and settings stay where they are.

When a pull or skill reinstall changes `cli.json`, the next Web start fetches
and prepares that CLI before starting. A Web that is already open on the
supported macOS setup shows an update icon in its top menu. Click it to see
“再起動すると新しいバージョンになります。” Choose **OK** to prepare the new
version and restart at the same page, or **キャンセル** to keep the current one.
If preparation fails, the current Web keeps running. Public links, foreground
servers and Windows do not offer this restart button. A program rollback does
not undo a database migration.

See the CLI [version file contract](https://github.com/game-dev-rta-club/chill-agent-cli/blob/main/docs/runtime/version-file.md)
for the details.
