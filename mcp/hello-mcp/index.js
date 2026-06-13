// hello-mcp — an illustrative example of a minimal MCP server.
//
// In production, use the official SDK: @modelcontextprotocol/sdk
// import { Server } from "@modelcontextprotocol/sdk/server/index.js";
// import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
//
// The skeleton below shows the shape: declare tools and answer calls.

const TOOLS = [
  {
    name: "echo",
    description: "Returns the received text.",
    inputSchema: {
      type: "object",
      properties: { text: { type: "string" } },
      required: ["text"],
    },
  },
  {
    name: "current_time",
    description: "Returns the current time in ISO 8601.",
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

// Pseudo-bootstrap (replace with the real SDK initialization):
//
// const server = new Server({ name: "hello-mcp", version: "0.1.0" });
// server.setRequestHandler("tools/list", () => ({ tools: TOOLS }));
// server.setRequestHandler("tools/call", (req) =>
//   handleToolCall(req.params.name, req.params.arguments));
// await server.connect(new StdioServerTransport());

module.exports = { TOOLS, handleToolCall };
