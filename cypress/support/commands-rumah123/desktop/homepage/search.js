Cypress.Commands.add('selectListingType', function (type) {
  cy.get('.r123-o-search-area__search-box--channel > a').contains(type).click();
  cy.url().then((isUrl) => {
    if (type !== 'Dijual') {
      cy.wrap(isUrl).should('include', 'sewa');
    } else {
      cy.wrap(isUrl).should('eq', 'https://www.rumah123.com/');
    }
  });
});
Cypress.Commands.add('inputLocationHomepage', function (location) {
  cy.get('.search-auto-suggestion').find('input').type(location, { force: true });
  cy.get('.ui-molecules-dropdown__wrapper').should('be.visible');
  cy.get('.ui-molecules-multiple-selection__item').eq(0).click();
});

Cypress.Commands.add('filterHomepage', function ({ typeFilter, value }) {
  cy.get(typeFilter).click();
  cy.get('.ui-molecules-dropdown__item > p').contains(value).click();
});

// export function ensureUserLogin() {
//   cy.request({ url: '/v1/auth/logout', failOnStatusCode: false });
//   cy.viewport('macbook-15').visit('/login');
//   cy.get('#email').type('albirro@99.co');
//   cy.get('#password').type('belladona');
//   cy.get('.ant-btn-primary').click();
//   // cy.fixture('rumah123/json-file/registration-consumer').then((register)=>
//   // {
//   //  dataValid = register.validData;
//   // });
//}
