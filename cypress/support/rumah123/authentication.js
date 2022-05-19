/**
 * loginR123
 * @param email string
 * @param password string
 */
Cypress.Commands.add('loginR123',(email, password)=>{
	cy.get('.ui-organism-navbar-r123__login').click()
	cy.get('.ui-molecules-login-form-r123 > :nth-child(1) > .ui-atomic-edit-text__input').type(email)
	cy.get('.ui-molecules-login-form-r123 > :nth-child(2) > .ui-atomic-edit-text__input').type(password)
	cy.get('.ui-molecules-login-form-r123 > .flex > .ui-atomic-button').click()
});
