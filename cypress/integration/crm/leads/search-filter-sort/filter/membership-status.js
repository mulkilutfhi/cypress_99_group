describe('Membership Status', () => {
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

  it('C67772_Select one item', () => {
    cy.getElement('membership-dropdown').click();
    cy.getElement('membership-dropdown-menu-1').click();

    cy.getElement('membership-dropdown').click();
    cy.getElement('membership-dropdown').find('[title="Suspended"]').should('be.visible');
    cy.getElement('filter-save').click();

    cy.compareNum();
    cy.getElement('membership-badge-suspended').then((count1) => {
      const len1 = Cypress.$(count1).length;
      cy.getElement('leads-row').then((count2) => {
        const len2 = Cypress.$(count2).length;
        expect(len1).to.eq(len2);
      });
    });
  });

  it('C67773_Select multiple item', () => {
    cy.getElement('membership-dropdown').click();
    cy.getElement('membership-dropdown-menu-1').click();
    cy.getElement('membership-dropdown-menu-2').click();
    cy.getElement('membership-dropdown-menu-3').click();

    cy.getElement('membership-dropdown').click();
    cy.getElement('membership-dropdown')
      .find('[title="Suspended"]')
      .scrollIntoView()
      .should('be.visible');
    cy.getElement('membership-dropdown')
      .find('[title="Verified"]')
      .scrollIntoView()
      .should('be.visible');
    cy.getElement('membership-dropdown')
      .find('[title="Rejected"]')
      .scrollIntoView()
      .should('be.visible');
    cy.getElement('filter-save').click();

    cy.compareNum();
    cy.getElement('membership-badge-suspended').should('exist');

    cy.getElement('membership-badge-verified').should('exist');

    cy.getElement('membership-badge-rejected').should('exist');

    cy.getElement('membership-badge-suspended').then((suspend) => {
      var lenCount = Cypress.$(suspend).length;
      cy.getElement('membership-badge-verified').then((verif) => {
        lenCount = lenCount + Cypress.$(verif).length;
        cy.getElement('membership-badge-rejected').then((reject) => {
          lenCount = lenCount + Cypress.$(reject).length;
          expect(lenCount).to.eq(15);
        });
      });
    });
  });
});
