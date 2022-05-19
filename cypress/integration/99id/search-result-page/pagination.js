describe('functionality pagination on search result page', function () {

	beforeEach(function () {
		cy.viewport('macbook-15');
	});

	it('C46419 as a user i can see the pagination on the buttom side', function () {
		cy.visit('/jual/rumah');
		cy.get('.col-xs-12')
			.find('.pagination')
			.should((pagination) => {
				expect(pagination).to.be.visible;
		});
	});

	it('C46415 as a user i can move to page 3 in search result page', function () {
		cy.get('.col-xs-12 > .pagination')
			.get('[href="/id/jual/rumah?hlmn=3"]')
			.click({ force: true });
		cy.url().should((url_page3) => {
			expect(url_page3).to.include('?hlmn=3');
		});
	});

	it('C46416 as a user button right arrow should be clickable', function () {
		cy.get('.pagination > li > a > i')
			.contains('arrow_right')
			.click({ force: true });
		cy.url().should((url_rightarrow) => {
			expect(url_rightarrow).to.include('?hlmn=4');
		});
	});

	it('C46417 as a user button left arrow should be clickable', function () {
		cy.get('.pagination > li > a > i')
			.contains('arrow_left')
			.click({ force: true });
		cy.url().should((url_leftarrow) => {
			expect(url_leftarrow).to.include('?hlmn=3');
		});
	});

	it('C46418 as a user button pertama should be clickable', function () {
		cy.get('.pagination > li').contains('Pertama').click({ force: true });
		cy.url().should((url_first) => {
			expect(url_first).not.include('?hlmn');
		});
	});
});
