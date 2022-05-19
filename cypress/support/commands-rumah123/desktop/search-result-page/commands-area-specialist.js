Cypress.Commands.add('containerAreaSpecialist', function ({ isElement }) {
  cy.getElement('srp-area-specialist').scrollIntoView().find(isElement);
});
