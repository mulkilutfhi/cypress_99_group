Cypress.Commands.add('getSaveBtn_LDP', () => {
  cy.get('.ui-organisms-top-action-buttons__save');
});

Cypress.Commands.add('getSharedBtn_LDP', () => {
  cy.get('.ui-organisms-top-action-buttons__share');
});

Cypress.Commands.add('getSharedDropdownItem_LDP', () => {
  cy.get('.ui-molecules-share-dialog');
});

Cypress.Commands.add('getView_LDP', () => {
  cy.get('.r123-listing-summary-v2__views');
});
