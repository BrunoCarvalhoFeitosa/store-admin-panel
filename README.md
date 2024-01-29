<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/BrunoCarvalhoFeitosa/store-admin-panel">
    <img src="\public\favicon\favicon.png" alt="Logo" width="100" weight="100" />
  </a>

  <p align="center">
    Painel adimistrador feito em Next.js, Prisma e MongoDB que possibilita realizar cadastro de banners, categorias, cores, tamanhos e produtos. Além disso, possui um dashboard interligado com a plataforma de pagamentos Stripe que dimamicamente exibe o número de vendas e o total arrecadado em tempo real do e-commerce que desenvolvi. Através dos endpoints fornecidos por este projeto, será possível através de buscas, resgatar os dados aqui cadastrados e exibi-los, um exemplo foi a criação desta loja que desenvolvi também em Next.js e diversas outras tecnologias e bibliotecas, confira: (https://bruno-carvalho-feitosa-nike-store.vercel.app) .
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#feito-com">Feito com</a></li>
        <li><a href="#hospedagem">Hospedagem</a></li>
      </ul>
    </li>
    <li>
      <a href="#iniciando-o-projeto">Iniciando o projeto</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#license">Licenças</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Sobre o projeto
Para iniciar a criação de uma loja com este projeto, será primeiramente necessário efetuar login, através da biblioteca Clerk é possível realizar login utilizando uma conta já existente do Google ou alguma outra que você tem acesso a caixa de entrada, pois a plataforma envia códigos para validação de sua conta. Prontamente você será redirecionado à aplicação, nos menus existirão opções pertinentes a função da aplicação que seria a exibição do dashboard, o cadastro de banners, categorias, tamanhos, cores, o produto em si, que possui a disponibilidade de upload de múltiplas imagens, opção de histórico dos pedidos, lá você poderá identificar o comprador (informações de entrega), o status do pagamento, se foi pago ou ainda não e os produtos que foram comprados.

### Projeto

https://github.com/BrunoCarvalhoFeitosa/store-admin-panel/assets/46093815/84e451fa-11e6-42b6-a8be-a0907343ce34

### Feito com

* [Next.js](https://nextjs.org)
* [Typescript](https://www.typescriptlang.org)
* [Prisma](https://www.prisma.io)
* [MongoDB](https://www.mongodb.com)
* [Stripe](https://stripe.com/br)
* [Cloudinary](https://cloudinary.com)
* [TailwindCSS](https://tailwindcss.com)
* [Vercel](https://vercel.com)

### Hospedagem

A aplicação está em produção neste link: (https://bruno-carvalho-feitosa-store-admin-panel.vercel.app).

<!-- GETTING STARTED -->
## Iniciando o projeto

Primeiramente será necessário clonar este projeto em (https://github.com/BrunoCarvalhoFeitosa/store-admin-panel.git), após o download será necessário abrir este projeto no seu editor e no terminal digitar npm install ou yarn, posteriormente é só rodar em seu terminal o comando npm run dev ou yarn dev, após isso, a página será aberta em seu navegador. Também será necessário definir em um arquivo .env as variáveis de ambiente necessárias para o funcionamento da aplicação, que seria a definição de chaves secretas para o Cloudinary, Stripe e Clerk.

### Pré-requisitos

* npm
  ```sh
  npm install npm@latest -g
  ```

### Instalação

1. Clone o repositório
   ```sh
   git clone https://github.com/BrunoCarvalhoFeitosa/store-admin-panel.git
   ```
2. Instale os pacotes do NPM
   ```sh
   npm install ou yarn
   ```
   
3. Inicie o projeto
   ```sh
   npm run dev ou yarn dev
   ```   

<!-- LICENSE -->
## License

Distribuído sob a licença MIT.

<!-- CONTACT -->
## Contato

Bruno Carvalho Feitosa - [GitHub](https://github.com/BrunoCarvalhoFeitosa) - [LinkedIn](https://www.linkedin.com/in/bruno-carvalho-feitosa/)
