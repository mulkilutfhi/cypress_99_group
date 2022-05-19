describe('Msite Checking Total Listing View (LDP)', function () {

  beforeEach(function () {
    cy.viewport('iphone-x');
  });

  it('Visit Listing Detail Property (LDP)', function () {
    cy.visit('/properti/biak-numfor/hos7999253/');
  });

  it('As a Consumer (Buyer), I want to view Total Viewer', function () {
    cy.get ('.ui-atomic-button--size-default')
      .find('span')
      .contains('Sudah Dilihat')
      .click();
    cy.get('.ui-atomic-dialog__content')
      .find ('div > .ui-atomic-text--typeface-primary')
  });
});
