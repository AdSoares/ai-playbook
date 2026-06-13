# AI Playbook

> A curated collection of artifacts for working with **LLMs and agents**: prompts, agents, skills, MCP servers, and evals.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Markdown Lint](https://github.com/AdSoares/ai-playbook/actions/workflows/lint.yml/badge.svg)](https://github.com/AdSoares/ai-playbook/actions/workflows/lint.yml)

This repository is an **open playbook**: reusable, battle-tested artifacts ready to copy, adapt, and share. The goal is to shorten the gap between "I have an idea for an agent" and "I have something working."

---

## 📂 Structure

```
ai-playbook/
├── prompts/        ← prompt templates and libraries
├── agents/         ← agent definitions (AGENTS.md, system prompts, configs)
├── skills/         ← reusable skills (packaged capabilities)
├── mcp/            ← Model Context Protocol servers and configs
├── evals/          ← evaluation suites and benchmarks
├── examples/       ← end-to-end code examples
└── docs/           ← guides and supporting material
```

Each folder has its own `README.md` explaining its conventions, artifact format, and how to contribute.

| Folder | What you'll find | Start here |
|---|---|---|
| [`prompts/`](prompts/) | System prompts, few-shot templates, instruction patterns | [`prompts/README.md`](prompts/README.md) |
| [`agents/`](agents/) | Complete agents: role, tools, guardrails | [`agents/README.md`](agents/README.md) |
| [`skills/`](skills/) | Packaged capabilities, portable across agents | [`skills/README.md`](skills/README.md) |
| [`mcp/`](mcp/) | MCP servers and client configurations | [`mcp/README.md`](mcp/README.md) |
| [`evals/`](evals/) | Datasets, rubrics, and evaluation scripts | [`evals/README.md`](evals/README.md) |
| [`examples/`](examples/) | Runnable example projects | [`examples/README.md`](examples/README.md) |

---

## 🚀 How to use

1. Browse the folder for the artifact type you need.
2. Each artifact is self-contained — read its header/README for prerequisites.
3. Copy, adapt to your context, and give credit where it makes sense.

## 🤝 Contributing

Contributions are welcome! See the [contribution guide](CONTRIBUTING.md) and the [code of conduct](CODE_OF_CONDUCT.md). Each category defines a standard template — follow it to keep things consistent.

## 📜 License

Released under the [MIT](LICENSE) license. Use, modify, and share freely.

---

_Maintained by [Ad Soares](https://github.com/AdSoares)._
