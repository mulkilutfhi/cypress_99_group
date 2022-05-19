describe('Searchbar DISEWA', () => {
  let data;
  const filter = {
    disewa: {
      tipeProperti: '[data-test-id="property-type"]',
      hargaMin: '[data-test-id="min-price"]',
      hargaMax: '[data-test-id="max-price"]',
      luasTanah: '.ui-organism-search-filter__range-filter'
    }
  };

  beforeEach(function () {
    cy.viewport('macbook-15').visit('/');
    cy.selectListingType('Disewa');
  });

  it('C2219 As a Consummer (buyer), i want to search listing "disewa"', () => {
    cy.inputLocationHomepage('bandung');
    cy.get('[data-test-id="search-button"]').click();
    cy.url().should('include', '/sewa');
  });

  it('C2223 As a Consummer (buyer), i want to filter residensial in searchbar', function () {
    cy.inputLocationHomepage('bandung');
    cy.filterHomepage({
      typeFilter: filter.disewa.tipeProperti,
      value: 'Residensial'
    });
    cy.get('[data-test-id="search-button"]').click();
    cy.url().should('include', '/sewa/bandung/residensial');
  });

  it('C68634 As a Consummer (buyer), i want to filter rumah in searchbar', function () {
    cy.inputLocationHomepage('bandung');
    cy.filterHomepage({
      typeFilter: filter.disewa.tipeProperti,
      value: 'Rumah'
    });
    cy.get('[data-test-id="search-button"]').click();
    cy.url().should('include', '/sewa/bandung/rumah');
  });

  it('C2222 As a Consummer (buyer), i want to filter apartement in searchbar', function () {
    cy.inputLocationHomepage('bandung');
    cy.filterHomepage({
      typeFilter: filter.disewa.tipeProperti,
      value: 'Apartemen'
    });
    cy.get('[data-test-id="search-button"]').click();
    cy.url().should('include', '/sewa/bandung/apartemen');
  });

  it('C2224 As a Consummer (buyer), i want to filter ruko in searchbar', function () {
    cy.inputLocationHomepage('bandung');
    cy.filterHomepage({
      typeFilter: filter.disewa.tipeProperti,
      value: 'Ruko'
    });
    cy.get('[data-test-id="search-button"]').click();
    cy.url().should('include', '/sewa/bandung/ruko');
  });

  it('C2225 As a Consummer (buyer), i want to filter tanah in searchbar', function () {
    cy.inputLocationHomepage('bandung');
    cy.filterHomepage({
      typeFilter: filter.disewa.tipeProperti,
      value: 'Tanah'
    });
    cy.get('[data-test-id="search-button"]').click();
    cy.url().should('include', '/sewa/bandung/tanah');
  });

  it('C2226 As a Consummer (buyer), i want to filter pabrik in searchbar', function () {
    cy.inputLocationHomepage('bandung');
    cy.filterHomepage({
      typeFilter: filter.disewa.tipeProperti,
      value: 'Pabrik'
    });
    cy.get('[data-test-id="search-button"]').click();
    cy.url().should('include', '/sewa/bandung/pabrik');
  });

  it('C2227 As a Consummer (buyer), i want to filter kantor in searchbar', function () {
    cy.inputLocationHomepage('bandung');
    cy.filterHomepage({
      typeFilter: filter.disewa.tipeProperti,
      value: 'Kantor'
    });
    cy.get('[data-test-id="search-button"]').click();
    cy.url().should('include', '/sewa/bandung/kantor');
  });

  it('C2228 As a Consummer (buyer), i want to filter gudang in', function () {
    cy.inputLocationHomepage('bandung');
    cy.filterHomepage({
      typeFilter: filter.disewa.tipeProperti,
      value: 'Gudang'
    });
    cy.get('[data-test-id="search-button"]').click();
    cy.url().should('include', '/sewa/bandung/gudang');
  });

  it('C2229 As a Consummer (buyer), i want to filter ruang usaha in searchbar', function () {
    cy.inputLocationHomepage('bandung');
    cy.filterHomepage({
      typeFilter: filter.disewa.tipeProperti,
      value: 'Ruang-usaha'
    });
    cy.get('[data-test-id="search-button"]').click();
    cy.url().should('include', '/sewa/bandung/ruang-usaha');
  });

  it('C2230 As a consummer (buyer), i want to filter minimum harga in searchbar', function () {
    cy.inputLocationHomepage('bandung');
    cy.filterHomepage({
      typeFilter: filter.disewa.hargaMin,
      value: '500Jt'
    });
    cy.get('[data-test-id="search-button"]').click();
    cy.url().should('include', '?minPrice=');
  });

  it('C2231 As a consummer (buyer), i want to filter maximum harga in searchbar', function () {
    cy.inputLocationHomepage('bandung');
    cy.filterHomepage({
      typeFilter: filter.disewa.hargaMax,
      value: '1M'
    });
    cy.get('[data-test-id="search-button"]').click();
    cy.url().should('include', '?maxPrice=');
  });
});
