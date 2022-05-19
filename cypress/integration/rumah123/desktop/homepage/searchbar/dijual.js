describe('Searchbar DIJUAL', () => {
  let data;
  const filter = {
    dijual: {
      kondisi: '[data-test-id="sub-channel"]',
      tipeProperti: '[data-test-id="property-type"]',
      hargaMin: '[data-test-id="min-price"]',
      hargaMax: '[data-test-id="max-price"]'
    }
  };
  beforeEach(function () {
    cy.viewport('macbook-15').visit('/');
  });

  it('C79 As a Consummer (buyer), i want to filter "properti baru" in searchbar', function () {
    cy.inputLocationHomepage('bandung');
    cy.filterHomepage({
      typeFilter: filter.dijual.kondisi,
      value: 'Baru'
    });
    cy.get('[data-test-id="search-button"]').click();
    cy.url().should('include', '/?subChannel=newlaunch');
  });

  it('C80 As a Consummer (buyer), i want to filter "properti seken" in searchbar', function () {
    cy.inputLocationHomepage('bandung');
    cy.filterHomepage({
      typeFilter: filter.dijual.kondisi,
      value: 'Seken'
    });
    cy.get('[data-test-id="search-button"]').click();
    cy.url().should('include', '/?subChannel=subsale');
  });

  it('C83 As a Consummer (buyer), i want to filter residensial in searchbar', function () {
    cy.inputLocationHomepage('bandung');
    cy.filterHomepage({
      typeFilter: filter.dijual.tipeProperti,
      value: 'Residensial'
    });
    cy.get('[data-test-id="search-button"]').click();
    cy.url().should('include', '/residensial');
  });

  it('C68633 As a Consummer (buyer), i want to filter rumah in searchbar', function () {
    cy.inputLocationHomepage('bandung');
    cy.filterHomepage({
      typeFilter: filter.dijual.tipeProperti,
      value: 'Rumah'
    });
    cy.get('[data-test-id="search-button"]').click();
    cy.url().should('include', '/rumah');
  });

  it('C82 As a Consummer (buyer), i want to filter apartement in searchbar', function () {
    cy.inputLocationHomepage('bandung');
    cy.filterHomepage({
      typeFilter: filter.dijual.tipeProperti,
      value: 'Apartemen'
    });
    cy.get('[data-test-id="search-button"]').click();
    cy.url().should('include', '/apartemen');
  });

  it('C84 As a Consummer (buyer), i want to filter ruko in searchbar', function () {
    cy.inputLocationHomepage('bandung');
    cy.filterHomepage({
      typeFilter: filter.dijual.tipeProperti,
      value: 'Ruko'
    });
    cy.get('[data-test-id="search-button"]').click();
    cy.url().should('include', '/ruko');
  });

  it('C85 As a Consummer (buyer), i want to filter tanah in searchbar', function () {
    cy.inputLocationHomepage('bandung');
    cy.filterHomepage({
      typeFilter: filter.dijual.tipeProperti,
      value: 'Tanah'
    });
    cy.get('[data-test-id="search-button"]').click();
    cy.url().should('include', '/tanah');
  });

  it('C86 As a Consummer (buyer), i want to filter pabrik in searchbar', function () {
    cy.inputLocationHomepage('bandung');
    cy.filterHomepage({
      typeFilter: filter.dijual.tipeProperti,
      value: 'Pabrik'
    });
    cy.get('[data-test-id="search-button"]').click();
    cy.url().should('include', '/pabrik');
  });

  it('C87 As a Consummer (buyer), i want to filter kantor in searchbar', function () {
    cy.inputLocationHomepage('bandung');
    cy.filterHomepage({
      typeFilter: filter.dijual.tipeProperti,
      value: 'Kantor'
    });
    cy.get('[data-test-id="search-button"]').click();
    cy.url().should('include', '/kantor');
  });

  it('C88 As a Consummer (buyer), i want to filter gudang in', function () {
    cy.inputLocationHomepage('bandung');
    cy.filterHomepage({
      typeFilter: filter.dijual.tipeProperti,
      value: 'Gudang'
    });
    cy.get('[data-test-id="search-button"]').click();
    cy.url().should('include', '/gudang');
  });

  it('C89 As a Consummer (buyer), i want to filter ruang usaha in searchbar', function () {
    cy.inputLocationHomepage('bandung');
    cy.filterHomepage({
      typeFilter: filter.dijual.tipeProperti,
      value: 'Ruang-usaha'
    });
    cy.get('[data-test-id="search-button"]').click();
    cy.url().should('include', '/ruang-usaha');
  });

  it('C90 As a consummer (buyer), i want to filter minimum harga in searchbar', function () {
    cy.inputLocationHomepage('bandung');
    cy.filterHomepage({
      typeFilter: filter.dijual.hargaMin,
      value: '500Jt'
    });
    cy.get('[data-test-id="search-button"]').click();
    cy.url().should('include', '/?minPrice=500000000');
  });

  it('C91 As a consummer (buyer), i want to filter maximum harga in searchbar', function () {
    cy.inputLocationHomepage('bandung');
    cy.filterHomepage({
      typeFilter: filter.dijual.hargaMax,
      value: '1M'
    });
    cy.get('[data-test-id="search-button"]').click();
    cy.url().should('include', '/?maxPrice=1000000000');
  });
});
