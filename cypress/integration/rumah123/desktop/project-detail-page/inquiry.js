const mockInput = {
  Nama: 'automation testing',
  NomorTelepon: '083829943719',
  Email: 'haha@gmail.com'
};

describe('New Inquiry Whatsapp', function () {
  beforeEach(() => {
    cy.viewport('macbook-15').visit('/perumahan-baru/properti/biak-numfor/the-ocean-park/nps1555/');
  });

  it('C47178 Whatsapp Enquiry on LDP without input name', function () {
    cy.gotoWhatsappLDP();
    cy.inputFormInquiry({
      ...mockInput,
      Nama: 'skip'
    });
    cy.clickVerificationButton();
    cy.errorNameEmpty({ index: 0, textErrorNameInput: 'Nama wajib diisi' });
  });

  it('C47179 Whatsapp Enquiry on LDP without input phone number', function () {
    cy.gotoWhatsappLDP();
    cy.inputFormInquiry({
      ...mockInput,
      NomorTelepon: 'skip'
    });
    cy.clickVerificationButton();
    cy.errorNameEmpty({
      index: 0,
      textErrorPhoneInput: 'Nomor Handpone wajib diisi'
    });
  });

  it('C47181 Whatsapp Enquiry on LDP without input form', function () {
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
  it('C47182 Whatsapp Enquiry on LDP input phone number under 10 digit', function () {
    cy.gotoWhatsappLDP();
    cy.inputFormInquiry({
      ...mockInput,
      NomorTelepon: '83829943'
    });
    cy.clickVerificationButton();
    cy.errorNameEmpty({
      index: 0,
      textErrorPhoneInput: 'Nomor tidak boleh kurang dari 10 digit'
    });
  });

  it('C47183 Whatsapp Enquiry on LDP input phone number above 14 digit', function () {
    cy.gotoWhatsappLDP();
    cy.inputFormInquiry({
      ...mockInput,
      NomorTelepon: '83829943719111011'
    });
    cy.errorNameEmpty({
      index: 0,
      textErrorPhoneInput: 'Nomor tidak boleh lebih dari 14 digit'
    });
  });
});

describe('New Inquiry Phone Call', function () {
  beforeEach(() => {
    cy.viewport('macbook-15').visit('/perumahan-baru/properti/biak-numfor/the-ocean-park/nps1555/');
  });

  it('C47187 Phone Call Enquiry on LDP without input name', function () {
    cy.gotoPhoneCallLDP();
    cy.inputFormInquiry({
      ...mockInput,
      Nama: 'skip'
    });
    cy.clickVerificationButton();
    cy.errorNameEmpty({ index: 0, textErrorNameInput: 'Nama wajib diisi' });
  });

  it('C47188 Phone Call Enquiry on LDP without input phone number', function () {
    cy.gotoPhoneCallLDP();
    cy.inputFormInquiry({
      ...mockInput,
      NomorTelepon: 'skip'
    });
    cy.clickVerificationButton();
    cy.errorNameEmpty({
      index: 0,
      textErrorPhoneInput: 'Nomor Handpone wajib diisi'
    });
  });

  it('C47190 Phone Call Enquiry on LDP without input form', function () {
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

  it('C47191 Phone Call Enquiry on LDP input phone number under 10 digit', function () {
    cy.gotoPhoneCallLDP();
    cy.inputFormInquiry({
      ...mockInput,
      NomorTelepon: '83829943'
    });
    cy.clickVerificationButton();
    cy.errorNameEmpty({
      index: 0,
      textErrorPhoneInput: 'Nomor tidak boleh kurang dari 10 digit'
    });
  });

  it('C47192 Phone Call Enquiry on LDP input phone number above 14 digit', function () {
    cy.gotoPhoneCallLDP();
    cy.inputFormInquiry({
      ...mockInput,
      NomorTelepon: '83829943719111011'
    });
    cy.errorNameEmpty({
      index: 0,
      textErrorPhoneInput: 'Nomor tidak boleh lebih dari 14 digit'
    });
  });
});
