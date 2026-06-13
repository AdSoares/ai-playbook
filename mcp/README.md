# MCP — Model Context Protocol

Servidores e configurações [MCP](https://modelcontextprotocol.io): a forma padronizada de expor ferramentas, recursos e prompts para clientes de LLM (Claude Desktop, Claude Code, IDEs, etc.).

## Convenções

- Uma pasta por servidor: `mcp/<nome-do-servidor>/`.
- Cada servidor inclui um `README.md` (o que expõe), o código/config e um exemplo de configuração de cliente.
- **Nunca** commitar segredos. Use variáveis de ambiente e um `.env.example`.

## O que um servidor MCP expõe

| Primitivo | Descrição |
|---|---|
| **Tools** | Funções que o modelo pode invocar (efeitos colaterais). |
| **Resources** | Dados/arquivos que o cliente pode ler para contexto. |
| **Prompts** | Templates de prompt parametrizados oferecidos pelo servidor. |

## Configuração de cliente (exemplo)

Bloco típico para `claude_desktop_config.json` ou `.mcp.json`:

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

## Índice

| Servidor | Expõe | Descrição |
|---|---|---|
| [`hello-mcp/`](hello-mcp/) | tools | Servidor mínimo de exemplo (echo + horário) |
