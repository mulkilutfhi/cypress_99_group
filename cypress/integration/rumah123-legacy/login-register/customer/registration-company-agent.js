describe ('Registration Company Agent', function() {

	beforeEach(function() {
    cy.viewport('macbook-15')
    cy.visit('/agen-registrasi')
  });

	it ('C33500 Agent Registration - Using valid data', function () {
		cy.intercept('GET', '/agent/agent_common/ajaxGetCompany?term=Atlas').as('r123Header')

		.url().should('include','/agen-registrasi')
		.get('#registration-agent').scrollIntoView()
		.get('#registration-agent').should('exist')
		.get('#company_name').type('Atlas')
		.wait('@r123Header').its('response.statusCode').should('eq', 200)

		.get('.ui-menu-item').contains(' ATLAS PLUS').click({force: true})
		.get('#AgentRegistrationPackageTypeCompany').select('Silver Rp 898,888').should('have.value', '10')
		.get('#AgentRegistrationFullnameAgentCompany').type('Test User Company')
		.get('#AgentRegistrationPhonenumberAgentCompany').type('087721425032')
		.get('#is_whatsapp_number_company').click()
		.get('#AgentRegistrationEmailAgentCompany').type('test+1@mail.com')
		.get('#AgentRegistrationPasswordAgentCompany').type('katasandi23')
		.get('#AgentRegistrationConfirmPasswordAgentCompany').type('katasandi23')
		.get('#checkbox_form').click()
		.get('#submit-btn').click()
	});

	it ('C33501 Agent Registration - Leave all field blank', function () {
		cy.intercept('GET', '/agent/agent_common/ajax_get_packages/206/id').as('r123Header')
		.wait('@r123Header').its('response.statusCode').should('eq', 200)

		.url().should('include','/agen-registrasi')
		.get('#registration-agent').scrollIntoView()
		.get('#registration-agent').should('exist')
		.get('#AgentRegistrationAgentAccountRegisterForm').should('not.contain.value')
		.get('#submit-btn').click()
		.get('#flashMessage').should('have.text', 'Perusahaan, Paket, Nama Lengkap, Nomor Telepon , Email, Password, Konfirmasi Password harus di isi. Persetujuan harus dicentang. ')
	});

	it ('C33502 Agent Registration - Leave Company field blank', function () {
		cy.intercept('GET', '/agent/agent_common/ajaxGetCompany?term=').as('r123Header')

		.url().should('include','/agen-registrasi')
		.get('#registration-agent').scrollIntoView()
		.get('#registration-agent').should('exist')
		.get('#company_name').should('not.contain.value')
		.wait('@r123Header').its('response.statusCode').should('eq', 200)

		.get('#AgentRegistrationPackageTypeCompany').select('Silver Rp 898,888').should('have.value', '10')
		.get('#AgentRegistrationFullnameAgentCompany').type('Test User Company')
		.get('#AgentRegistrationPhonenumberAgentCompany').type('087721425032')
		.get('#is_whatsapp_number_company').click()
		.get('#AgentRegistrationEmailAgentCompany').type('test+1@mail.com')
		.get('#AgentRegistrationPasswordAgentCompany').type('katasandi23')
		.get('#AgentRegistrationConfirmPasswordAgentCompany').type('katasandi23')
		.get('#checkbox_form').click()
		.get('#submit-btn').click()
		.get('#flashMessage').should('have.text', 'Perusahaan harus di isi. ')
	});

	it ('C33503 Agent Registration - Leave Package field blank', function () {
		cy.intercept('GET', '/agent/agent_common/ajaxGetCompany?term=Atlas').as('r123Header')

		.url().should('include','/agen-registrasi')
		.get('#registration-agent').scrollIntoView()
		.get('#registration-agent').should('exist')
		.get('#company_name').type('Atlas')
		.wait('@r123Header').its('response.statusCode').should('eq', 200)

		.get('.ui-menu-item').contains(' ATLAS PLUS').click({force: true})
		.get('#AgentRegistrationPackageTypeCompany').should('not.contain.value')
		.get('#AgentRegistrationFullnameAgentCompany').type('Test User Company')
		.get('#AgentRegistrationPhonenumberAgentCompany').type('087721425032')
		.get('#is_whatsapp_number_company').click()
		.get('#AgentRegistrationEmailAgentCompany').type('test+1@mail.com')
		.get('#AgentRegistrationPasswordAgentCompany').type('katasandi23')
		.get('#AgentRegistrationConfirmPasswordAgentCompany').type('katasandi23')
		.get('#checkbox_form').click()
		.get('#submit-btn').click()
		.get('#flashMessage').should('have.text', 'Paket harus di isi. ')
	});

	it ('C33504 Agent Registration - Leave Nama Lengkap field blank', function () {
		cy.intercept('GET', '/agent/agent_common/ajaxGetCompany?term=Atlas').as('r123Header')

		.url().should('include','/agen-registrasi')
		.get('#registration-agent').scrollIntoView()
		.get('#registration-agent').should('exist')
		.get('#company_name').type('Atlas')
		.wait('@r123Header').its('response.statusCode').should('eq', 200)

		.get('.ui-menu-item').contains(' ATLAS PLUS').click({force: true})
		.get('#AgentRegistrationPackageTypeCompany').select('Silver Rp 898,888').should('have.value', '10')
		.get('#AgentRegistrationFullnameAgentCompany').should('not.contain.value')
		.get('#AgentRegistrationPhonenumberAgentCompany').type('087721425032')
		.get('#is_whatsapp_number_company').click()
		.get('#AgentRegistrationEmailAgentCompany').type('test+1@mail.com')
		.get('#AgentRegistrationPasswordAgentCompany').type('katasandi23')
		.get('#AgentRegistrationConfirmPasswordAgentCompany').type('katasandi23')
		.get('#checkbox_form').click()
		.get('#submit-btn').click()
		.get('#flashMessage').should('have.text', 'Nama Lengkap harus di isi. ')
	});

	it ('C33505 Agent Registration - Leave No HP field blank', function () {
		cy.intercept('GET', '/agent/agent_common/ajaxGetCompany?term=Atlas').as('r123Header')

		.url().should('include','/agen-registrasi')
		.get('#registration-agent').scrollIntoView()
		.get('#registration-agent').should('exist')
		.get('#company_name').type('Atlas')
		.wait('@r123Header').its('response.statusCode').should('eq', 200)

		.get('.ui-menu-item').contains(' ATLAS PLUS').click({force: true})
		.get('#AgentRegistrationPackageTypeCompany').select('Silver Rp 898,888').should('have.value', '10')
		.get('#AgentRegistrationFullnameAgentCompany').type('Test User Company')
		.get('#AgentRegistrationPhonenumberAgentCompany').should('not.contain.value')
		.get('#is_whatsapp_number_company').click()
		.get('#AgentRegistrationEmailAgentCompany').type('test+1@mail.com')
		.get('#AgentRegistrationPasswordAgentCompany').type('katasandi23')
		.get('#AgentRegistrationConfirmPasswordAgentCompany').type('katasandi23')
		.get('#checkbox_form').click()
		.get('#submit-btn').click()
		.get('#flashMessage').should('have.text', 'Nomor Telepon  harus di isi. ')
		//different validation message for independent type which using word Handphone
	});

	it ('C33506 Agent Registration - Leave Email field blank', function () {
		cy.intercept('GET', '/agent/agent_common/ajaxGetCompany?term=Atlas').as('r123Header')

		.url().should('include','/agen-registrasi')
		.get('#registration-agent').scrollIntoView()
		.get('#registration-agent').should('exist')
		.get('#company_name').type('Atlas')
		.wait('@r123Header').its('response.statusCode').should('eq', 200)

		.get('.ui-menu-item').contains(' ATLAS PLUS').click({force: true})
		.get('#AgentRegistrationPackageTypeCompany').select('Silver Rp 898,888').should('have.value', '10')
		.get('#AgentRegistrationFullnameAgentCompany').type('Test User Company')
		.get('#AgentRegistrationPhonenumberAgentCompany').type('087721425032')
		.get('#is_whatsapp_number_company').click()
		.get('#AgentRegistrationEmailAgentCompany').should('not.contain.value')
		.get('#AgentRegistrationPasswordAgentCompany').type('katasandi23')
		.get('#AgentRegistrationConfirmPasswordAgentCompany').type('katasandi23')
		.get('#checkbox_form').click()
		.get('#submit-btn').click()
		.get('#flashMessage').should('have.text', 'Email harus di isi. ')
	});

	it ('C33507 Agent Registration - Leave Password field blank', function () {
		cy.intercept('GET', '/agent/agent_common/ajaxGetCompany?term=Atlas').as('r123Header')

		.url().should('include','/agen-registrasi')
		.get('#registration-agent').scrollIntoView()
		.get('#registration-agent').should('exist')
		.get('#company_name').type('Atlas')
		.wait('@r123Header').its('response.statusCode').should('eq', 200)

		.get('.ui-menu-item').contains(' ATLAS PLUS').click({force: true})
		.get('#AgentRegistrationPackageTypeCompany').select('Silver Rp 898,888').should('have.value', '10')
		.get('#AgentRegistrationFullnameAgentCompany').type('Test User Company')
		.get('#AgentRegistrationPhonenumberAgentCompany').type('087721425032')
		.get('#is_whatsapp_number_company').click()
		.get('#AgentRegistrationEmailAgentCompany').type('test+1@mail.com')
		.get('#AgentRegistrationPasswordAgentCompany').should('not.contain.value')
		.get('#AgentRegistrationConfirmPasswordAgentCompany').type('katasandi23')
		.get('#checkbox_form').click()
		.get('#submit-btn').click()
		.get('#flashMessage').should('have.text', 'Password harus di isi. ')
	});

	it ('C33508 Agent Registration - Leave Konfirmasi Password field blank', function () {
		cy.intercept('GET', '/agent/agent_common/ajaxGetCompany?term=Atlas').as('r123Header')

		.url().should('include','/agen-registrasi')
		.get('#registration-agent').scrollIntoView()
		.get('#registration-agent').should('exist')
		.get('#company_name').type('Atlas')
		.wait('@r123Header').its('response.statusCode').should('eq', 200)

		.get('.ui-menu-item').contains(' ATLAS PLUS').click({force: true})
		.get('#AgentRegistrationPackageTypeCompany').select('Silver Rp 898,888').should('have.value', '10')
		.get('#AgentRegistrationFullnameAgentCompany').type('Test User Company')
		.get('#AgentRegistrationPhonenumberAgentCompany').type('087721425032')
		.get('#is_whatsapp_number_company').click()
		.get('#AgentRegistrationEmailAgentCompany').type('test+1@mail.com')
		.get('#AgentRegistrationPasswordAgentCompany').type('katasandi23')
		.get('#AgentRegistrationConfirmPasswordAgentCompany').should('not.contain.value')
		.get('#checkbox_form').click()
		.get('#submit-btn').click()
		.get('#flashMessage').should('have.text', 'Konfirmasi Password harus di isi. ')
	});

	it ('C33509 Agent Registration - Input different password and confirmation password', function () {
		cy.intercept('GET', '/agent/agent_common/ajaxGetCompany?term=Atlas').as('r123Header')

		.url().should('include','/agen-registrasi')
		.get('#registration-agent').scrollIntoView()
		.get('#registration-agent').should('exist')
		.get('#company_name').type('Atlas')
		.wait('@r123Header').its('response.statusCode').should('eq', 200)

		.get('.ui-menu-item').contains(' ATLAS PLUS').click({force: true})
		.get('#AgentRegistrationPackageTypeCompany').select('Silver Rp 898,888').should('have.value', '10')
		.get('#AgentRegistrationFullnameAgentCompany').type('Test User Company')
		.get('#AgentRegistrationPhonenumberAgentCompany').type('087721425032')
		.get('#is_whatsapp_number_company').click()
		.get('#AgentRegistrationEmailAgentCompany').type('test+1@mail.com')
		.get('#AgentRegistrationPasswordAgentCompany').type('katasandi23')
		.get('#AgentRegistrationConfirmPasswordAgentCompany').type('katasandi123')
		.get('#checkbox_form').click()
		.get('#submit-btn').click()
		.get('#flashMessage').should('have.text', 'Konfirmasi Password tidak sama dengan Password. ')
	});

	it ('C33510 Agent Registration - Leave uncheck Term and Conditions', function () {
		cy.intercept('GET', '/agent/agent_common/ajaxGetCompany?term=Atlas').as('r123Header')

		.url().should('include','/agen-registrasi')
		.get('#registration-agent').scrollIntoView()
		.get('#registration-agent').should('exist')
		.get('#company_name').type('Atlas')
		.wait('@r123Header').its('response.statusCode').should('eq', 200)

		.get('.ui-menu-item').contains(' ATLAS PLUS').click({force: true})
		.get('#AgentRegistrationPackageTypeCompany').select('Silver Rp 898,888').should('have.value', '10')
		.get('#AgentRegistrationFullnameAgentCompany').type('Test User Company')
		.get('#AgentRegistrationPhonenumberAgentCompany').type('087721425032')
		.get('#is_whatsapp_number_company').click()
		.get('#AgentRegistrationEmailAgentCompany').type('test+1@mail.com')
		.get('#AgentRegistrationPasswordAgentCompany').type('katasandi23')
		.get('#AgentRegistrationConfirmPasswordAgentCompany').type('katasandi23')
		.get('#checkbox_form').should('not.contain.value')
		.get('#submit-btn').click()
		.get('#flashMessage').should('have.text', 'Persetujuan harus dicentang. ')
	});
});
