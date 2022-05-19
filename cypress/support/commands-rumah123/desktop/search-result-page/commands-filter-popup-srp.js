Cypress.Commands.add('selectFilter', function ({ indexTokenFilter, selectDropdown }) {
  cy.get('.ui-organism-search-filter__filter-content')
    .find('[role="button"]')
    .eq(indexTokenFilter)
    .click({ force: true });
  cy.get('.ui-molecules-dropdown__item > p')
    .contains(selectDropdown)
    .then(($dorpdown) => {
      cy.wrap($dorpdown)
        .click()
        .intercept({
          method: 'POST',
          url: '/api/property/find-by-filter-simple'
        })
        .as('pageloaded');
      cy.wait('@pageloaded', { timeout: 15000 }).its('response.statusCode').should('eq', 200);
    });
});
