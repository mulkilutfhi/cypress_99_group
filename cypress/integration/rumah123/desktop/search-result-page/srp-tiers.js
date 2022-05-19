function makeTitle(slug) {
  var words = slug.split('-');

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  return words.join(' ');
}

const propertyTypes = [
  'residensial',
  'rumah',
  'apartemen',
  'gudang',
  'kantor',
  'pabrik',
  'ruang-usaha',
  'ruko',
  'tanah'
];

propertyTypes.map((propertyType) => {
  describe(`SRP Tiers ${propertyType}`, function () {
    it(`Should showing the right title for ${propertyType} Tier 1`, function () {
      cy.viewport('macbook-15').visit(`/jual/${propertyType}/`);
      cy.get('[data-test-id="srp-title"] h1').should(
        'have.text',
        `${makeTitle(propertyType)} dijual di Indonesia`
      );
    });
    it(`Should showing the right title for ${propertyType} Tier 2 Province`, function () {
      cy.viewport('macbook-15').visit(`/jual/jawa-barat/${propertyType}/`);
      cy.get('[data-test-id="srp-title"] h1').should(
        'have.text',
        `${makeTitle(propertyType)} dijual di Jawa Barat`
      );
    });

    it(`Should showing the right title for ${propertyType} Tier 2 City`, function () {
      cy.viewport('macbook-15').visit(`/jual/bandung/${propertyType}/`);
      cy.get('[data-test-id="srp-title"] h1').should(
        'have.text',
        `${makeTitle(propertyType)} dijual di Bandung`
      );
    });

    it(`Should showing the right title for ${propertyType} Tier 3 District`, function () {
      cy.viewport('macbook-15').visit(`/jual/bandung/dago/${propertyType}/`);
      cy.get('[data-test-id="srp-title"] h1').should(
        'have.text',
        `${makeTitle(propertyType)} dijual di Dago, Bandung`
      );
    });
  });
});
