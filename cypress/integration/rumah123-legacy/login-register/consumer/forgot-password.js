describe('Forgot Password', function() {

	context('Positive Cases', function() {

	beforeEach(function() {
    cy.viewport('macbook-15')
  });

	it('C2719 Forgot Password via Login Pop Up Homepage', function() {
		cy.visit('https://www.rumah123.com')
		cy.intercept('POST','/api/auth/password/forgot').as('ForgotPasswordSuccess')
		cy.get('.ui-organism-navbar-r123__login').click()
		cy.get('form.ui-molecules-login-form-r123').find('.ui-atomic-text').click()
		cy.get('.ui-atomic-edit-text__input').as('InputEmail')
		cy.get('@InputEmail').invoke('attr', 'placeholder').should('contain', 'Mohon isi Email Anda')
		cy.get('@InputEmail').type('123.superqa@gmail.com')
		cy.get('[type="submit"]').click()
		cy.wait('@ForgotPasswordSuccess').its('response.statusCode').should('eq', 200)
	});

	it('C2720 Forgot Password via dedicated Login Page', function() {
		cy.visit('https://www.rumah123.com/login')
		cy.intercept('POST','/api/auth/password/forgot').as('ForgotPasswordSuccess')
		cy.get('#forget').click()
		cy.get('.input-password').find('#email').as('InputEmail')
		cy.get('@InputEmail').invoke('attr', 'placeholder').should('contain', 'Masukkan Email Anda')
		cy.get('@InputEmail').type('123.superqa@gmail.com')
		cy.get('#password-reset').click()
		cy.wait('@ForgotPasswordSuccess').its('response.statusCode').should('eq', 200)
	});
});

  context('Negative cases', function() {

	beforeEach(function() {
    cy.viewport('macbook-15')
	});

	it('C2721 Homepage :: Leave email field blank', function() {
		cy.visit('https://www.rumah123.com')
		cy.get('.ui-organism-navbar-r123__login').click()
		cy.get('form.ui-molecules-login-form-r123').find('.ui-atomic-text').click()
		cy.get('.ui-atomic-edit-text__input').as('InputEmail')
		cy.get('@InputEmail').invoke('attr', 'placeholder').should('contain', 'Mohon isi Email Anda')
		cy.get('@InputEmail').should('not.contain.value')
		cy.get('[type="submit"]').click()
		cy.get('.ui-atomic-edit-text__error-text').should('contain.text','Mohon isi Email Anda')
			.should('be.visible')
	});

	it('C2722 Homepage :: Input unregistered email', function() {
		cy.visit('https://www.rumah123.com')
		cy.get('.ui-organism-navbar-r123__login').click()
		cy.get('form.ui-molecules-login-form-r123').find('.ui-atomic-text').click()
		cy.get('.ui-atomic-edit-text__input').as('InputEmail')
		cy.get('@InputEmail').invoke('attr', 'placeholder').should('contain', 'Mohon isi Email Anda')
		cy.get('@InputEmail').type('ngetes@mail.com')
		cy.get('[type="submit"]').click()
		cy.get('.ui-atomic-badges__children').should('contain.text','Email tidak ditemukan')
			.should('be.visible')
	});

	it('C2723 Homepage :: Input wrong email format', function() {
		cy.visit('https://www.rumah123.com')
		cy.get('.ui-organism-navbar-r123__login').click()
		cy.get('form.ui-molecules-login-form-r123').find('.ui-atomic-text').click()
		cy.get('.ui-atomic-edit-text__input').as('InputEmail')
		cy.get('@InputEmail').invoke('attr', 'placeholder').should('contain', 'Mohon isi Email Anda')
		cy.get('@InputEmail').type('test@mail')
		cy.get('[type="submit"]').click()
		cy.get('.ui-atomic-edit-text__error-text').should('contain.text','Mohon input email dengan format yang benar')
			.should('be.visible')
		});
	});
});
