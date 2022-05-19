Cypress.Commands.add('getTitle', function ({ section }) {
  cy.getElement('pdp-title-gallery-section-all').contains(section);
});
