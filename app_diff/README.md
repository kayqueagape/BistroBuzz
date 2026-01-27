# App Diff - DineExplore

Esta pasta contém o backend completo do projeto DineExplore separado do template frontend.

## 📁 Estrutura

```
app_diff/
├── backend/          # Backend completo do DineExplore
│   ├── src/
│   │   ├── app.js
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── db/
│   ├── package.json
│   ├── dbSeeds.js
│   └── .env
└── README.md
```

## 🚀 Backend

O backend está localizado em `app_diff/backend/` e contém:

- **API REST** completa com Express
- **Autenticação JWT** com bcrypt
- **Socket.io** para chat em tempo real
- **Sequelize ORM** com PostgreSQL
- **Modelos**: User, Restaurant, Review
- **Controllers**: Auth, Restaurant, Review, User
- **Rotas**: `/api/auth`, `/api/restaurants`, `/api/reviews`, `/api/users`

### Como usar o backend:

```bash
cd app_diff/backend
npm install
npm run dev
```

O servidor estará rodando em `http://localhost:3000`

## 📝 Frontend

O frontend (template) está localizado em `templete/` na raiz do projeto.
