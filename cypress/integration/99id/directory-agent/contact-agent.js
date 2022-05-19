describe('Contact Agent Directory Agent', () => {

	beforeEach(() => {
		cy.viewport('macbook-15');
	});

	it('As buyer i want to callback via directory agent page', function () {
		cy.visit('/');
		cy.doCLickDirectoryFooter();
		cy.doSearchAgent('Istiq Test');
		cy.doClickAgent();
		cy.doInputNameAgentDirectory('Testing');
		cy.doInputPhoneAgentDirectory('08222222222');
		cy.doClickCarikanSayaProperti();
		cy.doValidationSuccessCallback();
	});

	it('as buyer i want to callback via listing directory agent', function () {
		cy.visit('/');
		cy.doCLickDirectoryFooter();
		cy.doSearchAgent('Istiq Test');
		cy.doClickAgent();
		cy.SelectListing_CTAKontak_SRP();
		cy.input_name('testing');
		cy.input_phone_number('08222222222');
		cy.get('#form-callback-callback-form-37767344-523437901 > button[type="submit"]')
			.eq(1)
			.click({ force: true });
		cy.get('#callback-form-37767344-523437901 > div > div:nth-child(2) > div:nth-child(2) > div > div > p:nth-child(1)')
			.eq(1)
			.then((valid_callback_name) => {
				expect(valid_callback_name.text()).eq('testing');
		});

		cy.get('#callback-form-37767344-523437901 > div > div:nth-child(2) > div:nth-child(2) > div > div > p:nth-child(2)')
			.eq(1)
			.then((valid_callback_phone) => {
				expect(valid_callback_phone.text()).eq('08222222222');
		});
	});
});
