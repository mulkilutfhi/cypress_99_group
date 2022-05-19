Cypress.Commands.add("openLeadModule", () => {
	cy.get('.ant-menu-item').contains("Leads").click()
    cy.get('.ant-tabs-tab.ant-tabs-tab-active').click()
    cy.url().should('include','leads') 
});

Cypress.Commands.add("openCustomerModule", () => {
	cy.get('.ant-menu > :nth-child(3)').contains("Customers").click()
    cy.url().should('include','customers') 
});

Cypress.Commands.add('clickAddLeadButton', () => {
  cy.get('.ant-btn.ant-btn-primary.add-leads').click();
  cy.get('.ant-modal-content').should('be.visible');
  cy.get('.ant-col.box-input.ant-col-lg-10').contains('Create New Data').click();
});

let numbefore;
let numafter;

Cypress.Commands.add('getNewListing', () => {
  cy.get('.mini-dashboard-card > .ant-card-body')
    .children('.children:eq(0)')
    .then((result) => {
      numbefore = Number(result.text());
      cy.log(numbefore);
    });
});

Cypress.Commands.add('compareNum', () => {
  cy.wait(2000);
  cy.get('.mini-dashboard-card > .ant-card-body')
    .children('.children:eq(0)')
    .then((result) => {
      numafter = Number(result.text());
      expect(numafter).to.not.equal(numbefore);
    });
});

Cypress.Commands.add('leadsWait', () => {
  cy.intercept('GET', 'http://develop.crm.rumah123.com/v1/leads/').as('wait');
  cy.wait('@wait').its('response.statusCode').should('eq', 200);
});
