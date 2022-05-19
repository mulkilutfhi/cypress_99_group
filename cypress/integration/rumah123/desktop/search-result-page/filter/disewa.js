describe('testing filter dijjual', function () {
  const filterDisewa = {
    tipeListing: 0,
    tipeProperti: 1,
    hargaMin: 2,
    hargaMax: 3
  };
  beforeEach(function () {
    cy.viewport('macbook-15').visit('/jual/residensial');
    cy.selectFilter({
      indexTokenFilter: filterDisewa.tipeListing,
      selectDropdown: 'Disewa'
    });
  });
  it('C55756	As a Consummer (buyer), i want to filter residentsial in searchbar ', function () {
    cy.selectFilter({
      indexTokenFilter: filterDisewa.tipeProperti,
      selectDropdown: 'Residensial'
    });
    cy.url().should('include', '/sewa/residensial');
  });
  it('C55757	As a Consummer (buyer), i want to filter rumah in searchbar', function () {
    cy.selectFilter({
      indexTokenFilter: filterDisewa.tipeProperti,
      selectDropdown: 'Rumah'
    });
    cy.url().should('include', '/sewa/rumah');
  });
  it('C55755	As a Consummer (buyer), i want to filter apartement in searchbar ', function () {
    cy.selectFilter({
      indexTokenFilter: filterDisewa.tipeProperti,
      selectDropdown: 'Apartemen'
    });
    cy.url().should('include', '/sewa/apartemen');
  });
  it('C55757	As a Consummer (buyer), i want to filter ruko in searchbar', function () {
    cy.selectFilter({
      indexTokenFilter: filterDisewa.tipeProperti,
      selectDropdown: 'Ruko'
    });
    cy.url().should('include', '/sewa/ruko');
  });
  it('C55758	As a Consummer (buyer), i want to filter tanah in searchbar ', function () {
    cy.selectFilter({
      indexTokenFilter: filterDisewa.tipeProperti,
      selectDropdown: 'Tanah'
    });
    cy.url().should('include', '/sewa/tanah');
  });
  it('C55759	As a Consummer (buyer), i want to filter pabrik in searchbar ', function () {
    cy.selectFilter({
      indexTokenFilter: filterDisewa.tipeProperti,
      selectDropdown: 'Pabrik'
    });
    cy.url().should('include', '/sewa/pabrik');
  });
  it('C55760	As a Consummer (buyer), i want to filter kantor in searchbar ', function () {
    cy.selectFilter({
      indexTokenFilter: filterDisewa.tipeProperti,
      selectDropdown: 'Kantor'
    });
    cy.url().should('include', '/sewa/kantor');
  });
  it('C55761	As a Consummer (buyer), i want to filter gudang in searchbar ', function () {
    cy.selectFilter({
      indexTokenFilter: filterDisewa.tipeProperti,
      selectDropdown: 'Gudang'
    });
    cy.url().should('include', '/sewa/gudang');
  });
  it('C55762	As a Consummer (buyer), i want to filter ruang usaha in searchbar ', function () {
    cy.selectFilter({
      indexTokenFilter: filterDisewa.tipeProperti,
      selectDropdown: 'Ruang-usaha'
    });
    cy.url().should('include', '/sewa/ruang-usaha');
  });
  it('C55763	As a consummer (buyer), i want to filter harga min ', function () {
    cy.selectFilter({
      indexTokenFilter: filterDisewa.hargaMin,
      selectDropdown: '300Jt'
    });
    cy.url().should('include', '?minPrice=300000000');
  });
  it('C55764	As a consummer (buyer), i want to filter harga max ', function () {
    cy.selectFilter({
      indexTokenFilter: filterDisewa.hargaMax,
      selectDropdown: '600Jt'
    });
    cy.url().should('include', '?maxPrice=600000000');
  });
  it('C55767	As a consummer (buyer),i want to filter luas tanah', function () {});
});
