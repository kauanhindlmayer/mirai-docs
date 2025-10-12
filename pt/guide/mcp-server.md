# Servidor MCP

O Servidor MCP Mirai permite que você use assistentes de IA como Claude e GitHub Copilot para interagir com seus projetos, itens de trabalho e páginas wiki do Mirai.

## O que é MCP?

Model Context Protocol (MCP) é um padrão aberto que conecta assistentes de IA a fontes de dados e ferramentas. Com o Servidor MCP Mirai, você pode pedir ao seu assistente de IA para ler e gerenciar seus dados do Mirai.

## Ferramentas Disponíveis

- **mirai_login** - Autentique-se com seu email e senha
- **mirai_list_projects** - Liste organizações e projetos
- **mirai_list_work_items** - Obtenha itens de trabalho com opções de filtragem
- **mirai_get_work_item** - Obtenha detalhes de um item de trabalho específico
- **mirai_create_work_item** - Crie Épicos, Histórias de Usuário, Funcionalidades ou Bugs
- **mirai_list_wiki_pages** - Liste páginas wiki em um projeto
- **mirai_get_wiki_page** - Obtenha conteúdo de página wiki
- **mirai_create_wiki_page** - Crie novas páginas wiki

## Configuração

### 1. Instalar e Compilar

Clone e compile o servidor MCP:

```bash
git clone https://github.com/kauanhindlmayer/mirai-mcp.git
cd mirai-mcp
npm install
npm run build
```

### 2. Configurar Seu Assistente de IA

#### Claude Code

```bash
claude mcp add mirai-mcp --scope user node /caminho/absoluto/para/mirai-mcp/dist/index.js
```

Depois reinicie o Claude Code.

#### GitHub Copilot

Crie `.vscode/mcp.json` no seu workspace:

```json
{
  "servers": {
    "mirai-mcp": {
      "type": "stdio",
      "command": "node",
      "args": ["/caminho/absoluto/para/mirai-mcp/dist/index.js"]
    }
  }
}
```

## Uso

Peça ao seu assistente de IA para interagir com o Mirai usando linguagem natural:

**Autenticação**
```
Faça login no Mirai
```

**Projetos**
```
Liste meus projetos Mirai
Mostre projetos da organização de Engenharia
```

**Itens de Trabalho**
```
Mostre bugs ativos no projeto X
Crie uma história de usuário: "Adicionar modo escuro"
Liste itens de trabalho atribuídos a mim
```

**Wiki**
```
Liste páginas wiki no projeto X
Crie uma página wiki para diretrizes de API
```

## Próximos Passos

- [Documentação do Model Context Protocol](https://modelcontextprotocol.io/)
- [Reportar Problemas](https://github.com/kauanhindlmayer/mirai-mcp/issues)
