describe('🔐 Módulo: Autenticação e Login', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('Sauce-1: Login com credenciais válidas', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Valida se redirecionou para o catálogo com sucesso
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
  });

  it('Sauce-2: Login com credenciais inválidas', () => {
    cy.get('[data-test="username"]').type('usuario_invalido');
    cy.get('[data-test="password"]').type('senha_errada');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('Sauce-3: Validação de campos obrigatórios', () => {
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Username is required');
  });

  it('Sauce-4: Bloquear tentativa de login', () => {
    cy.get('[data-test="username"]').type('locked_out_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Sorry, this user has been locked out.');
  });

});