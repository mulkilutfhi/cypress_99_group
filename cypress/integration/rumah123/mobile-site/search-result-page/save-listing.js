describe('Msite Save Button (SRP)', function () {

	beforeEach(function () {
		cy.viewport('iphone-x').visit('/jual/biak-numfor/residensial/');
		cy.intercept('POST','/api/auth').as('LoginSuccess')
		cy.intercept('POST','/api/favorite/save-favorite').as('SaveSuccess')
	});

	it(' As a Consumer (Buyer), I want to save Property Search)', function () {
		cy.ClickSave()
		cy.LoginSaveListing()
		cy.wait('@LoginSuccess').its('response.statusCode').should('equal', 200)
		cy.ClickSave()
		cy.wait('@SaveSuccess').its('response.statusCode').should('equal', 200)
		cy.get('.ui-molecules-hollow-link--active').contains('Tersimpan')
	});

	it(' As a Consumer (Buyer), I want to save Property Search)', function () {
		cy.get('.ui-organism-mobile-navbar-r123__login-icon').click()
		cy.LoginSaveListing()
		cy.wait('@LoginSuccess').its('response.statusCode').should('equal', 200)
		cy.ClickSave()
		cy.wait('@SaveSuccess').its('response.statusCode').should('equal', 200)
		cy.get('.ui-molecules-hollow-link--active').contains('Tersimpan')
	});
});

