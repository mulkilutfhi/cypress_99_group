Cypress.Commands.add('gotoWhatsappLDP', function () {
  cy.get('.ui-organism-listing-inquiry-r123__inquiry-buttons > div')
    .click()
    .get('.r123-m-otp-form-account')
    .then((formInquiry) => {
      expect(formInquiry).to.be.visible;
    });
});

Cypress.Commands.add('gotoWhatsappSRP', function () {
  cy.get('.ui-atomic-button--theme-whatsapp').click({ force: true });
});

Cypress.Commands.add('gotoPhoneCallSRP', function () {
  cy.get('.ui-organisms-card-r123-basic__wrapper > div:nth-child(2)')
    .find(
      '.ui-organisms-card-r123-basic__bottom-section__phone > span:nth-child(2) > [role="button"]'
    )
    .click({ force: true });
});

Cypress.Commands.add('gotoPhoneCallLDP', function () {
  cy.get('.ui-organism-listing-inquiry-r123__inquiry-buttons  > a')
    .find('span:nth-child(2) > div')
    .click();
});

Cypress.Commands.add('inputFormInquiry', function ({ Nama, NomorTelepon, Email }) {
  cy.get('.r123-m-otp-form-account__form').find('[placeholder="Nama"]').type(Nama);
  if (Nama === 'skip') {
    cy.get('[placeholder="Nama"]').clear();
  }

  cy.get('[placeholder="Nomor telepon"]').type(NomorTelepon);
  if (NomorTelepon === 'skip') {
    cy.get('[placeholder="Nomor telepon"]').clear();
  }

  cy.get('[placeholder="Email (Optional)"]').type(Email);
  if (Email === 'skip') {
    cy.get('[placeholder="Email (Optional)"]').clear();
  }
});

Cypress.Commands.add('clickVerificationButton', function () {
  cy.get('.r123-m-otp-form-account__form > button').click();
});

Cypress.Commands.add(
  'errorNameEmpty',
  function ({ textErrorNameInput, textErrorPhoneInput, index }) {
    cy.get('.ui-atomic-edit-text__error-text')
      .eq(index)
      .should((el) => {
        expect(el).to.be.visible;
        expect(el).to.have.text(textErrorNameInput || textErrorPhoneInput);
        expect(el).to.have.css('color', 'rgb(220, 53, 69)');
      });
  }
);
