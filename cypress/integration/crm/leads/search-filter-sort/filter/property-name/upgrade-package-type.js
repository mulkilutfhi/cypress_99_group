describe('Agency filter', () => {
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

  it('C33811_Select one status', () => {
    cy.getElement('property-type-dropdown').click();
    cy.getElement('property-type-dropdown-upgrade').click();
    cy.getElement('property-type-dropdown').contains('Upgrade').should('be.visible');

    cy.getElement('property-name-dropdown').type('platinum');
    cy.getElement('property-name-dropdown-7').click();
    cy.getElement('property-name-dropdown').contains('platinum').should('be.visible');

    cy.getElement('filter-save').click();

    cy.compareNum();

    cy.getElement('leads-row').each((row) => {
      expect(row).to.contain('platinum');
    });
  });

  it('C33811_Select one status', () => {
    cy.getElement('property-type-dropdown').click();
    cy.getElement('property-type-dropdown-upgrade').click();
    cy.getElement('property-type-dropdown').contains('Upgrade').should('be.visible');

    cy.getElement('property-name-dropdown').type('platinum');
    cy.getElement('property-name-dropdown-7').click();
    cy.getElement('property-name-dropdown').type('diamond');
    cy.getElement('property-name-dropdown-8').click();
    cy.getElement('property-name-dropdown').type('gold');
    cy.getElement('property-name-dropdown-9').click();

    cy.getElement('property-name-dropdown').click();
    cy.getElement('property-name-dropdown').contains('platinum').should('be.visible');
    cy.getElement('property-name-dropdown').contains('diamond').should('be.visible');
    cy.getElement('property-name-dropdown').contains('gold').should('be.visible');

    cy.getElement('filter-save').click();

    cy.wait(1000);
    cy.compareNum();

    cy.getElement('leads-row')
      .should('contain', 'platinum')
      .and('contain', 'diamond')
      .and('contain', 'gold');
  });
});
