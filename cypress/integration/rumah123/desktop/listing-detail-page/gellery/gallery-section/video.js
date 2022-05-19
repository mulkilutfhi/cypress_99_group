describe('Gallery Section LDP (Video)', () => {
  beforeEach(function () {
    cy.viewport('macbook-15').visit('/properti/biak-numfor/hos8749298/');
    /*
      go to gallery section
    */
    cy.getElement('ldp-banner-image').click();
  });
  it('C68129	Check tittle on Review Property section', function () {
    cy.getTitleGallerySectionLDP({ section: 'Video' }).should('include.text', 'Video');
  });
  it('C68132	Check total Video on tittle video section', function () {
    cy.getTitleGallerySectionLDP({ section: 'Video' }).each(($el) => {
      const elementTextLDP = $el.text();
      const totalImgLDP = elementTextLDP.slice(7, 8);
      /*
    second, check length image should be equals 
    with number on title Area
    */
      cy.getElement('ldp-gallery-section-list-video').then((listVideo) => {
        expect(listVideo).to.have.length(totalImgLDP);
      });
    });
  });

  it('C70341	Click video, should be go to gallery detail and open video', function () {
    cy.getElement('ldp-gallery-section-list-video')
      .eq(0)
      .click()
      .get('#widget4')
      .should('have.attr', 'title', 'YouTube video player');
  });
});
