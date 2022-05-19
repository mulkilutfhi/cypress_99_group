Cypress.Commands.add('clickDownloadBrochureR123', () => {
    cy.contains('Unduh Brosur').should('be.visible').click({ force: true });
});

Cypress.Commands.add('doClickSendEmailonPDP', () => {
    const btnSendEmail = cy.get(
        '.ui-organism-listing-inquiry-r123__email-button > .ui-atomic-button'
    );

    /**
     * Simulate click
     */
    btnSendEmail.click({ force: true });
});

Cypress.Commands.add('isDialogInquiryFormExist', () => {
    /**
     * Check Inquiry Dialog Is Exist
     */
    cy.isDialogInquiryExist();

    const dialog = cy.get(
        '.ui-organism-listing-inquiry-r123__dialog .ui-atomic-dialog__content'
    );
    const messageElement = dialog.get('.ui-atomic-textarea__input');
    const nameElement = dialog.get('.ui-atomic-edit-text__input').eq(0);
    const emailElement = dialog.get('.ui-atomic-edit-text__input').eq(1);
    const phoneElement = dialog.get('.ui-atomic-edit-text__input').eq(2);

    messageElement.should('exist');
    nameElement.should('exist');
    emailElement.should('exist');
    phoneElement.should('exist');
});

Cypress.Commands.add('doClickPhoneNumberPDP', () => {
    /**
     * Check Inquiry Dialog Is Exist
     */
    cy.isDialogInquiryFormExist();

    cy.get(
        '.ui-organism-listing-inquiry-r123 > .ui-organism-listing-inquiry-r123__inquiry-box-wrapper'
    )
        .get(
            'div:nth-child(3) > div > .ui-organism-listing-inquiry-r123__phone-button'
        )
        .should('be.visible');
});

Cypress.Commands.add(
    'doFillingInquiryInputPDP',
    ({ message, name, email, phone }) => {
        /**
         * Check Inquiry Dialog Is Exist
         */
        cy.isDialogInquiryFormExist();

        const messageElement = cy.get(
            ':nth-child(2) > .ui-organism-listing-inquiry-r123__dialog > .ui-atomic-dialog__content > .flex-column > :nth-child(2) > .ui-container > .ui-organism-listing-inquiry-r123__form > :nth-child(1) > .ui-atomic-textarea > #inquiry-message'
        );
        messageElement.clear();
        if (message !== undefined) messageElement.type(message);

        const nameElement = cy.get(
            ':nth-child(2) > .ui-organism-listing-inquiry-r123__dialog > .ui-atomic-dialog__content > .flex-column > :nth-child(2) > .ui-container > .ui-organism-listing-inquiry-r123__form > .ui-organism-listing-inquiry-r123__details-field > :nth-child(2) > .ui-atomic-edit-text > #inquiry-input'
        );
        nameElement.clear();
        if (name !== undefined) nameElement.type(name);

        const emailElement = cy.get(
            ':nth-child(2) > .ui-organism-listing-inquiry-r123__dialog > .ui-atomic-dialog__content > .flex-column > :nth-child(2) > .ui-container > .ui-organism-listing-inquiry-r123__form > .ui-organism-listing-inquiry-r123__details-field > :nth-child(3) > .ui-atomic-edit-text > #inquiry-input'
        );
        emailElement.clear();
        if (email !== undefined) emailElement.type(email);

        const phoneElement = cy.get(
            ':nth-child(2) > .ui-organism-listing-inquiry-r123__dialog > .ui-atomic-dialog__content > .flex-column > :nth-child(2) > .ui-container > .ui-organism-listing-inquiry-r123__form > .ui-organism-listing-inquiry-r123__details-field > :nth-child(4) > .ui-atomic-edit-text > #inquiry-input'
        );
        phoneElement.clear();
        if (phone !== undefined) phoneElement.type(phone);
    }
);

Cypress.Commands.add('doSubmitInquiryPDP', (input) => {
    /**
     * Do Filling Inquiry Input
     */
    cy.doFillingInquiryInputPDP(input);
    // cy.get(':nth-child(2) > .ui-organism-listing-inquiry-r123__dialog > .ui-atomic-dialog__content > .flex-column > :nth-child(2) > .ui-container > :nth-child(2) > .ui-organism-listing-inquiry-r123__email-submit > .ui-atomic-button')
    const dialog = cy.get(
        ':nth-child(2) > .ui-organism-listing-inquiry-r123__dialog > .ui-atomic-dialog__content > .flex-column'
    );

    const buttonSubmitEnquiry = dialog.contains('Kirim ke pengembang').eq(0);

    buttonSubmitEnquiry.should('exist');
    buttonSubmitEnquiry.click();
});

Cypress.Commands.add('normalTestCaseEnquiryPDP', (input) => {
    /**
     * Do Filling Inquiry Input
     */
    cy.doSubmitInquiryPDP(input);
    cy.isSuccessDialogExistsPDP();
});

Cypress.Commands.add('errorTestCaseEnquiryPDP', (input = {}, type = 'all') => {
    /**
     * Do Filling Inquiry Input
     */
    cy.doSubmitInquiryPDP(input);
    cy.doValidationFormPDP(type);
});

Cypress.Commands.add('errorTestWithoutNamePDP', (input) => {
    cy.errorTestCaseEnquiryPDP(input, 'name');
});

Cypress.Commands.add('errorTestWithoutEmailPDP', (input) => {
    cy.errorTestCaseEnquiryPDP(input, 'email');
});

Cypress.Commands.add('errorTestWithoutPhonePDP', (input) => {
    cy.errorTestCaseEnquiryPDP(input, 'phone');
});

Cypress.Commands.add('doValidationFormPDP', (type) => {
    if (type === 'name' || type === 'all') {
        cy.get(
            '.ui-organism-listing-inquiry-r123__details-field > :nth-child(2) > .ui-atomic-text'
        ).contains('Nama harus diisi');
    }

    if (type === 'email' || type === 'all') {
        cy.get(
            '.ui-organism-listing-inquiry-r123__details-field > :nth-child(3) > .ui-atomic-text'
        ).contains('Email harus diisi');
    }

    if (type === 'phone' || type === 'all') {
        cy.get(
            '.ui-organism-listing-inquiry-r123__details-field > :nth-child(4) > .ui-atomic-text'
        ).contains('Nomor Telephone harus diisi');
    }
});

Cypress.Commands.add('doClickWABottomPagePDP', () => {
    const btnWA = cy.get(
        '.ui-organism-listing-inquiry-r123__container-wrapper > .ui-organism-listing-inquiry-r123__inquiry-buttons > :nth-child(2)'
    );
    btnWA.click({ force: true });
});

Cypress.Commands.add('doClickWAonDialogInquiryPDP', () => {
    const btnWA = cy.get(
        ':nth-child(2) > .ui-organism-listing-inquiry-r123__dialog > .ui-atomic-dialog__content > .flex-column > :nth-child(1) > .ui-organism-listing-inquiry-r123__container-wrapper > .ui-organism-listing-inquiry-r123__inquiry-buttons > :nth-child(2)'
    );
    btnWA.click();
});

Cypress.Commands.add('isSuccessDialogExistsPDP', () => {
    const dialogSuccess = cy
        .get('.ui-molecules-inquiry-modal-r123__dialog')
        .first();
    dialogSuccess.should('exist');

    const text = dialogSuccess
        .get('.ui-molecules-inquiry-modal-r123 > p.ui-atomic-text')
        .first();
    text.contains('Pertanyaan anda telah terkirim ke developer!');
});
