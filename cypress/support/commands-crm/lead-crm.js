Cypress.Commands.add('SearchSuggestionLead', ({ selector, index, value }) => {
	cy.get('.rc-virtual-list-holder-inner')
		.eq(index)
		.find(selector)
		.should('contain', value);
});

Cypress.Commands.add("clickAddLeadButton", () => {
	cy.get('.ant-btn.ant-btn-primary.add-leads').click()
    cy.get('.ant-modal-content').should('be.visible')
    cy.get('.ant-col.box-input.ant-col-lg-10').contains('Create New Data').click()
    
});

let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);     
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();

Cypress.Commands.add('emailNewLead', () => {
	cy.get('input[data-cy="email"]').type("p" + date + month + year + "@gmail.com")
});

