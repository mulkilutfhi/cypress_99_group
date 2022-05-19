describe('Listing Recomendation in LDP', function () {
  let imageListing = '.ui-atomic-image--type-rounded';

  beforeEach(function () {
    cy.viewport('macbook-15').visit('/properti/landak/hos8749298/');
  });

  it('C46501 Listing recommendation must be same district', function () {
    cy.get('.ui-atomic-card.ui-organisms-card-r123-recommendation')
      .find('[title="Meranti, Landak"]')
      .then((location) => {
        for (let i = 0; i < location.length; i++) {
          var location_district = '';
          cy.get('[title="Landak"]')
            .eq(i)
            .each(($el, index, $list) => {
              const elment = $el.text();
              var district = elment.split(', ');
              district = district[0].trim();
              location_district = district;
            })
            .then(function () {
              expect(location_district).to.equal('Landak');
            });
        }
      });
  });

  it('C46684 As a user, the properti serupa section should be appear in PDP', function () {
    cy.get('.ui-property-page__recommendation-bottom').then((section_recomendation) => {
      cy.get(section_recomendation).should('be.visible');
    });
  });

  it('C46503 Listing recommendation must be same city', function () {
    cy.get('.ui-atomic-card.ui-organisms-card-r123-recommendation')
      .find('[title=" Meranti, Landak"]')
      .then((location) => {
        for (let i = 0; i < location.length; i++) {
          var location_city = '';
          cy.get('[title="Meranti, Landak"]')
            .eq(i)
            .each(($el, index, $list) => {
              const elment = $el.text();
              var city = elment.split(', ');
              city = city[1].trim();
              location_city = city;
            })
            .then(function () {
              expect(location_city).to.equal('Landak');
            });
        }
      });
  });

  it('C46689 As a user, i want click one listing recommendation', function () {
    cy.get('.ui-organisms-card-r123-recommendation__top-row > h3 > a > span')
      .eq(0)
      .then(($title) => {
        const text1 = $title.text();
        cy.get('.ui-organisms-card-r123-recommendation').eq(0).click();

        cy.get('#property-summary > h1').then(($titleLDP) => {
          const text2 = $titleLDP.text();
          expect(text2).to.equal(text1);
        });
      });
  });
});
