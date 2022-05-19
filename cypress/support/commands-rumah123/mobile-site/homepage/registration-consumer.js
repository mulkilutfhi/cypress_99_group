Cypress.Commands.add('openRegisterTab',()=>
{
	cy.get(".ui-organism-mobile-navbar-r123__login-icon").click()
	cy.get(".ui-molecules-tab__pane").eq(1).click()
})

Cypress.Commands.add('inputNamaDepan',()=>
{
	cy.get('.ui-atomic-edit-text__input').eq(0).as('InputNamaDepan')
	cy.get('@InputNamaDepan').invoke('attr', 'placeholder').should('contain', 'Nama Depan')
	cy.get('@InputNamaDepan')
})

Cypress.Commands.add('inputNamaBelakang',()=>
{
	cy.get('.ui-atomic-edit-text__input').eq(1).as('InputNamaBelakang')
	cy.get('@InputNamaBelakang').invoke('attr', 'placeholder').should('contain', 'Nama Belakang')
	cy.get('@InputNamaBelakang')
})

Cypress.Commands.add('inputEmailConsumer',()=>
{
	cy.get('.ui-atomic-edit-text__input').eq(2).as('InputEmail')
	cy.get('@InputEmail').invoke('attr', 'placeholder').should('contain', 'Mohon isi Email Anda')
	cy.get('@InputEmail')
})

Cypress.Commands.add('inputPasswordConsumer',()=>
{
	cy.get('.ui-atomic-edit-text__input').eq(3).as('InputPassword')
	cy.get('@InputPassword').invoke('attr', 'placeholder').should('contain', 'Masukan Password Anda (5-15 Karakter)')
	cy.get('@InputPassword')
})

Cypress.Commands.add('submitRegistrationConsumer',()=>
{
  cy.get('.ui-atomic-button').eq(1).click()
})
