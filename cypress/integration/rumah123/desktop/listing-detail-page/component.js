describe('Component Listing Detail Property (LDP)', () => {
  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('Visit Listing Detail Property (LDP)', () => {
    cy.visitPage('url-r123-ldp');
  });

  it('C63238 User check sticky bar', () => {
    cy.getElement('ldp-title-section-address').scrollIntoView();
    cy.getElement('ldp-sticky-bar').should('be.visible');
  });

  it('C63239 User check section information property', () => {
    cy.getElement('ldp-title-section-information-property').should('be.visible');
  });

  it('C63240 User check specification component on section information property', () => {
    cy.getElement('ldp-section-specification-information-property').should('be.visible');
    cy.getElement('ldp-column-info-specification').eq(0).contains('ID Iklan');
    cy.getElement('ldp-column-info-specification').eq(1).contains('Tipe Properti');
    cy.getElement('ldp-column-info-specification').eq(2).contains('Luas Tanah');
  });

  it('C63247 User check section address', () => {
    cy.getElement('ldp-title-section-address').should('be.visible');
  });
});
