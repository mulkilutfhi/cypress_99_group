Cypress.Commands.overwrite('type', (originalFn, element, text, options)=>
{
	if (options && options.sensitive)
	{
		options.log = false
		Cypress.log({
			$el: element,
			name: 'type',
			message: '*'.repeat(text.length),
		})
	}
	return originalFn(element, text, options)
})

Cypress.Commands.add('scrolltoRegisterFormAndValidate', ()=>
{
	cy.url().should('include','/agen-registrasi')
	cy.get('#registration-agent').scrollIntoView()
	cy.get('#registration-agent').should('exist')
})

Cypress.Commands.add('inputCompanyName', (user)=>
{
	cy.intercept('GET', '/agent/agent_common/ajaxGetCompany?term=Atlas').as('r123Header')
	cy.get('#company_name').type(user.company)
	cy.wait('@r123Header').its('response.statusCode').should('eq', 200)
	cy.get('.ui-menu-item').contains(' ATLAS PLUS').click({force: true})
})

Cypress.Commands.add('inputIndependent', (user)=>
{
	cy.intercept('GET', '/agent/agent_common/ajaxGetCompany?term=Other').as('r123Header')
	cy.get('#company_name').type(user.company)
	cy.wait('@r123Header').its('response.statusCode').should('eq', 200)
	cy.get('.ui-menu-item').contains('Other').click()
  cy.get(':nth-child(3) > .col-sm-5').click()
})

Cypress.Commands.add('selectProvince', (user)=>
{
	cy.get('#province').select(user.province).should('have.value', '6')
})

Cypress.Commands.add('selectCity', (user)=>
{
	cy.get('#city').select(user.city).should('have.value', '60')
})

Cypress.Commands.add('selectArea', (user)=>
{
	cy.get('#district').select(user.area).should('have.value', '1224')
})

Cypress.Commands.add('inputAddress', ()=>
{
	cy.get('#address')
})

// For Company Agent
Cypress.Commands.add('selectPackageCompany', (user)=>
{
  cy.get('#subscription_package').select(user.package).should('have.value', '10')
})

Cypress.Commands.add('inputFullNameAgentCompany', ()=>
{
  cy.get('#full_name')
})

Cypress.Commands.add('inputWhatsappNumberAgentCompany', ()=>
{
  cy.get('#no_whatsapp')
})

Cypress.Commands.add('inputEmailAgentCompany', ()=>
{
  cy.get('#email')
})

Cypress.Commands.add('inputPasswordCompany', ()=>
{
  cy.get('#password')
})

Cypress.Commands.add('inputPasswordConfirmationCompany', ()=>
{
  cy.get('#confirm_password')
})

//For Independent Agent
Cypress.Commands.add('selectPackageIndependent', (user)=>
{
	cy.get('#subscription_package').select(user.package).should('have.value', '10')
})

Cypress.Commands.add('inputFullNameAgentIndependent', ()=>
{
	cy.get('#full_name')
})

Cypress.Commands.add('inputWANumberAgentIndependent', ()=>
{
	cy.get('#no_whatsapp')
})

Cypress.Commands.add('inputPhoneNumberAgentIndependent', ()=>
{
	cy.get('#phone')
})

Cypress.Commands.add('inputEmailAgentIndependent', ()=>
{
	cy.get('#email')
})

Cypress.Commands.add('inputPasswordIndependent', ()=>
{
	cy.get('#password')
})

Cypress.Commands.add('inputPasswordConfirmationIndependent', ()=>
{
	cy.get('#confirm_password')
})

//general function
Cypress.Commands.add('submitRegistrationCustomer', ()=>
{
	cy.get('#submit-btn').click({delay:1000})
})
