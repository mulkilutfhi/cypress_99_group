describe('Leades Owner', () => {
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

  it('C63624_Select one item', () => {
    cy.getElement('leads-owner-dropdown').click();
    cy.getElement('leads-owner-dropdown-menu-1').click();

    cy.getElement('leads-owner-dropdown').click();
    cy.getElement('leads-owner-dropdown').find('[title="BDE M 6"]').should('be.visible');
    cy.getElement('filter-save').click();

    cy.compareNum();
    cy.getElement('leads-row').each((row) => {
      expect(row).to.contain('BDE M 6');
    });
  });

  it('C63626_Select multiple item', () => {
    cy.getElement('leads-owner-dropdown').click();
    cy.getElement('leads-owner-dropdown-menu-1').click();
    cy.getElement('leads-owner-dropdown-menu-2').click();
    cy.getElement('leads-owner-dropdown-menu-3').click();

    cy.getElement('leads-owner-dropdown').click();
    cy.getElement('leads-owner-dropdown')
      .find('[title="BDE M 6"]')
      .scrollIntoView()
      .should('be.visible');
    cy.getElement('leads-owner-dropdown')
      .find('[title="BDE M 5"]')
      .scrollIntoView()
      .should('be.visible');
    cy.getElement('leads-owner-dropdown')
      .find('[title="BDE M 10"]')
      .scrollIntoView()
      .should('be.visible');
    cy.getElement('filter-save').click();

    cy.compareNum();
    cy.getElement('leads-row')
      .should('contain', 'BDE M 5')
      .and('contain', 'BDE M 6')
      .and('contain', 'BDE M 10');
  });
});
