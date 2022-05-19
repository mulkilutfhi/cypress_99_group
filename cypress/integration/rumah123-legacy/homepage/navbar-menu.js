describe('Navbar Menu', () => {

	beforeEach(function() {
		cy.viewport('macbook-15')
		cy.visit('/')
	});

	it('C234 As a Consumer (buyer), i want to see button "dijual" in navbar', function() {
		cy.get('.desktop-nav-bar > ul > li').eq(0).as('NavbarMenu')
		cy.get('@NavbarMenu').find('[title="Dijual"]').should('have.text','Dijual')
	});

	it('C235 As a Consumer (buyer), i want to see button "disewa" in navbar', function() {
		cy.get('.desktop-nav-bar > ul > li').eq(1).as('NavbarMenu')
		cy.get('@NavbarMenu').find('[title="Disewa"]').should('have.text','Disewa')
	});

	it('C236 As a Consumer (buyer), i want to see button "properti baru" in navbar', function() {
		cy.get('.desktop-nav-bar > ul > li').eq(2).as('NavbarMenu')
		cy.get('@NavbarMenu').find('[title="Properti Baru"]').should('have.text','Properti Baru')
	});

	it('C237 As a Consumer (buyer), i want to see button "KPR" in navbar', function() {
		cy.get('.desktop-nav-bar > ul > li').eq(3).as('NavbarMenu')
		cy.get('@NavbarMenu').find('[title="KPR"]').should('have.text','KPR')
	});

	it ('C238 As a Consumer (buyer), i want to see button "Panduan" in navbar', function() {
		cy.get('.desktop-nav-bar > ul > li').eq(4).as('NavbarMenu')
		cy.get('@NavbarMenu').find('[title="Panduan"]').should('have.text','Panduan')
	});

	it('C239 As a Consumer (buyer), i want to see button "Berita" in navbar', function() {
		cy.get('.desktop-nav-bar > ul > li').eq(5).as('NavbarMenu')
		cy.get('@NavbarMenu').find('[title="Berita"]').should('have.text','Berita')
	});

	it ('C240 As a Consumer (buyer), i want to see button "Internasional" in navbar', function() {
		cy.get('.desktop-nav-bar > ul > li').eq(6).as('NavbarMenu')
		cy.get('@NavbarMenu').find('[title="Internasional"]').should('have.text','Internasional')
	});
});