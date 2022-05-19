let data;

describe('Save View Shared LDP', () => {
  beforeEach(function () {
    cy.viewport('macbook-15').visit('/properti/landak/hos8749298/');
    cy.fixture('account').then((account) => {
      data = account.rumah123;
    });
  });

  it('C59	As a Consumer (Buyer), I want to save Property Search', () => {
    cy.getSaveBtn_LDP().click();
    /*
      user login first
      then click button favorite again
    */
    cy.inputEmailPassword({
      email: data.buyerUsername,
      password: data.buyerPassword
    });
    cy.wait(3000);
    cy.clickButtonSubmit();
    cy.getSaveBtn_LDP().click().find('i').should('be.visible');
  });

  it('C60	As a Consumer (Buyer), I want to shared Property Search (Shared to Facebook)', () => {
    cy.window().then((win) => {
      cy.stub(win, 'open').returns(win.open).as('openNewTab');
    });
    cy.getSharedBtn_LDP().click({ force: true });
    cy.getSharedDropdownItem_LDP()
      .find('a')
      .should('have.attr', 'href')
      .and('include', 'https://www.facebook.com/sharer/sharer')
      .and('include', 'properti');

    cy.get('a > span:nth-child(2)').contains('Facebook').should('be.visible');

    cy.getSharedDropdownItem_LDP()
      .find('a > span.ui-atomic-text')
      .contains('Facebook')
      .click({ force: true });

    cy.get('@openNewTab').should('be.called');
  });

  it('C61	As a Consumer (Buyer), I want to shared Property Search (Shared to WhatApp)', () => {
    cy.window().then((win) => {
      cy.stub(win, 'open').returns(win.open).as('openNewTab');
    });

    cy.getSharedBtn_LDP().click({ force: true });
    cy.getSharedDropdownItem_LDP()
      .find('a')
      .eq(1)
      .should('have.attr', 'href')
      .and('include', 'https://api.whatsapp.com/send')
      .and('include', 'properti');

    cy.get('a > span:nth-child(2)').contains('Whatsapp').should('be.visible');

    cy.getSharedDropdownItem_LDP()
      .find('a > span.ui-atomic-text')
      .contains('Whatsapp')
      .click({ force: true });

    cy.get('@openNewTab').should('be.called');
  });

  it('C62	As a Consumer (Buyer), I want to shared Property Search (Shared to LinkedIn)', () => {
    cy.window().then((win) => {
      cy.stub(win, 'open').returns(win.open).as('openNewTab');
    });

    cy.getSharedBtn_LDP().click({ force: true });
    cy.getSharedDropdownItem_LDP()
      .find('a')
      .eq(2)
      .should('have.attr', 'href')
      .and('include', 'https://www.linkedin.com/sharing/share-offsite/?url=')
      .and('include', 'properti');

    cy.get('a > span:nth-child(2)').contains('Linkedin').should('be.visible');

    cy.getSharedDropdownItem_LDP()
      .find('a > span.ui-atomic-text')
      .contains('Linkedin')
      .click({ force: true });

    cy.get('@openNewTab').should('be.called');
  });

  it('C63	As a Consumer (Buyer), I want to shared Property Search (Shared to Twitter)', () => {
    cy.window().then((win) => {
      cy.stub(win, 'open').returns(win.open).as('openNewTab');
    });

    cy.getSharedBtn_LDP().click({ force: true });
    cy.getSharedDropdownItem_LDP()
      .find('a')
      .eq(3)
      .should('have.attr', 'href')
      .and('include', 'https://twitter.com/share?url=')
      .and('include', 'properti');

    cy.get('a > span:nth-child(2)').contains('Twitter').should('be.visible');

    cy.getSharedDropdownItem_LDP()
      .find('a > span.ui-atomic-text')
      .contains('Twitter')
      .click({ force: true });

    cy.get('@openNewTab').should('be.called');
  });

  it('C65	As a Consumer (Buyer), I want to shared Property Search (Shared to Email)', () => {
    cy.window().then((win) => {
      cy.stub(win, 'open').returns(win.open).as('openNewTab');
    });

    cy.getSharedBtn_LDP().click({ force: true });
    cy.getSharedDropdownItem_LDP()
      .find('a')
      .eq(5)
      .should('have.attr', 'href')
      .and('include', 'mailto: ?')
      .and('include', 'properti');

    cy.get('a > span:nth-child(2)').contains('Email').should('be.visible');

    cy.getSharedDropdownItem_LDP()
      .find('a > span.ui-atomic-text')
      .contains('Email')
      .click({ force: true });

    cy.get('@openNewTab').should('be.called');
  });

  it('C66	As a Consumer (Buyer), I want to view Total Viewer', () => {
    cy.getView_LDP().should('be.visible').and('include.text', 'Dilihat');
  });
});
