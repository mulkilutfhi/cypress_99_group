describe('Msite Listing Recommendation (LDP)', function () {

  beforeEach(function () {
    cy.viewport('iphone-x');
  });

  it('Visit Listing Detail Property (LDP)', function () {
    cy.visit('/properti/biak-numfor/hos7999253/');
  });

  it('Listing recommendation must be same district with LDP ', function () {
    cy.get('.ui-property-page__recommendation-bottom')
      .scrollIntoView()
      .contains('Properti Serupa')
    cy.get('.ui-molecules-recommendation-section-r123__content.flex.flex-justify-start')
      .should('be.visible')
    cy.get('.ui-organisms-card-r123-recommendation__top-row > a > span')
      .then(
        (text) => {
          for (let i = 0; i < text.length; i++) {
              cy.wrap(text[i]).should('have.text', 'Biak Barat, Biak Numfor',{matchCase: false});
          }
        }
    );
  });

  it('As a user, I want click one listing recommendation',function(){
    cy.get('.ui-property-page__recommendation-bottom')
      .scrollIntoView()
      .contains('Properti Serupa')
    cy.get('.recommendation-card--media > a > span')
      .eq(0)
      .click()
  });

  it('As a user, I should be able to click button selengkapnya in properti serupa section',function(){
    cy.get('.ui-property-page__recommendation-bottom')
      .scrollIntoView()
      .contains('Properti Serupa')
    cy.window().then((win) => {
      cy.spy(win, 'open')
        .as('openNewTab');
    });
    cy.get('.ui-atomic-button--size-default.view-detail-button')
      .contains('Lihat Selengkapnya')
      .click()
    cy.get('@openNewTab')
      .should('be.called');
  });
});
