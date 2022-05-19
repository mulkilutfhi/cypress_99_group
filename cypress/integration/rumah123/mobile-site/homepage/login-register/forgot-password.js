describe("Msite Forgot Password for user Rumah 123", function() {

	let dataValid, dataInvalid;

	beforeEach(function() {
		cy.viewport('iphone-x').visit('/');
		cy.fixture('rumah123/json-file/login-consumer').then((login)=>
		{
			dataValid = login.validData;
			dataInvalid = login.invalidData;
		})
  });

  it('C42833 Fill invalid email', function() {
		cy.openLoginTab()
		cy.ClickForgetPassword()
		cy.inputEmailUser().type(dataInvalid.emailConsumer)
		cy.submitForgetPassword()
		cy.get('.ui-atomic-badges__children').should('have.text', 'Email tidak ditemukan')
	});
  
	it('C42834 Fill valid email', function() {
		cy.intercept('POST','/api/auth/password/forgot').as('ForgotPasswordSuccess')
		cy.openLoginTab()
		cy.ClickForgetPassword()
		cy.inputEmailUser().type(dataValid.emailConsumer)
		cy.submitForgetPassword()
		cy.get('.ui-organisms-forgot-password-r123__dialog-wrapper > .block').should('have.text', 'Kami akan menginformasikan detail password Anda melalui email.')
		cy.wait('@ForgotPasswordSuccess').its('response.statusCode').should('eq', 200)
	});

	it('C42835 Leave email field blank', function() {
		cy.openLoginTab()
		cy.ClickForgetPassword()
		cy.submitForgetPassword()
		cy.get('.ui-atomic-edit-text__error-text').should('have.text','Mohon isi Email Anda')
	});
});
