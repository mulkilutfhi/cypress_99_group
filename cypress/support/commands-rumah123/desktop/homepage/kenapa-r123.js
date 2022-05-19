Cypress.Commands.add('scrollandCheck', ({ element, n, sectionTitle }) => {
  cy.getElement(element).eq(n).scrollIntoView();
  cy.getElement(element).eq(n).should('have.text', sectionTitle);
});