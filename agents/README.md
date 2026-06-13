# Agents

Complete agent definitions: role, tools, guardrails, and the system prompt that governs them. An agent is more than a prompt — it includes the tools it can use and the limits on what it can do.

## Conventions

- One folder per agent: `agents/<agent-name>/`.
- Each agent contains at least an `AGENTS.md` (the spec) and a `system-prompt.md`.
- Tool schemas live in `tools.json` (JSON Schema format), when present.
- Explicitly declare the target model, tools, and guardrails.

## Agent structure

```
agents/<name>/
├── AGENTS.md         ← spec: role, scope, tools, guardrails
├── system-prompt.md  ← the system prompt
└── tools.json        ← (optional) tool schemas
```

## AGENTS.md template

```markdown
# <Agent Name>

## Role
What this agent does and for whom.

## Target model
claude-opus-4-8 | gpt-* | agnostic

## Tools
- `tool_name` — what it does, inputs/outputs

## Guardrails
- What the agent must NEVER do.
- When it should escalate to a human.

## Success criteria
How to know the agent completed the task.
```

## Index

| Agent | Description |
|---|---|
| [`research-assistant/`](research-assistant/) | Researches a topic and returns a summary with sources |
