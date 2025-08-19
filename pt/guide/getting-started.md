# Iniciando

## Instalação

### Pré-requisitos

- [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/9.0).
- [Docker](https://docs.docker.com/get-started/get-docker/).

### Steps

1. Clone o repositório:

```bash
$ git clone git@github.com:kauanhindlmayer/mirai-api.git
```

2. Entre no diretório `mirai-api`:

```bash
$ cd mirai-api
```

3. Execute o script de configuração (substitua os espaços reservados pelos seus próprios segredos):

```bash
$ ./scripts/setup-secrets.sh   # Linux/macOS
$ .\scripts\setup-secrets.ps1  # Windows
```

4. Inicie os serviços com .NET Aspire:

```bash
dotnet run --project ./src/AppHost/AppHost.csproj
```
