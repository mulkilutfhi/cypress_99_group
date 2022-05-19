describe('Msite Navbar Dijual', function () {

	beforeEach(function () {
    cy.viewport('iphone-x').visit('/');
  });

  it('In Dijual menu there  must be displayed button Rumah/.../Cari Pengembang', function () {
    const title = [
      'Rumah',
			'Apartemen',
			'Tanah',
			'Kalkulator KPR',
			'Cari Agen / Kantor Agen',
			'Cari Pengembang'
    ];
    const url = [
			'jual/rumah/',
			'jual/apartemen/',
			'jual/tanah/',
			'cari-kpr',
			'agen-properti/',
			'properti-baru/developer/'
    ];
		for (let i = 0; i < title.length && url.length; i++) {
			cy.openBurgerMenu();
			cy.get('.rui-icon-arrow-right-small').eq(0).click();
			cy.get('.ui-molecules-drawer__content-list > div')
				.contains(title[i])
				.should('have.text', title[i])
				.click();
			cy.url().should('include', url[i]).go('back');
		}
  });

  it('Display Dijual page', function () {
		cy.openBurgerMenu();
		cy.get('.ui-molecules-drawer__content-list > div').eq(0).click();
		cy.url().should('include', 'rumah123.com/');
  });
});
