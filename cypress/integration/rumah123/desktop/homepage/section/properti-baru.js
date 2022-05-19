describe('Properti Baru', () => {
  let data;

  before(function () {
    cy.viewport('macbook-15').visit('/');
    cy.fixture('dijual/url-dijual').then((url) => {
      data = url;
    });
  });

  it('C68099 properti baru section must be visible', () => {
    cy.get('.ui-home-page__new-property__wrapper > h2').should((wording) => {
      expect(wording).to.be.visible;
      expect(wording).to.contain('Daftar Properti Baru');
    });
  });

  it('C68100 properti baru section must to have 3 project card', () => {
    cy.get('.ui-molecules-card-carousel-r123__content--item').should('be.visible');
  });

  it('C68101 properti baru section must to have logo developer', () => {
    cy.get(
      '.ui-molecules-card-carousel-r123__content--item > div > a > span > .ui-organisms-card-r123-popular__logo.text-right > img'
    )
      .should('be.visible')
      .and('have.attr', 'loading', 'lazy');
  });

  it('C68102 properti baru section must to have picture', () => {
    cy.get('.ui-organisms-card-r123-popular__image.relative')
      .eq(6)
      .should((image) => {
        expect(image).to.be.visible;
        expect(image).to.have.descendants('img');
      });
  });

  it('C68103 properti baru section must to have title', () => {
    cy.get('.ui-organisms-card-r123-popular__content__info-section')
      .eq(6)
      .should((title) => {
        expect(title).to.be.visible;
      });
  });

  it('C68104 properti baru section must to have info size', () => {
    cy.get('.ui-organisms-card-r123-popular__content__property-info-size')
      .eq(6)
      .should((info_size) => {
        expect(info_size).to.be.visible;
        expect(info_size).to.contain('Luas Bangunan');
      });
  });

  it('C68105 click one of card listing in properti baru', () => {
    cy.get('.ui-molecules-card-carousel-r123__content--item > div > a ')
      .eq(0)
      .click({ force: true })
      .location()
      .should((loct) => {
        expect(loct.pathname).to.include('/perumahan-baru/properti/');
      });
  });
});
