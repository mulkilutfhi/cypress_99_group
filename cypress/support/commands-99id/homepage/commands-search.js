Cypress.Commands.add('PropertyType', () => {
    //jual
    cy.get('.search-bar-advanced__button').click();
    cy.url().should('include', '/jual/rumah');
    cy.get('.urbanindo-logo').click();

    //sewa
    cy.get(
        '#search-bar-listing-type > #property-type > .material-icons'
    ).click();
    cy.wait(3000);
    cy.get(
        '#search-bar-listing-type > .dropdown-menu > .search-bar-advanced__dropdown-wrapper > [data-value="1"]'
    ).click({ force: true });
    cy.get('.search-bar-advanced__button').click();
    cy.url().should('include', '/sewa/rumah');
});

Cypress.Commands.add('PriceMinimum', () => {
    cy.get('#search-bar-min-price > #property-type').click();
    cy.wait(3000);
    cy.get(
        '#search-bar-min-price > .dropdown-menu > .search-bar-advanced__dropdown-wrapper > [data-value="100000000"]'
    ).click({ force: true });
});

Cypress.Commands.add('PriceMaksimum', () => {
    cy.get('#search-bar-max-price > #property-type').click();
    cy.wait(3000);
    cy.get(
        '#search-bar-max-price > .dropdown-menu > .search-bar-advanced__dropdown-wrapper > [data-value="500000000"]'
    ).click({ force: true });
});
Cypress.Commands.add('Bedroom', () => {
    cy.get('#search-bar-bedroom > #property-type').click();
    cy.wait(3000);
    cy.get(
        '#search-bar-bedroom > .dropdown-menu > .search-bar-advanced__dropdown-wrapper > [data-value="2"]'
    ).click({ force: true });
});
Cypress.Commands.add('Bathroom', () => {
    cy.get('#search-bar-bathroom > #property-type').click();
    cy.wait(3000);
    cy.get(
        '#search-bar-bathroom > .dropdown-menu > .search-bar-advanced__dropdown-wrapper > [data-value="2"]'
    ).click({ force: true });
});
Cypress.Commands.add('Search_Bycity', () => {
    cy.get('#formmodel-text').type('intan jaya');

    cy.intercept({
        method: 'GET',
        url: '/id/search/ajax-autocomplete?q=intan'
    }).as('waitTarget');

    //cy.intercept('GET','/api/search-suggestion/').as('waitTarget')
    cy.wait('@waitTarget', { timeout: 15000 })
        .its('response.statusCode')
        .should('eq', 200);

    cy.get('.tt-dataset.tt-dataset-suggestion').should('be.visible');
    cy.get('.tt-suggestion.tt-selectable').contains('Intan Jaya').click();
});
Cypress.Commands.add('Search_Bydistrict', () => {
    cy.get('#formmodel-text').type('bandung');
    cy.wait(3000);
    cy.get(
        '.tt-dataset-suggestion > [data-url="/jual/rumah/bandung/antapani"]'
    ).click();
});
