describe('Msite Suggestion Autocomplete (SRP)',function () {

	beforeEach(function () {
		cy.viewport('iphone-x').visit('/jual/bandung/residensial/');
	});

	it('Search by province', function () {
		cy.gotoSearchBar();
		cy.inputLocation({ province: 'jawa barat' });
		cy.checkingSuggestionMainLocation({
			index: 0,
			value: 'Jawa Barat',
			style: 'rgb(41, 127, 185)'
		});
		cy.checkingSuggestionChildLocation({
			index: 0,
			value: 'Indonesia',
			style: 'rgb(105, 118, 132)'
		});
		cy.checkingSuggestionLabel({
			index: 0,
			value: 'Provinsi',
			style: 'rgb(51, 63, 72)'
		});
	});

	it('Search by city', function () {
		cy.gotoSearchBar();
		cy.inputLocation({ city: 'bandung' });
		cy.checkingSuggestionMainLocation({
			index: 0,
			value: 'Bandung',
			style: 'rgb(41, 127, 185)'
		});
		cy.checkingSuggestionChildLocation({
			index: 0,
			value: 'Jawa Barat',
			style: 'rgb(105, 118, 132)'
		});
		cy.checkingSuggestionLabel({
			index: 0,
			value: 'Kota',
			style: 'rgb(51, 63, 72)'
		});
	});

	it('Search by district', function () {
		cy.gotoSearchBar();
		cy.inputLocation({ area: 'antapani' });
		cy.checkingSuggestionMainLocation({
			index: 0,
			value: 'Antapani',
			style: 'rgb(41, 127, 185)'
		});
		cy.checkingSuggestionChildLocation({
			index: 0,
			value: 'Bandung',
			style: 'rgb(105, 118, 132)'
		});
		cy.checkingSuggestionLabel({
			index: 0,
			value: 'Area',
			style: 'rgb(51, 63, 72)'
		});
	});

	it('Search by ID listing', function () {
		cy.gotoSearchBar();
		cy.inputLocation({ freetext: 'hos7999253' });
		cy.listingSuggestionAttr();
	});

	it('Check suggestion according province level', () => {
		cy.gotoSearchBar();
		cy.inputLocation({ province: 'jawa' });
		cy.get(
			'.ui-molecules-multiple-selection__item > div > div > div > p > b'
		).then((element) => {
				for (let i = 0; i < element.length; i++) {
					cy.wrap(element)
						.should('include.text', 'jawa')
						.and('have.css', 'color', 'rgb(32, 40, 46)');
				}
		});
	});

	it('Check suggestion according city level', function () {
		cy.gotoSearchBar();
		cy.inputLocation({ city: 'bandung' });
		cy.get(
			'.ui-molecules-multiple-selection__item > div > div > div > p > b'
		).then((element) => {
				for (let i = 0; i < element.length; i++) {
					cy.wrap(element)
						.should('include.text', 'bandung')
						.and('have.css', 'color', 'rgb(32, 40, 46)');
				}
		});
	});

	it('Check suggestion according area level', function () {
		cy.gotoSearchBar();
		cy.inputLocation({ area: 'sukajadi' });
		cy.get(
			'.ui-molecules-multiple-selection__item > div > div > div > p > b'
		).then((element) => {
				for (let i = 0; i < element.length; i++) {
					cy.wrap(element)
						.should('include.text', 'sukajadi')
						.and('have.css', 'color', 'rgb(32, 40, 46)');
				}
		});
	});

	it('Checking pencarian terakhir', function () {
		const location1 = [
			'Jawa Barat',
			'Bekasi',
			'Antapani',
			'Bsd',
			'Sukajadi'
		];

		for (let i = 0; i < location1.length; i++) {
			cy.gotoSearchBar();
			cy.clickColoumnInput();
			cy.get('.ui-atomic-badges--with-close').then((token) => {
				if (token.is.apply) {
					cy.get('.ui-atomic-badges__close').click();
					cy.get(
						'.ui-molecules-multiple-selection__toggle-content > ul > li > input'
						).type(location1[i]);
					}
				else {
					cy.get(
						'.ui-molecules-multiple-selection__toggle-content > ul > li > input'
						).type(location1[i]);
					}
				});
			cy.get('.ui-molecules-multiple-selection__item > div > div')
				.eq(0)
				.click();
			cy.clickButtonTerapkan();
		}
		cy.gotoSearchBar();
		cy.clickColoumnInput();

		const location2 = [
			'Sukajadi',
			'BSD',
			'Antapani',
			'Bekasi',
			'Jawa Barat'
		];
		for (let i = 0; i < 5; i++) {
			cy.validationRecentSearch({
				index: i,
				text: location2[i]
			});
		}
	});
});
