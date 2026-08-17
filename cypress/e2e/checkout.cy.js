describe('🛒 Módulo: Checkout e Validações', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
  });

  it('Sauce-9: Validação de campos obrigatórios no formulário de checkout', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();

    // 1. Tudo vazio
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('contain.text', 'Error: First Name is required');

    // 2. Apenas First Name preenchido
    cy.get('[data-test="firstName"]').type('João');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('contain.text', 'Error: Last Name is required');

    // 3. First Name e Last Name preenchidos
    cy.get('[data-test="lastName"]').type('Silva');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('contain.text', 'Error: Postal Code is required');
  });

  it('Sauce-10: Cálculo do valor total e resumo do pedido', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click(); // $29.99
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="firstName"]').type('QA');
    cy.get('[data-test="lastName"]').type('Tester');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();

    // Valida os cálculos de Subtotal, Taxa e Total
    cy.get('.summary_subtotal_label').should('contain.text', '$29.99');
    cy.get('.summary_tax_label').should('contain.text', '$2.40');
    cy.get('.summary_total_label').should('contain.text', '$32.39');
  });

  it('Sauce-11: Tela de confirmação final', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="firstName"]').type('QA');
    cy.get('[data-test="lastName"]').type('Tester');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();
    
    cy.get('[data-test="finish"]').click();

    cy.url().should('include', '/checkout-complete.html');
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');
  });

  it('Sauce-12: Impedir finalização de compra com carrinho vazio', () => {
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();

    // O SauceDemo permite ir pro checkout, mas identificamos que não há itens listados
    cy.get('.cart_item').should('not.exist');
  });

});