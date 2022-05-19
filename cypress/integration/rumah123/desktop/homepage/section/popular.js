describe('Popular Card', () => {
  let data;

  before(function () {
    cy.viewport('macbook-15').visit('/');
    cy.fixture('dijual/url-dijual').then((url) => {
      data = url;
    });
  });

  it('C63554 Popular section must to have 6 project card', () => {
    cy.get('.ui-home-page__popular-listing__content__card');
    cy.should('be.visible').and('have.length', 6);
  });

  it('C63555 Popular section must to have logo developer', () => {
    cy.get('.ui-organisms-card-r123-popular__logo');
    cy.should('be.visible').and('not.have.text');
  });

  it('C63556 popular section must to have picture', () => {
    cy.get('.ui-organisms-card-r123-popular__image').eq(0);
    cy.should('be.visible');
  });

  it('C63557 popular section must to have prize', () => {
    cy.get('.ui-organisms-card-r123-popular__image--caption');
    cy.should('be.visible');
  });

  it('C63558 popular section must to have title', () => {
    cy.get('.ui-organisms-card-r123-popular__content__info-section > h3');
    cy.should('be.visible');
  });

  it('C63559 popular section must to have address', () => {
    cy.get('.ui-organisms-card-r123-popular__content__info-section > p');
    cy.should('be.visible');
  });

  it('C63560 popular section must to have size', () => {
    cy.get('.ui-organisms-card-r123-popular__content__property-info-size');
    cy.should('be.visible');
  });

  it('C63561 click one of popular section card, url should be suitable', () => {
    cy.get('.ui-organisms-card-r123-popular__content__info-section > h3')
      .eq(0)
      .click({ force: true });
    cy.location((loct) => {
      expect(loct.pathname).to.include('/perumahan-baru/properti/');
    });
  });
});
