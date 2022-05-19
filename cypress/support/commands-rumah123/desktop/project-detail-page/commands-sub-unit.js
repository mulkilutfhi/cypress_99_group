Cypress.Commands.add('getTitleUnit', () => {
  cy.get('.ui-molecules-toggle__content > h2').should('be.visible');
});

Cypress.Commands.add('getCardUnit', () => {
  cy.get('.ui-organism-project-unit-r123__card').should('be.visible');
});

Cypress.Commands.add('getUnitDetail', () => {
  cy.get('.ui-organism-project-unit-r123__card__title').click({ force: true });
});

Cypress.Commands.add('getPopupUnitDetail', () => {
  cy.get('.ui-atomic-dialog__content').first().should('be.visible');
});
