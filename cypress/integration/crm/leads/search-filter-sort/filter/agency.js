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
    cy.getElement('agency-dropdown').click();
    cy.getElement('agency-dropdown-menu-1').click();
    cy.getElement('agency-selected').contains('Alfamega Property').should('be.visible');
    cy.getElement('filter-save').click();

    cy.compareNum();
  });

  it('C37476_Select multiple status', () => {
    cy.getElement('agency-dropdown').click();
    cy.getElement('agency-dropdown-menu-1').click();
    cy.getElement('agency-dropdown-menu-2').click();
    cy.getElement('agency-dropdown-menu-3').click();
    cy.getElement('agency-selected').then((results) => {
      expect(results).to.have.lengthOf(3);
      expect(results).to.be.visible;
    });
    cy.getElement('filter-save').click();

    cy.compareNum();
  });
});
