describe('Checking Verified Listing',() => {

	beforeEach(()=>{
		cy.viewport('macbook-15').visit('/')
	});

	it('checking title verified listing',() => {
		cy.title_verified_listing()
	});

	//including {badge, property type, installment, title, bedroom, bathroom, landsize, building size, carousel}
	it('checking all element',() => {
		cy.checking_all_content_verified()
	});

	it('checking button lihat lainnya & url',() => {
		cy.button_LIHATLAINYA_verified()
	});
});
