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
    cy.getElement('property-name-dropdown').type('Gold Merdeka');
    cy.getElement('property-name-dropdown-3').click();
    cy.getElement('property-name-dropdown').contains('Gold Merdeka').should('be.visible');

    cy.getElement('filter-save').click();

    cy.compareNum();

    cy.getElement('leads-row').each((row) => {
      expect(row).to.contain('Gold Merdeka');
    });
  });

  it('C33811_Select one status', () => {
    cy.getElement('property-name-dropdown').type('Silver');
    cy.getElement('property-name-dropdown-4').click();
    cy.getElement('property-name-dropdown-5').click();
    cy.getElement('property-name-dropdown').type('Gold Merdeka');
    cy.getElement('property-name-dropdown-3').click();

    cy.getElement('property-name-dropdown').contains('Gold Merdeka').should('be.visible');
    cy.getElement('property-name-dropdown').contains('Silver+ Discovery').should('be.visible');
    cy.getElement('property-name-dropdown').contains('Silver+ Galaxy').should('be.visible');

    cy.getElement('filter-save').click();

    cy.wait(1000);
    cy.compareNum();

    cy.getElement('leads-row')
      .should('contain', 'Gold Merdeka')
      .and('contain', 'Silver+ Discovery')
      .and('contain', 'Silver+ Galaxy');
  });
});
