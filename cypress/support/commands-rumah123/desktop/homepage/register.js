Cypress.Commands.add('gotoRegisterFrom', function () {
  cy.getElement('hp-navbar-account').click().getElement('register-tab').eq(0).click();
});

Cypress.Commands.add('inputFormRegister', ({ firstName, lastName, email, password }) => {
  cy.getElement('register-field-firstname').clear();
  if (firstName !== 'skip') cy.getElement('register-field-firstname').type(firstName);

  cy.getElement('register-field-lastname').clear();
  if (lastName !== 'skip') cy.getElement('register-field-lastname').type(lastName);

  cy.getElement('register-field-email').clear();
  if (email !== 'skip') cy.getElement('register-field-email').type(email);

  cy.getElement('register-field-password').clear();
  if (password !== 'skip') cy.getElement('register-field-password').type(password);
});

Cypress.Commands.add('errorMessage', function ({ object, expectedErrorMessage }) {
  cy.get(object)
    .parents()
    .find('.ui-atomic-edit-text__error-text')
    .should('have.text', expectedErrorMessage);
});
