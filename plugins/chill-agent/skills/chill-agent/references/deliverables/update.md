---
keyPoints: >-
  The Deliverable holds only the Goal's final output, written in HTML so its
  final form is concrete: mockups, diagrams, illustrations or the finished
  document. Write it for a newcomer to the project, and rewrite instead of
  appending. Plans, proposals, progress and questions go to Conversation.
---

# Update the Deliverable

Use this when the Goal's final output changes.

1. **Hold only this Goal's final output.** Plans, proposals, progress and
   questions belong in Conversation. While the work goes on, a draft of the
   output is fine. A separate output belongs in a SubGoal.
2. **Write HTML from the start.** Do not use Markdown.
3. **Show the final form as concretely as possible**, close to the output
   itself rather than a description of it:
   - a screen or feature: a mockup of the screen (static; scripts do not run)
   - a mechanism or flow: a diagram
   - a look or mood: an illustration or sample
   - a document: that document in its finished form
4. **Write so a 20-year-old who has just joined the project understands it.**
   Explain the project's current state and its terms without assuming prior
   knowledge. When a change matters, make the before and after easy to compare.
5. **Rewrite the existing content instead of appending to it.** The Deliverable
   shares only the image of the finished output; superseded parts do not stay.
   Earlier versions remain in history.

Find the editable source with `goal deliverable path --id <ID> --format html`
and publish it with `goal deliverable update --id <ID> --format html`. Editing
the file alone does not change Web. Upload raster images through `goal image`
and use its `/api/images/<id>` URL; inline SVG works directly. Link other Goals
with `/#/goal/<ID>`. Installed help describes the command details.

Point out a meaningful change in a Comment. Publishing neither completes the Goal
nor replaces that reply.
