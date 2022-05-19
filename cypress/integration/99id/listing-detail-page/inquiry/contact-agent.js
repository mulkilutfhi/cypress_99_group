describe('Contact agent LDP',() => {

	beforeEach(()=>{
		cy.viewport('macbook-15').visit('/')
	});

	it ('C37516 callback with valid name and phone',()=>{
		/*
		Precondition
		Given im in LDP
		*/
		cy.Search_Bycity()
		cy.get('.search-bar-advanced__text-advanced > .btn').click({force:true})

		//select listing that will be process
		cy.get('.search-card-redesign__address > [href="/id/properti/rumah-dijual-1-3mily-rantepao-523437901"]').eq(0)
			.scrollIntoView()
			.invoke('removeAttr','target')
			.wait(1000)
			.click({force:true},{timeout:15000})
			.wait(2000)

		//when i fill <fillname>
		cy.inputName('Testing')

		//and i fill <phone>
		cy.inputPhone('08222222222')

		//and i click submit
		cy.doClickCarikanSayaProperti()
		//and i validation all element multiple inquiry should be appear
		cy.validation_el_multiple_inquiry()

		//and i click button kontak agent
		cy.get('.text-center > .btn-primary').click()
			.wait(1000)
		//then multiple inquiry whatsapp should be appear
		cy.validation_wa_button_multipleinquiry()

		//and i click button lihat properti lainya, then i must go to SRP
		cy.click_button_propertilainya()
	});
});
