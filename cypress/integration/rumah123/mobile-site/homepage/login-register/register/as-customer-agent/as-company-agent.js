describe("Msite Registration for Company Agent", function() {

	let dataValid, dataInvalid;

	beforeEach(function() {
		cy.viewport('iphone-x').visit('/agen-registrasi/');
		cy.fixture('rumah123-legacy/json-file/registration-agent-company').then((register)=>
		{
			dataValid = register.validData;
			dataInvalid = register.invalidData;
		})
  });

	it('C33500 Agent Registration - Using valid data', function () {
		cy.scrolltoRegisterFormAndValidate()
		cy.inputCompanyName({company : dataValid.CompanyName})
		cy.selectPackageCompany({package : dataValid.PackageType})
		cy.inputFullNameAgentCompany().type(dataValid.FullNameAgent)
		cy.inputWhatsappNumberAgentCompany().type(dataValid.WhatsappNumberAgent)
		cy.inputEmailAgentCompany().type(dataValid.EmailAgent)
		cy.inputPasswordCompany().type(dataValid.PasswordAgent, {sensitive:true})
		cy.inputPasswordConfirmationCompany().type(dataValid.PasswordAgent, {sensitive:true})
		cy.get('#checkbox_form').click()
		cy.submitRegistrationCustomer()
	});

	it('C33501 Agent Registration - Leave all field blank', function () {
		cy.scrolltoRegisterFormAndValidate()
    cy.inputCompanyName({company : dataValid.CompanyName})
		cy.get('#AgentRegistrationAgentAccountRegisterForm').should('not.contain.value')
		cy.submitRegistrationCustomer()
		cy.get('#flashMessage').should('have.text', 'Subscription, Nama Lengkap, No Whatsapp, Email, Password, Konfirmasi Password harus di isi. ')
	});

	it('C33502 Agent Registration - Leave Company field blank', function () {
		cy.scrolltoRegisterFormAndValidate()
		cy.get('#company_name').should('not.contain.value')
		cy.selectPackageCompany({package : dataValid.PackageType})
		cy.inputFullNameAgentCompany().type(dataValid.FullNameAgent)
		cy.inputWhatsappNumberAgentCompany().type(dataValid.WhatsappNumberAgent)
		cy.inputEmailAgentCompany().type(dataValid.EmailAgent)
		cy.inputPasswordCompany().type(dataValid.PasswordAgent, {sensitive:true})
		cy.inputPasswordConfirmationCompany().type(dataValid.PasswordAgent, {sensitive:true})
		cy.submitRegistrationCustomer()
		cy.get('#flashMessage').should('have.text', 'Nama Perusahaan harus di isi. ')
	});

	it('C33503 Agent Registration - Leave Package field blank', function () {
		cy.scrolltoRegisterFormAndValidate()
		cy.inputCompanyName({company : dataValid.CompanyName})
		cy.get('#subscription_package').should('not.contain.value')
		cy.inputFullNameAgentCompany().type(dataValid.FullNameAgent)
		cy.inputWhatsappNumberAgentCompany().type(dataValid.WhatsappNumberAgent)
		cy.inputEmailAgentCompany().type(dataValid.EmailAgent)
		cy.inputPasswordCompany().type(dataValid.PasswordAgent, {sensitive:true})
		cy.inputPasswordConfirmationCompany().type(dataValid.PasswordAgent, {sensitive:true})
		cy.submitRegistrationCustomer()
		cy.get('#flashMessage').should('have.text', 'Subscription harus di isi. ')
	});

	it('C33504 Agent Registration - Leave Nama Lengkap field blank', function () {
		cy.scrolltoRegisterFormAndValidate()
		cy.inputCompanyName({company : dataValid.CompanyName})
		cy.selectPackageCompany({package : dataValid.PackageType})
		cy.get('#full_name').should('not.contain.value')
		cy.inputWhatsappNumberAgentCompany().type(dataValid.WhatsappNumberAgent)
		cy.inputEmailAgentCompany().type(dataValid.EmailAgent)
		cy.inputPasswordCompany().type(dataValid.PasswordAgent, {sensitive:true})
		cy.inputPasswordConfirmationCompany().type(dataValid.PasswordAgent, {sensitive:true})
		cy.submitRegistrationCustomer()
		cy.get('#flashMessage').should('have.text', 'Nama Lengkap harus di isi. ')
	});

	it('C33505 Agent Registration - Leave Nomor HP field blank', function () {
		cy.scrolltoRegisterFormAndValidate()
		cy.inputCompanyName({company : dataValid.CompanyName})
		cy.selectPackageCompany({package : dataValid.PackageType})
		cy.inputFullNameAgentCompany().type(dataValid.FullNameAgent)
		cy.get('#no_whatsapp').should('not.contain.value')
		cy.inputEmailAgentCompany().type(dataValid.EmailAgent)
		cy.inputPasswordCompany().type(dataValid.PasswordAgent, {sensitive:true})
		cy.inputPasswordConfirmationCompany().type(dataValid.PasswordAgent, {sensitive:true})
		cy.submitRegistrationCustomer()
		cy.get('#flashMessage').should('have.text', 'No Whatsapp harus di isi. ')
	});

	it('C33506 Agent Registration - Leave Email field blank', function () {
		cy.scrolltoRegisterFormAndValidate()
		cy.inputCompanyName({company : dataValid.CompanyName})
		cy.selectPackageCompany({package : dataValid.PackageType})
		cy.inputFullNameAgentCompany().type(dataValid.FullNameAgent)
		cy.inputWhatsappNumberAgentCompany().type(dataValid.WhatsappNumberAgent)
		cy.get('#email').should('not.contain.value')
		cy.inputPasswordCompany().type(dataValid.PasswordAgent, {sensitive:true})
		cy.inputPasswordConfirmationCompany().type(dataValid.PasswordAgent, {sensitive:true})
		cy.submitRegistrationCustomer()
		cy.get('#flashMessage').should('have.text', 'Email harus di isi. ')
	});

	it('C33507 Agent Registration - Leave Password field blank', function () {
		cy.scrolltoRegisterFormAndValidate()
		cy.inputCompanyName({company : dataValid.CompanyName})
		cy.selectPackageCompany({package : dataValid.PackageType})
		cy.inputFullNameAgentCompany().type(dataValid.FullNameAgent)
		cy.inputWhatsappNumberAgentCompany().type(dataValid.WhatsappNumberAgent)
		cy.inputEmailAgentCompany().type(dataValid.EmailAgent)
		cy.get('#password').should('not.contain.value')
		cy.inputPasswordConfirmationCompany().type(dataValid.PasswordAgent, {sensitive:true})
		cy.submitRegistrationCustomer()
		cy.get('#flashMessage').should('have.text', 'Password harus di isi. ')
	});

	it('C33508 Agent Registration - Leave Konfirmasi Password field blank', function () {
		cy.scrolltoRegisterFormAndValidate()
		cy.inputCompanyName({company : dataValid.CompanyName})
		cy.selectPackageCompany({package : dataValid.PackageType})
		cy.inputFullNameAgentCompany().type(dataValid.FullNameAgent)
		cy.inputWhatsappNumberAgentCompany().type(dataValid.WhatsappNumberAgent)
		cy.inputEmailAgentCompany().type(dataValid.EmailAgent)
		cy.inputPasswordCompany().type(dataValid.PasswordAgent, {sensitive:true})
		cy.get('#confirm_password').should('not.contain.value')
		cy.submitRegistrationCustomer()
		cy.get('#flashMessage').should('have.text', 'Konfirmasi Password harus di isi. ')
	});

	it('C33509 Agent Registration - Input different password and confirmation password', function () {
		cy.scrolltoRegisterFormAndValidate()
		cy.inputCompanyName({company : dataValid.CompanyName})
		cy.selectPackageCompany({package : dataValid.PackageType})
		cy.inputFullNameAgentCompany().type(dataValid.FullNameAgent)
		cy.inputWhatsappNumberAgentCompany().type(dataValid.WhatsappNumberAgent)
		cy.inputEmailAgentCompany().type(dataValid.EmailAgent)
		cy.inputPasswordCompany().type(dataValid.PasswordAgent, {sensitive:true})
		cy.inputPasswordConfirmationCompany().type(dataInvalid.PasswordAgent, {sensitive:true})
		cy.submitRegistrationCustomer()
		//cy.get('#flashMessage').should('have.text', 'Konfirmasi Password tidak sama dengan Password. ')
	});

	it('C33510 Agent Registration - Leave uncheck Term and Conditions', function () {
		cy.scrolltoRegisterFormAndValidate()
		cy.inputCompanyName({company : dataValid.CompanyName})
		cy.selectPackageCompany({package : dataValid.PackageType})
		cy.inputFullNameAgentCompany().type(dataValid.FullNameAgent)
		cy.inputWhatsappNumberAgentCompany().type(dataValid.WhatsappNumberAgent)
		cy.inputEmailAgentCompany().type(dataValid.EmailAgent)
		cy.inputPasswordCompany().type(dataValid.PasswordAgent, {sensitive:true})
		cy.inputPasswordConfirmationCompany().type(dataInvalid.PasswordAgent, {sensitive:true})
		cy.get('#checkbox_form').click()
		cy.submitRegistrationCustomer()
		cy.get('#flashMessage').should('have.text', 'Persetujuan harus dicentang. ')
	});
});
