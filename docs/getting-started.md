# Getting Started

This guide helps you navigate and get the most out of the **AI Playbook**.

## What it is

A curated collection of practical artifacts for building with LLMs and agents. Everything here is meant to be **copied and adapted**, not consumed as a framework.

## Quick map

| You want to... | Go to |
|---|---|
| A ready-made prompt for a task | [`prompts/`](../prompts/) |
| A complete agent (role + tools) | [`agents/`](../agents/) |
| A reusable capability | [`skills/`](../skills/) |
| Expose tools to an LLM client | [`mcp/`](../mcp/) |
| Measure the quality of your system | [`evals/`](../evals/) |
| See everything working together | [`examples/`](../examples/) |

## How to adapt an artifact

1. Copy the folder/file into your project.
2. Replace the `{{variable}}` placeholders.
3. Adjust guardrails and target model to your context.
4. **Create an eval** before iterating — measure before you "improve".

## Best practices

- **Version your prompts** like code: small changes have big effects.
- **Start with evals**: without measurement, optimization is guesswork.
- **Least privilege** for agent tools.
- **Never commit secrets** — use environment variables.

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md). Every category has a template — follow it.
