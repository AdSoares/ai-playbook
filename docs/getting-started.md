# Getting Started

Este guia ajuda você a navegar e aproveitar o **AI Playbook**.

## O que é

Uma coleção curada de artefatos práticos para construir com LLMs e agentes. Tudo aqui foi pensado para ser **copiado e adaptado**, não consumido como framework.

## Mapa rápido

| Você quer... | Vá para |
|---|---|
| Um prompt pronto para uma tarefa | [`prompts/`](../prompts/) |
| Um agente completo (papel + ferramentas) | [`agents/`](../agents/) |
| Uma capacidade reutilizável | [`skills/`](../skills/) |
| Expor ferramentas a um cliente LLM | [`mcp/`](../mcp/) |
| Medir a qualidade do seu sistema | [`evals/`](../evals/) |
| Ver tudo junto funcionando | [`examples/`](../examples/) |

## Como adaptar um artefato

1. Copie a pasta/arquivo para o seu projeto.
2. Substitua os placeholders `{{variavel}}`.
3. Ajuste guardrails e modelo alvo ao seu contexto.
4. **Crie uma eval** antes de iterar — meça antes de "melhorar".

## Boas práticas

- **Versione seus prompts** como código: pequenas mudanças têm grandes efeitos.
- **Comece com evals**: sem medição, otimização é achismo.
- **Princípio do menor privilégio** para ferramentas de agentes.
- **Nunca commite segredos** — use variáveis de ambiente.

## Contribuindo

Veja [CONTRIBUTING.md](../CONTRIBUTING.md). Toda categoria tem um template — siga-o.
