describe('Latest stage', () => {
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

  it('C67763_Select one item', () => {
    cy.getElement('latest-stage-dropdown').click();
    cy.getElement('latest-stage-dropdown-menu-1').click();

    cy.getElement('latest-stage-dropdown').click();
    cy.getElement('latest-stage-dropdown').find('[title="Payment"]').should('be.visible');
    cy.getElement('filter-save').click();

    cy.compareNum();
    cy.getElement('leads-row').each((row) => {
      expect(row).to.contain('Payment');
    });
  });

  it('C67764_Select multiple item', () => {
    cy.getElement('latest-stage-dropdown').click();
    cy.getElement('latest-stage-dropdown-menu-1').click();
    cy.getElement('latest-stage-dropdown-menu-2').click();
    cy.getElement('latest-stage-dropdown-menu-3').click();

    cy.getElement('latest-stage-dropdown').click();
    cy.getElement('latest-stage-dropdown').find('[title="Payment"]').should('be.visible');
    cy.getElement('latest-stage-dropdown').find('[title="Follow Up"]').should('be.visible');
    cy.getElement('latest-stage-dropdown').find('[title="Invoicing"]').should('be.visible');
    cy.getElement('filter-save').click();

    cy.compareNum();
    cy.getElement('leads-row')
      .should('contain', 'Payment')
      .and('contain', 'Follow Up')
      .and('contain', 'Invoicing');
  });
});
