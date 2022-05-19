describe('Sales Area', () => {
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

  it('C67760_Select one item', () => {
    cy.getElement('sales-area-dropdown').click();
    cy.getElement('sales-area-dropdown-menu-1').click();

    cy.getElement('sales-area-dropdown').click();
    cy.getElement('sales-area-dropdown').find('[title="Mampang Prapatan"]').should('be.visible');
    cy.getElement('filter-save').click();

    cy.compareNum();
    cy.contains('Mampang Prapatan').should('exist');
  });

  it('C67761_Select multiple item', () => {
    cy.getElement('sales-area-dropdown').click();
    cy.getElement('sales-area-dropdown-menu-1').click();
    cy.getElement('sales-area-dropdown-menu-2').click();
    cy.getElement('sales-area-dropdown').click();
    cy.getElement('sales-area-dropdown').find('[title="Mampang Prapatan"]').should('be.visible');
    cy.getElement('sales-area-dropdown').find('[title="Tebet"]').should('be.visible');
    cy.getElement('filter-save').click();

    cy.compareNum();
    cy.contains('Mampang Prapatan').should('exist');
    cy.contains('Tebet').should('exist');
  });
});
