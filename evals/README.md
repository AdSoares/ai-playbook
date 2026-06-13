# Evals

Suites de avaliação para medir a qualidade de prompts, agentes e skills. Sem evals, "melhorar o prompt" é achismo. Aqui ficam datasets, rubricas e scripts que tornam a qualidade mensurável e repetível.

## Convenções

- Uma pasta por suite: `evals/<nome-da-suite>/`.
- Cada suite contém:
  - `dataset.jsonl` — casos de teste (uma entrada por linha).
  - `rubric.md` — critérios de avaliação (graders).
  - `README.md` — o que a suite mede e como rodar.
- Resultados (`results/`, `*.out.json`) **não** são versionados (ver `.gitignore`).

## Formato do dataset (`dataset.jsonl`)

```json
{"id": "001", "input": "...", "expected": "...", "tags": ["edge-case"]}
```

## Tipos de grader

| Tipo | Quando usar |
|---|---|
| **Exact / regex** | Saída determinística (classificação, extração). |
| **LLM-as-judge** | Saída aberta (qualidade de resumo, tom). |
| **Programático** | Validável por código (JSON válido, schema, latência). |

## Índice

| Suite | Mede |
|---|---|
| [`summarization/`](summarization/) | Qualidade e fidelidade de resumos |
