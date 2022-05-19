describe('Leads Status', () => {
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

  it('C67757_Select one item', () => {
    cy.getElement('leads-status-dropdown').click();
    cy.getElement('leads-status-cold').check();
    cy.getElement('leads-status-selected').contains('Cold').should('be.visible');
    cy.getElement('filter-save').click();

    cy.compareNum();

    checkNumber(4);
  });

  it('C67758_Select multiple item', () => {
    cy.getElement('leads-status-dropdown').click();
    cy.getElement('leads-status-cold').check();
    cy.getElement('leads-status-warm').check();
    cy.getElement('leads-status-won').check();
    cy.getElement('leads-status-selected').contains('Cold').should('be.visible');
    cy.getElement('leads-status-selected').contains('Warm').should('be.visible');
    cy.getElement('leads-status-selected').contains('Won').should('be.visible');
    cy.getElement('filter-save').click();

    cy.compareNum();

    checkNumber(1);
    checkNumber(3);
    checkNumber(4);
  });

  function checkNumber(asdf) {
    let numafter;
    cy.getElement('new-leads-number')
      .children('.children')
      .eq(asdf)
      .then((result) => {
        numafter = Number(result.text());
        expect(numafter).to.not.equal(0);
      });
  }
});
