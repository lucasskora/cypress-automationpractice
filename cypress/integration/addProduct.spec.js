///reference types = "cypress"/>


// Realiza a pesquisa do produto e seleciona a primeira linha pesquisa com downarrow
describe('Validation Product', () => {
    it('Search Product', () => {

        cy.visit('http://automationpractice.com/index.php')

        cy.get('#search_query_top')
          .type('Faded Short Sleeve T-shirts')
          .type('{downarrow}{enter}')

        }) 
// Método para adicionar produto no carrinho e valida as informações do produto adiciona        
    it('Add product to cart', () => {
        cy.visit('http://automationpractice.com/index.php?controller=search&orderby=position&orderway=desc&search_query=Faded+Short+Sleeve+T-shirts&submit_search=')
      
      // Valida o endpoint chamado ao adicionar o produto no carrinho
        cy.intercept('GET', '/index.php?controller=search&q=faded+short+sleeve+t-shirts&limit=10&timestamp=1619665225314&ajaxSearch=1&id_lang=1', {
          statusCode: 200,
          failOnStatusCode: false,
          isComplete: false
        }).as('product').then((interception) => {
        assert.isNotNull('product')
        })   

        // Clica no botão para adicionar produto no carrinho, pegando o elemento pelo inspect
        cy.get('.ajax_add_to_cart_button')
          .first()
          .click({force: true})
        
        // Valida o endpoint chamado ao adicionar o item no carrinho
        cy.intercept('POST', '/index.php?rand=1619667996406', {
            statusCode: 200,
            failOnStatusCode: false,
            isComplete: false
          }).as('Product_Cart').then((interception) => {
            assert.isNotNull('Product_Cart')
          })   


        cy.get('.layer_cart_product > h2')
          .should('contain', 'Product successfully added to your shopping cart')

        cy.get('#layer_cart_product_attributes')
          .should('contain', 'Orange, S')

        cy.get('.layer_cart_product_info > :nth-child(3) > .dark')
          .should('contain', 'Quantity')

        cy.get('#layer_cart_product_quantity')
          .should('contain', '1')

        cy.get('.layer_cart_product_info > :nth-child(4) > .dark')
          .should('contain', 'Total')

        cy.get('#layer_cart_product_price')
          .should('contain', '$16.51')

        cy.get(':nth-child(2) > .dark')
          .should('contain', 'Total products')

        cy.get('.ajax_block_products_total')
          .should('contain', '$16.51')

        cy.get('.layer_cart_cart > :nth-child(3) > .dark')
        .should('contain', 'Total shipping')

        cy.get(':nth-child(3) > .ajax_cart_shipping_cost')
          .should('contain', '$2.00')
          
        cy.get('.layer_cart_cart > :nth-child(4) > .dark')
        .should('contain', 'Total')

        cy.get(':nth-child(4) > .ajax_block_cart_total')
          .should('contain', '$18.51')


        cy.get('.cross').click()

        cy.get('.cart_block').should('be.hidden').invoke('show')
        cy.get('#button_order_cart').click()

        cy.url().should('eq', 'http://automationpractice.com/index.php?controller=order')

        cy.get('.navigation_page').should('contain', 'Your shopping cart')

        cy.scrollTo('center')
        cy.get('.label')
          .should('contain', 'In stock')
        cy.get('.cart_navigation > .button > span').click()

        cy.url().should('eq', 'http://automationpractice.com/index.php?controller=authentication&multi-shipping=0&display_guest_checkout=0&back=http%3A%2F%2Fautomationpractice.com%2Findex.php%3Fcontroller%3Dorder%26step%3D1%26multi-shipping%3D0')
    
    })
    })
