describe('Gallery Section Inquiry (Phone)', () => {
  let data;
  beforeEach(function () {
    cy.viewport('macbook-15').visit('/properti/biak-numfor/hos8749298/');
    cy.fixture('rumah123/json-file/inquiry').then((dataFixture) => {
      data = dataFixture;
    });
    /*
      go to gallery section
    */
    cy.getElement('ldp-banner-image').click();
  });

  it('C68151	Phone number enquiry on LDP Gallery without input name', function () {
    cy.getElement('ldp-gallery-section-inquiry-phone').eq(0).click();
    cy.inputFormInquiry({
      Nama: 'skip',
      NomorTelepon: data.phone,
      Email: data.mail
    });
    cy.clickVerificationButton();
    cy.errorNameEmpty({
      index: 0,
      textErrorNameInput: 'Nama wajib diisi'
    });
  });
  it('C68152	Phone number enquiry on LDP Gallery without input phone number', function () {
    cy.getElement('ldp-gallery-section-inquiry-phone').eq(0).click();
    cy.inputFormInquiry({
      Nama: data.name,
      NomorTelepon: 'skip',
      Email: data.mail
    });
    cy.clickVerificationButton();
    cy.errorNameEmpty({
      index: 0,
      textErrorNameInput: 'Nomor Handpone wajib diisi'
    });
  });

  it('C68154	Phone number enquiry on LDP Gallery without input form', function () {
    cy.getElement('ldp-gallery-section-inquiry-phone').eq(0).click();
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
  it('C68155	Phone number enquiry on LDP Gallery input phone number under 10 digit', function () {
    cy.getElement('ldp-gallery-section-inquiry-phone').eq(0).click();
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
  it('C68156	Phone number enquiry on LDP Gallery input phone number above 14 digit', function () {
    cy.getElement('ldp-gallery-section-inquiry-phone').eq(0).click();
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

describe('Gallery Section Inquiry (Whatsapp)', () => {
  let data;
  beforeEach(function () {
    cy.viewport('macbook-15').visit('/properti/biak-numfor/hos8749298/');
    cy.fixture('rumah123/json-file/inquiry').then((dataFixture) => {
      data = dataFixture;
    });
    /*
      go to gallery section
    */
    cy.getElement('ldp-banner-image').click();
  });

  it('C68160	Whatsapp enquiry on LDP Gallery without input name', function () {
    cy.getElement('ldp-gallery-section-inquiry-whatsapp').eq(0).click();
    cy.inputFormInquiry({
      Nama: 'skip',
      NomorTelepon: data.phone,
      Email: data.mail
    });
    cy.clickVerificationButton();
    cy.errorNameEmpty({
      index: 0,
      textErrorNameInput: 'Nama wajib diisi'
    });
  });
  it('C68161	Whatsapp enquiry on LDP Gallery without input phone number', function () {
    cy.getElement('ldp-gallery-section-inquiry-whatsapp').eq(0).click();
    cy.inputFormInquiry({
      Nama: data.name,
      NomorTelepon: 'skip',
      Email: data.mail
    });
    cy.clickVerificationButton();
    cy.errorNameEmpty({
      index: 0,
      textErrorNameInput: 'Nomor Handpone wajib diisi'
    });
  });
  it('C68163	Whatsapp enquiry on LDP Gallery without input form', function () {
    cy.getElement('ldp-gallery-section-inquiry-whatsapp').eq(0).click();
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
  it('C68164	Whatsapp enquiry on LDP Gallery input phone number under 10 digit ', function () {
    cy.getElement('ldp-gallery-section-inquiry-whatsapp').eq(0).click();
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
  it('C68165	Whatsapp enquiry on LDP Gallery input phone number above 14 digit ', function () {
    cy.getElement('ldp-gallery-section-inquiry-whatsapp').eq(0).click();
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
