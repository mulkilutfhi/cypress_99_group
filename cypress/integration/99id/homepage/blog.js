describe('Checking Attribute Primary Project',() => {

	before(() => {
			cy.viewport('macbook-15').visit('/')
	});

	it('checking blog',() => {
		cy.checking_length_card_blog()
		cy.checking_img_blog()
		cy.checking_published()
		cy.checking_title_blog()
		cy.checking_selengkapnya()
	});
});
