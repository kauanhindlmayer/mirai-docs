# Getting Started

## Installation

### Prerequisites

- [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/9.0).
- [Docker](https://docs.docker.com/get-started/get-docker/).

### Steps

1. Clone the repository:

```bash
$ git clone git@github.com:kauanhindlmayer/mirai-api.git
```

2. Enter the `mirai-api` directory:

```bash
$ cd mirai-api
```

3. Run the setup script (replace placeholders with your own secrets):

```bash
$ ./scripts/setup-secrets.sh   # Linux/macOS
$ .\scripts\setup-secrets.ps1  # Windows
```

4. Start the services with .NET Aspire:

```bash
dotnet run --project ./src/AppHost/AppHost.csproj
```
