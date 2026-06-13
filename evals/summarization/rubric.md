# Rubric — Summarization

## Faithfulness (0-5) — LLM-as-judge
Penalize any claim in the summary not supported by the `input`.

```text
You are a strict evaluator. Compare the SUMMARY against the ORIGINAL TEXT.
Assign a score from 0 to 5 for FAITHFULNESS:
- 5: no unsupported claims (no hallucination).
- 3: a minor unsupported detail.
- 0: a central claim is fabricated or contradicts the original.
Respond in JSON: {"score": n, "reason": "..."}.

ORIGINAL TEXT: {{input}}
SUMMARY: {{output}}
```

## Coverage (0-5) — LLM-as-judge
How many of the `expected_points` appear in the summary.

```text
Given the list of EXPECTED POINTS and the SUMMARY, assign 0-5 for COVERAGE:
- 5: all points present.
- proportional: subtract for each missing point.
Respond in JSON: {"score": n, "missing": ["..."]}.

EXPECTED POINTS: {{expected_points}}
SUMMARY: {{output}}
```

## Conciseness — programmatic
- PASS if the summary is ≤ 80 tokens; FAIL otherwise.

## Aggregation
Final score = mean(Faithfulness, Coverage) conditioned on Conciseness = PASS.
