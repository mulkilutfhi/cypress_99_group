Cypress.Commands.add('checkElement', ({ element }) => {
  cy.getElement(element).then((el) => {
    for (let i = 0; i < el.length; i++) {
      cy.get(el[i]).should('be.visible');
    }
  });
});
