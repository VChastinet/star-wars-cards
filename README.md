# GameCard

## Projeto referente ao o cargo de desenvolvedor Front-end da Vox tecnologia

## Rodando a aplicação:

    Para rodar aplicação, basta clonar o repositório e em seguinda, usando o terminal, digite "ng serve -o", ele irá iniciar o servidor e abrir o projeto no navegador padrão.

Para gerar uma build basta digitar no console: `ng build` para a build de desenvolvimento ou `build --pro --aot=false` para a build final de produção.


## Funcionamento da aplicação:
  * A tela iniciação mostra cards com informações básicar de cada filme de Star-wars e um menu para navegar entre as várias categorias proporcionadas pela API _"swapi"_, caso uma categoria possua muitas informações é possivel nagevar entre as páginas atravez das setas.
  
  * Ao clicar em um dos cartões, a aplicação o levará para a página específica do cartão clicado, onde mostrará todas as informações disponíveis do item escolhido, a partir daí todos os items são links para sua própria página com suas próprias informações.

  * Para retornar masta clicar na logo da barra de navegação ou em algum dos itens do menu.

## Ferramentas:
Para a realização deste projeto foram utilizadas as seguintes ferramentas:
> * Angular 5.  
> * Angular CLI.  
> * Materialize CSS.  
> * Angular2 materialize.  
> * Gulp.

Com o Gulp é possivel realizar o lint do CSS, com o comando `npm run gulp csslint` e após gerar uma build é possível otimizar as imagens e melhorar a compatibilidade do css com browsers mais antigos, bastando usar o comando `npm run gulp`.

## Exemplo do projeto:
Para ver um exemplo do projeto em produção, disponibilizei no github pages, bastando [acessar este link](https://vchastinet.github.io/SWcard-compendium/);

![mobile](/exemples/main.PNG)
![mobile](/exemples/mobile1.PNG)
![mobile](/exemples/mobile2.PNG)
![mobile](/exemples/cards.PNG)
![mobile](/exemples/pages.PNG)
