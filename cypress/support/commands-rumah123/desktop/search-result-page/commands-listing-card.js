Cypress.Commands.add('checkElementPremierCard', function ({ elementCard }) {
  cy.get('.ui-search-page__content >  div').then((contentSRP) => {
    if (contentSRP.find('.ui-organisms-card-r123-featured--premier').length > 0) {
      cy.get('.ui-organisms-card-r123-featured--premier')
        .eq(0)
        .find(elementCard)
        .should('be.visible');
    } else {
      cy.get('.ui-molecule-paginate__item--next > [role="button"]').click({ force: true });
    }
  });
});

Cypress.Commands.add('validatePrice', function ({ elementCard, slice1, slice2 }) {
  cy.get('.ui-search-page__content >  div').then((contentSRP) => {
    if (contentSRP.find('.ui-organisms-card-r123-featured--premier').length > 0) {
      cy.get('.ui-organisms-card-r123-featured--premier')
        .eq(0)
        .find(elementCard)
        .then((priceListing) => {
          const componentText = priceListing.text();
          const value = componentText.slice(slice1, slice2);

          cy.wrap(priceListing).should('include.text', value);
        });
    } else {
      cy.get('.ui-molecule-paginate__item--next > [role="button"]').click({ force: true });
    }
  });
});
