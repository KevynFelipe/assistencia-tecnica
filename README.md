# Assistência Técnica

Sistema de gestão para assistência técnica desenvolvido como projeto acadêmico do 2º semestre de Análise e Desenvolvimento de Sistemas.

## Funcionalidades

- Cadastro e gerenciamento de **funcionários**, **clientes** e **equipamentos**
- Controle de **ordens de serviço** com status (Aberto, Andamento, Pronto, Entregue)
- **Dashboard** com analytics: total de ordens, faturamento, ticket médio
- **Estoque** de peças e componentes
- **Mensagens** internas e **chamados** de suporte
- Área do **técnico** e área do **gerente** com visões distintas

## Tecnologias

- **Frontend:** Angular 21, TypeScript, CSS vanilla (design system próprio)
- **Backend:** JSON Server (API REST fake)
- **Node.js** (runtime)

## Pré-requisitos

- Node.js (v20+)
- npm (v11+)

## Como rodar

### 1. Backend (API)

```bash
cd backend
npx json-server@1.0.0-beta.15 --watch db.json --port 3000
```

A API estará em `http://localhost:3000` com os recursos:
`/funcionarios`, `/clientes`, `/equipamentos`, `/ordens`, `/estoque`, `/mensagens`, `/chamados`

### 2. Frontend (Angular)

Em outro terminal:

```bash
cd site
npm install
npm start
```

Acesse em `http://localhost:4200`

### Login

| Cargo    | Email          | Senha |
| -------- | -------------- | ----- |
| Técnico  | joao@email.com | 1234  |
| Gerente  | maria@email.com| 1234  |
