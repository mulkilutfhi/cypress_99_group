describe('doing ckeck all filter in advance search in SRP', function () {

	beforeEach(() => {
		cy.viewport('macbook-15').visit('/jual/rumah');
	});

	it('C2308 Search by Keyword', function () {
		cy.get('#formmodel-text').type('rumah minimalis');
		cy.get('.col-xs-12 > button').click();

		cy.url().should((url_keyword) => {
			expect(url_keyword).to.include('?keyword');
		});
	});

	it('C2309 Search by Location Specific', function () {
		cy.get('.input-group > [data-attribute-name="location"]').type(
			'ujung berung'
		);
		cy.get('.slide-filter-toggle--slide-down').click();
		cy.get('.col-lg-12.section-b.text-center > button').click();

		cy.url().should((url_location_specific) => {
			expect(url_location_specific).to.include('/ujung-berung');
		});
	});

	it('C2310 Search by Property Type', function () {
		cy.get('[name="FormModel[propertyType]"]')
			.select('Ruko')
			.should('have.value', 2);
		cy.get('.slide-filter-toggle--slide-down').click();
		cy.get('.col-lg-12.section-b.text-center > button').click();

		cy.url().should((url_type_prop) => {
			expect(url_type_prop).to.include('/ruko');
		});
	});

	it('C2311 Search by Type Market', function () {
		cy.get('[name="FormModel[marketType]"]')
			.select('Secondary')
			.should('have.value', 2);
		cy.get('.slide-filter-toggle--slide-down').click();
		cy.get('.col-lg-12.section-b.text-center > button').click();

		cy.url().should((url_type_market) => {
			expect(url_type_market).to.include('?tipe_pasar=secondary');
		});
	});

	it('C2312 Search by Certificate', function () {
		cy.get('[name="FormModel[certificationType]"]')
			.select('HGB')
			.should('have.value', 1);
		cy.get('.slide-filter-toggle--slide-down').click();
		cy.get('.col-lg-12.section-b.text-center > button').click();

		cy.url().should((url_certificate) => {
			expect(url_certificate).to.include('?tipe_sertifikat=hgb');
		});
	});

	it('C2313 Search by Price', function () {
		cy.get('[name="mask-minPrice"]').click();
		cy.get('[name="mask-maxPrice"]').type('1000000000');

		cy.get('.slide-filter-toggle--slide-down').click();
		cy.get('.col-lg-12.section-b.text-center > button').click();

		cy.url().should((url_minprice) => {
			expect(url_minprice).to.include('?harga_maks=1mily');
		});
	});

	it('C2315 Search by Bed Room', function () {
		cy.get('.slide-filter-toggle--slide-down').click();
		cy.get('#formmodel-minbedrooms').select('2').should('have.value', 2);
		cy.get('#formmodel-maxbedrooms').select('4').should('have.value', 4);
		cy.get('.col-lg-12.section-b.text-center > button').click();

		cy.url().should((url_betroom) => {
			expect(url_betroom).to.include(
				'?kamar_tidur_min=2&kamar_tidur_maks=4');
		});
	});

	it('C2316 Search by BathRoom', function () {
		cy.get('.slide-filter-toggle--slide-down').click();
		cy.get('[name="FormModel[minBathrooms]"]')
			.select('1')
			.should('have.value', 1);
		cy.get('[name="FormModel[maxBathrooms]"]')
			.select('2')
			.should('have.value', 2);
		cy.get('.col-lg-12.section-b.text-center > button').click();

		cy.url().should((url_bathroom) => {
			expect(url_bathroom).to.include(
				'?kamar_mandi_min=1&kamar_mandi_maks=2');
		});
	});

	it('C2317 Search by Land Size', function () {
		cy.get('.slide-filter-toggle--slide-down').click();
		cy.get('[name="FormModel[minLandSize]"]')
			.select('75 m²')
			.should('have.value', 75);
		cy.get('[name="FormModel[maxLandSize]"]')
			.select('100 m²')
			.should('have.value', 100);
		cy.get('.col-lg-12.section-b.text-center > button').click();

		cy.url().should((url_landsize) => {
			expect(url_landsize).to.include(
				'?luas_tanah_min=75&luas_tanah_maks=100');
		});
	});

	it('C2318 Search by Building Size', function () {
		cy.get('.slide-filter-toggle--slide-down').click();
		cy.get('[name="FormModel[minBuildingSize]"]')
			.select('50 m²')
			.should('have.value', 50);
		cy.get('[name="FormModel[maxBuildingSize]"]')
			.select('75 m²')
			.should('have.value', 75);
		cy.get('.col-lg-12.section-b.text-center > button').click();

		cy.url().should((url_buildingsize) => {
			expect(url_buildingsize).to.include(
				'?luas_bangunan_min=50&luas_bangunan_maks=75');
		});
	});
});
