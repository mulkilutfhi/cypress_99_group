const elementParent = '.ui-molecules-dialog-location-r123__text > p';
const elementChild = '.ui-molecules-dialog-location-r123__text > p > span';
const BadgeTypeListing = '.ui-molecules-dialog-location-r123__text > span';

let data;

describe('Msite Searchbar Suggestion Autocomplete', function () {

	beforeEach(function () {
		cy.viewport('iphone-x').visit('/');
		cy.fixture('listing-dictionary').then((listing) => {
			data = listing.rumah123;
		});
	});

	it('Search by province', function () {
		cy.inputLocation('jawa barat');
		cy.CheckSearchSuggestion({
			index: 0,
			selector: elementParent,
			value: 'Jawa Barat'
		});

		cy.CheckSearchSuggestion({
			index: 0,
			selector: elementChild,
			value: 'Provinsi'
		});
		for (let nextIndex = 1; nextIndex < 10; nextIndex++) {
			cy.CheckSearchSuggestion({
				index: nextIndex,
				selector: elementChild,
				value: 'Kota @ Jawa Barat'
			});
		}
	});

	it('Search by city', function () {
		cy.inputLocation('Bekasi');
		cy.CheckSearchSuggestion({
			index: 0,
			selector: elementParent,
			value: 'Bekasi'
		});

		cy.CheckSearchSuggestion({
			index: 0,
			selector: elementChild,
			value: 'Kota @ Jawa Barat'
		});
		for (let nextIndex = 1; nextIndex < 10; nextIndex++) {
			cy.CheckSearchSuggestion({
				index: nextIndex,
				selector: elementChild,
				value: 'Area @ Bekasi'
			});
		}
	});

	it('Search by district', function () {
		cy.inputLocation('Arcamanik');
		cy.CheckSearchSuggestion({
			index: 0,
			selector: elementParent,
			value: 'Arcamanik'
		});
		cy.CheckSearchSuggestion({
			index: 0,
			selector: elementChild,
			value: 'Area @ Bandung'
		});
		for (let nextIndex = 1; nextIndex < 10; nextIndex++) {
			cy.CheckSearchSuggestion({
				index: nextIndex,
				selector: elementChild,
				value: 'Arcamanik, Bandung, Jawa Barat'
			});
		}
	});

	it('Search by primary developer', function () {
		cy.inputLocation('Ciputra Group');
		cy.CheckSearchSuggestion({
			index: 0,
			selector: elementParent,
			value: 'Ciputra Group'
		});
		cy.CheckSearchSuggestion({
			index: 0,
			selector: BadgeTypeListing,
			value: 'Developer'
		});
		/*
		because when do search 'developer' the result/suggestion is random location,
		so especially in this process, the 'selector' using variable 'badge'
		to indentify the rest of suggestion is as an listing not as an location 
		*/
		for (let nextIndex = 1; nextIndex < 10; nextIndex++) {
			cy.get('.ui-molecules-multiple-selection__item')
				.eq(nextIndex)
				.find(BadgeTypeListing)
				.then(($element) => {
					if ($element.text() === 'Residensial') {
						expect($element.text()).to.be.equal('Residensial') }
					else if ($element.text() === 'Rumah') {
						expect($element.text()).to.be.equal('Rumah') }
					else if ($element.text() === 'Apartemen') {
						expect($element.text()).to.be.equal('Apartemen') }
					else if ($element.text() === 'Ruko') {
						expect($element.text()).to.be.equal('Ruko') }
					else if ($element.text() === 'Tanah') {
						expect($element.text()).to.be.equal('Tanah') }
					else if ($element.text() === 'Pabrik') {
						expect($element.text()).to.be.equal('Pabrik') }
					else if ($element.text() === 'Kantor') {
						expect($element.text()).to.be.equal('Kantor') }
					else if ($element.text() === 'Ruang-Usaha') {
						expect($element.text()).to.be.equal('Ruang-Usaha') }
					else {
						expect($element.text()).to.be.equal('Gudang') }
			})};
	});

	it('Search by ID listing', function () {
		cy.inputLocation(data.id);
		cy.CheckSearchSuggestion({
			index: 0,
			selector: BadgeTypeListing,
			value: 'Rumah'
		});
	});

	it('Checking pencarian terakhir', function () {
		const searchLocation = [
			'Garut',
			'Bandung',
			'Cibiru',
			'Jawa Barat',
			'hos7999253'
		];

		for (let i = 0; i < searchLocation.length; i++) {
			cy.get('[color="searchPlaceholder"]').click();
			cy.get('.ui-organisms-mobile-dsearch-filter__input')
					.eq(0)
					.click({ force: true });
			if (searchLocation[i] !== 0) {
				cy.get('.ui-atomic-badges').find('.ui-atomic-badges__close') }
			else {
				cy.get('input[maxlength]').type(searchLocation[i]) }

			cy.get('.ui-molecules-dropdown__content.relative.box-shadow-r123'
			).should('be.visible');
			cy.get('.ui-molecules-multiple-selection__item').eq(0).click();
			cy.get('.ui-atomic-button--size-big').contains('Terapkan').click();
			cy.clickButtonTampilkanProp();
			cy.get('.ui-molecules-breadcrumb').contains('Beranda').click();
		}
	});
});
