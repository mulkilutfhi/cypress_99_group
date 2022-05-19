Cypress.Commands.add('openLoginTab',()=>
{
	cy.get('.ui-organism-mobile-navbar-r123__login-icon').click()
	cy.get('.ui-molecules-tab__pane').eq(0).should('have.text','Login')
})

Cypress.Commands.add('inputEmailUser',()=>
{
	cy.get('.ui-atomic-edit-text__input').eq(0).as('inputEmailUser')
	cy.get('@inputEmailUser').invoke('attr', 'placeholder').should('contain', 'Mohon isi Email Anda')
	cy.get('@inputEmailUser')
})

Cypress.Commands.add('inputPasswordUser',()=>
{
	cy.get('.ui-atomic-edit-text__input').eq(1).as('inputPasswordUser')
	cy.get('@inputPasswordUser').invoke('attr', 'placeholder').should('contain', 'Mohon isi Password Anda')
	cy.get('@inputPasswordUser')
})

Cypress.Commands.add('submitLogin',()=>
{
	cy.get('.flex > .ui-atomic-button').click()
})

Cypress.Commands.add('ClickForgetPassword',()=>
{
	cy.get('form.ui-molecules-login-form-r123').find('.ui-atomic-text').click()
})

Cypress.Commands.add('submitForgetPassword',()=>
{
	cy.get('[type="submit"]').click()
})
