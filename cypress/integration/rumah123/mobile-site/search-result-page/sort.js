const urlNewest = '?sort=posted-desc';
const urlPriceHigest = '?sort=price-desc';
const urlPriceLowest = '?sort=price-asc';

describe('Msite Sort Listing (SRP)', function () {

  beforeEach(function () {
		cy.viewport('iphone-x').visit('/jual/residensial/');
	});

	it('Sort listing by latest', function () {
		cy.get('.ui-organism-mobile-search-filter__sort-column > [role="button"]')
			.click()
			.get('.ui-molecules-dialog-sort-r123')
			.should('be.visible');
		cy.get('#NEWEST').click({ force: true });
		cy.get('.ui-molecules-dialog-sort-r123 > [type="submit"]')
			.click();
		cy.url().should('include', urlNewest);
	});

	it('Sort listing by lowest price', function () {
		cy.get('.ui-organism-mobile-search-filter__sort-column > [role="button"]')
			.click()
			.get('.ui-molecules-dialog-sort-r123')
			.should('be.visible');
		cy.get('#PRICE_ASC').click({ force: true });
		cy.get('.ui-molecules-dialog-sort-r123 > [type="submit"]').click();
		cy.url().should('include', urlPriceLowest);
	});

	it('Sort listing by highest price', function () {
		cy.get('.ui-organism-mobile-search-filter__sort-column > [role="button"]')
			.click()
			.get('.ui-molecules-dialog-sort-r123')
			.should('be.visible');
		cy.get('#PRICE_DESC').click({ force: true });
		cy.get('.ui-molecules-dialog-sort-r123 > [type="submit"]').click();
		cy.url().should('include', urlPriceHigest);
	});
});
