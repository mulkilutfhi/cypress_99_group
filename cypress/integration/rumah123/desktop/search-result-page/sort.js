const url = {
  terbaru: '?sort=posted-desc',
  hargaTertinggi: '?sort=price-desc',
  hargaTerendah: '?sort=price-asc'
};

describe('Sort', () => {
  beforeEach(function () {
    cy.viewport('macbook-15').visit('/jual/residensial');
  });

  it('C600 As a Consummer, I want to Sort listing by latest', function () {
    cy.openDropdown();
    cy.selectSortType({
      text: 'Terbaru',
      pathURL: url.terbaru
    });
  });

  it('C601 As a Consummer, I want to Sort listing by lowest price', function () {
    cy.openDropdown();
    cy.selectSortType({
      text: 'Harga Terendah',
      pathURL: url.hargaTerendah
    });
  });

  it('C602 As a Consummer, I want to Sort listing by highest price', function () {
    cy.openDropdown();
    cy.selectSortType({
      text: 'Harga Tertinggi',
      pathURL: url.hargaTertinggi
    });
  });

  it('C603 As a Consummer, I want to Sort listing by default', function () {
    cy.openDropdown();
    cy.selectSortType({
      text: 'Rekomendasi',
      pathURL: '/jual/residensial'
    });
  });
});
