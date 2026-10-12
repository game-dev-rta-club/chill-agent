---
keyPoints: >-
  Reuse the calling workspace. On first use follow the runtime's welcome flow:
  prepare an initial Goal, open Web and request only necessary native activation.
---

# Connect this conversation

Keep the calling harness and conversation/context. A project directory or Goal
ID does not authorize handing work to another conversation.

## Read the selected interface

Identify the calling harness from the current host, never from a model name or
another Goal's binding. Do not guess when the host is unknown. An established
connection's prefix reads its interface without changing Goals:

```sh
'<command>' session guide --harness '<calling-harness-id>'
```

Follow its `operations`, confirmation rules, `nextActions` and constraints; reuse
that interface while the connection is unchanged. It owns host-specific
commands, native activation and unsupported operations. No operation, or a null
operation, is permission to use another host's route. Keep using an established
workspace's runtime; do not upgrade it just to read guidance.

## Prepare only when needed

Incoming feedback or an already verified connection supplies the stable prefix,
data directory and port to reuse. Do not replace that workspace or its runtime
merely because a newer skill is installed. An explicit new-project request uses
that project's directory instead.

On first use, identify the native project directory using the host. Do not use
the skill installation folder. Run the preparation yourself:

```sh
node '<skill-directory>/scripts/start.mjs' --harness '<calling-harness-id>' --project '<native-project-directory>'
```

It checks Node.js 24.15+, npm and, for a git-based CLI, Git, then fetches the CLI
named in the skill's `cli.json` and runs its setup. If a tool is missing, explain
its purpose and the specific installation you propose, and obtain the user's
agreement before installing or repairing it; then rerun. `cloudflared` is needed
only for a phone or public link: offer installation or local-only use when that
is requested. Tool installation does not authorize publishing a link.

Setup returns the stable `command` and names the next step. Run it:

```sh
'<command>' session start --harness '<calling-harness-id>' --project '<native-project-directory>'
```

It starts or reuses Web and returns the selected interface. Follow
`interface.onboarding` in order, using the returned `url` and `command`. The
selected interface's `activation` and operation confirmation rules determine
what must be verified before Root creation. Preparation alone does not verify
native activation; `connectionVerified:false` is not evidence that approval is
required. Native trust remains the user's decision.

Do not give the user a setup command list. An incomplete installation needs the
complete skill folder with its `cli.json`, not a different harness or another CLI.
Prepare the initial Goal and Brief from the supplied outcome, or the interface's
discovery starter when the user only asks to begin. Open that page using the host
browser tool before asking a question or ending the turn. If native activation
prevents creation, open the workspace URL first and explain the required action
using the interface's short message. If opening fails, supply the clickable URL.
Keep the same Goal as the conversation gives it a concrete outcome. An existing
connection keeps its Goal; resuming must not add another starter.
Preserve existing public-access settings, queues and manual pauses.
