describe('Expiry Date', () => {
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

  it('C68106_Select for date range', () => {
    cy.getElement('expiry-dropdown').click();
    cy.getElement('start-date').click();
    cy.getElement('end-date').click();

    cy.getElement('filter-save').click();

    cy.compareNum();
    cy.url().should('contain', 'expiry_start_date=2021-12-09&expiry_end_date=2021-12-16');
  });
});
