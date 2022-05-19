const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
	window.HTMLInputElement.prototype,
	'value'
).set;

describe('Msite Searchbar Dijual', function () {
	let data;
	beforeEach(function () {
		cy.viewport('iphone-x').visit('/');
		cy.fixture('listing-dictionary').then((listing) => {
			data = listing.rumah123;
		});
	});

	it('As a Consummer (buyer), i want to search listing "dijual"', function () {
		cy.gotoSearchPage();
		cy.inputCariPropertiBerdasarkan(data.city);
		cy.clickButtonTampilkanProp();
		cy.get('.ui-atomic-text--styling-featured')
			.invoke('text')
			.then((h1) => {
				expect(h1.trim()).to.include(data.city);
		});
	});

	it('As a Consummer (buyer), i want to filter "properti baru" in searchbar', function () {
		cy.gotoSearchPage();
		cy.clickTypeListing();
		cy.isSelectTypeListing('Baru');
		cy.clickButtonTampilkanProp();
		cy.url().should('include', '?subChannel=newlaunch');
	});

	it('As a Consummer (buyer), i want to filter "properti seken" in search bar', function () {
		cy.gotoSearchPage();
		cy.clickTypeListing();
		cy.isSelectTypeListing('Seken');
		cy.clickButtonTampilkanProp();
		cy.url().should('include', '?subChannel=subsale');
	});

	it('C82 until C89', function () {
		cy.gotoSearchPage();
		cy.isSelectTypeProperti();
		const type = [
			'Residensial',
			'Rumah',
			'Apartemen',
			'Ruko',
			'Tanah',
			'Pabrik',
			'Kantor',
			'Gudang',
			'Ruang-usaha'
		];
		for (let i = 0; i < type.length; i++) {
			cy.get('.ui-molecules-list__divider-none--vertical > div')
				.contains(type[i])
				.click();
			cy.clickButtonTampilkanProp();
			cy.url().should('include', type[i].toLowerCase());
			cy.get('[alt="rumah123"]').click();
			cy.gotoSearchPage();
			cy.isSelectTypeProperti();
		}
	});

	it('As a consummer (buyer), i want to filter harga min', function () {
		cy.gotoSearchPage();
		cy.isPriceMin('500Jt');
		cy.clickButtonTampilkanProp();
		cy.url().should('include', '?minPrice=500000000');
	});

	it('As a consummer (buyer), i want to filter harga max', function () {
		cy.gotoSearchPage();
		cy.isPriceMax('1M');
		cy.clickButtonTampilkanProp();
		cy.url().should('include', '?maxPrice=1000000000');
	});

	it('As a consummer (buyer),i want to filter luas tanah', function () {
		cy.gotoSearchPage();

		cy.get('input[type="range"]')
			.eq(0)
			.then(($range) => {
				const range = $range[0];
				nativeInputValueSetter.call(range, 50);
				range.dispatchEvent(
					new Event('change', { value: 50, bubbles: true })
				);
			});

		cy.get('input[type="range"]')
			.eq(1)
			.then(($range) => {
				const range = $range[0];
				nativeInputValueSetter.call(range, 100);
				range.dispatchEvent(
					new Event('change', { value: 100, bubbles: true })
				);
			});

		cy.get('.ui-organisms-mobile-range-filter__input > p')
			.eq(0)
			.should('have.text', '50m² - 100m²');
		cy.clickButtonTampilkanProp()
			.url()
			.should('include', '?minLandArea=50&maxLandArea=100');
	});

	it('As a consummer (buyer), i want ti filter luas bangunan', function () {
		cy.gotoSearchPage();
		cy.get('input[type="range"]')
			.eq(3)
			.then(($range) => {
				const range = $range[0];
				nativeInputValueSetter.call(range, 100);
				range.dispatchEvent(
					new Event('change', {
						value: 100,
						bubbles: true
					})
				);
			});
		cy.clickButtonTampilkanProp()
			.url()
			.should('include', '?maxBuiltupSize=100'
		);
	});

	it('As a consummer (buyer) i want to filter kamar tidur', function () {
		cy.gotoSearchPage();
		cy.setFilterBedroom('3+');
		cy.clickButtonTampilkanProp().url().should('include', '?bedroom=3');
	});

	it('As a consumer (buyer) i want to filter kamar mandi', function () {
		cy.gotoSearchPage();
		cy.setFilterBathroom('1+');
		cy.clickButtonTampilkanProp().url().should('include', '?bathroom=1');
	});

	it('As a consumer (buyer) i want to filter verified', function () {
		cy.gotoSearchPage();
		cy.setFilterVerified();
		cy.clickButtonTampilkanProp().url().should('include', '?isVerified=1');
	});
});
