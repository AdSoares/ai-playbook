# Prompts

Templates e bibliotecas de prompts reutilizáveis: system prompts, padrões few-shot, instruções de tarefa e técnicas de raciocínio.

## Convenções

- Um arquivo `.md` por prompt (ou pasta quando houver variações/few-shot externos).
- Todo prompt começa com o cabeçalho de metadados abaixo.
- Use placeholders explícitos no formato `{{variavel}}`.
- Indique o modelo/runtime alvo se o prompt for específico.

## Template

```markdown
---
title: Nome do prompt
category: system | task | few-shot | reasoning
model: agnostic | claude | gpt | gemini | ...
tags: [code-review, summarization]
author: seu-handle
---

## Objetivo
O que este prompt resolve, em uma frase.

## Variáveis
- `{{input}}` — descrição
- `{{context}}` — descrição

## Prompt
\`\`\`text
<conteúdo do prompt>
\`\`\`

## Exemplo de uso
Entrada → saída esperada.
```

## Índice

| Prompt | Categoria | Descrição |
|---|---|---|
| [`code-review.md`](code-review.md) | system | Revisor de código focado em bugs e clareza |
