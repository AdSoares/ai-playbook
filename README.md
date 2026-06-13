# AI Playbook

> Coleção curada de artefatos para trabalhar com **LLMs e agentes**: prompts, agents, skills, servidores MCP e evals.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Markdown Lint](https://github.com/AdSoares/ai-playbook/actions/workflows/lint.yml/badge.svg)](https://github.com/AdSoares/ai-playbook/actions/workflows/lint.yml)

Este repositório é um **playbook aberto**: artefatos reutilizáveis, testados na prática e prontos para copiar, adaptar e compartilhar. O objetivo é reduzir o tempo entre "tenho uma ideia para um agente" e "tenho algo funcionando".

---

## 📂 Estrutura

```
ai-playbook/
├── prompts/        ← templates e bibliotecas de prompts
├── agents/         ← definições de agentes (AGENTS.md, system prompts, configs)
├── skills/         ← skills reutilizáveis (capacidades empacotadas)
├── mcp/            ← servidores e configs Model Context Protocol
├── evals/          ← suites de avaliação e benchmarks
├── examples/       ← exemplos de código ponta a ponta
└── docs/           ← guias e material de apoio
```

Cada pasta tem seu próprio `README.md` explicando convenções, formato dos artefatos e como contribuir.

| Pasta | O que você encontra | Comece por |
|---|---|---|
| [`prompts/`](prompts/) | Prompts de sistema, templates few-shot, padrões de instrução | [`prompts/README.md`](prompts/README.md) |
| [`agents/`](agents/) | Agentes completos: papel, ferramentas, guardrails | [`agents/README.md`](agents/README.md) |
| [`skills/`](skills/) | Capacidades empacotadas e portáveis entre agentes | [`skills/README.md`](skills/README.md) |
| [`mcp/`](mcp/) | Servidores MCP e configurações de cliente | [`mcp/README.md`](mcp/README.md) |
| [`evals/`](evals/) | Datasets, rubricas e scripts de avaliação | [`evals/README.md`](evals/README.md) |
| [`examples/`](examples/) | Projetos de exemplo prontos para rodar | [`examples/README.md`](examples/README.md) |

---

## 🚀 Como usar

1. Navegue pela pasta do tipo de artefato que você precisa.
2. Cada artefato é autocontido — leia o cabeçalho/README para pré-requisitos.
3. Copie, adapte ao seu contexto e dê os créditos quando fizer sentido.

## 🤝 Contribuindo

Contribuições são bem-vindas! Veja o [guia de contribuição](CONTRIBUTING.md) e o [código de conduta](CODE_OF_CONDUCT.md). Cada categoria define um template padrão — siga-o para manter a consistência.

## 📜 Licença

Distribuído sob a licença [MIT](LICENSE). Use, modifique e compartilhe livremente.

---

_Mantido por [Ad Soares](https://github.com/AdSoares)._
