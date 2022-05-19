describe('new inquiry whatsapp', function () {
  let data;
  beforeEach(() => {
    cy.viewport('macbook-15').visit('/properti/landak/hos8749298/');
    cy.fixture('rumah123/json-file/inquiry').then((inquiry) => {
      data = inquiry;
    });
  });

  it('C47160	Whatsapp Enquiry on LDP without input name', function () {
    cy.gotoWhatsappLDP();
    cy.inputFormInquiry({
      Nama: 'skip',
      NomorTelepon: data.phone,
      Email: data.mail
    });
    cy.clickVerificationButton();
    cy.errorNameEmpty({ index: 0, textErrorNameInput: 'Nama wajib diisi' });
  });

  it('C47161	Whatsapp Enquiry on LDP without input phone number', function () {
    cy.gotoWhatsappLDP();
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

  it('C47163	Whatsapp Enquiry on LDP without input form', function () {
    cy.gotoWhatsappLDP();
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

  it('C47164	Whatsapp Enquiry on LDP input phone number under 10 digit', function () {
    cy.gotoWhatsappLDP();
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

  it('C47165	Whatsapp Enquiry on LDP input phone number above 14 digit', function () {
    cy.gotoWhatsappLDP();
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

describe('new inquiry call phone', function () {
  let data;
  beforeEach(() => {
    cy.viewport('macbook-15').visit('/properti/landak/hos8749298/');
    cy.fixture('rumah123/json-file/inquiry').then((inquiry) => {
      data = inquiry;
    });
  });

  it('C47169	Whatsapp Enquiry on LDP without input name', function () {
    cy.gotoPhoneCallLDP();
    cy.inputFormInquiry({
      Nama: 'skip',
      NomorTelepon: data.phone,
      Email: data.mail
    });
    cy.clickVerificationButton();
    cy.errorNameEmpty({ index: 0, textErrorNameInput: 'Nama wajib diisi' });
  });

  it('C47170	Whatsapp Enquiry on LDP without input phone number', function () {
    cy.gotoPhoneCallLDP();
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

  it('C47172	Whatsapp Enquiry on LDP without input form', function () {
    cy.gotoPhoneCallLDP();
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

  it('C47173	Whatsapp Enquiry on LDP input phone number under 10 digit', function () {
    cy.gotoPhoneCallLDP();
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

  it('C47174	Whatsapp Enquiry on LDP input phone number above 14 digit', function () {
    cy.gotoPhoneCallLDP();
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
