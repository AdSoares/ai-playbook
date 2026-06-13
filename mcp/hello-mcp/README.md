# hello-mcp

A minimal MCP server to use as a starting point. It exposes two tools:

- `echo(text)` — returns the received text.
- `current_time()` — returns the current time in ISO 8601.

## Prerequisites
- Node.js 20+

## How to run
```bash
node index.js
```

The server speaks MCP over **stdio**, so it is normally started by the client (not directly).

## Client configuration
Add this to your `.mcp.json` / `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "hello": {
      "command": "node",
      "args": ["./mcp/hello-mcp/index.js"]
    }
  }
}
```

## Notes
This example uses pseudocode in `index.js` to illustrate the shape of a server.
For a real implementation, use the [official MCP SDK](https://github.com/modelcontextprotocol).
