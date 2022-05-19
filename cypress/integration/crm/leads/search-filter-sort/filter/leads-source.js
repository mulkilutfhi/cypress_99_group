describe('Leads Source', () => {
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

  it('C67775_Select one item', () => {
    cy.getElement('leads-source-dropdown').click();
    cy.getElement('leads-source-dropdown-menu-1').click();

    cy.getElement('leads-source-dropdown').click();
    cy.getElement('leads-source-dropdown').find('[title="Rumah 123"]').should('be.visible');
    cy.getElement('filter-save').click();

    cy.compareNum();
    cy.getElement('leads-row').each((row) => {
      expect(row).to.contain('Rumah 123');
    });
  });

  it('C67776_Select multiple item', () => {
    cy.getElement('leads-source-dropdown').click();
    cy.getElement('leads-source-dropdown-menu-2').click();
    cy.getElement('leads-source-dropdown-menu-3').click();

    cy.getElement('leads-source-dropdown').click({ position: 'right' });
    cy.getElement('leads-source-dropdown').find('[title="Lamudi"]').should('be.visible');
    cy.getElement('leads-source-dropdown').find('[title="OLX"]').should('be.visible');
    cy.getElement('filter-save').click();

    cy.compareNum();
    cy.getElement('leads-row').should('contain', 'Lamudi').and('contain', 'OLX');
  });
});
