
# 📘 Habit Tracker API

API RESTful para registro, consulta e monitoramento de hábitos diários.

---

## 📌 Sobre o projeto

Essa API permite que usuários cadastrem hábitos, registrem o progresso diário e consultem seu histórico de conclusão. Desenvolvida como parte do meu portfólio, com foco em boas práticas de autenticação, organização de código e estrutura profissional de APIs REST.

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- JWT (autenticação)
- Docker + Docker Compose (opcional)
- Insomnia/Postman (para testes)

---

## ⚙️ Como executar localmente

```bash
git clone https://github.com/rafaduarts/habit-tracker-api.git
cd habit-tracker-api
cp .env.example .env
npm install
docker-compose up -d # para subir o MongoDB localmente
npm run dev
```

Acesse em: `http://localhost:3000`

---

## 🔑 Variáveis de ambiente (.env)

```env
MONGO_URI=mongodb://localhost:27017/habit-tracker
JWT_SECRET=sua_chave_secreta_aqui
PORT=3000
```

---

## 📖 Rotas principais

| Método | Rota                | Descrição                          | Autenticação |
|--------|---------------------|------------------------------------|--------------|
| POST   | `/auth/signup`      | Cadastro de usuário                | ❌           |
| POST   | `/auth/login`       | Login e geração de token (JWT)     | ❌           |
| GET    | `/habits`           | Lista todos os hábitos do usuário  | ✅           |
| POST   | `/habits`           | Cria novo hábito                   | ✅           |
| PATCH  | `/habits/:id`       | Atualiza hábito                    | ✅           |
| DELETE | `/habits/:id`       | Remove hábito                      | ✅           |
| POST   | `/habits/:id/log`   | Registra conclusão do hábito       | ✅           |

> ⚠️ As rotas protegidas exigem o header:
> `Authorization: Bearer {token}`

---

## 📫 Contato

- **Nome:** Rafael Duarte  
- **LinkedIn:** [linkedin.com/in/rafaduarts](https://www.linkedin.com/in/rafaduarts/)  
- **GitHub:** [github.com/rafaduarts](https://github.com/rafaduarts)

---

## 📄 Licença

Este projeto está sob a licença MIT.
