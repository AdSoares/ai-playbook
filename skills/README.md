# Skills

Packaged, portable capabilities — competence blocks that can be plugged into different agents or runtimes. A skill describes **when** it should be used and **how** to perform a specific, repeatable task.

## Conventions

- One folder per skill: `skills/<skill-name>/`.
- Each skill has a `SKILL.md` with activation metadata and instructions.
- Helper resources (scripts, templates) live in the same folder.

## SKILL.md template

```markdown
---
name: skill-name
description: When to use this skill (the activation trigger).
---

# <Skill Name>

## When to use
Signals/triggers indicating this skill applies.

## How it runs
The step-by-step the skill performs.

## Inputs / Outputs
What it receives, what it delivers.

## Example
A concrete usage case.
```

## Index

| Skill | When to use |
|---|---|
| [`changelog-writer/`](changelog-writer/) | Generate CHANGELOG entries from commits |
| [`teach-me/`](teach-me/) | Build a self-contained, time-boxed study capsule to learn any public subject |
