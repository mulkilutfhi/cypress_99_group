describe('Checking Attribute Primary Project',function(){

	beforeEach(function () {
    cy.viewport('macbook-15').visit('/');
	});

	it('checking heading primary projects',function () {
		cy.checking_heading_primary_projects()
	});

	it('total project must be 9 in carousel',function () {
		cy.checking_all_alement_primaryprojects()
	});

	it('click project lainnya',function () {
			cy.checking_button_LIHATLAINNYA_primaryprojects()
	});
});
