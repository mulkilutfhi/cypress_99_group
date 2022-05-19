/**
 * assertInquiryFormR123
 * @description Assert the inquiry form is visible
 *
 */
Cypress.Commands.add('assertInquiryFormR123',() => {
	cy.get('.ui-atomic-dialog__content > .flex-column').should('be.visible')
	cy.get('.ui-atomic-dialog__content > .flex-column > :nth-child(1)').should('be.visible')
	cy.get('.ui-atomic-dialog__content > .flex-column > :nth-child(2) > .ui-container > .ui-organism-listing-inquiry-r123__form > :nth-child(1) > .ui-atomic-textarea > #inquiry-message').should('be.visible')
	cy.get('.ui-atomic-dialog__content > .flex-column > :nth-child(2) > .ui-container > .ui-organism-listing-inquiry-r123__form > .ui-organism-listing-inquiry-r123__details-field > :nth-child(2) > .ui-atomic-edit-text > #inquiry-input').should('be.visible')
	cy.get('.ui-atomic-dialog__content > .flex-column > :nth-child(2) > .ui-container > .ui-organism-listing-inquiry-r123__form > .ui-organism-listing-inquiry-r123__details-field > :nth-child(3) > .ui-atomic-edit-text > #inquiry-input').should('be.visible')
	cy.get('.ui-atomic-dialog__content > .flex-column > :nth-child(2) > .ui-container > .ui-organism-listing-inquiry-r123__form > .ui-organism-listing-inquiry-r123__details-field > :nth-child(4) > .ui-atomic-edit-text > #inquiry-input').should('be.visible')
	cy.get('.ui-atomic-dialog__content > .flex-column > :nth-child(2) > .ui-container > :nth-child(2) > .ui-organism-listing-inquiry-r123__email-submit > .ui-atomic-button').should('be.visible')
});

/**
 * submitInquiryFormR123
 * @description Fill the inquiry form
 * @param data.message the inquiry message
 * @param data.name the sender name
 * @param data.email the sender email
 * @param data.telephone the sender telephone number
 */
Cypress.Commands.add('submitInquiryFormR123', (data) => {
	const { message, name, email, telephone } = data
	cy.assertInquiryFormR123()
		if (data.message) {
			cy.get('.ui-atomic-dialog__content > .flex-column > :nth-child(2) > .ui-container > .ui-organism-listing-inquiry-r123__form > :nth-child(1) > .ui-atomic-textarea > #inquiry-message').type(data.message)
		}
		if (data.name) {
			cy.get('.ui-atomic-dialog__content > .flex-column > :nth-child(2) > .ui-container > .ui-organism-listing-inquiry-r123__form > .ui-organism-listing-inquiry-r123__details-field > :nth-child(2) > .ui-atomic-edit-text > #inquiry-input').type(data.name)
		}
		if (data.email) {
			cy.get('.ui-atomic-dialog__content > .flex-column > :nth-child(2) > .ui-container > .ui-organism-listing-inquiry-r123__form > .ui-organism-listing-inquiry-r123__details-field > :nth-child(3) > .ui-atomic-edit-text > #inquiry-input').type(data.email)
		}
		if (data.telephone) {
			cy.get('.ui-atomic-dialog__content > .flex-column > :nth-child(2) > .ui-container > .ui-organism-listing-inquiry-r123__form > .ui-organism-listing-inquiry-r123__details-field > :nth-child(4) > .ui-atomic-edit-text > #inquiry-input').type(data.telephone)
		}
	cy.get('.ui-atomic-dialog__content > .flex-column > :nth-child(2) > .ui-container > :nth-child(2) > .ui-organism-listing-inquiry-r123__email-submit > .ui-atomic-button').click()
});

/**
 * triggerDownloadBrochure
 */
Cypress.Commands.add('triggerDownloadBrochureR123', () => {
	cy.get('.left-container-wrapper > .flex > .ui-atomic-button > .ui-atomic-button--children').contains('Unduh Brosur').should('be.visible')
	cy.get('.left-container-wrapper > .flex > .ui-atomic-button').click({force: true})
});
