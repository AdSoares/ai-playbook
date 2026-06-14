# Reference — Capsule Blueprint

> Load this when generating the capsule: the learning contract, topic selection, directory layout,
> mandatory files, the lesson template, visual resources, local operation, and the roadmap.

## 1. Learning contract (`objectives.html`)
Every capsule opens with a verifiable contract. It must be checkable by the final assessment.
```
By the end of this capsule you will be able to:
1. Explain… 2. Identify… 3. Apply… 4. Compare… 5. Avoid… 6. Solve… 7. Know when to go deeper…
```

## 2. Topic selection — classify every topic

| Category | Meaning |
|---|---|
| Required | Without it, the learner can't claim to understand the subject at this level. |
| Important | Strengthens understanding and application. |
| Useful | Helps, but can wait if time is short (trim these first). |
| Deepening | Recommend, but don't fully cover in the capsule. |
| Out of scope | Not covered in this capsule. |

## 3. Directory layout

Folder name: `"{subject} - {level} - {YYYY-MM-DD}/"` (e.g. `Docker for Developers - beginner - 2026-06-13/`).
`scripts/new_capsule.py` creates this tree — do not hand-write it:

```
{subject} - {level} - {date}/
├── index.html · roadmap.html · diagnosis.html · prerequisites.html
├── objectives.html · key-topics.html · ignorance-map.html · rubric.html
├── lessons/
│   ├── lesson-01-overview.html · lesson-02-fundamentals.html · lesson-03-examples.html
│   ├── lesson-04-common-mistakes.html · lesson-05-case-study.html · lesson-06-review.html
├── activities/
│   ├── exercises.html · flashcards.html · recall-questions.html · case-study.html
├── assessment/
│   ├── assessment.html · question-bank.json · assessment-history.html · results.json
├── references/
│   ├── sources.html · caveats.html · deepening.html
├── glossary.html
├── progress.json · manifest.json · style.css · app.js
```

## 4. Mandatory files (what each must contain)

- **`index.html`** — subject, level, date, goal, total estimated time, suggested order, links to all
  files, progress status, a start button/instruction.
- **`roadmap.html`** — indexes every topic/file with: `order, topic, file, estimated_time,
  type (reading|video|audio|exercise|assessment), required (bool), objective`.
- **`glossary.html`** — terms: `term, short_explanation, technical_explanation, example, where_it_appears, level`.
- **`sources.html`** — all sources used (schema in sources-and-safety.md).
- **`caveats.html`** — limitations, uncovered points, interpretation risks, update warnings,
  sensitive-area warnings, "structured intro vs. real mastery" disclaimer.
- **`objectives.html`** — the learning contract: what to understand, what problems it solves, where
  it's useful, when it's NOT enough.
- **`ignorance-map.html`** — what the capsule covers, what it doesn't, what needs more practice,
  what needs another capsule, what the learner should not yet claim to master.
- **`rubric.html`** — mastery criteria (e.g. "explain without rote, solve typical cases, spot common
  errors, compare alternatives, know when not to apply, answer open questions clearly").
- **`assessment-history.html`** — per assessment: date, score, mastered topics, gap topics, wrong
  questions, feedback, recommendation.

## 5. Lesson template (every `lessons/*.html`)
```
# Lesson X — Title
1. What you'll learn   2. Why it matters        3. Simple explanation
4. Concrete example    5. Correct technical view 6. Common mistakes
7. Practical case      8. Recall questions       9. Mini-exercise
10. 10-line summary    11. Terms for the glossary 12. Sources & deepening
```
Apply the didactic rule from `pedagogy.md` (≥1 example, ≥3 recall questions, mistakes, summary).

## 6. Visual resources — use them to reduce complexity, not to decorate
Allowed locally: HTML/CSS diagrams, inline SVG, comparison tables, flowcharts, cards, timelines,
concept maps, simple CSS animations, JS quizzes/flashcards, progress bars, expandable blocks.
Use a visual when there is: a process, comparison, hierarchy, cycle, causal relation, step sequence,
or an architecture/components view. (Mermaid only if bundled locally.)

## 7. Local operation
Default = **no install**: open `index.html` in a browser. Tech: HTML + CSS + vanilla JS +
LocalStorage for progress. The bundled `app.js` auto-injects a **light/dark theme toggle** into
every page's top bar (defaults to the OS preference, persists the choice) — don't add your own;
just keep the `<header class="topbar">` and the `app.js`/`style.css` includes intact, and use the
theme CSS variables instead of hardcoded colors. Optional install (Python, Docker, Git, Node, a DB…)
only when it adds to learning — and then state: required or optional? why it helps? estimated time?
what it enables? any no-install alternative?

## 9. Language
Generate **all** capsule content in the language the learner used to request the training (lesson
text, examples, exercises, flashcards, glossary, caveats, assessment). Also translate the static UI
labels you fill into the templates — nav crumbs, section headings, button text like "Mark this
section complete", the index "Study path"/"Reference"/"Goal"/"Progress" labels — into that language.
Keep code, CLI commands, and proper nouns unchanged. Record source languages in `sources.html`.

## 8. Roadmap (time- and dependency-ordered)
```
# Roadmap — total estimated: 7h40
1. Initial diagnosis — 20 min      2. Essential prerequisites — 45 min
3. Overview — 50 min               4. Core concepts — 1h20
5. Recommended external content — 1h10   6. Guided examples — 1h
7. Common mistakes — 40 min        8. Case study — 1h
9. Exercises — 50 min              10. Final assessment — 45 min
```
