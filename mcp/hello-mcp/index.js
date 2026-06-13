// hello-mcp — exemplo ilustrativo de um servidor MCP mínimo.
//
// Em produção, use o SDK oficial: @modelcontextprotocol/sdk
// import { Server } from "@modelcontextprotocol/sdk/server/index.js";
// import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
//
// O esqueleto abaixo mostra a forma: declarar ferramentas e responder chamadas.

const TOOLS = [
  {
    name: "echo",
    description: "Devolve o texto recebido.",
    inputSchema: {
      type: "object",
      properties: { text: { type: "string" } },
      required: ["text"],
    },
  },
  {
    name: "current_time",
    description: "Devolve o horário atual em ISO 8601.",
    inputSchema: { type: "object", properties: {} },
  },
];

function handleToolCall(name, args) {
  switch (name) {
    case "echo":
      return { content: [{ type: "text", text: args.text }] };
    case "current_time":
      return { content: [{ type: "text", text: new Date().toISOString() }] };
    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}

// Pseudo-bootstrap (substituir pela inicialização real do SDK):
//
// const server = new Server({ name: "hello-mcp", version: "0.1.0" });
// server.setRequestHandler("tools/list", () => ({ tools: TOOLS }));
// server.setRequestHandler("tools/call", (req) =>
//   handleToolCall(req.params.name, req.params.arguments));
// await server.connect(new StdioServerTransport());

module.exports = { TOOLS, handleToolCall };
