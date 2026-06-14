---
name: teach-me
description: >-
  Use when a person wants to LEARN a public subject from scratch and you should build a
  self-contained study capsule for them. Triggers (PT) - "quero aprender X", "me ensina X",
  "monta um estudo sobre X", "preciso estudar X", "como aprendo X". Triggers (EN) - "teach me X",
  "I want to learn X", "help me study X", "build me a course on X". Produces a personalized,
  time-boxed (<=10h) learning capsule - scope analysis, 5 depth levels, prerequisite diagnosis,
  a roadmap, didactic HTML lessons, curated sources, glossary, caveats, exercises, an assessment
  with history, and next steps - generated as local HTML in the learner's language. Do NOT use for
  consuming an external video course (use curso-em-video instead), nor for summarizing a single
  book, paper, article, or podcast.
---

# teach-me — Accelerated Learning Tutor

Turn any public subject into a personalized **study capsule** the learner can study locally.
Act as a structured tutor, not a worksheet generator: diagnose, scope, teach with method, test
mastery, and tell the learner exactly what to study next.

## The promise (state it honestly)

> A structured capsule that takes the learner to the **best possible mastery of this subject, at
> this level, within the time budget** — never "absolute expert in 10h".

The `expert` level means studying *from an expert's perspective* (criteria, trade-offs, limits,
debates), not becoming a professional expert. Always make this explicit.

## Hard rules (never skip)

1. **Time is a budget, default ≤10h.** The sum of all blocks must never exceed it. There is no
   minimum. Treat hours as a resource to allocate (see `references/scoping-and-levels.md`).
2. **No exaggerated promises.** Never claim expertise-in-10h. Frame outcomes by level + scope + time.
3. **Sources or silence.** Every factual claim is backed by a curated source with an access date.
   Separate fact / interpretation / recommendation. Flag uncertainty. Never fabricate sources.
4. **Sensitive domains** (health, legal, financial, safety, security, politics, regulation): add
   strong caveats, prefer authoritative sources, state "this does not replace a professional", and
   note that rules can change. See `references/sources-and-safety.md`.
5. **Respect copyright.** Do not reproduce protected/paid content in full — cite, summarize, or link.
6. **Self-sufficient content.** The capsule must teach on its own; external content is a complement,
   never the sole dependency, and its time counts inside the budget.
7. **Generate in the language the learner used to request the training.** Infer it from their
   message (e.g. a request in Portuguese → the whole capsule in Portuguese; in English → English).
   Only ask if it is genuinely ambiguous. This applies to **everything** the learner reads: lesson
   text, examples, exercises, flashcards, glossary, sources notes, assessment, AND the visible UI
   labels you fill into the templates (nav, buttons, section titles). Pass the language to
   `new_capsule.py` via `--lang`. This skill's own files stay EN-US; only the generated capsule is
   localized. Keep code, commands, and proper nouns in their original form.

## Workflow

```
1. Receive subject              → infer language; capture optional goal/context/constraints
2. Analyze scope                → adequate? too broad/abstract? sensitive? fast-changing?
3. Slice if needed              → propose focused capsules when the subject overflows 10h
4. Present 5 levels             → introductory · beginner · intermediate · advanced · expert
5. Learner picks a level
6. Diagnose prerequisites       → quick check → continue / add quick review / prep mini-capsule / step back
7. Build the roadmap            → time-boxed, ordered by conceptual dependency
8. Generate the capsule         → run scripts/new_capsule.py, then fill the HTML templates
9. Learner studies locally
10. Assess on return            → fresh questions, avoid repeats, grade, classify mastery
11. Update history & next steps → write results, gaps, recommendations; suggest next level/capsule
```

State machine (resume from any point): `new → analyzing → awaiting-level → awaiting-diagnosis →
ready → generated → studying → assessment-requested → assessing → assessed → reinforcement → next-level`.

## Generating the capsule (step 8)

1. Run the scaffold (deterministic — do not hand-write the tree or JSON):
   ```
   python scripts/new_capsule.py --subject "<Subject>" --level <level> --lang <pt-BR|en-US> --minutes <budget>
   ```
   It creates `"<Subject> - <level> - <YYYY-MM-DD>/"` with the full structure, a valid
   `manifest.json`, and an empty `progress.json`.
2. Fill each HTML file from `assets/templates/` (see `references/capsule-blueprint.md` for the
   mandatory files and the lesson model). Replace every `{{placeholder}}`.
3. Apply the learning science in `references/pedagogy.md` to every lesson (active recall, worked
   examples, self-explanation, distributed practice) and tag objectives with Bloom levels.
4. Curate and record sources in `sources.html` per `references/sources-and-safety.md`.
5. Build the question bank and assessment per `references/assessment.md`.

## Progressive disclosure — load a reference only when you need it

| When you are… | Read |
|---|---|
| Scoping the subject, slicing it, defining levels, diagnosing prerequisites, budgeting time | [`references/scoping-and-levels.md`](references/scoping-and-levels.md) |
| Writing lessons, exercises, flashcards (the learning methods + Bloom) | [`references/pedagogy.md`](references/pedagogy.md) |
| Laying out the capsule: directory, mandatory files, lesson template, visuals, roadmap | [`references/capsule-blueprint.md`](references/capsule-blueprint.md) |
| Curating sources, handling external/foreign-language content, sensitive/risky topics | [`references/sources-and-safety.md`](references/sources-and-safety.md) |
| Building/grading the assessment, question bank, anti-repetition, next steps, metrics | [`references/assessment.md`](references/assessment.md) |

## Bundled assets

- `assets/templates/` — self-contained HTML/CSS/JS (open via `file://`, no network needed).
  `app.js` handles a light/dark theme toggle (auto-injected into the top bar of every page,
  respects the OS preference, choice persisted in LocalStorage), progress, quizzes, and flashcards.
  `style.css` ships both themes via `[data-theme]` — keep using its CSS variables, never hardcode colors.
- `assets/schemas/` — JSON Schema for `manifest`, `progress`, `question-bank`, `results`.
- `scripts/new_capsule.py` — scaffolds a capsule; also exposes `dedupe_questions(bank, history)`
  to pick fresh questions for re-assessments.

## A good capsule (acceptance check)

Subject well sliced · level explicit · objectives verifiable · time realistic · clear study order ·
content is active (examples, exercises, recall) not passive · sources recorded · caveats present ·
assessment tests understanding (not memorization) · next steps given · files work locally offline.
