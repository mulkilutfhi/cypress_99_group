describe('Callback LDP VL', () => {

	beforeEach(()=>{
		cy.viewport('macbook-15').visit('/')
	});

	it('callback kontak', function () {
		cy.Search_Bycity()
				.get('.search-bar-advanced__text-advanced > .btn')
				.click();

		//select listing verified
		cy.selectListingVl();
		cy.get('.property-secondary-vl-content__card-wrapper__right-bar > button[data-agent-username="istiq"]')
			.click();

		//input name & phone number
		cy.inputNameVl('Testing');
		cy.inputPhoneVl('08222222222');

		cy.doClickCarikanSayaProperti_VL();

		//validation all attribute in popup recomendation should be appear
		cy.validation_el_multiple_inquiry();

		cy.get('.row > .text-center > .btn-primary')
			.click();
		cy.wait(1000);

		//in popup recommendation should be appear button callback WA
		cy.validation_wa_button_multipleinquiry();

		//and i click button lihat properti lainya, then i must go to SRP
		cy.click_button_propertilainya();
	});
});
