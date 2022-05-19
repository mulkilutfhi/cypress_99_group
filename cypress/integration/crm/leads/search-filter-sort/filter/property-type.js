describe('Package Type', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.viewport('macbook-15').visit('/');
    cy.getElement('login-logo').should('be.visible');
    cy.getElement('login-form').should('be.visible');
    cy.loginCRM('backdoor@99.co', 'belladona');
    cy.leadsWait();

    cy.getNewListing();

    cy.getElement('filter-button').find('button').click();
  });

  it('C63639_Select one item (Bundle)', () => {
    cy.getElement('property-type-dropdown').click();
    cy.getElement('property-type-dropdown-bundle').click();
    cy.getElement('dropdown-select').contains('Bundle').should('be.visible');
    cy.getElement('filter-save').click();

    cy.compareNum();

    cy.getElement('tr').last().children('td:eq(1)').find('u').click({ force: true });
    cy.contains('Bundle').should('exist');
  });

  it('C63639_Select one item (Platinum Add ons)', () => {
    cy.getElement('property-type-dropdown').click();
    cy.getElement('property-type-dropdown-platinum').click();
    cy.getElement('dropdown-select').contains('Platinum Add ons').should('be.visible');
    cy.getElement('filter-save').click();

    cy.compareNum();

    cy.getElement('tr').last().children('td:eq(1)').find('u').click({ force: true });
    cy.contains('Platinum Add-Ons').should('exist');
  });

  it('C63639_Select one item (A la Carte)', () => {
    cy.getElement('property-type-dropdown').click();
    cy.getElement('property-type-dropdown-alacarte').click();
    cy.getElement('dropdown-select').contains('Ala Carte').should('be.visible');
    cy.getElement('filter-save').click();

    cy.compareNum();

    cy.getElement('tr').last().children('td:eq(1)').find('u').click({ force: true });
    cy.contains('Ala Carte').should('exist');
  });

  it('C63639_Select multiple item (Upgrade)', () => {
    cy.getElement('property-type-dropdown').click();
    cy.getElement('property-type-dropdown-upgrade').click();
    cy.getElement('dropdown-select').contains('Upgrade').should('be.visible');
    cy.getElement('filter-save').click();

    cy.compareNum();

    cy.getElement('tr').last().children('td:eq(1)').find('u').click({ force: true });
    cy.contains('Upgrade').should('exist');
  });
});
