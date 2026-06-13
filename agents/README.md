# Agents

Definições completas de agentes: papel, ferramentas, guardrails e o system prompt que os governa. Um agente é mais do que um prompt — inclui as ferramentas que ele pode usar e os limites do que pode fazer.

## Convenções

- Uma pasta por agente: `agents/<nome-do-agente>/`.
- Cada agente contém pelo menos um `AGENTS.md` (a especificação) e o `system-prompt.md`.
- Esquemas de ferramentas em `tools.json` (formato JSON Schema), quando houver.
- Declare explicitamente modelo alvo, ferramentas e guardrails.

## Estrutura de um agente

```
agents/<nome>/
├── AGENTS.md         ← especificação: papel, escopo, ferramentas, guardrails
├── system-prompt.md  ← o prompt de sistema
└── tools.json        ← (opcional) schemas das ferramentas
```

## Template do AGENTS.md

```markdown
# <Nome do Agente>

## Papel
O que este agente faz e para quem.

## Modelo alvo
claude-opus-4-8 | gpt-* | agnostic

## Ferramentas
- `nome_da_ferramenta` — o que faz, entradas/saídas

## Guardrails
- O que o agente NUNCA deve fazer.
- Quando deve escalar para um humano.

## Critérios de sucesso
Como saber que o agente cumpriu a tarefa.
```

## Índice

| Agente | Descrição |
|---|---|
| [`research-assistant/`](research-assistant/) | Pesquisa um tópico e devolve um resumo com fontes |
