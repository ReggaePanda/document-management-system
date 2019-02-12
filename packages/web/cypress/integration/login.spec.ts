/// <reference types="cypress"/>

Cypress.Cookies.debug(true);

describe('login', () => {
  it('click login button', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid=login-button]').click();

    cy.get('[data-testid=register-form]').within(() => {
      cy.get('[name=email]').type('cypress@test.de');
      cy.get('[name=password]').type('my-test-password');
    });
    cy.get('[data-testid=register-form]').submit();
    cy.wait(3000);
    cy.getCookies().debug();
    cy.get('[data-testid=logout-button]');
  });

  it('click logout button', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid=login-button]').click();

    cy.get('[data-testid=register-form]').within(() => {
      cy.get('[name=email]').type('cypress2@test.de');
      cy.get('[name=password]').type('my-test-password');
    });
    cy.get('[data-testid=register-form]').submit();
    cy.get('[data-testid=logout-button]').click();
    cy.get('[data-testid=login-button]');
  });
});
