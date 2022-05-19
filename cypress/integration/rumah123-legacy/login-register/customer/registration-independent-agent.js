describe ('Registration Independent Agent', function() {

	beforeEach(function() {
    cy.viewport('macbook-15')
    cy.visit('https://r123:rumah%40123@stg.legacy-web.rumah123.com/agen-registrasi')
  })

	it('C33486 Agent Registration - Using valid data', function () {
		cy.intercept('GET', '/agent/agent_common/ajaxGetCompany?term=abc').as('r123Header')
		.url().should('include','/agen-registrasi')

		.get('#registration-agent').scrollIntoView()
		.get('#registration-agent').should('exist')
		.get('#company_name').type('abc')
		.wait('@r123Header').its('response.statusCode').should('eq', 200)
		.get('.ui-menu-item').contains('Other').click({force: true})
		.get('#AgentRegistrationProvinceId').select('Jawa Barat').should('have.value', '6')
		.get('#AgentRegistrationCityId').select('Bandung').should('have.value', '60')
		.get('#AgentRegistrationAreaId').select('Antapani').should('have.value', '1224')
		.get('#AgentRegistrationAgentAddress').type('alamat testing')
		.get('#AgentRegistrationPackageTypeIndependent').select('Silver Rp  898,888').should('have.value', '10')
		.get('#AgentRegistrationFullnameAgentIndependent').type('Test User Independent')
		.get('#AgentRegistrationPhonenumberAgentIndependent').type('087721425032')
		.get('#is_whatsapp_number_independent').click()
		.get('#AgentRegistrationEmailAgentIndependent').type('test+1@mail.com')
		.get('#AgentRegistrationPasswordAgentIndependent').type('katasandi23')
		.get('#AgentRegistrationConfirmPasswordAgentIndependent').type('katasandi23')
		.get('#checkbox_form').click()
		// .get('#submit-btn').click()
	});

	it('C33487 Agent Registration - Leave all field blank', function () {
		cy.intercept('GET', '/agent/agent_common/ajax_get_packages/206/id').as('r123Header')
		.wait('@r123Header').its('response.statusCode').should('eq', 200)

		.url().should('include','/agen-registrasi')
		.get('#registration-agent').scrollIntoView()
		.get('#registration-agent').should('exist')
		.get('#AgentRegistrationAgentAccountRegisterForm').should('not.contain.value')
		.get('#submit-btn').click()
		.get('#flashMessage').should('have.text', 'Perusahaan, Paket, Nama Lengkap, Nomor Telepon , Email, Password, Konfirmasi Password harus di isi. Persetujuan harus dicentang. ')
	});

	it('C33488 Agent Registration - Leave Provinsi field blank', function () {
		cy.intercept('GET', '/agent/agent_common/ajaxGetCompany?term=abc').as('r123Header')

		.url().should('include','/agen-registrasi')
		.get('#registration-agent').scrollIntoView()
		.get('#registration-agent').should('exist')
		.get('#company_name').type('abc')
		.wait('@r123Header').its('response.statusCode').should('eq', 200)

		.get('.ui-menu-item').contains('Other').click({force: true})
		.get('#AgentRegistrationProvinceId').should('not.contain.value')
		.get('#AgentRegistrationAgentAddress').type('alamat testing')
		.get('#AgentRegistrationPackageTypeIndependent').select('Silver Rp 898,888').should('have.value', '10')
		.get('#AgentRegistrationFullnameAgentIndependent').type('Test User')
		.get('#AgentRegistrationPhonenumberAgentIndependent').type('087721425032')
		.get('#is_whatsapp_number_independent').click()
		.get('#AgentRegistrationEmailAgentIndependent').type('test+1@mail.com')
		.get('#AgentRegistrationPasswordAgentIndependent').type('katasandi23')
		.get('#AgentRegistrationConfirmPasswordAgentIndependent').type('katasandi23')
		.get('#checkbox_form').click()
		.get('#submit-btn').click()
		.get('#flashMessage').should('have.text', 'Propinsi, Kota, Area harus di isi. ')
	});

	it('C33489 Agent Registration - Leave Kota field blank', function () {
		cy.intercept('GET', '/agent/agent_common/ajaxGetCompany?term=abc').as('r123Header')

		.url().should('include','/agen-registrasi')
		.get('#registration-agent').scrollIntoView()
		.get('#registration-agent').should('exist')
		.get('#company_name').type('abc')
		.wait('@r123Header').its('response.statusCode').should('eq', 200)

		.get('.ui-menu-item').contains('Other').click({force: true})
		.get('#AgentRegistrationProvinceId').select('Jawa Barat').should('have.value', '6')
		.get('#AgentRegistrationCityId').should('not.contain.value')
		.get('#AgentRegistrationAgentAddress').type('alamat testing')
		.get('#AgentRegistrationPackageTypeIndependent').select('Silver Rp 898,888').should('have.value', '10')
		.get('#AgentRegistrationFullnameAgentIndependent').type('Test User')
		.get('#AgentRegistrationPhonenumberAgentIndependent').type('087721425032')
		.get('#is_whatsapp_number_independent').click()
		.get('#AgentRegistrationEmailAgentIndependent').type('test+1@mail.com')
		.get('#AgentRegistrationPasswordAgentIndependent').type('katasandi23')
		.get('#AgentRegistrationConfirmPasswordAgentIndependent').type('katasandi23')
		.get('#checkbox_form').click()
		.get('#submit-btn').click()
		.get('#flashMessage').should('have.text', 'Kota, Area harus di isi. ')
	});

	it('C33490 Agent Registration - Leave Area field blank', function () {
		cy.intercept('GET', '/agent/agent_common/ajaxGetCompany?term=abc').as('r123Header')

		.url().should('include','/agen-registrasi')
		.get('#registration-agent').scrollIntoView()
		.get('#registration-agent').should('exist')
		.get('#company_name').type('abc')
		.wait('@r123Header').its('response.statusCode').should('eq', 200)

		.get('.ui-menu-item').contains('Other').click({force: true})
		.get('#AgentRegistrationProvinceId').select('Jawa Barat').should('have.value', '6')
		.get('#AgentRegistrationCityId').select('Bandung').should('have.value', '60')
		.get('#AgentRegistrationAreaId').should('not.contain.value')
		.get('#AgentRegistrationAgentAddress').type('alamat testing')
		.get('#AgentRegistrationPackageTypeIndependent').select('Silver Rp 898,888').should('have.value', '10')
		.get('#AgentRegistrationFullnameAgentIndependent').type('Test User')
		.get('#AgentRegistrationPhonenumberAgentIndependent').type('087721425032')
		.get('#is_whatsapp_number_independent').click()
		.get('#AgentRegistrationEmailAgentIndependent').type('test+1@mail.com')
		.get('#AgentRegistrationPasswordAgentIndependent').type('katasandi23')
		.get('#AgentRegistrationConfirmPasswordAgentIndependent').type('katasandi23')
		.get('#checkbox_form').click()
		.get('#submit-btn').click()
		.get('#flashMessage').should('have.text', 'Area harus di isi. ')
	});

	it('C33491 Agent Registration - Leave Alamat field blank', function () {
		cy.intercept('GET', '/agent/agent_common/ajaxGetCompany?term=abc').as('r123Header')

		.url().should('include','/agen-registrasi')
		.get('#registration-agent').scrollIntoView()
		.get('#registration-agent').should('exist')
		.get('#company_name').type('abc')
		.wait('@r123Header').its('response.statusCode').should('eq', 200)

		.get('.ui-menu-item').contains('Other').click({force: true})
		.get('#AgentRegistrationProvinceId').select('Jawa Barat').should('have.value', '6')
		.get('#AgentRegistrationCityId').select('Bandung').should('have.value', '60')
		.get('#AgentRegistrationAreaId').select('Antapani').should('have.value', '1224')
		.get('#AgentRegistrationAgentAddress').should('not.contain.value')
		.get('#AgentRegistrationPackageTypeIndependent').select('Silver Rp 898,888').should('have.value', '10')
		.get('#AgentRegistrationFullnameAgentIndependent').type('Test User')
		.get('#AgentRegistrationPhonenumberAgentIndependent').type('087721425032')
		.get('#is_whatsapp_number_independent').click()
		.get('#AgentRegistrationEmailAgentIndependent').type('test+1@mail.com')
		.get('#AgentRegistrationPasswordAgentIndependent').type('katasandi23')
		.get('#AgentRegistrationConfirmPasswordAgentIndependent').type('katasandi23')
		.get('#checkbox_form').click()
		.get('#submit-btn').click()
		.get('#flashMessage').should('have.text', 'Alamat harus di isi. ')
	});

	it('C33492 Agent Registration - Leave Package field blank', function () {
		cy.intercept('GET', '/agent/agent_common/ajaxGetCompany?term=abc').as('r123Header')

		.url().should('include','/agen-registrasi')
		.get('#registration-agent').scrollIntoView()
		.get('#registration-agent').should('exist')
		.get('#company_name').type('abc')
		.wait('@r123Header').its('response.statusCode').should('eq', 200)

		.get('.ui-menu-item').contains('Other').click({force: true})
		.get('#AgentRegistrationProvinceId').select('Jawa Barat').should('have.value', '6')
		.get('#AgentRegistrationCityId').select('Bandung').should('have.value', '60')
		.get('#AgentRegistrationAreaId').select('Antapani').should('have.value', '1224')
		.get('#AgentRegistrationAgentAddress').type('alamat testing')
		.get('#AgentRegistrationPackageTypeIndependent').should('not.contain.value')
		.get('#AgentRegistrationFullnameAgentIndependent').type('Test User')
		.get('#AgentRegistrationPhonenumberAgentIndependent').type('087721425032')
		.get('#is_whatsapp_number_independent').click()
		.get('#AgentRegistrationEmailAgentIndependent').type('test+1@mail.com')
		.get('#AgentRegistrationPasswordAgentIndependent').type('katasandi23')
		.get('#AgentRegistrationConfirmPasswordAgentIndependent').type('katasandi23')
		.get('#checkbox_form').click()
		.get('#submit-btn').click()
		.get('#flashMessage').should('have.text', 'Paket harus di isi. ')
	});

	it ('C33493 Agent Registration - Leave Nama Lengkap field blank', function () {
			cy.intercept('GET', '/agent/agent_common/ajaxGetCompany?term=abc').as('r123Header')

		.url().should('include','/agen-registrasi')
		.get('#registration-agent').scrollIntoView()
		.get('#registration-agent').should('exist')
		.get('#company_name').type('abc')
		.wait('@r123Header').its('response.statusCode').should('eq', 200)

		.get('.ui-menu-item').contains('Other').click({force: true})
		.get('#AgentRegistrationProvinceId').select('Jawa Barat').should('have.value', '6')
		.get('#AgentRegistrationCityId').select('Bandung').should('have.value', '60')
		.get('#AgentRegistrationAreaId').select('Antapani').should('have.value', '1224')
		.get('#AgentRegistrationAgentAddress').type('alamat testing')
		.get('#AgentRegistrationPackageTypeIndependent').select('Silver Rp 898,888').should('have.value', '10')
		.get('#AgentRegistrationFullnameAgentIndependent').should('not.contain.value')
		.get('#AgentRegistrationPhonenumberAgentIndependent').type('087721425032')
		.get('#is_whatsapp_number_independent').click()
		.get('#AgentRegistrationEmailAgentIndependent').type('test+1@mail.com')
		.get('#AgentRegistrationPasswordAgentIndependent').type('katasandi23')
		.get('#AgentRegistrationConfirmPasswordAgentIndependent').type('katasandi23')
		.get('#checkbox_form').click()
		.get('#submit-btn').click()
		.get('#flashMessage').should('have.text', 'Nama Lengkap harus di isi. ')
	});

	it('C33494 Agent Registration - Leave No HP field blank', function () {
		cy.intercept('GET', '/agent/agent_common/ajaxGetCompany?term=abc').as('r123Header')

		.url().should('include','/agen-registrasi')
		.get('#registration-agent').scrollIntoView()
		.get('#registration-agent').should('exist')
		.get('#company_name').type('abc')
		.wait('@r123Header').its('response.statusCode').should('eq', 200)

		.get('.ui-menu-item').contains('Other').click({force: true})
		.get('#AgentRegistrationProvinceId').select('Jawa Barat').should('have.value', '6')
		.get('#AgentRegistrationCityId').select('Bandung').should('have.value', '60')
		.get('#AgentRegistrationAreaId').select('Antapani').should('have.value', '1224')
		.get('#AgentRegistrationAgentAddress').type('alamat testing')
		.get('#AgentRegistrationPackageTypeIndependent').select('Silver Rp 898,888').should('have.value', '10')
		.get('#AgentRegistrationFullnameAgentIndependent').type('Test User')
		.get('#AgentRegistrationPhonenumberAgentIndependent').should('not.contain.value')
		.get('#is_whatsapp_number_independent').click()
		.get('#AgentRegistrationEmailAgentIndependent').type('test+1@mail.com')
		.get('#AgentRegistrationPasswordAgentIndependent').type('katasandi23')
		.get('#AgentRegistrationConfirmPasswordAgentIndependent').type('katasandi23')
		.get('#checkbox_form').click()
		.get('#submit-btn').click()
		.get('#flashMessage').should('have.text', 'Nomor Handphone harus di isi. ')
	});

	it('C33495 Agent Registration - Leave Email field blank', function () {
		cy.intercept('GET', '/agent/agent_common/ajaxGetCompany?term=abc').as('r123Header')

		.url().should('include','/agen-registrasi')
		.get('#registration-agent').scrollIntoView()
		.get('#registration-agent').should('exist')
		.get('#company_name').type('abc')
		.wait('@r123Header').its('response.statusCode').should('eq', 200)

		.get('.ui-menu-item').contains('Other').click({force: true})
		.get('#AgentRegistrationProvinceId').select('Jawa Barat').should('have.value', '6')
		.get('#AgentRegistrationCityId').select('Bandung').should('have.value', '60')
		.get('#AgentRegistrationAreaId').select('Antapani').should('have.value', '1224')
		.get('#AgentRegistrationAgentAddress').type('alamat testing')
		.get('#AgentRegistrationPackageTypeIndependent').select('Silver Rp 898,888').should('have.value', '10')
		.get('#AgentRegistrationFullnameAgentIndependent').type('Test User')
		.get('#AgentRegistrationPhonenumberAgentIndependent').type('087721425032')
		.get('#is_whatsapp_number_independent').click()
		.get('#AgentRegistrationEmailAgentIndependent').should('not.contain.value')
		.get('#AgentRegistrationPasswordAgentIndependent').type('katasandi23')
		.get('#AgentRegistrationConfirmPasswordAgentIndependent').type('katasandi23')
		.get('#checkbox_form').click()
		.get('#submit-btn').click()
		.get('#flashMessage').should('have.text', 'Email harus di isi. ')
	});

	it('C33496 Agent Registration - Leave Password field blank', function () {
		cy.intercept('GET', '/agent/agent_common/ajaxGetCompany?term=abc').as('r123Header')

		.url().should('include','/agen-registrasi')
		.get('#registration-agent').scrollIntoView()
		.get('#registration-agent').should('exist')
		.get('#company_name').type('abc')
		.wait('@r123Header').its('response.statusCode').should('eq', 200)

		.get('.ui-menu-item').contains('Other').click({force: true})
		.get('#AgentRegistrationProvinceId').select('Jawa Barat').should('have.value', '6')
		.get('#AgentRegistrationCityId').select('Bandung').should('have.value', '60')
		.get('#AgentRegistrationAreaId').select('Antapani').should('have.value', '1224')
		.get('#AgentRegistrationAgentAddress').type('alamat testing')
		.get('#AgentRegistrationPackageTypeIndependent').select('Silver Rp 898,888').should('have.value', '10')
		.get('#AgentRegistrationFullnameAgentIndependent').type('Test User')
		.get('#AgentRegistrationPhonenumberAgentIndependent').type('087721425032')
		.get('#is_whatsapp_number_independent').click()
		.get('#AgentRegistrationEmailAgentIndependent').type('test+1@mail.com')
		.get('#AgentRegistrationPasswordAgentIndependent').should('not.contain.value')
		.get('#AgentRegistrationConfirmPasswordAgentIndependent').type('katasandi23')
		.get('#checkbox_form').click()
		.get('#submit-btn').click()
		.get('#flashMessage').should('have.text', 'Password harus di isi. ')
	});

	it('C33497 Agent Registration - Leave Konfirmasi Password field blank', function () {
		cy.intercept('GET', '/agent/agent_common/ajaxGetCompany?term=abc').as('r123Header')

		.url().should('include','/agen-registrasi')
		.get('#registration-agent').scrollIntoView()
		.get('#registration-agent').should('exist')
		.get('#company_name').type('abc')
		.wait('@r123Header').its('response.statusCode').should('eq', 200)

		.get('.ui-menu-item').contains('Other').click({force: true})
		.get('#AgentRegistrationProvinceId').select('Jawa Barat').should('have.value', '6')
		.get('#AgentRegistrationCityId').select('Bandung').should('have.value', '60')
		.get('#AgentRegistrationAreaId').select('Antapani').should('have.value', '1224')
		.get('#AgentRegistrationAgentAddress').type('alamat testing')
		.get('#AgentRegistrationPackageTypeIndependent').select('Silver Rp 898,888').should('have.value', '10')
		.get('#AgentRegistrationFullnameAgentIndependent').type('Test User')
		.get('#AgentRegistrationPhonenumberAgentIndependent').type('087721425032')
		.get('#is_whatsapp_number_independent').click()
		.get('#AgentRegistrationEmailAgentIndependent').type('test+1@mail.com')
		.get('#AgentRegistrationPasswordAgentIndependent').type('katasandi23')
		.get('#AgentRegistrationConfirmPasswordAgentIndependent').should('not.contain.value')
		.get('#checkbox_form').click()
		.get('#submit-btn').click()
		.get('#flashMessage').should('have.text', 'Konfirmasi Password harus di isi. ')
	});

	it('C33498 Agent Registration - Input different password and confirmation password', function () {
		cy.intercept('GET', '/agent/agent_common/ajaxGetCompany?term=abc').as('r123Header')

		.url().should('include','/agen-registrasi')
		.get('#registration-agent').scrollIntoView()
		.get('#registration-agent').should('exist')
		.get('#company_name').type('abc')
		.wait('@r123Header').its('response.statusCode').should('eq', 200)

		.get('.ui-menu-item').contains('Other').click({force: true})
		.get('#AgentRegistrationProvinceId').select('Jawa Barat').should('have.value', '6')
		.get('#AgentRegistrationCityId').select('Bandung').should('have.value', '60')
		.get('#AgentRegistrationAreaId').select('Antapani').should('have.value', '1224')
		.get('#AgentRegistrationAgentAddress').type('alamat testing')
		.get('#AgentRegistrationPackageTypeIndependent').select('Silver Rp 898,888').should('have.value', '10')
		.get('#AgentRegistrationFullnameAgentIndependent').type('Test User')
		.get('#AgentRegistrationPhonenumberAgentIndependent').type('087721425032')
		.get('#is_whatsapp_number_independent').click()
		.get('#AgentRegistrationEmailAgentIndependent').type('test+1@mail.com')
		.get('#AgentRegistrationPasswordAgentIndependent').type('katasandi23')
		.get('#AgentRegistrationConfirmPasswordAgentIndependent').type('katasandi123')
		.get('#checkbox_form').click()
		.get('#submit-btn').click()
		.get('#flashMessage').should('have.text', 'Konfirmasi Password tidak sama dengan Password. ')
	});

	it('C33499 Agent Registration - Leave uncheck Term and Conditions', function () {
		cy.intercept('GET', '/agent/agent_common/ajaxGetCompany?term=abc').as('r123Header')

		.url().should('include','/agen-registrasi')
		.get('#registration-agent').scrollIntoView()
		.get('#registration-agent').should('exist')
		.get('#company_name').type('abc')
		.wait('@r123Header').its('response.statusCode').should('eq', 200)

		.get('.ui-menu-item').contains('Other').click({force: true})
		.get('#AgentRegistrationProvinceId').select('Jawa Barat').should('have.value', '6')
		.get('#AgentRegistrationCityId').select('Bandung').should('have.value', '60')
		.get('#AgentRegistrationAreaId').select('Antapani').should('have.value', '1224')
		.get('#AgentRegistrationAgentAddress').type('alamat testing')
		.get('#AgentRegistrationPackageTypeIndependent').select('Silver Rp 898,888').should('have.value', '10')
		.get('#AgentRegistrationFullnameAgentIndependent').type('Test User')
		.get('#AgentRegistrationPhonenumberAgentIndependent').type('087721425032')
		.get('#is_whatsapp_number_independent').click()
		.get('#AgentRegistrationEmailAgentIndependent').type('test+1@mail.com')
		.get('#AgentRegistrationPasswordAgentIndependent').type('katasandi23')
		.get('#AgentRegistrationConfirmPasswordAgentIndependent').type('katasandi23')
		.get('#checkbox_form').should('not.contain.value')
		.get('#submit-btn').click()
		.get('#flashMessage').should('have.text', 'Persetujuan harus dicentang. ')
	});
});