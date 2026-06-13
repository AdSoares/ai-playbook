# MCP — Model Context Protocol

Servers and configurations for [MCP](https://modelcontextprotocol.io): the standardized way to expose tools, resources, and prompts to LLM clients (Claude Desktop, Claude Code, IDEs, etc.).

## Conventions

- One folder per server: `mcp/<server-name>/`.
- Each server includes a `README.md` (what it exposes), the code/config, and a sample client configuration.
- **Never** commit secrets. Use environment variables and a `.env.example`.

## What an MCP server exposes

| Primitive | Description |
|---|---|
| **Tools** | Functions the model can invoke (side effects). |
| **Resources** | Data/files the client can read for context. |
| **Prompts** | Parameterized prompt templates offered by the server. |

## Client configuration (example)

A typical block for `claude_desktop_config.json` or `.mcp.json`:

```json
{
  "mcpServers": {
    "my-server": {
      "command": "node",
      "args": ["./mcp/my-server/index.js"],
      "env": {
        "API_KEY": "${API_KEY}"
      }
    }
  }
}
```

## Index

| Server | Exposes | Description |
|---|---|---|
| [`hello-mcp/`](hello-mcp/) | tools | Minimal example server (echo + current time) |
