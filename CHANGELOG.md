---
keyPoints: >-
  Tagged distribution history, including the composed experience and the tested
  CLI dependency. Unreleased checkout changes are not features of an older release.
---

# Changelog

## 0.6.0

- Minor release in the pre-1.0 line that adopts CLI 0.6.0. The CLI renames commands and hooks and moves Roots to a new owner record, which is incompatible, so under 0.x it is a MINOR bump. SQLite workspaces need no offline migration. On first use the CLI moves AutoContinue to Autonomy and leaves every Root without an owner; see the CLI 0.6.0 notes. `chill-agent.json` pins `https://github.com/game-dev-rta-club/chill-agent-cli/releases/download/v0.6.0/game-dev-rta-club-chill-agent-cli-0.6.0.tgz`. Migration: replace the whole skill folder, run the starter once in each project, then reload the skill in each host. Claude Code remains experimental. Codex Desktop is supported on macOS, Claude Code on macOS and Windows.
- **Breaking:** the version file is now `chill-agent.json` (it was `cli.json`), and the starter reads only that name. A project set up from 0.5.1 records the path to `cli.json`. Its Web, still on CLI 0.5.1, ignores the missing file: it stays on 0.5.1 and shows no Update. Migration: install the complete 0.6.0 `chill-agent/` folder and delete any `cli.json` left in it. A leftover `cli.json` still pins 0.5.1 and is still followed. Then ask the agent to run `scripts/start.mjs` once in each project, as on first use. Its setup records `chill-agent.json`, installs CLI 0.6.0 and rewrites the project's hooks; Codex asks you to trust them again. From CLI 0.6.0 on, updates follow `chill-agent.json` by themselves.
- **Breaking:** the skill uses the CLI 0.6.0 commands. An agent replies with `goal reply` in every conversation, and adds `--ask '<what to decide>'` when the user must decide or approve something, which makes the reply a Letter. It takes over a Root with `goal adopt`, schedules checks with `agent wake` and draws with `goal canvas`. A skill copy older than 0.6.0 names commands that CLI 0.6.0 refuses (`connection …`, `goal comment`, `goal letter`, `goal deliverable`), so reload the skill everywhere it is installed.
- **Breaking:** the Deliverable is now the Canvas, the Goal's HTML page on the Web. It starts as a rough sketch of the finished form when the Goal is created and shows the output as it stands. The guide moves to `references/canvas/update.md`. It asks for visual-first pages, shows a change as its current and finished forms side by side, keeps text in HTML rather than SVG so the user can annotate it, and says scripts do not run on the page.
- Autonomy replaces AutoContinue and Approve all. Each Root's agent has one level: Normal, Auto Continue or Never Stop. At Auto Continue and Never Stop the agent keeps the Root's Goals current and works in focused turns, and it is told when its level changes. `docs/using/autonomy.md` replaces `docs/using/auto-continue.md` and explains how the old switches carry over.
- The six action guides are removed (create, reorganize and complete a Goal, send a message, receive feedback, continue autonomously). chill's own messages now print the Goal rule when it is needed. `SKILL.md` keeps the concepts plus two habits: post at most one Comment or Letter per Goal per turn, and write references as `#12`, `C3`, `L4` or `#12 C3` so the Web links them. The starter no longer passes `--agent-guide`.
- A user comment closes every open Letter on its Goal, so the agent asks again with `--ask` when it still needs an answer. `close-letter` only withdraws a question that is no longer needed.
- The guides describe what moving a Root under another Root changes: the moved Goals follow the destination Root's agent, Autonomy and look.
- The install guide describes the Update button as it works now: on a Web run in the background on macOS or Windows, also from devices connected through the public link.

## 0.5.1

- Patch release, chosen by the maintainer, adopting CLI 0.5.1. Existing workspaces and connected devices need no migration.
- Claude Code: the Web shows the background tasks a conversation still runs, conversations that never use chill keep their hooks nearly free, and a question or plan the agent would ask in its own app comes to the user as a Letter instead.
- Public link: the access code is six digits, and a connected device can confirm an update. See the CLI 0.5.1 notes.

## 0.5.0

- Minor release in the pre-1.0 line, adopting CLI 0.5.0. Existing SQLite workspaces need no migration.
- **Breaking:** chill-agent is now one skill folder plus `cli.json`, which names the exact CLI release; the starter fetches it with npx on first use. Install the complete `chill-agent` folder and avoid enabling an older chill-agent plugin at the same time.
- **Breaking:** the Deliverable replaces the Brief and holds only a Goal's final output; plans and progress go to Conversation. Deliverables are written HTML first, readable by a newcomer, starting with the problem and a coarse finished form.
- Codex Desktop and Claude Code (Desktop app or CLI) are both full connections. Claude receives Web feedback through its reply waiter, can schedule a check while waiting on CI, and its in-app questions appear as Letters.
- Agents converse in the Split Goal that holds the work, send one message per response and put questions at the end of the reply.
- The public link requires a one-time access code per device; see the CLI 0.5.0 notes for the panel and connected devices.
- Keep Windows limits explicit: portable checks pass, but automatic Web startup is qualified on macOS only.

## 0.4.0

- Minor release in the pre-1.0 line, adopting CLI 0.4.0. Compatibility and migration history are recorded in the [0.4.0 release notes](https://github.com/game-dev-rta-club/chill-agent/releases/tag/v0.4.0).
- Create SQLite workspaces by default, with paged conversation history, indexed reads and reusable coordination leases. Node.js 24.15+ is required; no separate database service is needed.
- Distribute a thin standalone skill for Codex and experimental Claude. It pins this release's exact application commit and acquires its fixed CLI and locked dependencies through npm into a project-specific installation on first use. Existing active workspaces are not silently restarted or migrated.
- Use Letters only for necessary replies, choices and permissions. Save results in Comments, continue authorized work while nonblocking questions are unanswered, and review the next useful action before stopping Auto mode.
- Stabilize Goal/Letter scrolling and background Activity/Brief updates. Archive obsolete root Goals without losing history.
- Keep experimental Claude reception and native Hook requirements explicit. Windows portable checks are not Windows automatic Web startup or Desktop integration support.

## 0.3.0

- Minor feature release in the 0.x line, adopting CLI 0.3.0. Existing workspace data and plugin paths remain supported; existing shared stores are not automatically migrated.
- Ship one complete standalone skill for normal Codex/Claude installation and invocation, with bundled runtime preparation and isolated project Web setup.
- Separate shared skill decisions from harness-specific runtime guidance and native connection enforcement.
- Add Web notification/public-link controls, QR links, project color themes and current Activity controls. Notifications are Letter-only; each device registers independently.
- Improve autonomous continuation guidance and make one follow-up include both continuation and stopping review.
- Retain experimental Claude limits: native Hook activation and a running same-session Claude are required; finite reception is not a background service or an overnight guarantee. Automatic Web startup is qualified on macOS with Node.js 24.
- Publish a standalone skill archive alongside the npm-installable application archive, and verify release metadata before publishing.

## 0.2.0

- Add optional Root-level Notifications with retained connections, setup requests and exact-message history.
- Reserve each saved notification once and record host-tool acceptance separately from device delivery.
- Preserve previous shared preferences for existing Roots; new Roots start Off with no backlog replay.
- Adopt CLI 0.2.0 with compact Goal review, Agent presence, activity history and shared extension controls.
- Ship outcome-led agent guidance, focused documentation and improved continuation messages.

## 0.1.0

- First standalone chill-agent distribution.
- Preserve existing Goal data and stable runtime commands.
- Versioned extension contract and independently tested package archives.
