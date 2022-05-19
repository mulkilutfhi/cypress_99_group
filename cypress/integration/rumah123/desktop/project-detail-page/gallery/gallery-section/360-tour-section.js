describe('check 360 tour section', function () {
  beforeEach(function () {
    cy.viewport('macbook-15').visit('/perumahan-baru/properti/bondowoso/house-hills/nps1566/');
  });
  it('C56777	Check tittle on 360 tour section', function () {
    const text = '360 Tour';
    const int = '(1)';

    cy.getElement('pdp-banner-img').click({ force: true });
    cy.getTitle({ section: '360 Tour' })
      .should('be.visible')
      .and('include.text', text + ' ' + int);
  });

  it('C56780	Check total image on tittle 360 tour', function () {
    /*
    first, check number that appear on title section
    */
    cy.getElement('pdp-banner-img').click({ force: true });
    cy.getTitle({ section: '360 Tour' }).each(($el, index, $list) => {
      const elementText = $el.text();
      const result = elementText.slice(10, 11);

      /*
    second, check length image should be equals 
    with number on title 360 tour
    */
      cy.getElement('pdp-list-photos-tour360-gallery-section').then((img) => {
        expect(img).to.have.length(result);
      });
    });
  });

  it('C56778	Check image on 360 tour section', function () {
    cy.getElement('pdp-banner-img').click({ force: true });
    cy.getElement('pdp-list-photos-tour360-gallery-section').then((img360) => {
      for (let index = 0; index < img360.length && index < 3; index++) {
        expect(img360).to.be.exist;
      }
    });
  });

  it('C56779	Click image on 360 tour section', function () {
    cy.getElement('pdp-banner-img').click({ force: true });
    cy.getElement('pdp-list-photos-tour360-gallery-section').eq(0).click({ force: true });
    cy.url().should('include', '#showGallery');
    cy.get('.ui-molecules-carousel__item.relative > iframe')
      .should('have.attr', 'title')
      .and('eq', 'Tour 1');
  });
});
