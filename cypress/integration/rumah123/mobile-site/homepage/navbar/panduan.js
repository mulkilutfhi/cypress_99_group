describe('Msite Navbar Panduan', function () {

  beforeEach(function () {
    cy.viewport('iphone-x').visit('/');
  });

	it('In Panduan menu there  must be displayed button Panduan/.../Pilih Rumah atau Apartment', function () {
    const title = [
			'Panduan Properti',
			'FAQ',
			'Persyaratan KPR',
			'Jenis - Jenis KPR',
			'Pilih Rumah atau Apartemen'
    ];
		const url = [
			'panduan-properti-id',
			'faq-id',
			'persyaratan-kpr-id',
			'mengenal-kpr-dan-jenis-jenis-kpr-id',
			'memilih-hunian-rumah-atau-apartemen-id'
		];
		for (let i = 0; i < title.length && url.length; i++) {
			cy.openBurgerMenu();
			cy.get('.rui-icon-arrow-right-small').eq(2).click();
			cy.get('.ui-molecules-drawer__content-list > div')
				.contains(title[i])
				.should('have.text', title[i])
				.click();
			cy.url().should('include', url[i]).go('back');
		}
    });

	it('Display Panduan page', function () {
		cy.get('.rui-icon-navdeck').click();
		cy.get('.ui-molecules-drawer__content-list > div').eq(4).click();
		cy.url().should('include', '/panduan-properti-id');
	});
});
