describe('testing filter in SRP', function () {
  const filterDijual = {
    tipeListing: 0,
    kondisi: 1,
    tipeProperti: 2,
    hargaMin: 3,
    hargaMax: 4
  };

  beforeEach(function () {
    cy.viewport('macbook-15').visit('/jual/residensial');
  });

  it('C55740	As a Consummer (buyer), i want to filter "properti baru" in searchbar', function () {
    cy.selectFilter({
      indexTokenFilter: filterDijual.kondisi,
      selectDropdown: 'Baru'
    });
    cy.url().should('include', '/perumahan-baru/residensial');
  });
  it('C55741	As a Consummer (buyer), i want to filter "properti seken" in search bar', function () {
    cy.selectFilter({
      indexTokenFilter: filterDijual.kondisi,
      selectDropdown: 'Seken'
    });
    cy.url().should('include', '/jual/residensial/?subChannel=subsale');
  });
  it('C55743	As a Consummer (buyer), i want to filter residentsial in searchbar ', function () {
    cy.selectFilter({
      indexTokenFilter: filterDijual.tipeProperti,
      selectDropdown: 'Residensial'
    });
    cy.url().should('include', '/jual/residensial');
  });
  it('C73035	As a Consummer (buyer), i want to filter rumah in searchbar', function () {
    cy.selectFilter({
      indexTokenFilter: filterDijual.tipeProperti,
      selectDropdown: 'Rumah'
    });
    cy.url().should('include', '/jual/rumah');
  });
  it('C55742	As a Consummer (buyer), i want to filter apartement in searchbar ', function () {
    cy.selectFilter({
      indexTokenFilter: filterDijual.tipeProperti,
      selectDropdown: 'Apartemen'
    });
    cy.url().should('include', '/jual/apartemen');
  });
  it('C55744	As a Consummer (buyer), i want to filter ruko in searchbar', function () {
    cy.selectFilter({
      indexTokenFilter: filterDijual.tipeProperti,
      selectDropdown: 'Ruko'
    });
    cy.url().should('include', '/jual/ruko');
  });
  it('C55745	As a Consummer (buyer), i want to filter tanah in searchbar ', function () {
    cy.selectFilter({
      indexTokenFilter: filterDijual.tipeProperti,
      selectDropdown: 'Tanah'
    });
    cy.url().should('include', '/jual/tanah');
  });
  it('C55746	As a Consummer (buyer), i want to filter pabrik in searchbar ', function () {
    cy.selectFilter({
      indexTokenFilter: filterDijual.tipeProperti,
      selectDropdown: 'Pabrik'
    });
    cy.url().should('include', '/jual/pabrik');
  });
  it('C55747	As a Consummer (buyer), i want to filter kantor in searchbar ', function () {
    cy.selectFilter({
      indexTokenFilter: filterDijual.tipeProperti,
      selectDropdown: 'Kantor'
    });
    cy.url().should('include', '/jual/kantor');
  });
  it('C55748	As a Consummer (buyer), i want to filter gudang in searchbar ', function () {
    cy.selectFilter({
      indexTokenFilter: filterDijual.tipeProperti,
      selectDropdown: 'Gudang'
    });
    cy.url().should('include', '/jual/gudang');
  });
  it('C55749	As a Consummer (buyer), i want to filter ruang usaha in searchbar ', function () {
    cy.selectFilter({
      indexTokenFilter: filterDijual.tipeProperti,
      selectDropdown: 'Ruang-usaha'
    });
    cy.url().should('include', '/jual/ruang-usaha');
  });
  it('C55750	As a consummer (buyer), i want to filter harga min ', function () {
    cy.selectFilter({
      indexTokenFilter: filterDijual.hargaMin,
      selectDropdown: '300Jt'
    });
    cy.url().should('include', '?minPrice=300000000');
  });
  it('C55751	As a consummer (buyer), i want to filter harga max ', function () {
    cy.selectFilter({
      indexTokenFilter: filterDijual.hargaMax,
      selectDropdown: '600Jt'
    });
    cy.url().should('include', '?maxPrice=600000000');
  });
  it('C55752	As a consummer (buyer),i want to filter luas tanah', function () {});
});
