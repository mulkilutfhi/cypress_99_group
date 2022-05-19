describe('Gallery Detail LDP (Gallery Detail)', () => {
  beforeEach(function () {
    cy.viewport('macbook-15').visit('/properti/biak-numfor/hos8749298/');
    /*
      go to gallery detail
    */
    cy.getElement('ldp-banner-image').click();
    cy.getElement('ldp-gallery-section-list-image').eq(0).click();
  });
  it('C70391	check menu carousel area should be exist', function () {
    cy.getElement('ldp-gallery-detail-carousel-menu-area').should('be.visible');
  });
  it('	C70392	check menu carousel video should be exist', function () {
    cy.getElement('ldp-gallery-detail-carousel-menu-area').should('be.visible');
  });
  it('C70393	check prev arrow should be exist', function () {
    cy.getElement('ldp-gallery-detail-prev-arrow').should('be.visible');
  });
  it('C70394	check next arrow should be exist', function () {
    cy.getElement('ldp-gallery-detail-next-arrow').should('be.visible');
  });
  it('C70395	check pagination should be exist', function () {
    cy.getElement('ldp-gallery-detail-pagination').should('be.visible');
  });
  it('C70396	click menu carousel area, should be appear image area', function () {
    cy.getElement('ldp-gallery-detail-carousel-menu-area').click().should('have.class', 'active');
    cy.get('.ui-molecules-carousel__item > img')
      .eq(0)
      .should('be.visible')
      .should('have.attr', 'srcset');
  });
  it('C70397	click menu carousel review properti, it should be appear video property', function () {
    cy.getElement('ldp-gallery-datail-carousel-menu-review-properti').click();
    cy.get('.ui-molecules-media-player__iframe')
      .should('be.visible')
      .and('have.attr', 'title', 'YouTube video player');
  });
  it('C70398	click next arrow, it should be move to the next image', function () {
    cy.getElement('ldp-gallery-detail-next-arrow')
      .click()
      .get('.ui-molecules-carousel__slider > .ui-molecules-carousel__content')
      .eq(1)
      .should('have.attr', 'style', 'transform: translateX(-100%);');
  });
  it('C70399	click prev arrow, it should be move to prev image', function () {
    cy.getElement('ldp-gallery-detail-prev-arrow')
      .click()
      .get('.ui-molecules-carousel__slider > .ui-molecules-carousel__content')
      .eq(1)
      .should('have.attr', 'style')
      .and('not.eq', 'transform: translateX(0%)' || 'transform: translateX(-100%)');
  });
});
