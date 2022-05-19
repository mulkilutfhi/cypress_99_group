Cypress.Commands.add("isInquiryBottomPageExist", () => {
  cy.get(
    ".ui-organism-listing-inquiry-r123__form"
  ).should("exist");
});

Cypress.Commands.add("isDialogInquiryFormExist", () => {
  /**
   * Check Inquiry Dialog Is Exist
   */
  cy.isInquiryBottomPageExist();

  const dialog = cy.get(".ui-property-page__listing-inquiry");
  const messageElement = dialog.get(".ui-atomic-textarea__input");
  const nameElement = dialog.get(".ui-atomic-edit-text__input").eq(0);
  const emailElement = dialog.get(".ui-atomic-edit-text__input").eq(1);
  const phoneElement = dialog.get(".ui-atomic-edit-text__input").eq(2);

  messageElement.should("exist");
  nameElement.should("exist");
  emailElement.should("exist");
  phoneElement.should("exist");
});

Cypress.Commands.add("doClickPhoneNumberBottomPage", () => {
  /**
   * Check Inquiry Dialog Is Exist
   */
  cy.isInquiryBottomPageExist();

  cy.get('.ui-organism-listing-inquiry-r123 > .ui-organism-listing-inquiry-r123__inquiry-box-wrapper')
    .get('div:nth-child(3) > div > .ui-organism-listing-inquiry-r123__phone-button')
    .should('be.visible')


  // cy.get('.ui-molecules-combobox-split--dropdown > div > [role="button"]').eq(1).click({force:true});
  // const phone = cy.get(
  //   ".inline-flex > .inline-block > .ui-molecules-dropdown__wrapper"
  // );
  // phone.should("exist");
});

Cypress.Commands.add("doClickWABottomPage", () => {
  /**
   * Check Inquiry Dialog Is Exist
   */
  cy.isInquiryBottomPageExist();
  cy.get(".ui-organism-listing-inquiry-r113__inquiry-buttons > button").click({force:true});
});

Cypress.Commands.add(
  "doFillingInquiryInputBottomPage",
  ({ message, name, email, phone }) => {
    /**
     * Check Inquiry Bottom Page Is Exist
     */
    cy.isInquiryBottomPageExist();

    const rightCol = cy.get(
      ".ui-organism-listing-inquiry-r123__form > :nth-child(1)"
    );
    const messageElement = rightCol
      .get("#inquiry-message")
      .clear({ force: true });
    if (message !== undefined) messageElement.type(message);

    const leftCol = cy.get(
      ".ui-organism-listing-inquiry-r123__form > :nth-child(2)"
    );

    const nameElement = leftCol.get(".ui-atomic-edit-text__input").eq(0);
    nameElement.clear({ force: true });
    if (name !== undefined) nameElement.type(name);

    const emailElement = leftCol.get(".ui-atomic-edit-text__input").eq(1);
    emailElement.clear({ force: true });
    if (email !== undefined) emailElement.type(email);

    const phoneElement = leftCol.get(".ui-atomic-edit-text__input").eq(2);
    phoneElement.clear({ force: true });
    if (phone !== undefined) phoneElement.type(phone);
  }
);

Cypress.Commands.add("doSubmitInquiryBottomPage", (input) => {
  /**
   * Do Filling Inquiry Input
   */
  cy.doFillingInquiryInputBottomPage(input);

  //   const bottomPage = cy.get(".ui-property-page__listing-inquiry");
  const buttonSubmitEnquiry = cy.get(
    ".ui-organism-listing-inquiry-r123__email-submit > button"
  );

  buttonSubmitEnquiry.should("exist");
  buttonSubmitEnquiry.click({force:true});
});

Cypress.Commands.add("normalTestCaseEnquiryBottomPage", (input) => {
  /**
   * Do Filling Inquiry Input
   */
  cy.doSubmitInquiryBottomPage(input);
  cy.isSuccessDialogExistsBottomPage();
});

Cypress.Commands.add("errorTestCaseEnquiry", (input = {}, type = "all") => {
  /**
   * Do Filling Inquiry Input
   */
  cy.doSubmitInquiry(input);
  cy.doValidationForm(type);
});

Cypress.Commands.add("errorTestWithoutName", (input) => {
  cy.errorTestCaseEnquiry(input, "name");
});

Cypress.Commands.add("errorTestWithoutEmail", (input) => {
  cy.errorTestCaseEnquiry(input, "email");
});

Cypress.Commands.add("errorTestWithoutPhone", (input) => {
  cy.errorTestCaseEnquiry(input, "phone");
});

Cypress.Commands.add("doValidationForm", (type) => {
  if (type === "name" || type === "all") {
    cy.get(
      ".ui-property-page__listing-inquiry ..ui-property-page__listing-inquiry__field"
    )
      .eq(0)
      .contains("Nama harus diisi");
  }

  if (type === "email" || type === "all") {
    cy.get(
      ".ui-property-page__listing-inquiry ..ui-property-page__listing-inquiry__field"
    )
      .eq(1)
      .contains("Email harus diisi");
  }

  if (type === "phone" || type === "all") {
    cy.get(
      ".ui-property-page__listing-inquiry ..ui-property-page__listing-inquiry__field"
    )
      .eq(2)
      .contains("Nomor Telephone harus diisi");
  }
});

Cypress.Commands.add("isSuccessDialogExistsBottomPage", () => {
  const dialogSuccess = cy
    .get(".ui-molecules-inquiry-modal-r123__dialog")
    .first();
  dialogSuccess.should("exist");

  const text = dialogSuccess
    .get(".ui-molecules-inquiry-modal-r123 > p.ui-atomic-text")
    .first();
  text.contains("Pertanyaan anda telah terkirim ke developer!");
});
