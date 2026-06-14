# Reference — Assessment

> Load this when building or grading the assessment: question bank, question types, pass criteria,
> anti-repetition, post-assessment updates, next steps, and success metrics.

## 1. Assessing on return
The learner returns after studying and asks for evaluation (e.g. "assess my knowledge of Docker —
beginner"). The skill must:
1. Read the previously generated content.
2. Read the assessment history, if any.
3. Generate a fresh assessment.
4. Avoid repeating already-asked questions.
5. Re-test fundamental concepts when needed.
6. Present questions one at a time or in a block (learner's preference).
7. Grade objective and open answers.
8. Update the assessment files.
9. Recommend review or the next level.

## 2. Question types (vary the formats)

| Type | Measures |
|---|---|
| Multiple choice | Recognition, basic comprehension. |
| True/false with justification | Concepts and traps. |
| Short answer | Active recall. |
| Plain-language explanation | Real understanding. |
| Case study | Application. |
| Error diagnosis | Analysis. |
| Comparison of alternatives | Judgment. |
| Mini-project | Creation and synthesis. |

## 3. Pass criteria
```yaml
satisfactory_pass:
  min_overall_score: 80%
  min_fundamental_topics_score: 70%
  critical_error_on_required_topic: false
  open_answers_satisfactory: true
```

### Final classification

| Result | Condition | Action |
|---|---|---|
| Excellent | 90%+ and no critical gaps | Recommend next level. |
| Satisfactory | 80%+ and no critical error | Allow progress with light review. |
| Partial | 60–79% | Recommend specific review. |
| Insufficient | < 60% | Recommend restudy. |
| Critical gap | Error on a required concept | Recommend returning to the fundamental topic. |

## 4. Question bank (`assessment/question-bank.json`)
One bank per capsule. Item shape (full schema in `assets/schemas/question-bank.schema.json`):
```json
{
  "question_id": "docker-beginner-q-001",
  "topic": "containers",
  "level": "beginner",
  "bloom": "understand",
  "difficulty": 2,
  "is_fundamental": true,
  "format": "multiple_choice",
  "question": "What is the main difference between an image and a container?",
  "answer_key": "An image is an immutable artifact; a container is a running instance created from it.",
  "asked_count": 0,
  "last_asked_at": null,
  "last_result": null
}
```

## 5. Anti-repetition rules
1. Don't repeat already-correct questions, unless fundamental and a long time has passed.
2. Repeat wrong questions with a new wording.
3. Re-test required concepts using a different scenario.
4. Raise difficulty when the learner does well.
5. Lower difficulty and explain more when the learner struggles.

> `scripts/new_capsule.py` exposes `dedupe_questions(bank, history)` to pick fresh items reliably.

## 6. Post-assessment updates
After each assessment, update: `assessment/assessment.html`, `assessment/assessment-history.html`,
`assessment/results.json`, `assessment/question-bank.json`, `roadmap.html`, next-steps, plus
`glossary.html` (new terms) and `caveats.html` (newly found gaps).

```
## Assessment 2 — 2026-06-13 — Overall: 76% — Status: partial
Mastered: basic concepts, essential vocabulary, simple examples
Gaps: real-case application, difference between X and Y, concept limitations
Recommendation: review lesson-03 and lesson-04 before advancing.
```

## 7. Next steps (on pass)
Suggest: next level of the same subject · adjacent subjects · prerequisites for a higher level ·
practical projects · deepening readings/videos.

## 8. Success metrics (track over time)
Capsule completion rate · real vs. estimated study time · pass rate · restudy rate · improvement
between assessments · highest-error topics (need better explanation) · most-used sources · learner
satisfaction · next-step acceptance.
