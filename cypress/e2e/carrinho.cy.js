describe('🛍️ Módulo: Catálogo de Produtos e Carrinho', () => {

  beforeEach(() => {
    // Efetua login antes de cada teste
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
  });

  it('Sauce-5: Visualização da lista de produtos e detalhes do item', () => {
    cy.get('.inventory_item').should('have.length.at.least', 1);

    // Clica no produto Sauce Labs Backpack
    cy.contains('.inventory_item_name', 'Sauce Labs Backpack').click();

    cy.url().should('include', '/inventory-item.html');
    cy.get('.inventory_details_name').should('have.text', 'Sauce Labs Backpack');
    cy.get('[data-test="add-to-cart"]').should('be.visible');
  });

  it('Sauce-6: Ordenação por nome e preço', () => {
    // Z to A
    cy.get('[data-test="product-sort-container"]').select('za');
    cy.get('.inventory_item_name').first().should('have.text', 'Test.allTheThings() T-Shirt (Red)');

    // Price Low to High
    cy.get('[data-test="product-sort-container"]').select('lohi');
    cy.get('.inventory_item_price').first().should('have.text', '$7.99');

    // Price High to Low
    cy.get('[data-test="product-sort-container"]').select('hilo');
    cy.get('.inventory_item_price').first().should('have.text', '$49.99');
  });

  it('Sauce-7: Adição e remoção de produtos direto da vitrine', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible');
    cy.get('.shopping_cart_badge').should('have.text', '1');

    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible');
    cy.get('.shopping_cart_badge').should('not.exist');
  });

  it('Sauce-8: Persistência dos itens selecionados no carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    
    // Navega pelo carrinho, volta ao catálogo e acessa um detalhe
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="continue-shopping"]').click();
    cy.contains('.inventory_item_name', 'Sauce Labs Bike Light').click();
    
    // Volta ao carrinho e verifica se o item continua salvo
    cy.get('.shopping_cart_link').click();
    cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack');
  });

});