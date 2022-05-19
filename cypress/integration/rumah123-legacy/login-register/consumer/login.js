describe("Login", function() {

	let data

	beforeEach(function() {
		cy.viewport('macbook-15')
		cy.visit('/login')

		cy.fixture('rumah123-legacy/json-file/credential').then((creds)=>
		{
			data = creds;
		});
  });

	it('C2718 login with valid data', function()
	{
		cy.get('#accountPopupTrigger').click()
		cy.get('#email').type(data.username1)
		cy.get('#password').type(data.password1)
		cy.get('.ant-col-10').click()
		cy.wait(2000)
		cy.get('.hidden-xs').should('be.visible')
		cy.get('.jpw-popup-close').click()
	});
});
