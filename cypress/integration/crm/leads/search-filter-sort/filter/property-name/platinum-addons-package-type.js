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
    cy.getElement('property-type-dropdown-platinum').click();
    cy.getElement('property-type-dropdown').contains('Platinum Add ons').should('be.visible');

    cy.getElement('property-name-dropdown').click();
    cy.getElement('property-name-dropdown-6').click();
    cy.getElement('property-name-dropdown').contains('platinum Add-On').should('be.visible');

    cy.getElement('filter-save').click();

    cy.compareNum();

    cy.getElement('leads-row').each((row) => {
      expect(row).to.contain('platinum Add-On');
    });
  });
});
