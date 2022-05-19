describe('New Inquiry Whatsapp in SRP', function () {
  let data;
  beforeEach(() => {
    cy.viewport('macbook-15').visit('/jual/residensial/?q=hos8749298');
    cy.fixture('rumah123/json-file/inquiry').then((inquiry) => {
      data = inquiry;
    });
  });

  it('C47276	Whatsapp Enquiry on SRP without input name', function () {
    cy.gotoWhatsappSRP();
    cy.inputFormInquiry({
      Nama: 'skip',
      NomorTelepon: data.phone,
      Email: data.mail
    });
    cy.clickVerificationButton();
    cy.errorNameEmpty({ index: 0, textErrorNameInput: 'Nama wajib diisi' });
  });

  it('C47277	Whatsapp Enquiry on SRP without input phone number', function () {
    cy.gotoWhatsappSRP();
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

  it('C47279	Whatsapp Enquiry on SRP without input form', function () {
    cy.gotoWhatsappSRP();
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

  it('C47280	Whatsapp Enquiry on SRP input phone number under 10 digit', function () {
    cy.gotoWhatsappSRP();
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

  it('C47281	Whatsapp Enquiry on SRP input phone number above 14 digit', function () {
    cy.gotoWhatsappSRP();
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

describe('New Inquiry Phone Call in SRP', function () {
  let data;
  beforeEach(() => {
    cy.viewport('macbook-15').visit('/jual/residensial/?q=hos8749298');
    cy.fixture('rumah123/json-file/inquiry').then((inquiry) => {
      data = inquiry;
    });
  });

  it('C47285 Phone Call Enquiry on SRP without input name', function () {
    cy.gotoPhoneCallSRP();
    cy.inputFormInquiry({
      Nama: 'skip',
      NomorTelepon: data.phone,
      Email: data.mail
    });
    cy.clickVerificationButton();
    cy.errorNameEmpty({ index: 0, textErrorNameInput: 'Nama wajib diisi' });
  });

  it('C47286 Phone Call Enquiry on SRP without input phone number', function () {
    cy.gotoPhoneCallSRP();
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

  it('C47288 Phone Call Enquiry on SRP without input form', function () {
    cy.gotoPhoneCallSRP();
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
  it('C47289 Phone Call Enquiry on SRP input phone number under 10 digit', function () {
    cy.gotoPhoneCallSRP();
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

  it('C47290 Phone Call Enquiry on SRP input phone number above 14 digit', function () {
    cy.gotoPhoneCallSRP();
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
