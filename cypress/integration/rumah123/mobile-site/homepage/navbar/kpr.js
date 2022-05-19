describe('Msite Navbar KPR', function () {

	beforeEach(function () {
		cy.viewport('iphone-x').visit('/');
	});

	it('Display KPR page', function () {
		cy.openBurgerMenu();
		cy.get('.ui-molecules-drawer__content-list > div').eq(3).click();
		cy.url().should('include', '/cari-kpr/');
	});
});
