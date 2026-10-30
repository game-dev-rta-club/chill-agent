---
keyPoints: >-
  The Canvas holds the Goal's final output, or a plan or proposal the user
  decides on as a SubGoal's Canvas, as a visual-first HTML page: one idea
  and one relationship per screen through diagrams, tables and side-by-side
  comparisons. Show a change as its current and finished form side by side, not
  as steps. Write it for a newcomer and rewrite instead of appending.
---

# Update the Canvas

Use this when the Goal's final output, or a plan or proposal for the user, changes.

1. **Hold only this Goal's final output.** Plans and proposals the user decides
   on may be written as a SubGoal's Canvas; progress and questions belong in
   Conversation. While the work goes on, a draft of the output is fine. A
   separate output belongs in a SubGoal.
2. **Make it a static, visual-first HTML page.** Scripts do not run, so
   everything must show without them. Present one clear idea and one
   meaningful relationship per screen, through varied tables, charts, diagrams
   and side-by-side comparisons, with only enough text to connect them into an
   easy-to-grasp whole. Build them in HTML, and use inline SVG only for shapes
   without text, such as arrows: the user annotates by selecting text, and the
   Web treats an SVG as one picture whose text cannot be selected. A page of
   headings and bullets is Markdown in HTML, not this.
3. **Start with the problem and the finished form.** Say what this Goal solves,
   then what the finished output is. **When something changes, show its current
   form and its finished form side by side and say what differs; do not list the
   steps to get there.** While the form is still undecided, keep it coarse and
   add detail only as it is decided.
4. **Once decided, show the final form as concretely as possible**, close to the
   output itself rather than a description of it:
   - a screen or feature: a mockup of the screen
   - a mechanism or flow: a diagram
   - a look or mood: an illustration or sample
   - a document: that document in its finished form
5. **Write so a 20-year-old new employee with no prior knowledge understands
   it.** Explain the project's current state and its terms.
6. **Rewrite the existing content instead of appending to it.** The Canvas
   shares only the image of the finished output; superseded parts do not stay.
   Earlier versions remain in history.

Find the editable source (stored as `deliverable.html`, the page's former
name) with `goal canvas path --id <ID> --format html`
and publish it with `goal canvas update --id <ID> --format html`. Editing
the file alone does not change Web. Upload raster images through `goal image`
and use its `/api/images/<id>` URL; inline SVG works directly. Link other Goals
with `/#/goal/<ID>`. Installed help describes the command details.

Point out a meaningful change in a Comment. Publishing neither completes the Goal
nor replaces that reply.
