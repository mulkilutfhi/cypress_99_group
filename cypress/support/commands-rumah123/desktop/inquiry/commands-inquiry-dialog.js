Cypress.Commands.add('isDialogInquiryExist', () => {
    cy.get(
        '.ui-organism-listing-inquiry-r123__dialog .ui-atomic-dialog__content'
    ).should('exist');
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

Cypress.Commands.add('doClickPhoneNumber', () => {
    /**
     * Check Inquiry Dialog Is Exist
     */
    cy.isDialogInquiryExist();

    const dialog = cy.get(
        '.ui-organism-listing-inquiry-r123__dialog .ui-atomic-dialog__content'
    );
    dialog
        .get(
            '.ui-organism-listing-inquiry-r123__inquiry-buttons .ui-molecules-combobox-split > button'
        )
        .first()
        .click();

    const truncateElement = dialog
        .get(
            '.ui-organism-listing-inquiry-r123__inquiry-buttons .ui-molecules-combobox-split .ui-atomic-ellipsis--show'
        )
        .first();
    truncateElement.should('exist');
});

Cypress.Commands.add(
    'doFillingInquiryInput',
    ({ message, name, email, phone }) => {
        /**
         * Check Inquiry Dialog Is Exist
         */
        cy.isDialogInquiryFormExist();

        const messageElement = cy.get(
            '.ui-organism-listing-inquiry-r123__dialog .ui-atomic-dialog__content .ui-atomic-textarea__input'
        );
        messageElement.clear();
        if (message !== undefined) messageElement.type(message);

        const nameElement = cy
            .get(
                '.ui-organism-listing-inquiry-r123__dialog .ui-atomic-dialog__content .ui-atomic-edit-text__input'
            )
            .eq(0);
        nameElement.clear();
        if (name !== undefined) nameElement.type(name);

        const emailElement = cy
            .get(
                '.ui-organism-listing-inquiry-r123__dialog .ui-atomic-dialog__content .ui-atomic-edit-text__input'
            )
            .eq(1);
        emailElement.clear();
        if (email !== undefined) emailElement.type(email);

        const phoneElement = cy
            .get(
                '.ui-organism-listing-inquiry-r123__dialog .ui-atomic-dialog__content .ui-atomic-edit-text__input'
            )
            .eq(2);
        phoneElement.clear();
        if (phone !== undefined) phoneElement.type(phone);
    }
);

Cypress.Commands.add('doSubmitInquiry', (input) => {
    /**
     * Do Filling Inquiry Input
     */
    cy.doFillingInquiryInput(input);

    const buttonSubmitEnquiry = cy
        .get(
            '.ui-organism-listing-inquiry-r123__dialog .ui-atomic-dialog__content .ui-organism-listing-inquiry-r123__email-submit > .ui-atomic-button'
        )
        .eq(0);

    buttonSubmitEnquiry.should('exist');
    buttonSubmitEnquiry.click();
});

Cypress.Commands.add('normalTestCaseEnquiry', (input, config = {}) => {
    /**
     * Do Filling Inquiry Input
     */
    cy.doSubmitInquiry(input);
    cy.isSuccessDialogExists({ isPDP: config.isPDP });
});

Cypress.Commands.add('errorTestCaseEnquiry', (input = {}, type = 'all') => {
    /**
     * Do Filling Inquiry Input
     */
    cy.doSubmitInquiry(input);
    cy.doValidationForm(type);
});

Cypress.Commands.add('errorTestWithoutName', (input) => {
    cy.errorTestCaseEnquiry(input, 'name');
});

Cypress.Commands.add('errorTestWithoutEmail', (input) => {
    cy.errorTestCaseEnquiry(input, 'email');
});

Cypress.Commands.add('errorTestWithoutPhone', (input) => {
    cy.errorTestCaseEnquiry(input, 'phone');
});

Cypress.Commands.add('doValidationForm', (type) => {
    if (type === 'name' || type === 'all') {
        cy.get(
            '.ui-organism-listing-inquiry-r123__dialog .ui-atomic-dialog__content .ui-organism-listing-inquiry-r123__field'
        )
            .eq(0)
            .contains('Nama harus diisi');
    }

    if (type === 'email' || type === 'all') {
        cy.get(
            '.ui-organism-listing-inquiry-r123__dialog .ui-atomic-dialog__content .ui-organism-listing-inquiry-r123__field'
        )
            .eq(1)
            .contains('Email harus diisi');
    }

    if (type === 'phone' || type === 'all') {
        cy.get(
            '.ui-organism-listing-inquiry-r123__dialog .ui-atomic-dialog__content .ui-organism-listing-inquiry-r123__field'
        )
            .eq(2)
            .contains('Nomor Telephone harus diisi');
    }
});

Cypress.Commands.add('clickPhoneNumberR123', () => {
    cy.get(
        '.ui-atomic-dialog__content > .flex-column > :nth-child(1) > .ui-organism-listing-inquiry-r123__container-wrapper > .ui-organism-listing-inquiry-r123__inquiry-buttons > .flex'
    ).click();
    cy.get(
        '.ui-atomic-dialog__content > .flex-column > :nth-child(1) > .ui-organism-listing-inquiry-r123__container-wrapper > .ui-organism-listing-inquiry-r123__inquiry-buttons > .flex > .ui-atomic-button--children > .truncate'
    ).should('not.match', /[0-9]*.../);
});

Cypress.Commands.add('clickSuccessDialogCloseButtonR123', () => {
    cy.get('.ui-atomic-dialog__content > div > .rui-icon-cross').click();
    cy.get('.ui-atomic-dialog__content').should('not.exist');
});
