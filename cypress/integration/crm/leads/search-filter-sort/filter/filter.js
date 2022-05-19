describe('Sales Area', () => {
  let first, second;
  beforeEach(() => {
    cy.clearCookies();
    cy.viewport('macbook-15').visit('/');
    cy.getElement('login-logo').should('be.visible');
    cy.getElement('login-form').should('be.visible');
    cy.loginCRM('backdoor@99.co', 'belladona');
    cy.leadsWait();

    cy.getNewListing();
    initiate();

    cy.getElement('filter-button').find('button').click();
  });

  it('C67761_Select multiple item', () => {
    cy.getElement('sales-area-dropdown').click();
    cy.getElement('sales-area-dropdown-menu-1').click();
    cy.getElement('agency-dropdown').click();
    cy.getElement('agency-dropdown-menu-1').click();
    cy.getElement('membership-dropdown').click();
    cy.getElement('membership-dropdown-menu-0').click();

    cy.getElement('agency-selected').contains('Alfamega Property').should('be.visible');
    cy.getElement('sales-area-dropdown').find('[title="Mampang Prapatan"]').should('be.visible');
    cy.getElement('membership-dropdown').find('[title="New"]').should('be.visible');

    cy.getElement('filter-save').click();
    cy.compareNum();

    cy.getElement('filter-button').find('button').click();
    cy.getElement('filter-reset').click();
    cy.getElement('filter-save').click();
    backToNormal();
  });

  it('C43480_No filter result', () => {
    cy.getElement('sales-area-dropdown').click();
    cy.getElement('sales-area-dropdown-no-result').click();

    cy.getElement('sales-area-dropdown').click();
    cy.getElement('sales-area-dropdown').find('[title="Pasar Minggu"]').should('be.visible');
    cy.getElement('filter-save').click();

    cy.compareNum();
    cy.getElement('leads-empty-1-check').should('exist').and('be.visible');
    cy.getElement('leads-empty-2-check').should('exist').and('be.visible');
  });

  function backToNormal() {
    cy.wait(2000);
    cy.getElement('new-leads-number')
      .children('.children:eq(0)')
      .then((result) => {
        second = Number(result.text());
        cy.log(second);
        expect(second).to.equal(first);
      });
  }

  function initiate() {
    cy.getElement('new-leads-number')
      .children('.children:eq(0)')
      .then((result) => {
        first = Number(result.text());
        cy.log(first);
      });
  }
});
