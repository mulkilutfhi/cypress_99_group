Cypress.Commands.add('getTitleGallerySectionLDP', function ({ section }) {
  cy.getElement('ldp-gallery-section-all-title').contains(section);
});

Cypress.Commands.add('shareProperty', function ({ platform, param1, param2 }) {
  cy.getElement(platform)
    .should('be.visible')
    .and('have.attr', 'target', '_blank')
    .and('have.attr', 'href')
    .and('include', param1);
});
