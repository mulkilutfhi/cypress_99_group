Cypress.Commands.add('inputLocation', function (keyword) {
	cy.get('[color="searchPlaceholder"]').click();

	cy.get('.ui-organisms-mobile-dsearch-filter__input')
		.eq(0)
		.click({ force: true });
	cy.get('input[maxlength]').type(keyword);
	cy.get('.ui-molecules-dropdown__content.relative.box-shadow-r123').should(
		'be.visible'
	);
});

Cypress.Commands.add('CheckSearchSuggestion', ({ selector, index, value }) => {
	cy.get('.ui-molecules-multiple-selection__item')
		.eq(index)
		.find(selector)
		.should('contain', value);
});
