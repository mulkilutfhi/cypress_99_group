describe('Download Brochure PDP New Launch ', () => {
  let data;
  beforeEach(function () {
    cy.viewport('macbook-15').visit('/perumahan-baru/properti/bondowoso/house-hills/nps1566/');
    cy.fixture('rumah123/json-file/inquiry').then((inquiry) => {
      data = inquiry;
    });
  });
  it('C68091	As a user, i want to download brochure without input name', function () {
    cy.getElement('ldp-button-download-brochure').click({ force: true });
    cy.inputFormInquiry({
      Nama: 'skip',
      NomorTelepon: data.phone,
      Email: data.mail
    });
    cy.clickVerificationButton();
    cy.errorNameEmpty({ index: 0, textErrorNameInput: 'Nama wajib diisi' });
  });
  it('C68092	As a user, i want to download brochure input phone number', function () {
    cy.getElement('ldp-button-download-brochure').click({ force: true });
    cy.inputFormInquiry({
      Nama: data.name,
      NomorTelepon: 'skip',
      Email: data.mail
    });
    cy.clickVerificationButton();
    cy.errorNameEmpty({
      index: 0,
      textErrorPhoneInput: 'Nomor Handpone wajib diisi'
    });
  });
  it('C68094	As a user, i want to download brochure without input form', function () {
    cy.getElement('ldp-button-download-brochure').click({ force: true });
    cy.clickVerificationButton();
    cy.errorNameEmpty({
      index: 0,
      textErrorNameInput: 'Nama wajib diisi'
    });
    cy.errorNameEmpty({
      index: 1,
      textErrorPhoneInput: 'Nomor Handpone wajib diisi'
    });
  });
  it('C68095	As a user, i want to download brochure with input phone number under 10 digit', function () {
    cy.getElement('ldp-button-download-brochure').click({ force: true });
    cy.inputFormInquiry({
      Nama: data.name,
      NomorTelepon: data.invalidnumber,
      Email: data.mail
    });
    cy.clickVerificationButton();
    cy.errorNameEmpty({
      index: 0,
      textErrorPhoneInput: 'Nomor tidak boleh kurang dari 10 digit'
    });
  });
  it('C68096	As a user, i want to download brochure with input phone number above 14 digit', function () {
    cy.getElement('ldp-button-download-brochure').click({ force: true });
    cy.inputFormInquiry({
      Nama: data.name,
      NomorTelepon: data.invalidformatnumber,
      Email: data.mail
    });
    cy.errorNameEmpty({
      index: 0,
      textErrorPhoneInput: 'Nomor tidak boleh lebih dari 14 digit'
    });
  });
});
