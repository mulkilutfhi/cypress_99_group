Cypress.Commands.add('getMiniNavbar', function ({ page }) {
  cy.get('.ui-molecules-navbar').find(page);
});
Cypress.Commands.add('getNavbar', function ({ el }) {
  cy.get('.ui-organism-navbar-r123__main').find(el);
});

Cypress.Commands.add('getDownloadApk', function ({ elementDownload }) {
  cy.get('.ui-organism-navbar-r123__mini-download')
    .trigger('mouseover')
    .get('.ui-organism-navbar-r123__mini-download-content')
    .find(elementDownload);
});
