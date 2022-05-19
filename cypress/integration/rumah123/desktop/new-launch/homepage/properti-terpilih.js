describe('Properti Terpilih', () => {
  beforeEach(function () {
    cy.viewport('macbook-15');
  });

  it('In properti terpilih must be displays 4 card projects listing', () => {
    cy.visit('/perumahan-baru');
    cy.get('.ui-organisms-card-r123-sponsored-property').should(($el) => {
      expect($el).to.be.visible;
    });

    it('in each card listing must be displays developer logo', () => {
      cy.get('.ui-organisms-card-r123-sponsored-property__logo').should('be.visible');
    });
  });

  it('In each card listing must be displays pictures', () => {
    cy.get('.ui-organisms-card-r123-sponsored-property__image').should('be.visible');
  });

  it('in each card listing must be displays price', () => {
    cy.get('.ui-organisms-card-r123-sponsored-property__image--caption')
      .find('.ui-atomic-text--styling-featured')
      .should('be.visible');
  });

  it('in each card must be displays title and description', () => {
    cy.get('.ui-organisms-card-r123-sponsored-property__info')
      .find('.ui-organisms-card-r123-sponsored-property__info--heading')
      .should('be.visible');

    cy.get('.ui-organisms-card-r123-sponsored-property__info')
      .find('.truncate')
      .should('be.visible');
  });

  it('click one of card properti terpilh', () => {
    cy.get('.ui-organisms-card-r123-sponsored-property__info')
      .find('.ui-organisms-card-r123-sponsored-property__info--heading')
      .eq(0)
      .click({ force: true });
    cy.location().should((url) => {
      expect(url.pathname).include('/perumahan-baru/');
    });
  });
});
