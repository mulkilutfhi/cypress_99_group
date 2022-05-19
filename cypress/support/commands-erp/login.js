

Cypress.Commands.add("stepSigninERP",(email,password) => 
{
  cy.get('input[name="LoginForm[email]"]').type(email);
  	if (email === 'skip') {
		cy.get('[name="LoginForm[email]"]').clear();
	}
  cy.get('input[name="LoginForm[password]"]').type(password);
  	if (password === 'skip') {
		cy.get('[name="LoginForm[password]"]').clear();
	}
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add("signinERP",(email='admin@ninetynine.id',password='hello') => 
{
  cy.get('input[name="LoginForm[email]"]').type(email);
  cy.get('input[name="LoginForm[password]"]').type(password);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add("openMenuLeadLGP",() => 
	{
	  cy.get('.waves-effect').contains("Lead").click()
	  cy.get('.waves-effect').contains("Lead LGP/LGP+").click()
	  cy.url().should('include','lead-paid-lgp/index')
	});

Cypress.Commands.add("openMenuAgentGroup",() => 
	{
	  cy.get('.waves-effect').contains("Agency Agent").click()
	  cy.get('.waves-effect').contains("Groups").click()
	  cy.url().should('include','agents/group')
	});

Cypress.Commands.add("openMenuProject",() => 
	{
	  cy.get('.waves-effect').contains("Inventory").click()
	  cy.get('.waves-effect').contains("Projects").click()
	  cy.url().should('include','projects/index')
	});