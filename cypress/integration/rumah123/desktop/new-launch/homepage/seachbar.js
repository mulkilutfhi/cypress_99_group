const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
	window.HTMLInputElement.prototype,
	'value'
).set;

describe('Searchbar Homepage', () => {

	beforeEach(function () {
		cy.viewport('macbook-15');
		cy.visit('/');
  });

	it('search listing by type property', () => {
		cy.get('a[href="/perumahan-baru/"]').click();
		cy.get('input[maxlength="80"]').type('bandung', { force: true });
		cy.get('.fade-enter-done').eq(0).click(); // memilih bandung kote di searchbar

		let i;
		let type = [
			'Residensial',
			'Rumah',
			'Apartemen',
			'Tanah',
			'Ruko',
			'Pabrik',
			'Kantor',
			'Gudang',
			'Ruang-usaha'
		];
		let link = [
			'/perumahan-baru/bandung-barat/residensial',
			'/perumahan-baru/bandung-barat/rumah',
			'/perumahan-baru/bandung-barat/apartemen',
			'/perumahan-baru/bandung-barat/tanah',
			'/perumahan-baru/bandung-barat/ruko',
			'/perumahan-baru/bandung-barat/pabrik',
			'/perumahan-baru/bandung-barat/kantor',
			'/perumahan-baru/bandung-barat/gudang',
			'/perumahan-baru/bandung-barat/ruang-usaha'
		];
		for (i = 0; i <= 7; i++) {
			cy.get('div[role="button"]').contains('Residensial')
				.click();
			cy.get('.ui-molecules-dropdown__wrapper.absolute.fade-enter-done .flex.no-wrap.relative.ui-molecules-dropdown__item')
				.contains(type[i])
				.click();

			cy.get('.search-btn').click();
			cy.url().should('include', link[i]);

			cy.get('a[href="/perumahan-baru/"]').click();
		}
	});

	it('search by price', function () {
		cy.get('a[href="/perumahan-baru/"]').click();
		cy.get('input[maxlength="80"]').type('bandung', { force: true });
		cy.get('.ui-molecules-multiple-selection__item:nth-child(2) .ui-atomic-text:nth-child(1)')
			.click();
		cy.get('div[role="button"]')
			.contains('Harga Min')
			.click()
			.get('.ui-molecules-dropdown__item')
			.contains('500Jt')
			.click();

		cy.get('div[role="button"]').contains('Harga Max')
			.click();
		cy.wait(1000);
		cy.get('.ui-molecules-dropdown__item')
			.contains('1M')
			.scrollIntoView()
			.click();
		cy.get('.search-btn').click();

		cy.url().should((url_price) => {
			expect(url_price).to.include(
				'/?minPrice=500000000&maxPrice=1000000000'
			);
		});
	});

	it('C2683	As a consummer (buyer),i want to filter luas tanah ', function () {
		cy.get('a[href="/perumahan-baru/"]').click();
		cy.get('div[role="button"]').contains('Luas Tanah')
			.click();
		cy.get('.ui-molecules-range-slider input[type="range"]:nth-child(1)')
			.then(($range) => {
				const min_range_land = $range[0];
				// set the value manually
				nativeInputValueSetter.call(min_range_land, '100');
				// now dispatch the event
				min_range_land.dispatchEvent(
					new Event('change', { value: '100', bubbles: true })
				);
		});
		cy.get('.ui-molecules-range-slider input[type="range"]:nth-child(2)')
			.then(($range) => {
				const max_range_land = $range[0];
				// set the value manually
				nativeInputValueSetter.call(max_range_land, '150');
				// now dispatch the event
				max_range_land.dispatchEvent(
						new Event('change', { value: '150', bubbles: true })
				);
		});
		cy.wait(1000);
		cy.get('.search-btn').click();
		cy.url().should((url_landsize) => {
			expect(url_landsize).to.include('?minLandArea=100&maxLandArea=150');
		});
	});

	it('C32805	As a consummer (buyer),i want to filter luas bangunan', function () {
		cy.get('a[href="/perumahan-baru/"]').click();
		cy.get('div[role="button"]').contains('Luas Bangunan').click();
		cy.get('.ui-molecules-range-slider input[type="range"]:nth-child(1)')
			.then(($range) => {
				const min_range_building = $range[0];
				// set value manually
				nativeInputValueSetter.call(min_range_building, '50');
				//now dispatch the event
				min_range_building.dispatchEvent(
					new Event('change', { value: '50', bubbles: true })
				);
		});
		cy.get('.ui-molecules-range-slider input[type="range"]:nth-child(2)')
			.then(($range) => {
				const max_range_building = $range[0];
				//set value manually
				nativeInputValueSetter.call(max_range_building, '100');
				//now dispatch the event
				max_range_building.dispatchEvent(
						new Event('change', { value: '100', bubbles: true })
				);
		});
		cy.wait(1000);
		cy.get('.search-btn').click();
		cy.url().should((url_landsize) => {
			expect(url_landsize).to.include(
				'?minBuiltupSize=50&maxBuiltupSize=100'
			);
		});
	});
});
