# Evals

Evaluation suites to measure the quality of prompts, agents, and skills. Without evals, "improve the prompt" is guesswork. This is where datasets, rubrics, and scripts live that make quality measurable and repeatable.

## Conventions

- One folder per suite: `evals/<suite-name>/`.
- Each suite contains:
  - `dataset.jsonl` — test cases (one entry per line).
  - `rubric.md` — evaluation criteria (graders).
  - `README.md` — what the suite measures and how to run it.
- Results (`results/`, `*.out.json`) are **not** versioned (see `.gitignore`).

## Dataset format (`dataset.jsonl`)

```json
{"id": "001", "input": "...", "expected": "...", "tags": ["edge-case"]}
```

## Grader types

| Type | When to use |
|---|---|
| **Exact / regex** | Deterministic output (classification, extraction). |
| **LLM-as-judge** | Open-ended output (summary quality, tone). |
| **Programmatic** | Code-verifiable (valid JSON, schema, latency). |

## Index

| Suite | Measures |
|---|---|
| [`summarization/`](summarization/) | Summary quality and faithfulness |
