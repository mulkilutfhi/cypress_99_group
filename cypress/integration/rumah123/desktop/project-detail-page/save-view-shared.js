const PDPSubLink = '/perumahan-baru/properti/bondowoso/house-hills/nps1566';
let data;
describe('Save View Shared PDP', () => {
  beforeEach(function () {
    cy.viewport('macbook-15').visit('perumahan-baru/properti/bondowoso/house-hills/nps1566');
    cy.fixture('account').then((account) => {
      data = account.rumah123;
    });
  });

  it('Visit PDP', () => {
    cy.visit(PDPSubLink);
  });

  it('C747 As a Consumer (Buyer), I want to save Property Search', () => {
    cy.getElement('pdp-save-button').click({ force: true });
    cy.getElement('login-dialog').should('be.visible');
  });

  it('C748 As a Consumer (Buyer), I want to shared Property Search (Shared to Facebook)', () => {
    cy.window().then((win) => {
      cy.stub(win, 'open').returns(win.open).as('openNewTab');
    });

    cy.getElement('pdp-share-button').click({ force: true });

    cy.getElement('pdp-share-dialog')
      .find('a > span.ui-atomic-text')
      .contains('Facebook')
      .parent()
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'href')
      .and('include', 'https://www.facebook.com/sharer/sharer')
      .and('include', PDPSubLink);

    cy.getElement('pdp-share-dialog')
      .find('a > span.ui-atomic-text')
      .contains('Facebook')
      .click({ force: true });

    cy.get('@openNewTab').should('be.called');
  });

  it('C749 As a Consumer (Buyer), I want to shared Property Search (Shared to LinkedIn)', () => {
    cy.window().then((win) => {
      cy.stub(win, 'open').returns(win.open).as('openNewTab');
    });

    cy.getElement('pdp-save-button').click({ force: true });

    cy.getElement('pdp-share-dialog')
      .find('a > span.ui-atomic-text')
      .contains('Linkedin')
      .parent()
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'href')
      .and('include', 'https://www.linkedin.com/sharing/share-offsite')
      .and('include', PDPSubLink);

    cy.getElement('pdp-share-dialog')
      .find('a > span.ui-atomic-text')
      .contains('Linkedin')
      .click({ force: true });

    cy.get('@openNewTab').should('be.called');
  });

  it('C750 As a Consumer (Buyer), I want to shared Property Search (Shared to Twitter)', () => {
    cy.window().then((win) => {
      cy.stub(win, 'open').returns(win.open).as('openNewTab');
    });

    cy.getElement('pdp-save-button').click({ force: true });

    cy.getElement('pdp-share-dialog')
      .find('a > span.ui-atomic-text')
      .contains('Twitter')
      .parent()
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'href')
      .and('include', 'https://twitter.com/share')
      .and('include', PDPSubLink);

    cy.getElement('pdp-share-dialog')
      .find('a > span.ui-atomic-text')
      .contains('Twitter')
      .click({ force: true });

    cy.get('@openNewTab').should('be.called');
  });

  it('C752 As a Consumer (Buyer), I want to shared Property Search (Shared to Email)', () => {
    cy.getElement('pdp-save-button').click({ force: true });

    cy.getElement('pdp-share-dialog')
      .find('a > span.ui-atomic-text')
      .contains('Email')
      .parent()
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'href')
      .and('include', 'mailto: ?')
      .and('include', PDPSubLink);

    cy.log(cy.location());
  });

  it('C754 As a Consumer (Buyer), I want to shared Property Search (Shared to WhatApp)', () => {
    cy.window().then((win) => {
      cy.stub(win, 'open').returns(win.open).as('openNewTab');
    });

    cy.getElement('pdp-save-button').click({ force: true });

    cy.getElement('pdp-share-dialog')
      .find('a > span.ui-atomic-text')
      .contains('Whatsapp')
      .parent()
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'href')
      .and('include', 'https://api.whatsapp.com/send')
      .and('include', PDPSubLink);

    cy.getElement('pdp-share-dialog')
      .find('a > span.ui-atomic-text')
      .contains('Whatsapp')
      .click({ force: true });

    cy.get('@openNewTab').should('be.called');
  });
});
