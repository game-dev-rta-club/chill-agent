---
keyPoints: >-
  The Deliverable holds the Goal's final output, or a plan or proposal the user
  decides on as a SubGoal's Deliverable, as a visual-first HTML page: one idea
  and one relationship per screen through diagrams, tables and side-by-side
  comparisons. Show a change as its current and finished form side by side, not
  as steps. Write it for a newcomer and rewrite instead of appending.
---

# Update the Deliverable

Use this when the Goal's final output, or a plan or proposal for the user, changes.

1. **Hold only this Goal's final output.** Plans and proposals the user decides
   on may be written as a SubGoal's Deliverable; progress and questions belong in
   Conversation. While the work goes on, a draft of the output is fine. A
   separate output belongs in a SubGoal.
2. **Make it a visual-first HTML page.** Present one clear idea and one
   meaningful relationship per screen, through varied diagrams (inline SVG),
   tables and side-by-side comparisons, with only enough text to connect them
   into an easy-to-grasp whole. A page of headings and bullets is Markdown in
   HTML, not this.
3. **Start with the problem and the finished form.** Say what this Goal solves,
   then what the finished output is. **When something changes, show its current
   form and its finished form side by side and say what differs; do not list the
   steps to get there.** While the form is still undecided, keep it coarse and
   add detail only as it is decided.
4. **Once decided, show the final form as concretely as possible**, close to the
   output itself rather than a description of it:
   - a screen or feature: a mockup of the screen (static; scripts do not run)
   - a mechanism or flow: a diagram
   - a look or mood: an illustration or sample
   - a document: that document in its finished form
5. **Write so a 20-year-old new employee with no prior knowledge understands
   it.** Explain the project's current state and its terms.
6. **Rewrite the existing content instead of appending to it.** The Deliverable
   shares only the image of the finished output; superseded parts do not stay.
   Earlier versions remain in history.

Find the editable source with `goal deliverable path --id <ID> --format html`
and publish it with `goal deliverable update --id <ID> --format html`. Editing
the file alone does not change Web. Upload raster images through `goal image`
and use its `/api/images/<id>` URL; inline SVG works directly. Link other Goals
with `/#/goal/<ID>`. Installed help describes the command details.

Point out a meaningful change in a Comment. Publishing neither completes the Goal
nor replaces that reply.
