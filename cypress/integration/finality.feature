Feature: Pesquisar e adicionar produto no carrinho

  Como usuário, desejo pesquisar um produto
  Para que possa adicioná-lo no carrinho


Scenario: Adicionar Produto no Carrinho

Given pesquisar produto Faded Short Sleeve T-shirts e adicionar no carrinho
When clicar no botão Add to Cart
Then validar se o produto adicionado corretamente