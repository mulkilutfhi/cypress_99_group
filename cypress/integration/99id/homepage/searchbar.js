describe('Checking Functionality Search',() => {

	beforeEach(()=>{
		cy.viewport('macbook-15').visit('/')
	});

	it('Property Type',()=>{
		cy.PropertyType();
	});

	it('search by price minimum',()=>{
		cy.PriceMinimum();
		cy.get('.search-bar-advanced__button').click();
		cy.url().should('include','?harga_min=100jt');
	});

	it('search by price maksimum',()=>{
		cy.PriceMaksimum();
		cy.get('.search-bar-advanced__button').click();
		cy.url().should('include','?harga_maks=500jt');
	});

	it('search by bedroom',()=>{
		cy.Bedroom();
		cy.get('.search-bar-advanced__button').click();
		cy.url().should('include','?kamar_tidur_min=2');
	});

	it('search by bathroom',()=>{
		cy.Bathroom();
		cy.get('.search-bar-advanced__button').click();
		cy.url().should('include','?kamar_mandi_min=2');
	});

	it('search by city',()=>{
		cy.Search_Bycity();
		cy.get('.search-bar-advanced__button').click();
		cy.url().should('include','/intan-jaya');
	});

	it('search by district',()=>{
		cy.Search_Bydistrict();
		cy.get('.search-bar-advanced__button').click({force:true});
		cy.url().should('include','/bandung/antapani');
	});

	//TODO Searching dijual with all funtionality
	it ('Search DIJUAL all funtionality',()=>{
		cy
			.PriceMinimum()
			.PriceMaksimum()
			.Bedroom()
			.Bathroom()
			.Search_Bycity()
			.get('.search-bar-advanced__button').click({force:true});
		cy.location().then((url)=>{
			expect(url.origin).to.eq('https://dw.99.co')
			expect(url.pathname).to.eq('/id/jual/rumah/intan-jaya')
		});
	});
});
