describe("Msite Registration for Independent Agent", function() {

	let dataValid, dataInvalid;

	beforeEach(function() {
		cy.viewport('iphone-x').visit('/agen-registrasi/');
		cy.fixture('rumah123-legacy/json-file/registration-agent-independent').then((register)=>
		{
			dataValid = register.validData;
			dataInvalid = register.invalidData;
		})
  });

	it('C33486 Agent Registration - Using valid data', function () {
		cy.scrolltoRegisterFormAndValidate()
		cy.inputIndependent({company : dataValid.CompanyName})
		cy.selectProvince({province : dataValid.Province})
		cy.selectCity({city : dataValid.City})
		cy.selectArea({area : dataValid.Area})
		cy.inputAddress().type(dataValid.Address)
		cy.selectPackageIndependent({package : dataValid.PackageType})
		cy.inputFullNameAgentIndependent().type(dataValid.FullNameAgent)
		cy.inputWANumberAgentIndependent().type(dataValid.WANumberAgent)
		cy.get('#additional-phone-checkbox').click()
		cy.inputPhoneNumberAgentIndependent().type(dataValid.PhoneNumberAgent)
		cy.inputEmailAgentIndependent().type(dataValid.EmailAgent)
		cy.inputPasswordIndependent().type(dataValid.PasswordAgent, {sensitive:true})
		cy.inputPasswordConfirmationIndependent().type(dataValid.PasswordAgent, {sensitive:true})
		cy.get('#checkbox_form').click()
		cy.submitRegistrationCustomer()
	});

	it('C33487 Agent Registration - Leave all field blank', function () {
		cy.scrolltoRegisterFormAndValidate()
    cy.inputIndependent({company : dataValid.CompanyName})
		cy.get('#AgentRegistrationAgentAccountRegisterForm').should('not.contain.value')
		cy.submitRegistrationCustomer()
		cy.get('#flashMessage').should('have.text', 'Provinsi, Kota, Area, Alamat, Subscription, Nama Lengkap, No Whatsapp, Email, Password, Konfirmasi Password harus di isi. ')
	});

	it('C33488 Agent Registration - Leave Province field blank', function () {
		cy.scrolltoRegisterFormAndValidate()
		cy.inputIndependent({company : dataValid.CompanyName})
		cy.get('#province').should('not.contain.value')
		cy.inputAddress().type(dataValid.Address)
		cy.selectPackageIndependent({package : dataValid.PackageType})
		cy.inputFullNameAgentIndependent().type(dataValid.FullNameAgent)
		cy.inputWANumberAgentIndependent().type(dataValid.WANumberAgent)
    //cy.get('#additional-phone-checkbox').click()
		cy.inputEmailAgentIndependent().type(dataValid.EmailAgent)
		cy.inputPasswordIndependent().type(dataValid.PasswordAgent, {sensitive:true})
		cy.inputPasswordConfirmationIndependent().type(dataValid.PasswordAgent, {sensitive:true})
		cy.get('#checkbox_form').should('have.value','1')
		cy.submitRegistrationCustomer()
		cy.get('#flashMessage').should('have.text', 'Provinsi, Kota, Area harus di isi. ')
	});

	it('C33489 Agent Registration - Leave Kota field blank', function () {
		cy.scrolltoRegisterFormAndValidate()
		cy.inputIndependent({company : dataValid.CompanyName})
		cy.selectProvince({province : dataValid.Province})
		cy.get('#city').should('not.contain.value')
		cy.inputAddress().type(dataValid.Address)
		cy.selectPackageIndependent({package : dataValid.PackageType})
		cy.inputFullNameAgentIndependent().type(dataValid.FullNameAgent)
		cy.inputWANumberAgentIndependent().type(dataValid.WANumberAgent)
    //cy.get('#additional-phone-checkbox').click()
		cy.inputEmailAgentIndependent().type(dataValid.EmailAgent)
		cy.inputPasswordIndependent().type(dataValid.PasswordAgent, {sensitive:true})
		cy.inputPasswordConfirmationIndependent().type(dataValid.PasswordAgent, {sensitive:true})
		cy.get('#checkbox_form').should('have.value','1')
		cy.submitRegistrationCustomer()
		cy.get('#flashMessage').should('have.text', 'Kota, Area harus di isi. ')
	});

	it('C33490 Agent Registration - Leave Area field blank', function () {
		cy.scrolltoRegisterFormAndValidate()
		cy.inputIndependent({company : dataValid.CompanyName})
		cy.selectProvince({province : dataValid.Province})
		cy.selectCity({city : dataValid.City})
		cy.get('#district').should('not.contain.value')
		cy.inputAddress().type(dataValid.Address)
		cy.selectPackageIndependent({package : dataValid.PackageType})
		cy.inputFullNameAgentIndependent().type(dataValid.FullNameAgent)
		cy.inputWANumberAgentIndependent().type(dataValid.WANumberAgent)
    //cy.get('#additional-phone-checkbox').click()
		cy.inputEmailAgentIndependent().type(dataValid.EmailAgent)
		cy.inputPasswordIndependent().type(dataValid.PasswordAgent, {sensitive:true})
		cy.inputPasswordConfirmationIndependent().type(dataValid.PasswordAgent, {sensitive:true})
		cy.get('#checkbox_form').should('have.value','1')
		cy.submitRegistrationCustomer()
		cy.get('#flashMessage').should('have.text', 'Area harus di isi. ')
	});

	it('C33491 Agent Registration - Leave Alamat field blank', function () {
		cy.scrolltoRegisterFormAndValidate()
		cy.inputIndependent({company : dataValid.CompanyName})
		cy.selectProvince({province : dataValid.Province})
		cy.selectCity({city : dataValid.City})
		cy.selectArea({area : dataValid.Area})
		cy.get('#address').should('not.contain.value')
		cy.selectPackageIndependent({package : dataValid.PackageType})
		cy.inputFullNameAgentIndependent().type(dataValid.FullNameAgent)
		cy.inputWANumberAgentIndependent().type(dataValid.WANumberAgent)
    //cy.get('#additional-phone-checkbox').click()
		cy.inputEmailAgentIndependent().type(dataValid.EmailAgent)
		cy.inputPasswordIndependent().type(dataValid.PasswordAgent, {sensitive:true})
		cy.inputPasswordConfirmationIndependent().type(dataValid.PasswordAgent, {sensitive:true})
		cy.get('#checkbox_form').should('have.value','1')
		cy.submitRegistrationCustomer()
		cy.get('#flashMessage').should('have.text', 'Alamat harus di isi. ')
	});

	it('C33492 Agent Registration - Leave Package field blank', function () {
		cy.scrolltoRegisterFormAndValidate()
		cy.inputIndependent({company : dataValid.CompanyName})
		cy.selectProvince({province : dataValid.Province})
		cy.selectCity({city : dataValid.City})
		cy.selectArea({area : dataValid.Area})
		cy.inputAddress().type(dataValid.Address)
		cy.get('#subscription_package').should('not.contain.value')
		cy.inputFullNameAgentIndependent().type(dataValid.FullNameAgent)
		cy.inputWANumberAgentIndependent().type(dataValid.WANumberAgent)
    //cy.get('#additional-phone-checkbox').click()
		cy.inputEmailAgentIndependent().type(dataValid.EmailAgent)
		cy.inputPasswordIndependent().type(dataValid.PasswordAgent, {sensitive:true})
		cy.inputPasswordConfirmationIndependent().type(dataValid.PasswordAgent, {sensitive:true})
		cy.get('#checkbox_form').should('have.value','1')
		cy.submitRegistrationCustomer()
		cy.get('#flashMessage').should('have.text', 'Subscription harus di isi. ')
	});

	it('C33493 Agent Registration - Leave Nama Lengkap field blank', function () {
		cy.scrolltoRegisterFormAndValidate()
		cy.inputIndependent({company : dataValid.CompanyName})
		cy.selectProvince({province : dataValid.Province})
		cy.selectCity({city : dataValid.City})
		cy.selectArea({area : dataValid.Area})
		cy.inputAddress().type(dataValid.Address)
		cy.selectPackageIndependent({package : dataValid.PackageType})
		cy.get('#full_name').should('not.contain.value')
		cy.inputWANumberAgentIndependent().type(dataValid.WANumberAgent)
    //cy.get('#additional-phone-checkbox').click()
		cy.inputEmailAgentIndependent().type(dataValid.EmailAgent)
		cy.inputPasswordIndependent().type(dataValid.PasswordAgent, {sensitive:true})
		cy.inputPasswordConfirmationIndependent().type(dataValid.PasswordAgent, {sensitive:true})
		cy.get('#checkbox_form').should('have.value','1')
		cy.submitRegistrationCustomer()
		cy.get('#flashMessage').should('have.text', 'Nama Lengkap harus di isi. ')
	});

	it('C33494 Agent Registration - Leave Nomor HP field blank', function () {
		cy.scrolltoRegisterFormAndValidate()
		cy.inputIndependent({company : dataValid.CompanyName})
		cy.selectProvince({province : dataValid.Province})
		cy.selectCity({city : dataValid.City})
		cy.selectArea({area : dataValid.Area})
		cy.inputAddress().type(dataValid.Address)
		cy.selectPackageIndependent({package : dataValid.PackageType})
		cy.inputFullNameAgentIndependent().type(dataValid.FullNameAgent)
		cy.get('#no_whatsapp').should('not.contain.value')
    //cy.get('#additional-phone-checkbox').click()
		cy.inputEmailAgentIndependent().type(dataValid.EmailAgent)
		cy.inputPasswordIndependent().type(dataValid.PasswordAgent, {sensitive:true})
		cy.inputPasswordConfirmationIndependent().type(dataValid.PasswordAgent, {sensitive:true})
		cy.get('#checkbox_form').should('have.value','1')
		cy.submitRegistrationCustomer()
		cy.get('#flashMessage').should('have.text', 'No Whatsapp harus di isi. ')
	});

	it('C33495 Agent Registration - Leave Email field blank', function () {
		cy.scrolltoRegisterFormAndValidate()
		cy.inputIndependent({company : dataValid.CompanyName})
		cy.selectProvince({province : dataValid.Province})
		cy.selectCity({city : dataValid.City})
		cy.selectArea({area : dataValid.Area})
		cy.inputAddress().type(dataValid.Address)
		cy.selectPackageIndependent({package : dataValid.PackageType})
		cy.inputFullNameAgentIndependent().type(dataValid.FullNameAgent)
		cy.inputWANumberAgentIndependent().type(dataValid.WANumberAgent)
    //cy.get('#additional-phone-checkbox').click()
		cy.get('#email').should('not.contain.value')
		cy.inputPasswordIndependent().type(dataValid.PasswordAgent, {sensitive:true})
		cy.inputPasswordConfirmationIndependent().type(dataValid.PasswordAgent, {sensitive:true})
		cy.get('#checkbox_form').should('have.value','1')
		cy.submitRegistrationCustomer()
		cy.get('#flashMessage').should('have.text', 'Email harus di isi. ')
	});

	it('C33496 Agent Registration - Leave Password field blank', function () {
		cy.scrolltoRegisterFormAndValidate()
		cy.inputIndependent({company : dataValid.CompanyName})
		cy.selectProvince({province : dataValid.Province})
		cy.selectCity({city : dataValid.City})
		cy.selectArea({area : dataValid.Area})
		cy.inputAddress().type(dataValid.Address)
		cy.selectPackageIndependent({package : dataValid.PackageType})
		cy.inputFullNameAgentIndependent().type(dataValid.FullNameAgent)
		cy.inputWANumberAgentIndependent().type(dataValid.WANumberAgent)
    //cy.get('#additional-phone-checkbox').click()
		cy.inputEmailAgentIndependent().type(dataValid.EmailAgent)
		cy.get('#password').should('not.contain.value')
		cy.inputPasswordConfirmationIndependent().type(dataValid.PasswordAgent, {sensitive:true})
		cy.get('#checkbox_form').should('have.value','1')
		cy.submitRegistrationCustomer()
		cy.get('#flashMessage').should('have.text', 'Password harus di isi. ')
	});

	it('C33497 Agent Registration - Leave Konfirmasi Password field blank', function () {
		cy.scrolltoRegisterFormAndValidate()
		cy.inputIndependent({company : dataValid.CompanyName})
		cy.selectProvince({province : dataValid.Province})
		cy.selectCity({city : dataValid.City})
		cy.selectArea({area : dataValid.Area})
		cy.inputAddress().type(dataValid.Address)
		cy.selectPackageIndependent({package : dataValid.PackageType})
		cy.inputFullNameAgentIndependent().type(dataValid.FullNameAgent)
		cy.inputWANumberAgentIndependent().type(dataValid.WANumberAgent)
    //cy.get('#additional-phone-checkbox').click()
		cy.inputEmailAgentIndependent().type(dataValid.EmailAgent)
		cy.inputPasswordIndependent().type(dataValid.PasswordAgent, {sensitive:true})
		cy.get('#confirm_password').should('not.contain.value')
		cy.get('#checkbox_form').should('have.value','1')
		cy.submitRegistrationCustomer()
		cy.get('#flashMessage').should('have.text', 'Konfirmasi Password harus di isi. ')
	});

	it('C33498 Agent Registration - Input different password and confirmation password', function () {
		cy.scrolltoRegisterFormAndValidate()
		cy.inputIndependent({company : dataValid.CompanyName})
		cy.selectProvince({province : dataValid.Province})
		cy.selectCity({city : dataValid.City})
		cy.selectArea({area : dataValid.Area})
		cy.inputAddress().type(dataValid.Address)
		cy.selectPackageIndependent({package : dataValid.PackageType})
		cy.inputFullNameAgentIndependent().type(dataValid.FullNameAgent)
		cy.inputWANumberAgentIndependent().type(dataValid.WANumberAgent)
    //cy.get('#additional-phone-checkbox').click()
		cy.inputEmailAgentIndependent().type(dataValid.EmailAgent)
		cy.inputPasswordIndependent().type(dataValid.PasswordAgent, {sensitive:true})
		cy.inputPasswordConfirmationIndependent().type(dataInvalid.PasswordAgent, {sensitive:true})
		cy.get('#checkbox_form').should('have.value','1')
		cy.submitRegistrationCustomer()
		//cy.get('#flashMessage').should('have.text', '')
	});

	it('C33499 Agent Registration - Leave uncheck Term and Conditions', function () {
		cy.scrolltoRegisterFormAndValidate()
		cy.inputIndependent({company : dataValid.CompanyName})
		cy.selectProvince({province : dataValid.Province})
		cy.selectCity({city : dataValid.City})
		cy.selectArea({area : dataValid.Area})
		cy.inputAddress().type(dataValid.Address)
		cy.selectPackageIndependent({package : dataValid.PackageType})
		cy.inputFullNameAgentIndependent().type(dataValid.FullNameAgent)
		cy.inputWANumberAgentIndependent().type(dataValid.WANumberAgent)
    //cy.get('#additional-phone-checkbox').click()
		cy.inputEmailAgentIndependent().type(dataValid.EmailAgent)
		cy.inputPasswordIndependent().type(dataValid.PasswordAgent, {sensitive:true})
		cy.inputPasswordConfirmationIndependent().type(dataValid.PasswordAgent, {sensitive:true})
		cy.get('#checkbox_form').click()
		cy.submitRegistrationCustomer()
		cy.get('#flashMessage').should('have.text', 'Persetujuan harus dicentang. ')
	});
});
