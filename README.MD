# App Smarkio

Desenvolver uma aplicação web em Node.js com banco de dados MySQL . A aplicação
consistirá somente de uma página com dois painéis: no painel posicionado a esquerda, o
usuário poderá cadastrar novos comentários. No painel da direita todos os comentários
cadastrados devem ser listados, com um botão ao lado de cada um que ao ser clicado
executará um áudio de leitura do comentário.

Para realizar a conversão do comentário de texto para áudio, o candidato deverá utilizar a
API Text to Speech do IBM Watson .

As operações de cadastro e atualização da lista de comentários devem ser realizadas via
AJAX.

### Tecnologias utilizadas no banco de dados

* Banco de dados relacional: mysql

### Tecnologias utilizadas no backend:

* Liguagem: NodeJS, Typescript/Javascript
* Framework: ExpressJS
* ORM: Typeorm
* API externa: IBM Watson
* Outras Libs: mysql, cors, reflect-metadata, mysql

### Tecnologias utilizadas no frontend:

* Linguagem: Typescript/Javascript, HTML, CSS
* Framework/Lib: ReactJS
* Outras Libs: axios

## :clipboard: Instruções

### BACKEND

- Criar um banco no mysql workbench, exemplo: smarkio_app

- Entrar no repositório backend do projeto com o terminal e executar o seguinte comando para instalar as dependências:
```bash
yarn
```

- Após todas as dependências instaladas criar na raiz da pasta backend um arquivo `.env`
e preencher as informações conforme se encontra no arquivo `.env_example`. 

- Rodar a migration, executando no terminal:
```bash
yarn typeorm migration:run
```

- Finalizado! Basta agora executar a aplicação backend com o seguinte comando:
```bash
yarn dev
```

- A Api estará rodando na porta conforme definido no arquivo .env em API_PORT, por padrão utilize
a porta 3333. `http://localhost:3333`

### FRONTEND

- Ir com o terminal na pasta frontend-react e executar o seguinte comando ppara instalar as dependências:
```bash
yarn
```

- Finalizado! Basta agora executar a aplicação frontend com o seguinte comando:
```bash
yarn start
```

- O frontend estará rodando em `http://localhost:3000`

- Atenção caso tenha setado outra porta no .env do backend será necessário trocar o caminho no diretório do
frontend, em fronted-react/src/service/api.ts. Por padrão a api está rodando em `http://localhost:3333`.

