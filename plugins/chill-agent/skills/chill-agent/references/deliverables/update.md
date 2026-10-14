---
keyPoints: >-
  The Deliverable holds only the Goal's final output: what it hands over. Plans,
  progress and questions go to Conversation. Edit and publish the existing source.
---

# Update the Deliverable

Use this when the Goal's final output changes: the document, design, report or
result the Goal hands over. Someone opening the Goal should find that output,
not a plan or a progress log. While the work goes on, the Deliverable can be a
draft of that output; keep it free of status notes and to-do lists.

Plans, proposals, progress and questions belong in Conversation. The agreed
destination, scope and success criteria belong in the Goal itself. Leave the
Deliverable empty until there is output worth handing over.

Read the current Deliverable and the feedback that changes it. Edit its existing
source, rewriting superseded parts instead of appending conflicting versions.
Lead with the output itself and include only the detail needed to use it. Link to
concrete artifacts and evidence.

Write new and revised Deliverables as standalone HTML. Use `goal deliverable path
--id <ID> --format html` to find its editable source, then publish with `goal
deliverable update --id <ID> --format html`. When the current Deliverable is
Markdown, carry its content into that HTML source; leave historical versions
intact. An edited local file alone does not change Web. Verify the saved version
before claiming the Deliverable has been updated.

Use readable headings, paragraphs and responsive tables or diagrams where they
help. Keep the project's established colors and visual tone. HTML is isolated
from the workspace: scripts and forms do not run. Upload raster images through
`goal image` and use its `/api/images/<id>` URL; inline SVG also supports image
annotations. Internal Goal links use `/#/goal/<ID>` so they resolve outside the
Deliverable document's URL. Installed help describes the command details.

Deliverable history preserves previous versions. Use a Comment to point out the
meaningful change. A publication neither completes a Goal nor substitutes for
that reply.
