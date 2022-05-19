Cypress.Commands.add('goToListingDetailPage', () => {
    cy.fixture('listing').then((dummy) => {
        cy.get('input[maxlength="80"]')
            .click({ force: true })
            .type(dummy.listing_inquiry)
            .intercept({
                method: 'GET',
                url:
                    '/api/search-suggestion/get-by-text?language=id&query=hos7999253&subChannel=SUB_SALE'
            })
            .as('wait_suggestion');
        cy.wait('@wait_suggestion', { timeout: 15000 })
            .its('response.statusCode')
            .should('eq', 200);
        cy.get('.ui-molecules-autocomplete-r123__text')
            .eq(0)
            .click({ force: true }, { timeout: 5000 });

        cy.get('.search-btn > .ui-atomic-button').click({ force: true });
    });
});

Cypress.Commands.add('doClickSendEmailonLDP', () => {
    const btnSendEmail = cy.get(
        '.ui-organism-listing-inquiry-r123__email-button > .ui-atomic-button'
    );

    /**
     * Simulate click
     */
    btnSendEmail.click();
});

Cypress.Commands.add('isPropertyDetailPageExist', () => {
    cy.get('.r123-o-listing-summary__detail').should('exist');
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

Cypress.Commands.add('doClickPhoneNumberLDP', () => {
    /**
     * Check Inquiry Dialog Is Exist
     */
    cy.isDialogInquiryFormExist();

    const phone = cy.get(
        '.ui-organism-listing-inquiry-r123 > div > div:nth-child(3) > div > .ui-organism-listing-inquiry-r123__phone-button'
    );
    phone.should('exist');
});

Cypress.Commands.add(
    'doFillingInquiryInputLDP',
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

Cypress.Commands.add('doSubmitInquiryLDP', (input) => {
    /**
     * Do Filling Inquiry Input
     */
    cy.doFillingInquiryInputLDP(input);
    // cy.get(':nth-child(2) > .ui-organism-listing-inquiry-r123__dialog > .ui-atomic-dialog__content > .flex-column > :nth-child(2) > .ui-container > :nth-child(2) > .ui-organism-listing-inquiry-r123__email-submit > .ui-atomic-button')
    const dialog = cy.get(
        ':nth-child(2) > .ui-organism-listing-inquiry-r123__dialog > .ui-atomic-dialog__content > .flex-column'
    );

    const buttonSubmitEnquiry = dialog.contains('Kirim ke agen').eq(0);

    buttonSubmitEnquiry.should('exist');
    buttonSubmitEnquiry.click();
});

Cypress.Commands.add('normalTestCaseEnquiryLDP', (input) => {
    /**
     * Do Filling Inquiry Input
     */
    cy.doSubmitInquiryLDP(input);
    cy.isSuccessDialogExistsBottomPage();
});

Cypress.Commands.add('errorTestCaseEnquiryLDP', (input = {}, type = 'all') => {
    /**
     * Do Filling Inquiry Input
     */
    cy.doSubmitInquiryLDP(input);
    cy.doValidationFormLDP(type);
});

Cypress.Commands.add('errorTestWithoutNameLDP', (input) => {
    cy.errorTestCaseEnquiryLDP(input, 'name');
});

Cypress.Commands.add('errorTestWithoutEmailLDP', (input) => {
    cy.errorTestCaseEnquiryLDP(input, 'email');
});

Cypress.Commands.add('errorTestWithoutPhoneLDP', (input) => {
    cy.errorTestCaseEnquiryLDP(input, 'phone');
});

Cypress.Commands.add('doValidationFormLDP', (type) => {
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

Cypress.Commands.add('doClickWADialogLDP', () => {
    /**
     * Check Inquiry Dialog Is Exist
     */
    cy.isDialogInquiryFormExist();
    const btnWA = cy.get(
        ':nth-child(2) > .ui-organism-listing-inquiry-r123__dialog > .ui-atomic-dialog__content > .flex-column > :nth-child(1) > .ui-organism-listing-inquiry-r123__container-wrapper > .ui-organism-listing-inquiry-r123__inquiry-buttons > :nth-child(2)'
    );
    btnWA.click();
});

Cypress.Commands.add('doClickWABottomPage', () => {
    const btnWA = cy.get(
        '.ui-organism-listing-inquiry-r123__container-wrapper > .ui-organism-listing-inquiry-r123__inquiry-buttons > :nth-child(2)'
    );
    btnWA.click({ force: true });
});
