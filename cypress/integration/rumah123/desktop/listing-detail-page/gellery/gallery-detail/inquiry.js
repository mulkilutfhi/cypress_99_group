describe('Gallery Detail Inquiry (Phone)', () => {
  let data;
  beforeEach(function () {
    cy.viewport('macbook-15').visit('/properti/biak-numfor/hos8749298/');
    cy.fixture('rumah123/json-file/inquiry').then((dataFixture) => {
      data = dataFixture;
    });
    /*
      go to gallery detail
    */
    cy.getElement('ldp-banner-image').click();
    cy.getElement('ldp-gallery-section-list-image').eq(0).click();
  });

  it('C68235	Phone number enquiry on LDP Gallery detail without input name ', function () {
    cy.getElement('ldp-gallery-detail-inquiry-phone').eq(0).click();
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
  it('C68236	Phone number enquiry on LDP Gallery detail without input phone number ', function () {
    cy.getElement('ldp-gallery-detail-inquiry-phone').eq(0).click();
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

  it('C68238	Phone number enquiry on LDP Gallery detail without input form ', function () {
    cy.getElement('ldp-gallery-detail-inquiry-phone').eq(0).click();
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
  it('C68239	Phone number enquiry on LDP Gallery detail input phone number under 10 digit ', function () {
    cy.getElement('ldp-gallery-detail-inquiry-phone').eq(0).click();
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
  it('C68240	Phone number enquiry on LDP Gallery detail input phone number above 14 digit ', function () {
    cy.getElement('ldp-gallery-detail-inquiry-phone').eq(0).click();
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

describe('Gallery Detail Inquiry (Whatsapp)', () => {
  let data;
  beforeEach(function () {
    cy.viewport('macbook-15').visit('/properti/biak-numfor/hos8749298/');
    cy.fixture('rumah123/json-file/inquiry').then((dataFixture) => {
      data = dataFixture;
    });
    /*
      go to gallery detail
    */
    cy.getElement('ldp-banner-image').click();
    cy.getElement('ldp-gallery-section-list-image').eq(0).click();
  });

  it('C68244	Whatsapp enquiry on LDP Gallery detail without input name', function () {
    cy.getElement('ldp-gallery-detail-inquiry-whatsapp').eq(0).click();
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
  it('C68245	Whatsapp enquiry on LDP Gallery detail without input phone number ', function () {
    cy.getElement('ldp-gallery-detail-inquiry-whatsapp').eq(0).click();
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
  it('C68247	Whatsapp enquiry on LDP Gallery detail without input form ', function () {
    cy.getElement('ldp-gallery-detail-inquiry-whatsapp').eq(0).click();
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
  it('C68248	Whatsapp enquiry on LDP Gallery detail input phone number under 10 digit', function () {
    cy.getElement('ldp-gallery-detail-inquiry-whatsapp').eq(0).click();
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
  it('C68249	Whatsapp enquiry on LDP Gallery detail input phone number above 14 digit', function () {
    cy.getElement('ldp-gallery-detail-inquiry-whatsapp').eq(0).click();
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
