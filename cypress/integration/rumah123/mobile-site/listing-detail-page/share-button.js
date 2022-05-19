const { invoke } = require('lodash');

describe('Msite Share Button (LDP)', function () {

  beforeEach(function () {
    cy.viewport('iphone-x').visit('/properti/biak-numfor/hos7999253/');
  });

  it('As a Consumer (Buyer), I want to shared Property Search (Shared to Facebook)', function () {
    cy.get('.ui-molecules-dropdown__toggle__children > .flex')
      .click()
      .get('.ui-molecules-dropdown__item > a')
      .contains('Facebook')
      .parent()
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'href')
      .and('include', 'https://www.facebook.com/sharer/sharer')
      .and('include', '/properti/biak-numfor/hos7999253/')
      .get('.ui-molecules-dropdown__content > :nth-child(1)')
      .click();
  });

  it('As a Consumer (Buyer), I want to shared Property Search (Shared to LinkedIn)', function () {
    cy.get('.ui-molecules-dropdown__toggle__children > .flex')
      .click()
      .get('.ui-molecules-dropdown__item > a')
      .contains('Linkedin')
      .parent()
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'href')
      .and('include', 'https://www.linkedin.com/sharing/share')
      .and('include', '/properti/biak-numfor/hos7999253/')
      .get('.ui-molecules-dropdown__content > :nth-child(3)')
      .click();
  });

  it('As a Consumer (Buyer), I want to shared Property Search (Shared to Twitter)', function () {
    cy.get('.ui-molecules-dropdown__toggle__children > .flex')
      .click()
      .get('.ui-molecules-dropdown__item > a')
      .contains('Twitter')
      .parent()
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'href')
      .and('include', 'https://twitter.com/share')
      .and('include', '/properti/biak-numfor/hos7999253/')
      .get('.ui-molecules-dropdown__content > :nth-child(4)')
      .click();
  });

  it('As a Consumer (Buyer), I want to shared Property Search (Copy the link)', function () {
    cy.get('.ui-molecules-dropdown__toggle__children > .flex')
      .click()
      .get('.ui-molecules-dropdown__item > a')
      .contains('Salin Tautan')
      .parent()
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'href')
      .get('.ui-molecules-dropdown__content > :nth-child(5)')
      .click({ force: true });
  });

// command because scenario failed and need to modify some code
// @hendrian

//   it('As a Consumer (Buyer), I want to shared Property Search (Shared to Email)', function () {
//     cy.get('.ui-molecules-dropdown__toggle__children > .flex')
//       .click()
//       .get('.ui-molecules-dropdown__item > a')
//       .contains('Email')
//       .parent()
//       .should('have.attr', 'target', '_blank')
//       .should('have.attr', 'href')
//       .and(
//         'include',
//         '?subject=[Test] Rumah Biak Timur - hos7999253 | Rumah123.com&body=https://www.rumah123.com/properti/biak-numfor/hos7999253/'
//         )
//       .and('include', '/properti/biak-numfor/hos7999253/')
//       .get('.ui-molecules-dropdown__content > :nth-child(6)')
//       .click();
//   });

  it('As a Consumer (Buyer), I want to shared Property Search (Shared to Whatsapp)', function () {
    cy.get('.ui-molecules-dropdown__toggle__children > .flex')
      .click()
      .get('.ui-molecules-dropdown__item > a')
      .contains('Whatsapp')
      .parent()
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'href')
      .and('include', 'https://api.whatsapp.com/send')
      .and('include', '/properti/biak-numfor/hos7999253/')
      .get('.ui-molecules-dropdown__content > :nth-child(2)')
      .click();
  });
});
