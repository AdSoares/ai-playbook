# Prompts

Reusable prompt templates and libraries: system prompts, few-shot patterns, task instructions, and reasoning techniques.

## Conventions

- One `.md` file per prompt (or a folder when there are variants / external few-shot files).
- Every prompt starts with the metadata header below.
- Use explicit placeholders in the form `{{variable}}`.
- State the target model/runtime if the prompt is specific.

## Template

```markdown
---
title: Prompt name
category: system | task | few-shot | reasoning
model: agnostic | claude | gpt | gemini | ...
tags: [code-review, summarization]
author: your-handle
---

## Goal
What this prompt solves, in one sentence.

## Variables
- `{{input}}` — description
- `{{context}}` — description

## Prompt
\`\`\`text
<prompt content>
\`\`\`

## Usage example
Input → expected output.
```

## Index

| Prompt | Category | Description |
|---|---|---|
| [`code-review.md`](code-review.md) | system | Code reviewer focused on bugs and clarity |
