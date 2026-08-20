# 🔐 LoginJAVA+FRONT

Projeto de autenticação desenvolvido com **React + TypeScript** no frontend e **Java** no backend.

O objetivo do projeto é desenvolver uma aplicação de login com uma interface moderna, validação dos dados do usuário e estrutura preparada para integração entre frontend e backend.

---

## 🚀 Sobre o projeto

O **LoginJAVA+FRONT** foi desenvolvido como um projeto de estudo e prática em desenvolvimento de aplicações web, trabalhando conceitos de **Frontend, TypeScript, React e integração com Backend em Java**.

A aplicação possui uma tela de login com:

* Validação de e-mail;
* Validação de senha;
* Exibição de mensagens de erro;
* Mostrar e ocultar senha;
* Opção para lembrar o e-mail;
* Navegação para cadastro;
* Navegação para recuperação de senha;
* Interface responsiva;
* Separação dos estilos em arquivo CSS próprio.

---

## 🛠️ Tecnologias utilizadas

### Frontend

* React
* TypeScript
* React Router DOM
* CSS
* Vite
* LocalStorage

### Backend

* Java

---

## 📂 Estrutura do projeto

```text
LoginJAVA+FRONT/
│
├── auth-frontend/
│   │
│   ├── src/
│   │   ├── pages/
│   │   │   └── Login/
│   │   │       ├── Login.tsx
│   │   │       └── Login.css
│   │   │
│   │   └── ...
│   │
│   ├── package.json
│   └── ...
│
└── ...
```

A estrutura pode receber novos módulos conforme o desenvolvimento do projeto avançar.

---

## 🔑 Tela de Login

A tela principal do projeto está localizada em:

```text
auth-frontend/src/pages/Login/Login.tsx
```

O componente utiliza `useState` para controlar os dados preenchidos pelo usuário e as mensagens de validação.

Também utiliza o `Link` do `react-router-dom` para realizar a navegação entre as páginas da aplicação.

---

## 📧 Lembrar e-mail

A aplicação possui uma opção para lembrar o e-mail informado pelo usuário.

Quando ativada, o endereço de e-mail é armazenado no navegador utilizando:

```text
localStorage
```

A chave utilizada pela aplicação é:

```text
rememberedEmail
```

Dessa forma, o e-mail pode ser recuperado posteriormente sem precisar ser digitado novamente.

---

## 👁️ Mostrar e ocultar senha

O campo de senha possui uma funcionalidade para alternar entre senha visível e senha oculta.

Essa funcionalidade melhora a experiência do usuário durante o preenchimento do formulário.

---

## 🧭 Navegação

A tela de login possui navegação para outras áreas da aplicação:

```text
/register
```

Utilizada para acessar a área de criação de conta.

```text
/forgot-password
```

Utilizada para acessar a recuperação de senha.

---

## 🎨 Estilização

Os estilos da página de login estão separados do componente React no arquivo:

```text
Login.css
```

Localizado em:

```text
auth-frontend/src/pages/Login/Login.css
```

Essa separação mantém a estrutura do projeto organizada e facilita futuras alterações na interface.

---

## ▶️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

### 2. Acesse o frontend

```bash
cd auth-frontend
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm run dev
```

Após iniciar o servidor de desenvolvimento, o Vite exibirá no terminal o endereço local para acessar a aplicação.

---

## 📦 Build para produção

Para gerar a versão de produção do frontend:

```bash
npm run build
```

Para visualizar a versão de produção localmente:

```bash
npm run preview
```

---

## 🧠 Conceitos praticados

Durante o desenvolvimento deste projeto foram trabalhados conceitos importantes de desenvolvimento frontend, como:

* Componentização com React;
* TypeScript;
* Tipagem de formulários;
* `useState`;
* Eventos de formulário;
* Validação de dados;
* Renderização condicional;
* React Router;
* Navegação entre páginas;
* LocalStorage;
* Organização de componentes;
* Separação de estilos;
* Responsividade;
* Estruturação de projetos React com Vite.

---

## 🔄 Frontend e Backend

O projeto possui uma estrutura dividida entre frontend e backend, permitindo trabalhar a comunicação entre uma aplicação React e uma aplicação desenvolvida em Java.

A integração com o backend será responsável pelo processamento das informações de autenticação e pelas regras relacionadas aos usuários.

---

## 🔒 Segurança

Por se tratar de um projeto de autenticação, algumas práticas importantes devem ser consideradas durante a evolução da aplicação:

* Validar os dados também no backend;
* Nunca confiar somente na validação realizada pelo frontend;
* Não armazenar senhas diretamente no navegador;
* Proteger informações sensíveis;
* Utilizar HTTPS em ambiente de produção;
* Implementar autenticação e autorização no backend.

---

## 📌 Status do projeto

🚧 **Em desenvolvimento**

O projeto está sendo desenvolvido com foco em aprendizado e evolução das habilidades em **React, TypeScript e Java**, podendo receber novas funcionalidades e melhorias ao longo do desenvolvimento.

---

## 👨‍💻 Desenvolvedor

**Gustavo Leão**

Estudante de Engenharia de Software com foco em desenvolvimento web e desenvolvimento de aplicações utilizando tecnologias como **JavaScript, TypeScript, React, HTML, CSS e Java**.

### 🌐 Portfólio

gustavol.vercel.app

### 💻 GitHub

github.com/G-Leao

---

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo e portfólio.
