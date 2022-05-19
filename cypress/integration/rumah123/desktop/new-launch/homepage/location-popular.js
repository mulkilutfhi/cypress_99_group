describe('Jelajahi Lokasi Popular Section', () => {
  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('in lokasi popular should be displays title section', () => {
    cy.visit('/');
    cy.get('a[href="/perumahan-baru/"]').click();

    cy.get('.ui-molecules-popular-location-slider-r123--last > h2').then((title) => {
      cy.log(title.text());
      expect(title).to.be.visible;
    });
  });

  it('in lokasi popular should be appear 6 card projects', () => {
    cy.get('.ui-molecules-popular-location-slider-r123__slider--item').should('have.length', 6);
  });

  it('in lokasi popular should be have location', () => {
    for (let i = 0; i <= 5; i++)
      cy.get('.ui-molecules-popular-location-slider-r123__slider--caption > h3')
        .eq(i)
        .then((location) => {
          expect(location).to.be.visible;
        });
  });

  it('click in lokasi popular, then should be direct to releae.core', () => {
    cy.get('.ui-molecules-popular-location-slider-r123__slider--item').eq(0).click({ force: true }); //for example hit card 'Bekasi'
    cy.location().then((url) => {
      expect(url.pathname).include('/perumahan-baru/');
    });
  });
});
