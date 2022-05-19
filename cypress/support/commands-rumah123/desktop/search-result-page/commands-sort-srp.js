Cypress.Commands.add('openDropdown', () => {
  cy.get('.ui-organism-search-filter-r123__sorting-section')
    .find('[role="button"]')
    .click({ force: true });
  cy.get('.ui-molecules-dropdown__wrapper > div').should('be.visible');
});

Cypress.Commands.add('selectSortType', ({ text, pathURL }) => {
  cy.get('.ui-molecules-dropdown__item > p')
    .contains(text)
    .click()
    .url()
    .should('include', pathURL);
});
