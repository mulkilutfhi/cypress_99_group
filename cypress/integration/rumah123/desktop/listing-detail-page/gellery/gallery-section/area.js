describe('Gallery Section LDP (Area)', () => {
  beforeEach(function () {
    cy.viewport('macbook-15').visit('/properti/biak-numfor/hos8749298/');
    /*
      go to gallery section
    */
    cy.getElement('ldp-banner-image').click();
  });

  it('C68508	Check tittle on area section', function () {
    cy.getTitleGallerySectionLDP({ section: 'Area' }).should('include.text', 'Area');
  });

  it('C68512	Check total image on tittle area', function () {
    cy.getTitleGallerySectionLDP({ section: 'Area' }).each(($el) => {
      const elementTextLDP = $el.text();
      const resultLDP = elementTextLDP.slice(6, 7);
      /*
    second, check length image should be equals 
    with number on title Area
    */
      cy.getElement('ldp-gallery-section-list-image').then((listImage) => {
        expect(listImage).to.have.length(resultLDP);
      });
    });
  });

  it('C68509	Check image on area section', function () {
    cy.getElement('ldp-gallery-section-list-image').then((imgVisibleLDP) => {
      for (let i = 0; i < imgVisibleLDP.length; i++) {
        /*
          by default the image that appear max 3 image 
          except user click button 'tampilkan semua'
          so we have to add condition like below
          to make sure the image that appear not more then 3
        */
        if (i < 3) {
          expect(imgVisibleLDP[i]).to.be.visible;
        }
      }
    });
  });

  it('C68110	Click image on area section', function () {
    cy.getElement('ldp-gallery-section-list-image').eq(0).click();
    cy.get('.ui-organism-gallery-detail')
      .should('be.visible')
      .find('img')
      .should('have.attr', 'srcset');
  });

  it('C68111	Click button tampilkan semua on area section', function () {
    cy.getElement('ldp-gallery-section-list-image').then((el) => {
      /*
        the condition if image less than 4 image, 
        button should not appear
      */
      if (el.length < 4) {
        cy.get('ldp-gallery-section-button-tampilkan-semua').children().should('not.exist');
      } else {
        cy.getElement('ldp-gallery-section-button-tampilkan-semua')
          .contains('Tampilkan Semua')
          .should('be.visible')
          .click();
        /*
          after click, the button should change to be 'Sembunyikan'
        */
        cy.getElement('ldp-gallery-section-button-tampilkan-semua').should(
          'have.text',
          'Sembunyikan'
        );
      }
    });
  });
});
