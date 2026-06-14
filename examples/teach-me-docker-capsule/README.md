# Example — teach-me Docker capsule

A **filled, runnable demonstration** of a study capsule produced by the
[`teach-me`](../../skills/teach-me/) skill. It shows what the skill generates end-to-end for the
prompt *"I want to learn Docker"* at the **beginner** level.

## What's here

```
Docker - beginner - 2026-06-13/   ← an authentic capsule folder (the skill's real output format)
├── index.html                    ← open this in a browser to start
├── diagnosis · prerequisites · objectives · roadmap · key-topics
├── lessons/        6 lessons (12-section model: example, recall, mistakes, summary…)
├── activities/     exercises · flashcards · recall-questions · case-study
├── assessment/     assessment.html + question-bank.json + results.json + history
├── references/     sources (cited) · caveats · deepening
├── glossary · ignorance-map · rubric
└── manifest.json · progress.json · style.css · app.js
```

## Try it

1. Open `Docker - beginner - 2026-06-13/index.html` in any browser (no server, no network needed).
2. Click through the study path; the progress bar persists via LocalStorage.
3. Try a lesson quiz (instant feedback) and flip a flashcard.
4. Open `assessment/assessment.html` for the quiz; `assessment/assessment-history.html` shows a
   sample graded result.

## How it was generated

```bash
python ../../skills/teach-me/scripts/new_capsule.py \
  --subject "Docker" --level beginner --lang en-US --minutes 600 \
  --out .
```
That scaffolds the tree + JSON; the lesson/quiz/glossary content is then authored by the skill
following `skills/teach-me/references/`. This example shows the *result* with content filled in and
one assessment already recorded (score 84%, "satisfactory").

> Note: this is a demonstration. The capsule states it's a **structured introduction**, not
> professional mastery — see its `references/caveats.html` and `ignorance-map.html`.
