# Games E-commerce Server

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/wendellmoraisz/GamesEcommerce-server/blob/main/LICENSE)

Backend do projeto e-commerce de games. A API fornece dados dos produtos e permite a busca dos mesmos pelo nome.

Além disso, permite o controle de estoque para o usuário autenticado.

# Tecnologias utilizadas
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Json Web Token](https://jwt.io/)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)

# Funcionalidades
  - [x] Cadastrar usuário
  - [x] Fornecer token de autenticação no login
  - [x] Verificar token em rotas privadas
  - [x] Cadastrar produto
  - [x] Editar produto
  - [x] Deletar produto
  - [x] Pesquisar produto pelo começo do nome
  - [x] Pesquisa de produto ordenada por menor e maior preço

# Requisitos mínimos
- Ter o [Node.js](https://nodejs.org/en/download/) instalado na sua máquina.
- Ter o [MySQL](https://dev.mysql.com/downloads/mysql/) instalado na sua máquina.

# Como rodar

```bash

# clone o repositório
git clone https://github.com/wendellmoraisz/GamesEcommerce-server

# entre no diretório do projeto e execute os seguintes comandos no seu terminal:
npm install
npm start
```
# Rotas
### URL Base
http://localhost:3333

### Usuários
- `POST` /user - Cadastra novo usuário

  **body** = { user: string, password: string }

  **response** = { message || error }
  
- `POST` /login - Realiza o login do usuário

  **body** = { user: string, password: string }
  
  **response** = { message, token } || { error }
  
### Produtos
- `GET` /products - Busca todos os produtos
  
  **response** = { results: [ ]{ name, imgSRC, stockQuantity, price } }

- `GET` /products/nameStartsWith/:name - Busca produtos pelo início do nome

  **params** = { name: string }
  
  **response** = { results: [ ]{ name, imgSRC, stockQuantity, price } }
  
- `POST` /products - Cadastra novo produto 
  
    **headers** = { authorization: token }
 
    **body** = { name: string, imgSRC: string, stockQuantity: int, price: double }
    
    **Response** = { message || error }
    
- `PUT` /products - Edita produto
 
    **params** = { id: int }
    
    **headers** = { authorization: token }
    
    **body** = { name: string, imgSRC: string, stockQuantity: int, price: double }
    
    **response** = { message || error }
    
- `DELETE` /products - Deleta produto

    **headers** = { authorization: token }

    **body** = { id: int }
 
    **response** = { message || error }
 
- `GET` /products/HighestPrice - Busca produtos ordenandos pelo maior preço
    
    **response** = { results: [ ]{ name, imgSRC, stockQuantity, price } }
    
- `GET` /products/LowestPrice - Busca produtos ordenandos pelo menor preço
    
    **response** = { results: [ ]{ name, imgSRC, stockQuantity, price } }
