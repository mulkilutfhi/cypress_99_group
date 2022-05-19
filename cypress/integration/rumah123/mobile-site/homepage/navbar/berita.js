describe('Msite Navbar Berita', function () {

	beforeEach(function () {
		cy.viewport('iphone-x').visit('/');
	});

	it('In Berita menu there must be displayed button Berita Properti/Pameran Properti', function () {
		const title = ['Berita Properti', 'Pameran Properti'];
		const url = ['artikel', 'events'];
		for (let i = 0; i < title.length && url.length; i++) {
			cy.openBurgerMenu();
			cy.get('.rui-icon-arrow-right-small').eq(3)
				.click();
			cy.get('.ui-molecules-drawer__content-list > div')
				.contains(title[i])
				.should('have.text', title[i])
				.click();
			cy.url().should('include', url[i]).go('back');
		}
	});

	it('Display Berita page', function () {
		cy.get('.rui-icon-navdeck')
			.click();
		cy.get('.ui-molecules-drawer__content-list > div').eq(5)
			.click();
		cy.url().should('equal', 'https://artikel.rumah123.com/');
	});
});
