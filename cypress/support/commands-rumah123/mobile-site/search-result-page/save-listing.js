Cypress.Commands.add('LoginSaveListing',()=>
{
	cy.get('.ui-molecules-tabs__content > :nth-child(3)').contains('Login dengan Akun Rumah123.com')
	cy.get('.ui-molecules-login-form-r123 > :nth-child(1) > .ui-atomic-edit-text__input').type('ricky@99.co')
	cy.get('.ui-molecules-login-form-r123 > :nth-child(2) > .ui-atomic-edit-text__input').type('99coricky07')
	cy.get('.ui-molecules-login-form-r123 > .flex > .ui-atomic-button').click()
})

Cypress.Commands.add('ClickSave',()=>
{
  cy.get('.ui-molecules-hollow-link').eq(1).click({force: true})
})