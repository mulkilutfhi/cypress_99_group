describe('Gallery Property', () => {
  const nextArrow = '.ui-molecules-carousel__action--next';

  beforeEach(function () {
    cy.viewport('macbook-15').visit('/perumahan-baru/');
  });

  it('C2690	In galeri properti must be displays based on projects liting display from Admin', () => {
    cy.get('.ui-home-page__popular-listing-wrapper')
      .find('.ui-molecules-card-carousel-r123__content--item')
      .eq(0)
      .should(($cardGalleryProperty) => {
        expect($cardGalleryProperty).to.be.visible;
      });
  });

  it('checking title section', () => {
    cy.get('.ui-home-page__popular-listing > h2').then((title) => {
      cy.log(title.text());
      expect(title).to.be.visible;
    });
  });

  it('galeri properti must to have logo developer', () => {
    const logoDev = '.ui-organisms-card-r123-popular__logo > img';

    cy.containerGalleryProperty({ element: logoDev }).then((logo) => {
      for (let index = 0; index < logo.length; index++) {
        if (logo.length > 2) {
          cy.wrap(logo).eq(index).should('be.visible').and('have.attr', 'loading', 'lazy');
          cy.containerGalleryProperty({ element: nextArrow }).click({ force: true });
        } else {
          cy.wrap(logo).eq(index).should('be.visible').and('have.attr', 'loading', 'lazy');
        }
      }
    });
  });

  it('checking all element in galery properti section', () => {
    const card = '.ui-molecules-card-carousel-r123__content--item';
    const headerCard = '.ui-organisms-card-r123-popular__image';
    const price = '.ui-organisms-card-r123-popular__image > div > p';
    const footerCard = '.ui-organisms-card-r123-popular__content__info-section';
    const propType = '.property-type';
    /* TODO
		each card will devided into 3 parts
		1. headerCard
		2. imgCard
		3. footerCard
		*/
    cy.containerGalleryProperty({ element: card }).then((cardGalleryProperty) => {
      for (let index = 0; index < cardGalleryProperty.length; index++) {
        if (cardGalleryProperty.length > 2) {
          cy.wrap(cardGalleryProperty).find(headerCard).eq(index).should('be.visible');
          cy.wrap(cardGalleryProperty).find(price).eq(index).should('be.visible');
          cy.wrap(cardGalleryProperty).find(footerCard).eq(index).should('be.visible');
          cy.wrap(cardGalleryProperty).find(propType).eq(index).should('be.visible');
          /*
           if card have length more than 3,
           click arrow next to shown hidden card
          */

          cy.wrap(cardGalleryProperty)
            .containerGalleryProperty({ element: nextArrow })
            .click({ force: true });
        } else {
          cy.wrap(cardGalleryProperty).find(headerCard).eq(index).should('be.visible');
          cy.wrap(cardGalleryProperty).find(price).eq(index).should('be.visible');
          cy.wrap(cardGalleryProperty).find(footerCard).eq(index).should('be.visible');
          cy.wrap(cardGalleryProperty).find(propType).eq(index).should('be.visible');
        }
      }
    });
  });

  it('click one of card galeri properti', () => {
    cy.get('.ui-organisms-card-r123-popular__content__info-section > h3')
      .eq(0)
      .scrollIntoView()
      .click({ force: true })
      .location()
      .should((url) => {
        expect(url.pathname).include('/perumahan-baru');
      });
  });
});
