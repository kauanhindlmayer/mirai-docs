# Servidor MCP Mirai

O Servidor MCP Mirai permite que assistentes de IA interajam com a plataforma de gerenciamento de projetos Mirai através do Model Context Protocol (MCP).

## O que é MCP?

O [Model Context Protocol (MCP)](https://modelcontextprotocol.io/docs/getting-started/intro) é um padrão aberto que define como modelos de linguagem podem se conectar a ferramentas e fontes de dados externas.

Ele usa uma arquitetura cliente-servidor, onde o cliente (por exemplo, um assistente de IA) se comunica com um ou mais servidores que fornecem capacidades específicas.

## Uso

Uma vez configurado, você pode pedir ao seu assistente de IA para executar ações no Mirai usando linguagem natural.

**Autenticação**

```
Faça login no Mirai
```

**Projetos**

```
Liste meus projetos Mirai
Mostre projetos na organização X
```

**Itens de Trabalho**

```
Mostre bugs ativos no projeto X
Crie uma história de usuário: "Adicionar modo escuro"
Liste itens de trabalho atribuídos a mim
Obtenha detalhes do item de trabalho #123
```

**Wiki**

```
Liste páginas wiki no projeto X
Mostre a página wiki de documentação da API
Crie uma página wiki para diretrizes de implantação
```

## Solução de Problemas

**Servidor não está conectando?**

- Use um caminho absoluto, não um caminho relativo
- Execute `npm run build` para garantir que o servidor foi compilado
- Reinicie seu assistente de IA após a configuração

**Falha na autenticação?**

- Verifique suas credenciais do Mirai
- Certifique-se de que sua conta está ativa

## Recursos

- [Repositório do Servidor MCP Mirai](https://github.com/kauanhindlmayer/mirai-mcp)
