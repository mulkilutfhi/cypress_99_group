Cypress.Commands.add('containerGalleryProperty', function ({ element }) {
  cy.get('.ui-home-page__popular-listing-wrapper').scrollIntoView().find(element);
});
