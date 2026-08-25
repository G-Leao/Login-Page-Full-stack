# Login Page Full Stack

Projeto Full Stack de uma página de login, desenvolvido com React e TypeScript no frontend e Java no backend.

O projeto está sendo desenvolvido como parte dos meus estudos em Engenharia de Software, com o objetivo de praticar a integração entre frontend e backend e trabalhar conceitos comuns do desenvolvimento de aplicações web.

## Sobre o projeto

A aplicação começou como uma página de login no frontend e está evoluindo para uma aplicação Full Stack, com a intenção de conectar a interface com uma API desenvolvida em Java.

Atualmente, o frontend conta com:

* Tela de login
* Validação dos campos
* Mostrar e ocultar senha
* Opção de lembrar o e-mail
* Página de cadastro
* Página de recuperação de senha
* Navegação entre páginas
* Layout responsivo

O backend está sendo desenvolvido em Java e será responsável pela autenticação, regras de negócio e comunicação com o banco de dados.

## Tecnologias utilizadas

### Frontend

* React
* TypeScript
* Vite
* React Router
* CSS
* LocalStorage

### Backend

* Java

## Estrutura do projeto

```text
Login-Page-Full-stack/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── src/
│   └── ...
│
├── .gitignore
└── README.md
```

A ideia é manter o frontend e o backend no mesmo repositório, facilitando o desenvolvimento e o versionamento das duas partes da aplicação.

## Como executar

### Frontend

Primeiro, entre na pasta do frontend:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Depois execute:

```bash
npm run dev
```

O Vite irá disponibilizar a aplicação em um endereço local mostrado no terminal.

### Backend

Entre na pasta do backend:

```bash
cd backend
```

O backend deve ser executado utilizando a configuração do projeto Java.

A estrutura de execução pode ser ajustada conforme o desenvolvimento da API avançar.

## Funcionalidades

### Login

A tela de login possui validação dos dados preenchidos pelo usuário e mensagens para indicar possíveis erros.

### Lembrar e-mail

A opção de lembrar o e-mail utiliza o `localStorage` do navegador para manter o endereço informado pelo usuário.

### Navegação

A aplicação possui páginas separadas para login, cadastro e recuperação de senha, utilizando React Router para controlar a navegação.

## Integração

A estrutura do projeto foi pensada para que o frontend React se comunique com o backend Java através de uma API.

A ideia é seguir uma estrutura semelhante a:

```text
Frontend
   |
   | HTTP
   v
Backend Java
   |
   v
Banco de dados
```

Com isso, o frontend fica responsável pela interface e interação com o usuário, enquanto o backend fica responsável pela autenticação, regras de negócio e acesso aos dados.

## Próximos passos

* Finalizar a API do backend
* Integrar o login com o backend
* Implementar cadastro de usuários
* Implementar autenticação
* Adicionar banco de dados
* Implementar recuperação de senha
* Implementar proteção de rotas
* Melhorar tratamento de erros
* Criar testes
* Fazer o deploy da aplicação

## Objetivo

O objetivo principal deste projeto é colocar em prática conhecimentos de desenvolvimento frontend e backend, principalmente React, TypeScript e Java.

Também estou utilizando o projeto para entender melhor como funciona a comunicação entre uma aplicação frontend e uma API backend em uma aplicação Full Stack.

## Autor

Gustavo Leão

Estudante de Engenharia de Software e desenvolvedor em formação.

GitHub: https://github.com/G-Leao

Portfólio: https://gustavol.vercel.app
