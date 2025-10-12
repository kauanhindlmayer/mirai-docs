# Mirai MCP Server

The Mirai MCP Server allows AI assistants to interact with the Mirai
project management platform through the Model Context Protocol (MCP).

## What is MCP?

The [Model Context Protocol (MCP)](https://modelcontextprotocol.io/docs/getting-started/intro) is an open standard that defines how language models can connect to external tools and data sources.

It uses a client-server architecture, where the client (e.g., an AI assistant) communicates with one or more servers that provide specific capabilities.

## Usage

Once configured, you can ask your AI assistant to perform actions in Mirai using natural language.

**Authentication**

```
Login to Mirai
```

**Projects**

```
List my Mirai projects
Show projects in the organization X
```

**Work Items**

```
Show active bugs in project X
Create a user story: "Add dark mode"
List work items assigned to me
Get details of work item #123
```

**Wiki**

```
List wiki pages in project X
Show the API documentation wiki page
Create a wiki page for deployment guidelines
```

## Troubleshooting

**Server not connecting?**

- Use an absolute path, not a relative path
- Run `npm run build` to ensure the server is built
- Restart your AI assistant after configuration

**Authentication failed?**

- Check your Mirai credentials
- Ensure your account is active

## Resources

- [Mirai MCP Server Repository](https://github.com/kauanhindlmayer/mirai-mcp)
