describe('Msite Login for user Rumah 123', function () {
  let dataValid, dataInvalid;

  beforeEach(function () {
    cy.viewport('iphone-x').visit('/');
    cy.fixture('rumah123/json-file/login-consumer').then((login) => {
      dataValid = login.validData;
      dataInvalid = login.invalidData;
    });
  });

  it('Login using valid data', function () {
    cy.intercept('POST', 'api/auth').as('LoginSuccess');
    cy.openLoginTab();
    cy.inputEmailUser().type(dataValid.emailConsumer);
    cy.inputPasswordUser().type(dataValid.passwordConsumer);
    cy.submitLogin();
    cy.wait('@LoginSuccess').its('response.statusCode').should('equal', 200);
    cy.url().should('include', '/customer/dashboard/');
    cy.clearCookies();
  });

  it('C861 Login using valid data', function () {
    cy.intercept('POST', 'api/auth').as('LoginSuccess');
    cy.openLoginTab();
    cy.inputEmailUser().type(dataValid.emailConsumer);
    cy.inputPasswordUser().type(dataValid.passwordConsumer);
    cy.submitLogin();
    cy.wait('@LoginSuccess').its('response.statusCode').should('equal', 200);
    cy.url().should('include', '/customer/dashboard/');
    cy.clearCookies();
  });

  it('C862 Login using invalid email', function () {
    cy.intercept('POST', 'api/auth').as('InvalidCredential');
    cy.openLoginTab();
    cy.inputEmailUser().type(dataInvalid.emailConsumer);
    cy.inputPasswordUser().type(dataValid.passwordConsumer);
    cy.submitLogin();
    cy.get('.ui-atomic-badges__children').should(
      'have.text',
      'Kombinasi Username dan Password tidak ditemukan'
    );
    cy.wait('@InvalidCredential').its('response.statusCode').should('equal', 401);
  });

  it('C863 Login using invalid password', function () {
    cy.intercept('POST', 'api/auth').as('InvalidCredential');
    cy.openLoginTab();
    cy.inputEmailUser().type(dataValid.emailConsumer);
    cy.inputPasswordUser().type(dataInvalid.passwordConsumer);
    cy.submitLogin();
    cy.get('.ui-atomic-badges__children').should(
      'have.text',
      'Kombinasi Username dan Password tidak ditemukan'
    );
    cy.wait('@InvalidCredential').its('response.statusCode').should('equal', 401);
  });
});
