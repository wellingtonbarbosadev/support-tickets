# 🎫 Support Tickets API

API RESTful para gerenciamento de tickets de suporte técnico, desenvolvida com Node.js puro (sem frameworks externos).

## 📋 Sobre o Projeto

Sistema de gerenciamento de tickets de suporte que permite criar, listar, atualizar e deletar tickets de atendimento. O projeto foi desenvolvido utilizando apenas módulos nativos do Node.js, demonstrando os fundamentos do desenvolvimento de APIs sem dependência de frameworks.

## ✨ Funcionalidades

- ✅ Criar novos tickets de suporte
- 📋 Listar todos os tickets
- 🔍 Filtrar tickets por equipamento, descrição ou nome do usuário
- ✏️ Atualizar informações de um ticket
- 🔒 Fechar tickets específicos
- 🗑️ Deletar tickets

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **HTTP (nativo)** - Criação do servidor
- **File System (nativo)** - Persistência de dados em JSON
- **Crypto (nativo)** - Geração de IDs únicos

## 📁 Estrutura do Projeto

```
support-tickets/
├── src/
│   ├── controllers/
│   │   └── tickets/
│   │       ├── create.js      # Criação de tickets
│   │       ├── index.js       # Listagem de tickets
│   │       ├── update.js      # Atualização completa
│   │       ├── patch.js       # Fechamento de tickets
│   │       └── delete.js      # Remoção de tickets
│   ├── database/
│   │   ├── database.js        # Classe de gerenciamento do banco
│   │   └── db.json            # Arquivo de persistência
│   ├── middlewares/
│   │   ├── jsonHandler.js     # Processamento de JSON
│   │   └── routeHandler.js    # Roteamento de requisições
│   ├── routes/
│   │   ├── index.js           # Agregador de rotas
│   │   └── tickets.js         # Rotas de tickets
│   ├── utils/
│   │   ├── extractQueryParams.js  # Extração de query params
│   │   └── parseRoutePath.js      # Parser de rotas
│   └── server.js              # Inicialização do servidor
├── package.json
└── README.md
```

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd support-tickets
```

2. Instale as dependências (não há dependências externas):
```bash
npm install
```

## ▶️ Como Executar

Execute o servidor em modo de desenvolvimento (com auto-reload):

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3333`

## 📚 Endpoints da API

### Criar Ticket
```http
POST /tickets
Content-Type: application/json

{
  "equipment": "Notebook Dell",
  "description": "Tela não liga",
  "user_name": "João Silva"
}
```

**Resposta (201 Created):**
```json
{
  "id": "uuid-gerado",
  "equipment": "Notebook Dell",
  "description": "Tela não liga",
  "user_name": "João Silva",
  "status": "open",
  "created_at": "2026-01-13T...",
  "updated_at": "2026-01-13T..."
}
```

### Listar Tickets
```http
GET /tickets
```

**Com filtros (query params):**
```http
GET /tickets?equipment=notebook
GET /tickets?user_name=joão
GET /tickets?description=tela
```

**Resposta (200 OK):**
```json
[
  {
    "id": "uuid",
    "equipment": "Notebook Dell",
    "description": "Tela não liga",
    "user_name": "João Silva",
    "status": "open",
    "created_at": "2026-01-13T...",
    "updated_at": "2026-01-13T..."
  }
]
```

### Atualizar Ticket
```http
PUT /tickets/:id
Content-Type: application/json

{
  "equipment": "Notebook Dell Inspiron",
  "description": "Tela não liga - verificar cabo",
  "user_name": "João Silva"
}
```

**Resposta (204 No Content)**

### Fechar Ticket
```http
PATCH /tickets/:id/close
Content-Type: application/json

{
  "solution": "Cabo HDMI substituído e testado com sucesso"
}
```

> **Nota:** O campo `solution` é opcional. Se não for fornecido, apenas o status será atualizado para "closed".

**Resposta (200 OK):**
```
Ticket closed successfully
```

### Deletar Ticket
```http
DELETE /tickets/:id
```

**Resposta (204 No Content)**

## 🗄️ Banco de Dados

O projeto utiliza um sistema de persistência simples baseado em arquivo JSON (`db.json`). Os dados são estruturados da seguinte forma:

```json
{
  "tickets": [
    {
      "id": "uuid",
      "equipment": "string",
      "description": "string",
      "user_name": "string",
      "status": "open | closed",
      "solution": "string (opcional - preenchido ao fechar ticket)",
      "created_at": "date",
      "updated_at": "date"
    }
  ]
}
```

## 🎯 Conceitos Aplicados

- **API RESTful** - Arquitetura e boas práticas
- **HTTP Methods** - GET, POST, PUT, PATCH, DELETE
- **Status Codes** - 200, 201, 204, 404
- **Middlewares** - Processamento de requisições
- **Routing** - Sistema de rotas com parâmetros dinâmicos
- **Persistência** - Operações CRUD com File System
- **Modularização** - Separação de responsabilidades

## 👨‍💻 Desenvolvido por

Wellington Barbosa - Projeto do Curso RocketSeat

## 📄 Licença

Este projeto foi desenvolvido como parte do curso da RocketSeat.

---

Desenvolvido com 💜 por Wellington Wesley