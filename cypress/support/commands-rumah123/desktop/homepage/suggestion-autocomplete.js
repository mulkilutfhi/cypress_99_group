Cypress.Commands.add('inputSearchbarHomepage', (keyword) => {
  cy.get('.flex-wrap > li > input').type(keyword, { force: true });
  cy.get('.ui-molecules-dropdown__content').should('be.visible');
});

Cypress.Commands.add('getHeadingSuggestionHomepage', ({ index, value }) => {
  cy.get('.ui-molecules-multiple-selection__item')
    .eq(index)
    .find('.ui-molecules-autocomplete-r123__text > p')
    .then((headingText) => {
      expect(headingText.text().toLowerCase()).to.include(value);
    });
});

Cypress.Commands.add('getTruncateSuggestionHomepage', ({ index, value }) => {
  cy.get('.ui-molecules-multiple-selection__item')
    .eq(index)
    .find('.ui-molecules-autocomplete-r123__text > p')
    .should('contain', value);
});
