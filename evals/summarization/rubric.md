# Rubric — Summarization

## Fidelidade (0-5) — LLM-as-judge
Penalize qualquer afirmação no resumo que não seja sustentada pelo `input`.

```text
Você é um avaliador rigoroso. Compare o RESUMO com o TEXTO ORIGINAL.
Atribua uma nota de 0 a 5 para FIDELIDADE:
- 5: nenhuma afirmação não-sustentada (sem alucinação).
- 3: detalhe menor não-sustentado.
- 0: afirmação central inventada ou contradiz o original.
Responda em JSON: {"score": n, "reason": "..."}.

TEXTO ORIGINAL: {{input}}
RESUMO: {{output}}
```

## Cobertura (0-5) — LLM-as-judge
Quantos dos `expected_points` aparecem no resumo.

```text
Dada a lista de PONTOS ESPERADOS e o RESUMO, atribua 0-5 para COBERTURA:
- 5: todos os pontos presentes.
- proporcional: subtraia conforme pontos faltantes.
Responda em JSON: {"score": n, "missing": ["..."]}.

PONTOS ESPERADOS: {{expected_points}}
RESUMO: {{output}}
```

## Concisão — programático
- PASS se o resumo tiver ≤ 80 tokens; FAIL caso contrário.

## Agregação
Nota final = média(Fidelidade, Cobertura) condicionada a Concisão = PASS.
