# 🏢 Sistema de Mapeamento de Processos Empresariais (Full Stack)

Aplicação Full Stack desenvolvida para gerenciamento de processos empresariais, permitindo organizar áreas, processos, subprocessos e usuários.

O sistema inclui autenticação, controle de acesso e upload de arquivos, simulando cenários reais de gestão corporativa.

## 🎥 Demonstração do Projeto 

https://github.com/user-attachments/assets/ad14cd49-8d44-43b9-aff0-bc3a193b3c55

## 🚀 Tecnologias

### 🔙 Backend
- Node.js
- Express.js
- Sequelize (ORM)
- MySQL
- JWT (autenticação)

### 🎨 Frontend
- React.js
- Context API (gerenciamento de estado)
- Axios (consumo de API)
- CSS

---

## ⚙️ Funcionalidades

### 📁 Gestão de Áreas

- [x] Criar áreas
- [x] Listar áreas
- [x] Excluir áreas

### 🔄 Gestão de Processos e Subprocessos

- [x] Criar processos
- [x] Listar processos
- [x] Filtrar por área
- [x] Excluir processos
- [x] Relacionar subprocessos a processos
- [x] Paginação e busca por nome

### 📎 Upload e Visualização de Arquivos

- [x] Upload de documentos (PDF, DOC, JPG)
- [x] Visualização de arquivos na aplicação

### 🔐 Autenticação

- [x] Login e logout
- [x] Proteção de rotas
- [x] Exibição do usuário autenticado

---

## 📌 Regras de Negócio

- Controle de acesso baseado em autenticação
- Associação entre áreas, processos e subprocessos
- Organização hierárquica de dados
- Gerenciamento de arquivos vinculados aos processos

---

## 🧠 Arquitetura

### Backend

- API REST com Express
- ORM com Sequelize
- Separação por camadas (controllers, services, models)
- Autenticação com JWT

### Frontend

- Componentização com React
- Gerenciamento de estado com Context API
- Consumo de API via Axios
- Proteção de rotas

---

## ▶️ Como executar o projeto

### 📌 1. Clonar repositório

```bash
git clone https://github.com/JacquelineCasali/Teste-Stage-Consulting
cd Teste-Stage-Consulting
```
### 📌 2. Configurar banco de dados

Crie um banco MySQL e configure o .env:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=senha
DB_NAME=nome_do_banco
JWT_SECRET=sua_chave_secreta
```

### 📌 3. Instalar dependências

#### Backend
```bash
cd backend
npm install
```
#### Frontend
```bash
cd frontend
npm install
```
### 📌 4. Executar aplicação

#### Backend
```bash
npm run dev
```
#### Frontend
```bash
cd frontend

npm run dev
```

🔗 Frontend: http://localhost:5173

🔗 Backend: http://localhost:3000

### 📌 Diferenciais do Projeto

- [x]  Sistema completo de gestão empresarial
- [x]  Implementação de autenticação com JWT
- [x]  Upload e visualização de arquivos
- [x]  Organização hierárquica de processos
- [x]  Paginação e filtros
- [x]  Integração completa entre frontend e backend

### 👩‍💻 Autora

Jacqueline Casali

🔗 LinkedIn: https://www.linkedin.com/in/jaquelinecasali/

🔗 GitHub: https://github.com/JacquelineCasali

🌐 Portfólio: https://casali.vercel.app
