# hello-mcp

Servidor MCP mínimo, para servir de ponto de partida. Expõe duas ferramentas:

- `echo(text)` — devolve o texto recebido.
- `current_time()` — devolve o horário atual em ISO 8601.

## Pré-requisitos
- Node.js 20+

## Como rodar
```bash
node index.js
```

O servidor fala MCP por **stdio**, então normalmente é iniciado pelo cliente (não diretamente).

## Configuração de cliente
Adicione ao seu `.mcp.json` / `claude_desktop_config.json`:

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

## Notas
Este exemplo usa pseudocódigo no `index.js` para ilustrar a forma de um servidor.
Para uma implementação real, use o [SDK oficial do MCP](https://github.com/modelcontextprotocol).
