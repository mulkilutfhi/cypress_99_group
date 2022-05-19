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
    cy.getElement('property-type-dropdown-alacarte').click();
    cy.getElement('property-type-dropdown').contains('Ala Carte').should('be.visible');

    cy.getElement('property-name-dropdown').type('Premium Listing 21-50');
    cy.getElement('property-name-dropdown-1').click();
    cy.getElement('property-name-dropdown').contains('Premium Listing 21-50').should('be.visible');

    cy.getElement('filter-save').click();

    cy.compareNum();

    cy.getElement('leads-row').each((row) => {
      expect(row).to.contain('Premium Listing 21-50');
    });
  });

  it('C33811_Select one status', () => {
    cy.getElement('property-type-dropdown').click();
    cy.getElement('property-type-dropdown-alacarte').click();
    cy.getElement('property-type-dropdown').contains('Ala Carte').should('be.visible');

    cy.getElement('property-name-dropdown').type('Premium Listing 21-50');
    cy.getElement('property-name-dropdown-1').click();
    cy.getElement('property-name-dropdown').type('MRB 001, MRB 002');
    cy.getElement('property-name-dropdown-2').click();

    cy.getElement('property-name-dropdown').contains('Premium Listing 21-50').should('be.visible');
    cy.getElement('property-name-dropdown').contains('MRB 001, MRB 002').should('be.visible');

    cy.getElement('filter-save').click();

    cy.wait(1000);
    cy.compareNum();

    cy.getElement('leads-row')
      .should('contain', 'Premium Listing 21-50')
      .and('contain', 'MRB 001, MRB 002');
  });
});
