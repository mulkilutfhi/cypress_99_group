describe('Component Listing Detail Property (LDP)', () => {
  beforeEach(function () {
    cy.viewport('iphone-x');
  });

  it('Visit Listing Detail Property (LDP)', () => {
    cy.visitPage('ldp-page');
  });

	it('C63249 User check sticky bar', () => {
    cy.getElement('ldp-title-section-address')
			.scrollIntoView()
    cy.getElement('ldp-sticky-bar')
      .should('be.visible');
  });

	it('C63250 User check section information property', () => {
    cy.getElement('ldp-title-section-information-property')
      .should('be.visible');
  });

	it('C63251 User check specification component on section information property', () => {
    cy.getElement('ldp-section-specification-information-property')
      .should('be.visible');
		cy.getElement('ldp-column-info-specification').eq(0)
			.contains('ID Iklan')
		cy.getElement('ldp-column-info-specification').eq(1)
		.contains('Tipe Properti')
		cy.getElement('ldp-column-info-specification').eq(2)
		.contains('Luas Tanah')
	});

	it('C63258 User check section address', () => {
    cy.getElement('ldp-title-section-address')
      .should('be.visible');
  });

});
