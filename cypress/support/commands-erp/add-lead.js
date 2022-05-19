Cypress.Commands.add("clickAddLeadERP",() => 
    {
      cy.get('.btn-group > button').contains('Add Leads').click();
      cy.get('.modal-content').should('be.visible')
	  });

Cypress.Commands.add('inputDataLeadInformation', (lead) => {
  cy.get('input[name="LeadInformationForm[fullName]"]').type(lead.fullname);
  if (lead.fullname === 'skip') {
    cy.get('[name="LeadInformationForm[fullName]"]').clear();
    }

  cy.get('input[name="LeadInformationForm[telephone]"]').type(lead.telephone);
  if (lead.telephone === 'skip') {
    cy.get('[name="LeadInformationForm[telephone]"]').clear();
    }

  cy.get('input[name="LeadInformationForm[email]"]').type(lead.email);
  if (lead.email === 'skip') {
    cy.get('[name="LeadInformationForm[email]"]').clear();
    }

  cy.get('[id="select2-leadinformationform-enquirytype-container"]')
    .type(lead.type)
    .click()
    if (lead.type === 'skip') {
        cy.get('[id="select2-leadinformationform-enquirytype-container"]').clear();
    }

  cy.get('[id="select2-leadinformationform-source-container"]')
    .type(lead.source)
    .click()
    if (lead.source === 'skip') {
        cy.get('[id="select2-leadinformationform-source-container"]').clear();
    }

 cy.get('[id="select2-leadinformationform-projectinterestid-container"]')
    .type(lead.projectname)
    .click()
    if (lead.projectname === 'skip') {
        cy.get('id="select2-leadinformationform-projectinterestid-container"').clear();
    }  
})


Cypress.Commands.add('gotoEditLead', (lead) => {
  cy.get('.msite-cardview.leads-paid-lgp-created-time')
            .eq(1)
            .click()
        cy.url().should('include','lead-paid-lgp/view?') 
})
