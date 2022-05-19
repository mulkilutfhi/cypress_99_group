/*
  custom commands for search dijual
*/

Cypress.Commands.add('gotoSearchPage', () => {
	cy.get('[color="searchPlaceholder"]').click();
});

Cypress.Commands.add('inputCariPropertiBerdasarkan', (keyword) => {
	cy.get('.ui-organisms-mobile-dsearch-filter__input')
		.eq(0)
		.click({ force: true });

	cy.get('input[maxlength]').type(keyword);
	cy.get('.ui-molecules-dropdown__wrapper > .box-shadow-r123')
		.find('.ui-molecules-multiple-selection__item')
		.eq(0)
		.click();

	const button_terapkan = '.ui-atomic-button--size-big';
	cy.get(button_terapkan).contains('Terapkan').click();
});

Cypress.Commands.add('clickSearchProperty', (keyword) => {
	cy.get('.ui-molecules-multiple-selection__placeholder')
		.eq(0)
		.click({ force: true });
	
	cy.get('input[maxlength]').type(keyword);

});

Cypress.Commands.add('clickTypeListing', function () {
	cy.get('.ui-organisms-mobile-dsearch-filter__input')
		.eq(1)
		.click({ force: true });
});

Cypress.Commands.add('isSelectTypeListing', function (text) {
	cy.get('.ui-organisms-mobile-dsearch-filter__option-item > p')
		.contains(text)
		.click();
});

Cypress.Commands.add('isSelectTypeProperti', function () {
	cy.get('.ui-organisms-mobile-dsearch-filter__input')
		.eq(2)
		.click({ force: true });
});
Cypress.Commands.add('isPriceMin', function (minprice) {
	cy.get('.ui-organisms-mobile-dsearch-filter__input')
		.eq(3)
		.click({ force: true });

	cy.get('.ui-organisms-mobile-dsearch-filter__option-item')
		.contains(minprice)
		.click({ force: true });
});

Cypress.Commands.add('isPriceMax', function (maxprice) {
	cy.get('.ui-organisms-mobile-dsearch-filter__input')
		.eq(4)
		.click({ force: true });

	cy.get('.ui-organisms-mobile-dsearch-filter__option-item')
		.contains(maxprice)
		.click({ force: true });
});

Cypress.Commands.add('setFilterBedroom', function (value) {
	cy.get('.ui-organisms-mobile-dsearch-filter__input')
		.eq(5)
		.click({ force: true });
	cy.get('.ui-organisms-mobile-dsearch-filter__option-item')
		.contains(value)
		.click();
});

Cypress.Commands.add('setFilterBathroom', function (value) {
	cy.get('.ui-organisms-mobile-dsearch-filter__input')
		.eq(6)
		.click({ force: true });
	cy.get('.ui-organisms-mobile-dsearch-filter__option-item')
		.contains(value)
		.click();
});

Cypress.Commands.add('setFilterVerified', function () {
	cy.get('#verified-property').click({ force: true });
});

Cypress.Commands.add('clickButtonTampilkanProp', function () {
	cy.get('.ui-atomic-button--children')
		.contains('Tampilkan Properti')
		.click({ force: true });
	cy.intercept({
		method: 'POST',
		url: '/api/location-suggestion/search-parser'
	}).as('isSearchRender');
	cy.wait('@isSearchRender', { timeout: 15000 })
		.its('response.statusCode')
		.should('eq', 200);
});

/*
	custom commands for search disewa
*/

Cypress.Commands.add('isButtonRent', function () {
	cy.get('h6').contains('Disewa').click();
});

Cypress.Commands.add('inputCariPropertiBerdasarkan_Rent', (keyword) => {
	cy.get('.ui-organisms-mobile-dsearch-filter__input')
		.eq(0)
		.click({ force: true });

	cy.get('input[maxlength]').type(keyword);
	cy.get('.ui-molecules-dropdown__wrapper > .box-shadow-r123')
		.find('.ui-molecules-multiple-selection__item')
		.eq(0)
		.click();

	const button_terapkan = '.ui-atomic-button--size-big';
	cy.get(button_terapkan).contains('Terapkan').click();
});

Cypress.Commands.add('isSelectTypeProperti_Rent', function () {
	cy.get('.ui-organisms-mobile-dsearch-filter__input')
		.eq(1)
		.click({ force: true });
});

Cypress.Commands.add('isPriceMin_Rent', function (minprice) {
	cy.get('.ui-organisms-mobile-dsearch-filter__input')
		.eq(2)
		.click({ force: true });

	cy.get('.ui-organisms-mobile-dsearch-filter__option-item')
		.contains(minprice)
		.click({ force: true });
});

Cypress.Commands.add('isPriceMax_Rent', function (maxprice) {
	cy.get('.ui-organisms-mobile-dsearch-filter__input')
		.eq(3)
		.click({ force: true });

	cy.get('.ui-organisms-mobile-dsearch-filter__option-item')
		.contains(maxprice)
		.click({ force: true });
});

Cypress.Commands.add('setFilterBedroom_Rent', function (value) {
	cy.get('.ui-organisms-mobile-dsearch-filter__input')
		.eq(4)
		.click({ force: true });
	cy.get('.ui-organisms-mobile-dsearch-filter__option-item')
		.contains(value)
		.click();
});

Cypress.Commands.add('setFilterBathroom_Rent', function (value) {
	cy.get('.ui-organisms-mobile-dsearch-filter__input')
		.eq(5)
		.click({ force: true });
	cy.get('.ui-organisms-mobile-dsearch-filter__option-item')
		.contains(value)
		.click();
});

Cypress.Commands.add('setFilterVerified_Rent', function () {
	cy.get('#verified-property').click({ force: true });
});
