describe('Automation for navbar Disewa', function () {

	beforeEach(function () {
		cy.viewport('iphone-x').visit('/');
	});

	it('In Disewa menu there  must be displayed button Rumah/.../Cari Agen', function () {
		const title = [
			'Rumah',
			'Apartemen',
			'Tanah',
			'Cari Agen / Kantor Agen'
		];
		const url = [
			'sewa/rumah/',
			'sewa/apartemen/',
			'sewa/tanah/',
			'agen-properti/'
		];
		for (let i = 0; i < title.length && url.length; i++) {
			cy.openBurgerMenu();
			cy.get('.rui-icon-arrow-right-small').eq(1).click();
			cy.get('.ui-molecules-drawer__content-list > div')
				.contains(title[i])
				.should('have.text', title[i])
				.click();
			cy.url().should('include', url[i]).go('back');
		}
	});

	it('Display Disewa page', function () {
		cy.openBurgerMenu();
		cy.get('.ui-molecules-drawer__content-list > div').eq(1).click();
		cy.url().should('include', '/sewa/');
	});
});
