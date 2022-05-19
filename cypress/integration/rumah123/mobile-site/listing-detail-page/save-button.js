describe('Msite Save Button (LDP)', function () {

  let data;
  beforeEach(function () {
    cy.viewport('iphone-x').visit('/jual/biak-numfor/residensial/');
    cy.fixture('account').then((account) => {
      data = account.rumah123;
    });
  });

  it('As a Consummer (buyer), i want to save property search', function () {
    cy.get('.ui-atomic-link.ui-atomic-link--styling-underline-none.ui-molecules-hollow-link.m ').eq(1)
      .click({force: true})
    cy.get('.ui-molecules-login-form-r123 > :nth-child(1) > .ui-atomic-edit-text__input')
      .type(data.Username)
    cy.get('.ui-molecules-login-form-r123 > :nth-child(2) > .ui-atomic-edit-text__input')
      .type(data.Password);
    cy.get('.ui-molecules-login-form-r123 > .flex > .ui-atomic-button')
      .click()
      expect('.hidden-lg.hidden-sm.hidden-md > a > img').to.exist
  });
});