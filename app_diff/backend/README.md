# DineExplore Backend API

Backend API para a plataforma DineExplore construída com Node.js, Express, Sequelize e PostgreSQL.

## 🚀 Funcionalidades

- **Autenticação JWT**: Sistema seguro de autenticação com tokens JWT
- **CRUD de Restaurantes**: Gerenciamento completo de restaurantes
- **Sistema de Reviews**: Avaliações e comentários de usuários
- **Filtros Inteligentes**: Busca por localização, culinária, avaliação
- **Chat em Tempo Real**: Comunicação em tempo real usando Socket.io
- **Geolocalização**: Busca de restaurantes próximos usando coordenadas

## 📋 Pré-requisitos

- Node.js (v18 ou superior)
- PostgreSQL (ou banco de dados compatível)
- npm ou yarn

## 🔧 Instalação

1. Instale as dependências:
```bash
npm install
```

2. Configure as variáveis de ambiente no arquivo `.env`:
```env
DATABASE="sua-string-de-conexao-postgresql"
JWT_SECRET="seu-secret-jwt-super-seguro"
PORT=3000
```

3. Execute o servidor:
```bash
npm run dev
```

O servidor estará rodando em `http://localhost:3000`

## 📚 Endpoints da API

### Autenticação
- `POST /api/auth/register` - Registrar novo usuário
- `POST /api/auth/login` - Fazer login
- `GET /api/auth/profile` - Obter perfil do usuário (requer autenticação)

### Restaurantes
- `GET /api/restaurants` - Listar restaurantes (com filtros opcionais)
  - Query params: `latitude`, `longitude`, `radius`, `cuisine`, `minRating`, `search`
- `GET /api/restaurants/:id` - Obter detalhes de um restaurante
- `POST /api/restaurants` - Criar restaurante (requer autenticação)
- `PUT /api/restaurants/:id` - Atualizar restaurante (requer autenticação)
- `DELETE /api/restaurants/:id` - Deletar restaurante (requer autenticação)

### Reviews
- `POST /api/reviews` - Criar review (requer autenticação)
- `PUT /api/reviews/:id` - Atualizar review (requer autenticação)
- `DELETE /api/reviews/:id` - Deletar review (requer autenticação)
- `GET /api/reviews/restaurant/:restaurantId` - Listar reviews de um restaurante

### Usuários
- `GET /api/users` - Listar usuários (requer autenticação)
- `GET /api/users/:id` - Obter usuário por ID (requer autenticação)

## 🔌 Socket.io Events

### Cliente → Servidor
- `join-restaurant` - Entrar na sala de um restaurante
- `leave-restaurant` - Sair da sala de um restaurante
- `chat-message` - Enviar mensagem no chat
- `new-review` - Notificar novo review

### Servidor → Cliente
- `chat-message` - Receber mensagem do chat
- `review-added` - Notificação de novo review
