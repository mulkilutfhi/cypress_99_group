describe('Login', () => {

	beforeEach(() => {
    cy.visit('/');
    cy.viewport('macbook-15');
	});

	it('Login using invalid username', () => {
		cy.Login('isti', 'qwerty');
		//todo verify error
		cy.get('.form-group.field-mainloginform-username.required.has-error > div')
			.should('be.visible');
	});

	it('Login using invalid password', () => {
		cy.Login('istiq', 'qwert');
		//todo verify error
		cy.get('.form-group.field-mainloginform-password.required.has-error > div')
			.should('be.visible');
	});

	it('Login using valid data', () => {
		cy.Login('istiq', 'qwerty');
		//todo verify photos icon
		cy.get('.img-circle').should('be.visible');
	});
});
