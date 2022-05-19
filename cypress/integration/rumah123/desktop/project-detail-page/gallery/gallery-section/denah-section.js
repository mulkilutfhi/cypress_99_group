describe('check denah section', function () {
  beforeEach(function () {
    cy.viewport('macbook-15').visit('/perumahan-baru/properti/bondowoso/house-hills/nps1566/');
  });

  it('C56770	Check tittle on denah section', function () {
    const denahTxt = 'Denah';

    cy.getElement('pdp-banner-img').click({ force: true });
    cy.getTitle({ section: 'Denah' }).should('be.visible').and('include.text', denahTxt);
  });

  it('C56774	Check total image on tittle denah', function () {
    /*
    first, check number that appear on title Area
    */
    cy.getElement('pdp-banner-img').click({ force: true });
    cy.getTitle({ section: 'Denah' }).each(($el, index, $list) => {
      const elementText = $el.text();
      const result = elementText.slice(7, 8);

      /*
    second, check length image should be equals 
    with number on title Area
    */
      cy.getElement('pdp-list-photos-denah-gallery-section').then((img) => {
        expect(img).to.have.length(result);
      });
    });
  });

  it('C56771	Check image on denah section', function () {
    cy.getElement('pdp-banner-img').click({ force: true });
    cy.getElement('pdp-list-photos-denah-gallery-section').then((imgDenah) => {
      for (let index = 0; index < imgDenah.length && index < 3; index++) {
        expect(imgDenah).to.be.visible;
      }
    });
  });

  it('C56772	Click image on denah section ', function () {
    cy.getElement('pdp-banner-img').click({ force: true });
    cy.getElement('pdp-list-photos-denah-gallery-section').eq(0).click();
    cy.url().should('include', '#showGallery');
  });
});
