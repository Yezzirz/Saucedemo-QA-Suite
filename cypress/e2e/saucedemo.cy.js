describe('Fluxo de Compras - Saucedemo', () => {

  // Executa o login antes de CADA teste individual
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')
  })

  it('Deve adicionar produtos ao carrinho e atualizar o contador de itens', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()

    // Valida se o badge do carrinho indica 6 itens
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '6')
  })

  it('Deve navegar para o carrinho e retornar para a lista de produtos', () => {
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.url().should('include', '/cart.html')

    cy.get('[data-test="continue-shopping"]').click()
    cy.url().should('include', '/inventory.html')
  })

  it('Deve realizar o checkout com sucesso', () => {
    // Adiciona ao menos um item para liberar o fluxo de checkout
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    
    // Ir ao carrinho e iniciar checkout
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()

    // Preenchimento de dados do formulário
    cy.get('[data-test="firstName"]').type('Otavio')
    cy.get('[data-test="lastName"]').type('Alves')
    cy.get('[data-test="postalCode"]').type('123456789')
    cy.get('[data-test="continue"]').click()

    // Finalização da compra
    cy.get('[data-test="finish"]').click()

    // Validação de mensagem de sucesso
    cy.get('[data-test="complete-header"]')
      .should('be.visible')
      .and('have.text', 'Thank you for your order!')
  })

})