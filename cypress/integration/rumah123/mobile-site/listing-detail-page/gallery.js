describe('Msite Gallery (LDP)', function () {

  beforeEach(function () {
    cy.viewport('iphone-x');
  });

  it('Visit Listing Detail Property (LDP)', function () {
    cy.visitPage('ldp-page');
  });

  it('C54103 As a Consumer (Buyer), I want to view Image Gallery', function () {
    cy.getElement('ldp-button-photo')
			.click();
    cy.getElement('ldp-image-carousel-gallery')
      .should('be.visible');
  });

  it('C54104 As a Consumer (Buyer), I want to view Image Gallery Detail (Save Image button)', function () {
    cy.getElement('ldp-banner-notification')
			.should('be.visible');
		cy.getElement('ldp-banner-notification-button-dont-allow').eq(0)
			.click();
		cy.getElement('ldp-button-save-gallery')
      .click();
    cy.get('.ui-organisms-login-r123__dialog')
      .should('be.visible');
    cy.get('.rui-icon-cross.absolute.text-center')
      .click();
    cy.getElement('ldp-main-image')
      .should('be.visible');
  });

  it('C54105 As a Consumer (Buyer), I want to view Image Gallery Detail (Click Video button)', function () {
    cy.getElement('ldp-button-elipsis')
      .click();
    cy.getElement('ldp-elipsis-menu-list-item')
      .contains('Video')
      .click();
    cy.getElement('ldp-video-gallery')
      .should('be.visible');
  });

  it('C54106 As a Consumer (Buyer), I want to view Image Gallery Detail (Click Map button)', function () {
    cy.getElement('ldp-button-elipsis')
      .click();
		cy.getElement('ldp-elipsis-menu-list-item')
      .contains('Peta')
      .click();
    cy.getElement('ldp-map-gallery')
      .should('be.visible');
  });

  it('C54107 As a Consumer (Buyer), I want to view Image Gallery Detail (Click Back button)', function () {
    cy.getElement('ldp-button-back-gallery')
      .click();
  });

  it('C54108 As a Consumer (Buyer), I want to view Video Gallery', function () {
    cy.getElement('ldp-button-video')
      .click();
    cy.getElement('ldp-video-gallery')
      .should('be.visible')
  });

	it('C54109 As a Consumer (Buyer), I want to play Video Gallery (Play Video)', function () {
		cy.getElement('ldp-frame-video-gallery')
			.find('.ui-molecules-media-player:first-of-type .ui-molecules-media-player__iframe')
			.iframe()
			.find('button[aria-label="Play"]')
			.click();
	});

  it('C54110 As a Consumer (Buyer), I want to play Video Gallery (Save Video button)', function () {
    cy.getElement('ldp-button-save-gallery')
      .click();
    cy.get('.ui-organisms-login-r123__dialog')
      .should('be.visible');
    cy.get('.rui-icon-cross.absolute.text-center')
      .click();
    cy.getElement('ldp-main-image')
      .should('be.visible');
  });

  it('C54111 As a Consumer (Buyer), I want to play Video Gallery (Click Back button)', function () {
    cy.getElement('ldp-button-back-gallery')
      .click();
  });
});
