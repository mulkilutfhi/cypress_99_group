Cypress.Commands.add('clickAccountButton', () => {
  cy.get('.ui-organism-navbar-r123__login').click();
  cy.get('h4').should((wording) => {
    expect(wording).to.be.visible;
  });
});

Cypress.Commands.add('inputEmailPassword', ({ email, password }) => {
  cy.getElement('login-username').type(email);
  cy.getElement('login-password').type(password);
});

Cypress.Commands.add('clickButtonSubmit', () => {
  cy.getElement('login-button-loginsekarang').wait(2000).click();
});
