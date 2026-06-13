# Eval — Summarization

Mede a qualidade de resumos produzidos por um prompt/agente: fidelidade ao texto original, cobertura dos pontos principais e concisão.

## Como rodar (conceitual)
1. Para cada linha do `dataset.jsonl`, envie o `input` ao sistema sob teste.
2. Avalie a saída com os graders descritos em `rubric.md`.
3. Agregue as notas e compare entre versões do prompt.

## Graders
- **Fidelidade** (LLM-as-judge): o resumo afirma algo que não está no original? (0-5)
- **Cobertura** (LLM-as-judge): os pontos-chave foram incluídos? (0-5)
- **Concisão** (programático): o resumo respeita o limite de tokens?

Detalhes em [`rubric.md`](rubric.md).
