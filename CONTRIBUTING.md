---
keyPoints: >-
  Propose focused changes, run the skill checks and send a pull request.
  Keep user guidance here and shared workspace or host contracts in the CLI repository.
---

# Contributing

Contributions that make chill-agent simpler, safer, or easier to use are
welcome.

If you have found a security vulnerability, do not open a public issue. Follow
the private reporting process in [SECURITY.md](SECURITY.md).

## Propose a change

- Open a pull request directly for a typo, documentation fix, or small bug fix.
- Open an issue first for workflow, role, protocol, or compatibility changes so
  the behavior and scope can be agreed before implementation.
- Keep refactoring separate from behavior changes.

Follow the [development workflow](docs/development/workflow.md) for short-lived
branches from develop, milestone commits, PR integration into develop and stable
release promotion to main. Entrusted agent work includes review and merging;
external contributions follow maintainer review.

## Local development

Use Node.js 24 and Git. Codex Desktop is supported on macOS; Claude Code on macOS
and Windows.
This repository is the skill and its `cli.json`; there is nothing to build.

```sh
git clone https://github.com/game-dev-rta-club/chill-agent.git
cd chill-agent
npm ci
npm run check
npm run check:install
```

Run focused tests while developing, then the full check before your pull request.
`check:install` needs network access; it fetches the CLI named in `cli.json` and
runs setup in a disposable directory. CI runs both checks on macOS and Windows.

See [Skill and CLI](docs/development/skill-and-cli.md) before editing the skill
or `cli.json`. Program changes belong in
[chill-agent-cli](https://github.com/game-dev-rta-club/chill-agent-cli).

## Documentation ownership

Write for people using the complete experience. Keep the README focused on outcomes,
getting started, and user controls. Link to chill-agent-cli for command details,
storage/runtime behavior, and extension contracts instead of copying them.
A CLI-only change should not require a main README edit unless the user-facing
setup or experience changes. Dependency upgrades remain a separate release task.

Use [the documentation map](docs/README.md) to find each topic's home. Keep pages
focused on one reader need, with a descriptive title and English `keyPoints`
frontmatter that previews the useful facts. Link to the canonical explanation
instead of copying it. Check the current code and links when changing a guide;
older local investigations are not specifications to publish.

## Pull requests

Keep each pull request focused on one logical change. A pull request should:

- Explain the user-visible problem and the focused solution.
- Include or update tests when behavior or repository contracts change.
- Update user-facing documentation when installation or usage changes.
- Preserve documented platform behavior.
- Pass the complete repository test command.
- Avoid unrelated formatting, refactoring, secrets, and personal information.

Conventional Commit prefixes such as `docs:`, `fix:`, `feat:`, and `test:` are
preferred for commit and pull-request titles.

Maintainers review contributions when available. A response, merge, or release
timeline is not guaranteed.

## Contribution license

No Contributor License Agreement or Developer Certificate of Origin is
required. Unless explicitly stated otherwise, contributions intentionally
submitted for inclusion in this repository are licensed under the repository's
[MIT License](LICENSE).
