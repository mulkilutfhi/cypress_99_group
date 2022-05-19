describe("Msite Registration for Consumer User", function() {

	let dataValid, dataInvalid;

	beforeEach(function() {
		cy.viewport('iphone-x').visit('/');
		cy.fixture('rumah123/json-file/registration-consumer').then((register)=>
		{
			dataValid = register.validData;
			dataInvalid = register.invalidData;
		})
  });

	it("C850 Register using valid data", function() {
		cy.intercept('POST','/api/auth/register').as('RegistrationSuccess')
		cy.openRegisterTab()
		cy.inputNamaDepan().type(dataValid.namaDepan)
		cy.inputNamaBelakang().type(dataValid.namaBelakang)
		cy.inputEmailConsumer().type(dataValid.emailConsumer)
		cy.inputPasswordConsumer().type(dataValid.passwordConsumer, {sensitive:true})
		cy.get('#alertSubscribeStatus').click({force:true})
		cy.get('#toc').should('exist')
		cy.submitRegistrationConsumer()
		cy.wait('@RegistrationSuccess').its('response.statusCode').should('equal', 200)
	});

	it("C853 Register - Leave all field blank", function() {
		const errorMessage = [
			'Mohon isi nama depan',
			'Mohon isi nama belakang',
			'Mohon isi Email',
			'Mohon isi Password'
		]
		cy.openRegisterTab()
		cy.submitRegistrationConsumer()
		cy.get('.ui-molecules-register-form-r123').as('validasifield')
		cy.get('@validasifield').find('.ui-atomic-edit-text__error-text').as('errorField')
		for(let i=0; i < errorMessage.length ; i++) {
			cy.get('@errorField').eq([i])
				.should('have.text', errorMessage[i]) }
	});

	it("C852 Register - Leave First Name field blank", function() {
		const errorMessage = ['Mohon isi nama depan']
		cy.openRegisterTab()
		cy.inputNamaBelakang().type(dataValid.namaBelakang)
		cy.inputEmailConsumer().type(dataValid.emailConsumer)
		cy.inputPasswordConsumer().type(dataValid.passwordConsumer, {sensitive:true})
		cy.submitRegistrationConsumer()
		cy.get('.ui-molecules-register-form-r123').as('validasifield')
		cy.get('@validasifield').find('.ui-atomic-edit-text__error-text').as('errorField')
		for(let i=0; i < errorMessage.length ; i++) {
			cy.get('@errorField').eq([i])
				.should('have.text', errorMessage[i]) }
	});

	it("C854 Register - Leave Last Name field blank", function() {
		const errorMessage = ['Mohon isi nama belakang']
		cy.openRegisterTab()
		cy.inputNamaDepan().type(dataValid.namaDepan)
		cy.inputEmailConsumer().type(dataValid.emailConsumer)
		cy.inputPasswordConsumer().type(dataValid.passwordConsumer, {sensitive:true})
		cy.submitRegistrationConsumer()
		cy.get('.ui-molecules-register-form-r123').as('validasifield')
		cy.get('@validasifield').find('.ui-atomic-edit-text__error-text').as('errorField')
		for(let i=0; i < errorMessage.length ; i++) {
			cy.get('@errorField').eq([i])
				.should('have.text', errorMessage[i]) }
	});

	it("C855 Register - Leave Email field blank", function() {
		const errorMessage = ['Mohon isi Email']
		cy.openRegisterTab()
		cy.inputNamaDepan().type(dataValid.namaDepan)
		cy.inputNamaBelakang().type(dataValid.namaBelakang)
		cy.inputPasswordConsumer().type(dataValid.passwordConsumer, {sensitive:true})
		cy.submitRegistrationConsumer()
		cy.get('.ui-molecules-register-form-r123').as('validasifield')
		cy.get('@validasifield').find('.ui-atomic-edit-text__error-text').as('errorField')
		for(let i=0; i < errorMessage.length ; i++) {
			cy.get('@errorField').eq([i])
				.should('have.text', errorMessage[i]) }
	});

	it("C856 Register - Leave Password field blank", function() {
		const errorMessage = ['Mohon isi Password']
		cy.openRegisterTab()
		cy.inputNamaDepan().type(dataValid.namaDepan)
		cy.inputNamaBelakang().type(dataValid.namaBelakang)
		cy.inputEmailConsumer().type(dataValid.emailConsumer)
		cy.submitRegistrationConsumer()
		cy.get('.ui-molecules-register-form-r123').as('validasifield')
		cy.get('@validasifield').find('.ui-atomic-edit-text__error-text').as('errorField')
		for(let i=0; i < errorMessage.length ; i++) {
			cy.get('@errorField').eq([i])
				.should('have.text', errorMessage[i]) }
	});

	it("C857 Register - Uncheck Terms and Conditions", function() {
		const errorMessage = ['Silakan menyetujui syarat & Ketentuan untuk melanjutkan']
		cy.openRegisterTab()
		cy.inputNamaDepan().type(dataValid.namaDepan)
		cy.inputNamaBelakang().type(dataValid.namaBelakang)
		cy.inputEmailConsumer().type(dataValid.emailConsumer)
		cy.inputPasswordConsumer().type(dataValid.passwordConsumer, {sensitive:true})
		cy.get('#toc').click({force:true})
		cy.submitRegistrationConsumer()
		cy.get('.ui-molecules-register-form-r123').as('validasifield')
		cy.get('@validasifield').find('p.ui-atomic-text--styling-caption').as('errorCheckbox')
		for(let i=0; i < errorMessage.length ; i++) {
			cy.get('@errorCheckbox').eq([i])
				.should('have.text', errorMessage[i]) }
	});

	it("C858 Register using existing email", function() {
		cy.openRegisterTab()
		cy.inputNamaDepan().type(dataValid.namaDepan)
		cy.inputNamaBelakang().type(dataValid.namaBelakang)
		cy.inputEmailConsumer().type(dataValid.emailConsumer)
		cy.inputPasswordConsumer().type(dataValid.passwordConsumer, {sensitive:true})
		cy.submitRegistrationConsumer()
		cy.get('.ui-atomic-badges__children').should('have.text','Email telah terdaftar. Mohon gunakan email lain')
	});

	it("C859 Register using wrong email format", function() {
		cy.openRegisterTab()
		cy.inputNamaDepan().type(dataValid.namaDepan)
		cy.inputNamaBelakang().type(dataValid.namaBelakang)
		cy.inputEmailConsumer().type(dataInvalid.emailConsumer)
		cy.inputPasswordConsumer().type(dataValid.passwordConsumer, {sensitive:true})
		cy.submitRegistrationConsumer()
		cy.get('.ui-atomic-edit-text__error-text').eq(0).should('have.text','Mohon input email dengan format yang benar')
	});

	it("C860 Register name using special character", function() {
		cy.openRegisterTab()
		cy.inputNamaDepan().type(dataInvalid.namaDepan)
		cy.inputNamaBelakang().type(dataValid.namaBelakang)
		cy.inputEmailConsumer().type(dataValid.emailConsumer)
		cy.inputPasswordConsumer().type(dataValid.passwordConsumer,{sensitive:true})
		cy.submitRegistrationConsumer()
		cy.get('.ui-atomic-badges__children').should('have.text','Email telah terdaftar. Mohon gunakan email lain')
	});
});
