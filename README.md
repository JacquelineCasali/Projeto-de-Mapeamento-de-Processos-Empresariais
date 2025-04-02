## 📌 Projeto de Mapeamento de Processos Empresariais

## 📝 Sobre o Projeto

Este projeto é uma aplicação full-stack para o mapeamento de processos empresariais, permitindo gerenciar áreas, processos, subprocessos e usuários. Inclui um sistema de autenticação, além de suporte a upload e visualização de arquivos.

## Vídeo do Projeto 
https://github.com/user-attachments/assets/ad14cd49-8d44-43b9-aff0-bc3a193b3c55


## 🚀 Tecnologias Utilizadas

Back-end (Node.js, Express, Sequelize, MySQL)
Node.js: Plataforma para execução do JavaScript no servidor.
Express.js: Framework para construção da API.
Sequelize: ORM para modelagem e manipulação do banco de dados.
MySQL: Banco de dados relacional para armazenar as informações.
Front-end (React.js, Context API)
React.js: Biblioteca para construção da interface do usuário.
Context API: Gerenciamento de estado global para autenticação e dados compartilhados.
Axios: Comunicação com a API.
CSS Puro: Estilização personalizada da interface.

## ⚙️ Funcionalidades

🔹 Gestão de Áreas

✅ Criar, listar e excluir áreas

🔹 Gestão de Processos e Subprocessos

✅ Criar, listar, filtrar por área e excluir processos

✅ Relacionar subprocessos a um processo específico

✅ Paginação e busca por nome de processos

🔹 Upload e Download de Arquivos

✅ Upload de documentos vinculados a um processo (PDF, DOC, JPG)

✅ Visualização de PDFs diretamente na aplicação

🔹 Autenticação e Login

✅ Login e logout com Context API

✅ Proteção de rotas baseadas em autenticação

✅ Exibição do nome do usuário na navbar

## 📌 Como Rodar o Projeto

1️⃣ Clonar o repositório
$ https://github.com/JacquelineCasali/Teste-Stage-Consulting

cd Teste-Stage-Consulting

2️⃣ Configurar o Banco de Dados
Crie um banco de dados MySQL e configure o arquivo .env com:

- DB_HOST=localhost
- DB_USER=root
- DB_PASSWORD=senha
- DB_NAME=nome_do_banco
- JWT_SECRET=sua_chave_secreta

3️⃣ Instalar Dependências

Back-end
- $ cd backend
- $ npm install

Front-end
- $ cd frontend
- $ npm install

## 4️⃣ Executar o Projeto
Rodar o servidor (Node.js + Express + MySQL)

✅ $ cd backend

✅ $ npm run dev

Rodar o front-end (React.js)

✅ $ cd frontend

✅ $ npm run dev

É necessário deixar o backend rodando no terminal para que os dados sejam visualizados no projeto.

## 📝 Projeto Desenvolvido por 
Jacqueline Casali
