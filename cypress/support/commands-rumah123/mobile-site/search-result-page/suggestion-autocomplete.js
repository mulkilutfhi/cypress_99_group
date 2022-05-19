Cypress.Commands.add('clickButtonTerapkan', () => {
	cy.get('.ui-atomic-button > span').contains('Terapkan').click().wait(3000);
});

Cypress.Commands.add('gotoSearchBar', function () {
	cy.get('.ui-organism-mobile-search-bar__bar > p').click();
});

Cypress.Commands.add('clickColoumnInput', () => {
	cy.get('.ui-molecules-multiple-selection__toggle-content > ul > li > input').click();
});

/*
    ----------- LOKASI TERKAIT -----------
*/
Cypress.Commands.add('gotoSearchBar', function () {
	cy.get('.ui-organism-mobile-search-bar__bar > p').click();
});

Cypress.Commands.add(
	'inputLocation',
	function ({ province, city, area, developer, freetext }) {
		cy.get(
				'.ui-molecules-multiple-selection__toggle-content > ul > li > input'
		).click();
		cy.get('.ui-atomic-badges--with-close').then((token) => {
			if (token.is.apply) {
				cy.get('.ui-atomic-badges__close').click();
				cy.get('.ui-molecules-multiple-selection__toggle-content > ul > li > input').type(province || city || area || developer || freetext) }
			else {
				cy.get('.ui-molecules-multiple-selection__toggle-content > ul > li > input').type('jawa barat') }
		});
	}
);

Cypress.Commands.add(
	'checkingSuggestionMainLocation',
	function ({ index, value, style }) {
		cy.get('.ui-molecules-dropdown__content.relative.box-shadow-r123').should('be.visible');
		cy.get('.ui-molecules-multiple-selection__item > div > div')
			.eq(index)
			.find('.ui-molecules-dialog-location-r123__text > p')
			.should('contain', value)
			.and('have.css', 'color', style);
	}
);

Cypress.Commands.add(
	'checkingSuggestionChildLocation',
	({ index, value, style }) => {
		cy.get('.ui-molecules-multiple-selection__item > div > div')
			.eq(index)
			.find('.ui-molecules-dialog-location-r123__text > span')
			.should('contain', value)
			.and('have.css', 'color', style);
	}
);

Cypress.Commands.add('checkingSuggestionLabel', ({ index, value, style }) => {
	cy.get('.ui-molecules-multiple-selection__item > div > div')
		.eq(index)
		.find('.ui-molecules-autocomplete-r123__text--label')
		.should('contain', value)
		.and('have.css', 'color', style);
});

/*
    ----------- PROPERTI TERKAIT -----------
*/
Cypress.Commands.add('listingSuggestionAttr', () => {
	cy.get('.ui-molecules-autocomplete-r123__img').should('be.visible');
	cy.get('.ui-molecules-dialog-location-r123__text > p').should('be.visible');
	cy.get('.ui-molecules-dialog-location-r123__text > span').should('be.visible');
	cy.get('.ui-molecules-dialog-location-r123__text > .ui-molecules-autocomplete-r123__price').should('be.visible');
});

/*
    ------------------ PENCARIAN TERAKHIR -------------
*/
Cypress.Commands.add('validationRecentSearch', ({ index, text }) => {
	cy.get('.ui-molecules-multiple-selection__heading > div > span')
		.contains('Pencarian Terakhir')
		.should('be.visible');

	cy.get('.ui-molecules-multiple-selection__item').should('have.length', 5);
	cy.get('.ui-molecules-multiple-selection__item')
		.eq(index)
		.find('.ui-molecules-dialog-location-r123__text > p')
		.contains(text)
		.should('be.visible');
});
