# Furmino🛋️

O Furmino é uma loja de móveis fictícia que possui quatro páginas principais: Home, Shop, About e Contact e páginas secundárias como Cart, Single Product e Checkout. Todas elas foram inspiradas no design do [Figma](https://www.figma.com/design/E1F9AbyIRppkO2Ro1oP2tj/Desafio-3?node-id=1-3&t=zXlVWC9PifCB3azJ-0) seguindo os requisitos do [Notion](https://almond-archduke-650.notion.site/Desafio-3-O-Desespero-Final-654f63d4b2254e2d81ffc1c8c34acaec). A aplicação simula um e-commerce, sendo assim ela conta com várias funcionalidades, como responsividade, adicionar ou remover produtos do seu carrinho, finalizar a compra, filtros funcionais, etc.

## Requisitos ✔️

- [x] Utilize TypeScript para tipagem;
- [x] Utilize [Firebase](https://firebase.google.com/docs/auth?hl=pt-br), para lidar com a autenticação do usuário. A autenticação deve ser possível com: e-mail, Facebook e Google. A documentação linkada está detalhada e fornece todas as informações necessárias para aplicar esta funcionalidade;
- [x] [React Router](https://reactrouter.com/en/main) para criação das rotas, sendo que é necessário proteger as rotas;
- [x] Crie controles deslizantes para exibição dos móveis na sessão da Home, em formato de Carrossel. Recomendação de biblioteca: [Splide](https://splidejs.com/). [Splide for React docs.](https://splidejs.com/integration/react-splide/) **Sinta-se à vontade para usar a biblioteca de sua preferência;**
- [x] Crie um arquivo JSON e cole-o no [Run Mocky](https://designer.mocky.io/) para criar uma API para os produtos;
- [x] A página de produtos gerais deve conter paginação como no Figma, o botão de ‘Filter’ deve abrir um pop-up com filtros funcionais;
- [x] Ao clicar no card de um móvel, é necessário redirecionar o usuário para a rota específica que contém suas informações detalhadas (Product Page);
- [x] Na página de produto, o botão de ‘Add To Cart’ deve adicionar o produto no carrinho e o produto pode ser adicionado ou removido quantas vezes o usuário desejar;
- [x] O carrinho deve ser criado com [**Redux**](https://redux.js.org/);
- [x] Na página de carrinho o usuário pode remover todos os produtos, independente da quantidade, ao clicar no ícone de lixeira;
- [x] Ao clicar no botão de ‘Check Out’, o usuário PRECISA estar logado para fazer o redirecionamento para a página de Check Out, essa rota específica deve estar protegida;
- [x] Os campos de formulário devem ser todos validados;
- [x] Na página de Check Out, os dados de endereço devem vir da [API](https://viacep.com.br/) e preencher todos os campos de endereço automaticamente, exceto o de complemento;
- [x] A aplicação deve estar responsiva;
- [x] Pode fazer o uso de biblioteca externa (estritamente **styled-components ou Tailwind)** para estilização;
- [x] Adicione um README ao seu projeto, com instruções para inicializar e rodar sua aplicação;
- [x] Faça pequenos commits e use Convencionais Commits para manter seu repositório organizado;

## Instalação⚙️

Faça o clone do projeto em sua IDE

```bash
git clone https://github.com/Biazanchin/Furmino.git .
```

Instale todas as dependências

```bash
npm install --force
```

Inicie o json

```bash
npm run serve
```

Enquanto o json estiver rodando, abra outro terminal e rode a aplicação

```bash
npm run dev
```

## Tecnologias💻

- React
- TypeScript
- Tailwind CSS
- Splide
- Firebase
- Redux

## Acesso 🔓

O email cadastrado no firebase para logar é **teste@teste.com** com a senha **123456**

## Apresentação🎬

### Home

[Home](https://github.com/Biazanchin/DESAFIO3/assets/165194563/1de7fb9b-150d-4057-b96c-39065056cc2b)

### Shop

[Shop](https://github.com/Biazanchin/DESAFIO3/assets/165194563/836fdf86-b4d8-4bd0-b631-962156ec022b)

### Contact

[Contact](https://github.com/Biazanchin/DESAFIO3/assets/165194563/21ee73d1-852e-4076-8401-e83ad88efe76)

### About

![about](https://github.com/Biazanchin/DESAFIO3/assets/165194563/31167229-ca5a-48cb-a16e-5a33d10f9caf)

### Cart Sidebar

![cartSidebar](https://github.com/Biazanchin/DESAFIO3/assets/165194563/305ca6cf-8e3a-4825-a638-d543cabb94f9)

### Cart

[Cart](https://github.com/Biazanchin/DESAFIO3/assets/165194563/7e1b08d1-b906-402d-83ce-3ea3147c263e)

### Checkout

[Checkout](https://github.com/Biazanchin/DESAFIO3/assets/165194563/6f781576-6d7a-488d-bf6f-c9008720a76d)

### Single Product

[SingleProduct](https://github.com/Biazanchin/DESAFIO3/assets/165194563/b863a97c-8ca9-423c-a5a8-0365eb058401)

### Login

![login](https://github.com/Biazanchin/DESAFIO3/assets/165194563/a36ea323-80b7-451e-abc2-2ea51ce910b0)

### Redux

![Redux](https://github.com/Biazanchin/DESAFIO3/assets/165194563/52e1daf1-320d-47c4-a01f-47aee154dadf)

### Responsividade

[Responsividade](https://github.com/Biazanchin/DESAFIO3/assets/165194563/567d90ce-b1dd-4dce-ae51-0312ece8aa13)
