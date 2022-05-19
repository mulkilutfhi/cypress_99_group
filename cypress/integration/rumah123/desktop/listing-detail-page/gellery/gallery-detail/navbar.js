describe('Gallery Detail LDP (Navbar)', () => {
  let data;
  const facebook = 'share-dialog-facebook';
  const whatsapp = 'share-dialog-whatsapp';
  const linkedin = 'share-dialog-linkedin';
  const twitter = 'share-dialog-twitter';
  const email = 'share-dialog-email';

  beforeEach(function () {
    cy.viewport('macbook-15').visit('/properti/biak-numfor/hos8749298/');
    /*
      go to gallery section
    */
    cy.fixture('account').then((account) => {
      data = account.rumah123;
    });

    cy.getElement('ldp-banner-image').click();
    cy.getElement('ldp-gallery-section-list-image').eq(0).click();
  });
  it('C68591	As a consumer (buyer), i want to save property search', function () {
    cy.getElement('ldp-gallery-detail-button-favorite').click();
    /*
      as user non login, if we want to save listing,
      we have to login first
    */
    cy.inputEmailPassword({
      email: data.buyerUsername,
      password: data.buyerPassword
    });
    cy.wait(2000);
    cy.clickButtonSubmit();
    /*
      after login click again button save 
    */
    cy.getElement('ldp-gallery-detail-button-favorite').click();
    cy.getElement('ldp-gallery-detail-button-favorite').should('have.class', 'active');
  });
  it('C68592	As a consumer (buyer), i want to shared property search (shared to facebook)', function () {
    cy.getElement('ldp-gallery-detail-button-share').click();
    cy.shareProperty({
      platform: facebook,
      param1: 'https://www.facebook.com/sharer/sharer.php?'
    });
  });
  it('	C68593	As a consumer (buyer), i want to shared property search (shared to whatsapp)', function () {
    cy.getElement('ldp-gallery-detail-button-share').click();
    cy.shareProperty({
      platform: whatsapp,
      param1: 'https://api.whatsapp.com/send?'
    });
  });
  it('C68594	As a consumer (buyer), i want to shared property search (shared to linkedin)', function () {
    cy.getElement('ldp-gallery-detail-button-share').click();
    cy.shareProperty({
      platform: linkedin,
      param1: 'https://www.linkedin.com/sharing/share-offsite/?'
    });
  });
  it('C68595	As a consumer (buyer), i want to shared property search (shared to twitter', function () {
    cy.getElement('ldp-gallery-detail-button-share').click();
    cy.shareProperty({
      platform: twitter,
      param1: 'https://twitter.com/share?'
    });
  });
  it('		C68597	As a consumer (buyer), i want to shared property search (shared to email)', function () {
    cy.getElement('ldp-gallery-detail-button-share').click();
    cy.shareProperty({
      platform: email,
      param1: 'mailto: ?subject='
    });
  });
});
