describe('Berita Popular Section', () => {
  before(function () {
    cy.viewport('macbook-15');
  });

  it('C2705 in berita popular should have title section', () => {
    cy.visit('/');
    cy.get('a[href="/perumahan-baru/"]').click();

    cy.get('.ui-newlaunch-home-page__article__content > h2').then((title) => {
      expect(title).to.be.visible;
      cy.log(title.text());
    });
  });

  it('C2704 in berita popular should have 5 cardnews', () => {
    cy.get('.ui-newlaunch-home-page__article__content--section > div > div').then((card) => {
      expect(card).to.have.length(3);
    });
  });

  it('C2705 berita popular should be have title card', () => {
    for (let i = 0; i <= 2; i++)
      cy.get(
        '.ui-organisms-card-r123-article__content > .ui-organisms-card-r123-article__content--category'
      )
        .eq(i)
        .then((category) => {
          expect(category).to.be.visible;

          cy.log(category.text());
        });
  });

  it('C68636 berita popular should appear highlight', () => {
    for (let i = 0; i <= 2; i++)
      cy.get('.ui-organisms-card-r123-article__content > h3')
        .eq(i)
        .then((highlight) => {
          expect(highlight).to.be.visible;

          cy.log(highlight.text());
        });
  });

  it('C68637 click berita popular', () => {
    cy.get('.ui-organisms-card-r123-article__content > h3')
      .eq(0)
      .click({ force: true })
      .location()
      .should((url) => {
        expect(url.origin).to.eq('https://artikel.rumah123.com');
      });
  });
});
