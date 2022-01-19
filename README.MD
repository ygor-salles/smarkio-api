# smarkio-api

<h4 align="center">
    :computer: Api para registro de comentários e escuta de comentários
</h4>

<p align="center">
    <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#user-content-clipboard-instruções">Instruções</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#%EF%B8%8F-comandos-básicos-para-as-migrations">Migrations</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-gerar-o-build">Build</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-ajustes-e-melhorias">Melhorias</a>
</p>

<div align="center">
    <img alt="Modelagem" src="./assets/modelagem.PNG" >
</div>
 
----
 ## 💻 Projeto

API em ExpressJS. Desenvolver uma aplicação web em Node.js com banco de dados MySQL . A aplicação
consistirá somente de uma página com dois painéis: no painel posicionado a esquerda, o
usuário poderá cadastrar novos comentários. No painel da direita todos os comentários
cadastrados devem ser listados, com um botão ao lado de cada um que ao ser clicado
executará um áudio de leitura do comentário.

Para realizar a conversão do comentário de texto para áudio, o candidato deverá utilizar a
API Text to Speech do IBM Watson .

As operações de cadastro e atualização da lista de comentários devem ser realizadas via
AJAX.

- A resolução completa desse projeto se encontra em um pdf dentro da pasta `./assets`

---

## :rocket: Tecnologias

- [Typescript](https://www.typescriptlang.org/)
- [ExpressJS](https://expressjs.com/pt-br/)
- [Typeorm](https://typeorm.io/)
- [Docker](https://www.docker.com/)
- [MySQL](https://www.mysql.com/)
- [IBM-Watson](https://www.ibm.com/cloud/watson-text-to-speech)

---

## :clipboard: Instruções

### VARIÁVEIS DE AMBIENTE

- Criar na raiz da pasta do projeto um arquivo `.env` e preencher as informações conforme se encontra no arquivo `.env_example`.

### DOCKER

- Após preenchida as variáveis de ambiente, subir o container do docker pelo terminal com o comando:

```bash
docker-compose up
```

### DEPENDÊNCIAS

- No terminal executar o comando para instalar as dependências:

```bash
yarn
```

### MIGRATIONS

- No terminal executar as migrations para criar as tabelas do banco de dados, com o comando:

```bash
yarn typeorm migration:run
```

### START

- Finalizado! Basta agora executar a aplicação backend com o seguinte comando:

```bash
yarn dev
```

- A Api estará rodando na porta conforme definido no arquivo .env em PORT, por padrão utilize
  a porta 4000. `http://localhost:4000`

---

## ⚙️ Comandos básicos para as migrations

- Criar uma migration

```bash
yarn typeorm migration:create -n CreateExample
```

- Rodar as migrations

```bash
yarn typeorm migration:run
```

- Desfazer alterações da migration

```bash
yarn typeorm migration:revert
```

---

## 📬 Gerar o build

```bash
yarn build
```

---

## 📌 Ajustes e melhorias

Até o momento não há nenhuma nova feature para a api
