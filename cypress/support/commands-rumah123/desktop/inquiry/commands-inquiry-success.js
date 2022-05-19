Cypress.Commands.add("isSuccessDialogExists", ({ isPDP }) => {
    const dialogSuccess = cy
        .get('.ui-molecules-inquiry-modal-r123__dialog')
        .first()
    dialogSuccess.should('exist');

    const text = dialogSuccess.get('.ui-molecules-inquiry-modal-r123 > p.ui-atomic-text').first()
    if(!isPDP) {
        text.contains("Pertanyaan anda telah terkirim ke agen!")
    } else {
        text.contains("Pertanyaan anda telah terkirim ke developer!")
    }
})

Cypress.Commands.add("doCloseInquirySuccessDialog", () => {
    cy
        .get('.ui-molecules-inquiry-modal-r123 > .rui-icon-cross')
        .click()
})

Cypress.Commands.add("doClickSaveProperty", () => {
    cy
        .get('.ui-molecules-inquiry-modal-r123__dialog .ui-atomic-dialog__content .ui-molecules-inquiry-modal-r123 button.ui-atomic-button')
        .first()
        .click()
    cy
        .get('.ui-organisms-login-r123__dialog-wrapper')
        .should('exist')
})