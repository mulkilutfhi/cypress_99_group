describe('Register', () => {
  let data;
  const error = {
    firstName: '[name="firstName"]',
    lasttName: '[name="lastName"]',
    email: '[name="username"]',
    password: '[name="password"]'
  };
  beforeEach(function () {
    cy.viewport('macbook-15');
    cy.visit('/');
    cy.fixture('register').then((register) => {
      data = register;
    });
  });
  it('C853	Register - Leave all field blank', () => {
    const errorMessages = [
      'Mohon isi nama depan',
      'Mohon isi nama belakang',
      'Mohon isi Email',
      'Mohon isi Password'
    ];
    cy.gotoRegisterFrom();
    cy.inputFormRegister({
      firstName: 'skip',
      lastName: 'skip',
      email: 'skip',
      password: 'skip'
    });
    cy.get('.ui-molecules-register-form-r123__button > button').click();

    cy.get('.ui-molecules-register-form-r123')
      .find('.ui-atomic-edit-text__error-text')
      .then((el) => {
        for (let i = 0; i < el.length; i++) {
          cy.wrap(el[i]).should('have.text', errorMessages[i]);
        }
      });
  });
  it('C852	Register - Leave First Name field blank', () => {
    cy.gotoRegisterFrom();
    cy.inputFormRegister({
      firstName: 'skip',
      lastName: data.lastname,
      email: data.validemail,
      password: data.validpassword
    });
    cy.get('.ui-molecules-register-form-r123__button > button').click();

    cy.errorMessage({
      object: error.firstName,
      expectedErrorMessage: 'Mohon isi nama depan'
    });
  });

  it('C854	Register - Leave Last Name field blank', () => {
    cy.gotoRegisterFrom();
    cy.inputFormRegister({
      firstName: data.firstname,
      lastName: 'skip',
      email: data.validemail,
      password: data.validpassword
    });
    cy.get('.ui-molecules-register-form-r123__button > button').click();

    cy.errorMessage({
      object: error.lasttName,
      expectedErrorMessage: 'Mohon isi nama belakang'
    });
  });

  it('C855	Register - Leave Email field blank', () => {
    cy.gotoRegisterFrom();
    cy.inputFormRegister({
      firstName: data.firstname,
      lastName: data.lastname,
      email: 'skip',
      password: data.validpassword
    });
    cy.get('.ui-molecules-register-form-r123__button > button').click();

    cy.errorMessage({
      object: error.email,
      expectedErrorMessage: 'Mohon isi Email'
    });
  });

  it('C856	Register - Leave Password field blank', () => {
    cy.gotoRegisterFrom();
    cy.inputFormRegister({
      firstName: data.firstname,
      lastName: data.lastname,
      email: data.validemail,
      password: 'skip'
    });
    cy.get('.ui-molecules-register-form-r123__button > button').click();

    cy.errorMessage({
      object: error.password,
      expectedErrorMessage: 'Mohon isi Password'
    });
  });

  it('C857	Register - Uncheck Term and Conds', function () {
    cy.gotoRegisterFrom();
    cy.inputFormRegister({
      firstName: data.firstname,
      lastName: data.lastname,
      email: data.validemail,
      password: data.validpassword
    });

    cy.get('.ui-molecules-register-form-r123 > section').then((registerCheckBox) => {
      cy.wrap(registerCheckBox).eq(1).find('[type="checkbox"]').uncheck({ force: true });
      cy.get('.ui-molecules-register-form-r123')
        .find('[style="color: rgb(220, 53, 69); font-weight: 300; text-align: left;"]')
        .should('have.text', 'Silakan menyetujui syarat & Ketentuan untuk melanjutkan');
    });
  });

  it('C859	Register using wrong email format', function () {
    cy.gotoRegisterFrom();
    cy.inputFormRegister({
      firstName: data.firstname,
      lastName: data.lastname,
      email: data.invalidemail,
      password: data.validpassword
    });
    cy.get('.ui-molecules-register-form-r123__button > button').click();

    cy.errorMessage({
      object: error.email,
      expectedErrorMessage: 'Mohon input email dengan format yang benar'
    });
  });
  it('C73487	Register using weak password', function () {
    const weakColor = 'rgb(255, 0, 0)';

    cy.gotoRegisterFrom();
    cy.inputFormRegister({
      firstName: data.firstname,
      lastName: data.lastname,
      email: data.validemail,
      password: data.waekpass
    });
    cy.get('.r123-a-meter__value').should('have.css', 'background-color', weakColor);
  });

  it('C850	Register using valid data', () => {
    cy.gotoRegisterFrom();
    cy.inputFormRegister({
      firstName: data.firstname,
      lastName: data.lastname,
      email: data.validemail,
      password: data.validpassword
    });
  });
});
