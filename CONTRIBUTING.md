# Contributing Guide

Thanks for considering a contribution to the **AI Playbook**! This repository lives on practical, well-documented artifacts. This guide explains how to add yours.

## Principles

- **Self-contained**: every artifact should work on its own, with clear prerequisites.
- **Tested**: only share what you've actually used.
- **Documented**: every artifact has a header stating purpose, inputs, and expected outputs.
- **Provider-neutral when possible**: note whether something is specific to a model/runtime.

## Language

- **Documentation, code, identifiers, and commits**: English (EN-US).
- **Commits**: follow [Conventional Commits](https://www.conventionalcommits.org/).

## Step by step

1. Fork the repo and create a branch: `feat/<category>-<short-name>`.
2. Place the artifact in the right folder (`prompts/`, `agents/`, `skills/`, `mcp/`, `evals/`, `examples/`).
3. Follow the category **template** (see the folder's `README.md`).
4. Update the index in the folder's `README.md`, if present.
5. Run the linter locally, if applicable.
6. Open a Pull Request using the template and describe the use case.

## Commit format

```
feat(prompts): add code-review system prompt
fix(agents): correct tool schema in researcher agent
docs(mcp): clarify auth setup for filesystem server
```

## PR checklist

- [ ] The artifact is in the right folder and follows the category template.
- [ ] Header/README filled in (purpose, prerequisites, usage example).
- [ ] No secrets, tokens, or sensitive data.
- [ ] I tested the artifact at least once.

Questions? Open an issue. 🚀
