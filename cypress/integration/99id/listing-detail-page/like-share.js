let data;
describe('Check Functionality Like and Share', function () {

	beforeEach(function () {
		cy.viewport('macbook-15');
		cy.fixture('account').then((account) => {
			data = account.ninetynine;
		});
	});

	it('as a user non login, i can doing favorite listing', function () {
		cy.visit('/properti/rumah-dijual-1-4mily-agisiga-masuk-649857406');
		cy.get('#w2')
			.intercept({
				method: 'POST',
				url: '/id/property/insert-visited-property'
			})
			.as('loginform');
		cy.wait('@loginform', { timeout: 15000 })
			.its('response.statusCode')
			.should('eq', 200);
		/*
			TODO:
			1. login
			2. click favorite listing
			3. validate this element should be change to be favorite
			4. go to iklan saya and check the listing should be appear in listing favorite page 
		*/
		cy.get('#w2')
			.click()
			.get('#uiajaxdialog > .modal-dialog')
			.should((dialoglogin) => {
					expect(dialoglogin).to.be.visible;
			});
		cy.get('#guestquickauthform-username')
			.type(data.Username)
			.get('#guestquickauthform-password')
			.type(data.Password)
			.get('#w0 > .modal-footer > .btn')
			.click();
		cy.get('.avatar.badge-message').should((avatar) => {
			expect(avatar).to.be.visible;
		});
		cy.get('#w2', { timeout: 5000 }).should('have.class', 'favorite'); //validate this element change to be favorite
		cy.get('.avatar.badge-message').trigger('mouseover');
		cy.get('.col-xs-12.profile-right').should((menudialog) => {
			expect(menudialog).to.be.visible;
		});
		cy.get('.menu-item')
			.contains('Iklan Saya')
			.click()
			.url()
			.should((url_iklansaya) => {
				expect(url_iklansaya).to.include('/account/listing');
			});
		cy.get('[href="/id/account/favorites/index"] > .text').click();
		cy.get('[href="/id/account/favorites/listings"]').eq(0).click();
		cy.get('.favorite-listing__item').should(
			'have.attr',
			'data-property-id',
			'649857406'
		);
	});

	it('as a user login, i can doing unfavorite listing', function () {
		cy.visit('/');
		cy.get('.register').click();
		cy.get('#mainloginform-username')
			.type(data.Username)
			.get('#mainloginform-password')
			.type(data.Password)
			.get('#login-page-regular-login-button')
			.click();
		cy.get('.avatar.badge-message').should((avatar) => {
			expect(avatar).to.be.visible;
		});
		cy.Search_Bycity()
			.get('.search-bar-advanced__button')
			.click()
			.url()
			.should('include', '/intan-jaya');
		cy.selectListingVl();
		cy.get('#w2')
			.click()
			.intercept({
				method: 'GET',
				url:'/id/property/ajax-favorite?object=649857406&type=property&action=unfavorite'})
			.as('wait_unfavorite');
		cy.wait('@wait_unfavorite')
			.its('response.statusCode')
			.should('eq', 200);
		cy.get('#w2', { timeout: 5000 }).should('have.class', 'favorite');
	});
});
