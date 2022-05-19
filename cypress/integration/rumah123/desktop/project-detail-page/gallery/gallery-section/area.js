describe('check area section', () => {
  beforeEach(function () {
    cy.visit('/perumahan-baru/properti/bondowoso/house-hills/nps1566/').viewport('macbook-15');
  });
  it('C56763	Check tittle on area section', function () {
    const areaTxt = 'Area';
    const areaInt = '(7)';

    cy.getElement('pdp-banner-img').click();
    cy.getTitle({ section: 'Area' })
      .should('be.visible')
      .and('include.text', areaTxt + ' ' + areaInt);
  });
  it('C56767	Check total image on tittle area', function () {
    /*
    first, check number that appear on title Area
    */
    cy.getElement('pdp-banner-img').click({ force: true });
    cy.getTitle({ section: 'Area' }).each(($el, index, $list) => {
      const elementText = $el.text();
      const result = elementText.slice(6, 7);
      /*
    second, check length image should be equals 
    with number on title Area
    */
      cy.getElement('pdp-list-photos-area-gallery-section').then((img) => {
        expect(img).to.have.length(result);
      });
    });
  });
  it('C56764	Check image on area section', function () {
    cy.getElement('pdp-banner-img').click({ force: true });
    cy.getElement('pdp-list-photos-area-gallery-section').then((visibleImage) => {
      for (let image = 0; image < 3; image++) {
        expect(visibleImage[image]).to.be.visible;
      }
    });
  });
  it('C56765	Click image on area section', function () {
    cy.getElement('pdp-banner-img').click({ force: true });
    cy.getElement('pdp-list-photos-area-gallery-section').eq(0).click();
    cy.url().should('include', '#showGallery');
  });
  it('C56766	Click button tampilkan semua on area section', function () {
    cy.getElement('pdp-banner-img').click({ force: true });
    cy.getElement('pdp-list-photos-area-gallery-section').then((el) => {
      if (el < 3) {
        cy.get('.ui-molecules-toggle > [role="button"] > span').should('not.exist');
      } else {
        cy.get('.ui-molecules-toggle > [role="button"] > span')
          .should('be.visible')
          .and('have.text', 'Tampilkan Semua');
      }
    });

    cy.get('.ui-molecules-toggle > [role="button"] > span')
      .click({ force: true })
      .then((after) => {
        expect(after).to.have.text('Sembunyikan');
      });
  });
});
