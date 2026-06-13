# Skills

Capacidades empacotadas e portáveis — blocos de competência que podem ser plugados em diferentes agentes ou runtimes. Uma skill descreve **quando** ser usada e **como** executar uma tarefa específica e repetível.

## Convenções

- Uma pasta por skill: `skills/<nome-da-skill>/`.
- Cada skill tem um `SKILL.md` com metadados de ativação e as instruções.
- Recursos auxiliares (scripts, templates) ficam na mesma pasta.

## Template do SKILL.md

```markdown
---
name: nome-da-skill
description: Quando usar esta skill (o gatilho de ativação).
---

# <Nome da Skill>

## Quando usar
Sinais/gatilhos que indicam que esta skill se aplica.

## Como executar
Passo a passo que a skill realiza.

## Entradas / Saídas
O que recebe, o que entrega.

## Exemplo
Caso concreto de uso.
```

## Índice

| Skill | Quando usar |
|---|---|
| [`changelog-writer/`](changelog-writer/) | Gerar entradas de CHANGELOG a partir de commits |
