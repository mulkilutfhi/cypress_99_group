describe('Login Agent', () => {
  let data;

  beforeEach(function () {
    cy.viewport('macbook-15').visit('/');
    cy.fixture('account').then((account) => {
      data = account.rumah123;
    });
  });

  it('C861	Login using valid data', function () {
    cy.clickAccountButton();
    cy.inputEmailPassword({
      email: data.Username,
      password: data.Password
    });
    cy.clickButtonSubmit();
    cy.url().should('include', '/customer/dashboard');

    //TODO verified account name
    cy.buttonAccountText().should('not.equal', 'Akun');
  });

  it('C862	Login using invalid email ', function () {
    cy.clickAccountButton();
    cy.inputEmailPassword({
      email: data.InvalidUsername,
      password: data.Password
    });
    cy.clickButtonSubmit();
    cy.get('.ui-molecules-login-form-r123__error-badge').should('be.visible'); //error massage
  });

  it('C863	Login using invalid password', function () {
    cy.clickAccountButton();
    cy.inputEmailPassword({
      email: data.Username,
      password: data.InvalidUsername
    });
    cy.clickButtonSubmit();
    cy.get('.ui-molecules-login-form-r123__error-badge').should('be.visible'); //error massage
  });

  it('C864	Login with blank username and password', function () {
    cy.clickAccountButton();
    cy.clickButtonSubmit();
    cy.get('.ui-molecules-login-form-r123 > :nth-child(2)').should((ErrorMessageEmail) => {
      expect(ErrorMessageEmail).to.be.visible;
    });
    cy.get('.ui-molecules-login-form-r123 > :nth-child(4)').should((ErrorMessagePassword) => {
      expect(ErrorMessagePassword).to.be.visible;
    });
  });
});
