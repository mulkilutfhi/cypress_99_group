describe('Contact Agent SRP',() => {

	beforeEach(() => {
		cy.visit('/intan-jaya');
		cy.viewport('macbook-15');
	});
	//Given im on SRP

	// i click kontak agent
	it ('C37509 unregister user - callback with blank name',function () {
		cy.get('.search-card-redesign__agent > button:nth-child(1)#page-list-view-item-agent-contact-649857406')
			.scrollIntoView()
			.wait(2000)
			.click({force:true});
		cy.wait(2000);

		// <fullname> should contains blank and i fill <phone>
		cy.get('.group-form').last()
			.find('.field-agentcallbackformmodel-fullname > input')
			.clear({force:true})

		cy.get('.group-form').last()
			.find('.field-agentcallbackformmodel-telephone > input') // field phone
			.clear({force:true})
			.type('08222222222',{force:true})

		//i click submit
		cy.get('#form-callback-callback-form-37767344-649857406 > button[type="submit"]').eq(1)
			.click({force:true})
			.wait(5000)

		//then i should see successfull submit popup
		cy.get('div[style="color: rgb(237, 84, 102);"]').contains('Nama Lengkap tidak boleh kosong.')
			.then(Alert_Name=>{
				expect(Alert_Name).to.be.visible
		});
	});

	it ('C37510 unregister user - callback with blank phone number',function () {
	 	// i click kontak agent
		cy.get('.search-card-redesign__agent > button:nth-child(1)#page-list-view-item-agent-contact-649857406')
			.scrollIntoView()
			.wait(2000)
			.click({force:true});
		cy.wait(2000);

		// i fill <fullname> and <phone> should contains blank
		cy.get('.group-form').last()
			.find('.field-agentcallbackformmodel-fullname > input')
			.clear({force:true})
			.type('testing',{force:true})

		cy.get('.group-form').last()
			.find('.field-agentcallbackformmodel-telephone > input') // field phone
			.clear({force:true})


		//i click submit
		cy.get('#form-callback-callback-form-37767344-649857406 > button[type="submit"]').eq(1)
			.click({force:true});
		cy.wait(2000);

		//then i should see successfull submit popup
		cy.get('div[style="color: rgb(237, 84, 102);"]').contains('Telepon tidak boleh kosong.')
			.then(Alert_PhoneNumber=>{
				expect(Alert_PhoneNumber).to.be.visible
		});
	});

	it('C2460 unregister user - callback with valid name and phone number',function () {
		// i click kontak agent
		cy.get('.search-card-redesign__agent > button:nth-child(1)#page-list-view-item-agent-contact-649857406') 
			.scrollIntoView()
			.wait(2000)
			.click({force:true});
		cy.wait(2000);

		// i fill <fullname> and i fill <phone>
		cy.get('.group-form').last()
			.find('.field-agentcallbackformmodel-fullname > input')
			.clear({force:true})
			.type('testing',{force:true})

		cy.get('.group-form').last()
			.find('.field-agentcallbackformmodel-telephone > input') // field phone
			.clear({force:true})
			.type('08222222222',{force:true})

		 //i click submit
		cy.get('#form-callback-callback-form-37767344-649857406 > button[type="submit"]').eq(1) 
			.click({force:true})
		cy.intercept({
			method:'GET',
			url:'/id/ajax/multiple-enquiry?propertyId=649857406'}).as('waitTarget')
		cy.wait('@waitTarget',{timeout:25000})
			.its('response.statusCode').should('eq',200)

		//then i should see successfull submit popup
		cy.validation_name()
			.validation_phone_number()
	});

	it ('C37511 register user - callback with valid name and phone number',function(){
		cy.Login(
			'istiq',
			'qwerty')
		cy.wait(3000)

		cy.visit('/intan-jaya')

		// i click kontak agent
		cy.get('.search-card-redesign__agent > button:nth-child(1)#page-list-view-item-agent-contact-649857406').scrollIntoView().wait(2000).click({force:true});

		//then i should see successfull submit popup
		cy.get('#callback-form-37767344-649857406 > div > div:nth-child(2) > div:nth-child(2) > div > div > p:nth-child(1)').eq(1)
			.then(valid_callback_name=>{
				expect(valid_callback_name.text()).eq('Istiq Test')
		});

		cy.get('#callback-form-37767344-649857406 > div > div:nth-child(2) > div:nth-child(2) > div > div > p:nth-child(2)').eq(1)
			.then(valid_callback_phone=>{
				expect(valid_callback_phone.text()).eq('089653606489')
		});
	});
});
