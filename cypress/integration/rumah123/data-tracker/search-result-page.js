describe("SRP Data Tracker", () => {

	beforeEach(() => {
		if (Cypress.mocha.getRunner().suite.ctx.currentTest.title == 'Featured Agent Carousel Interaction' || 'Featured Agent Click' || 'Featured Agent Popup' ) {
			cy.viewport('macbook-15');
			cy.visit('/jual/jakarta-utara/kelapa-gading/rumah/')
		} else {
			cy.viewport('macbook-15');
			cy.visit('/jual/residensial/');
		}
	});

	it('Page Load', { tags: ['smoke'] }, () => {
		cy.checkGA({
			"event": "pageview",
			"source": "SRP",
			"userInfo": {}
		})
	});

	it('AJAX Page Ready', { tags: ['smoke'] }, () => {
	cy.checkGA({
			"event": "pageview_ajax_srp",
			"source": "SRP",
			"listingImpressions": [],
			"listingSearch": {},
			"user": {}
		})
	});

	it('Submit Search', () => {
		cy.get('section.ui-organism-search-srp-r123__autocomplete').find('.ui-molecules-dropdown__toggle').click().type('Bandung')
		cy.get('button.ui-organism-search-srp-r123__search-button').trigger('click')
		cy.checkGA({
			"event": "listingSearch",
			"source": "SRP-Search",
			"listingSearch": {},
			"user": {}
		})
	});

	it('Change Sort', () => {
		cy.get('div.ui-search-page__filter').find('div.ui-organism-search-filter-r123__sorting-section').as('sorting')
		cy.get('@sorting').trigger('click')
		cy.get('@sorting').find('div[id="PRICE_DESC"]').trigger('click')
		cy.checkGA({
			"event": "listingSort",
			"source": "SRP",
			"listingSearch": {},
			"user": {}
		})
	});

	it('Click on Search Result Link', () => {
		cy.get('div.sc-jrAGrp:first').trigger('click')
		cy.checkGA({
			"event": "listingClick",
			"source": "SRP",
			"listing": {},
			"user": {}
		})
	});

	it('Save to Shortlist', () => {
		cy.clearCookies()
		cy.doLoginR123()
		cy.get('div.sc-jrAGrp:first').find('a[title="Simpan"]').trigger('click')
		cy.wait(4000)
		cy.checkGA({
			"event": "listingSave",
			"source": "SRP",
			"listing": {},
			"user": {}
		})
		cy.get('div.sc-jrAGrp:first').find('a[title="Tersimpan"]').trigger('click')
	});

	it.skip('Phone Reveal', () => {

	});

	it.skip('Agent Profile Link', () => {

	});

	it.skip('Media Interaction or Load', () => {

	});

	it('Featured Agent Carousel Interaction', () => {
		cy.get('div.ui-organism-area-specialist-r123__agents').find('i.rui-icon-arrow-right-small').trigger('click')
		cy.wait(2000)
		cy.checkGA({
			"event": "featuredCarousel",
			"source": "SRP-Area-Specialist",
			"listingSearch": {},
			"user": {}
		})
	});

	it('Featured Agent Click', () => {
		cy.get('div.ui-organism-area-specialist-r123__agents').find('a.ui-atomic-link--styling-underline-none:first').trigger('click')
		cy.wait(2000)
		cy.checkGA({
			"event": "featuredAgent",
			"source": "SRP-Area-Specialist",
			"listingSearch": {},
			"agent": {},
			"user": {}
		})
	});

	it('Featured Agent Popup', () => {
		cy.get('div.ui-organism-area-specialist-r123__sidebar__footer > button').click()
		cy.wait(2000)
		cy.checkGA({
			"event": "featuredPopup",
			"source": "SRP-Area-Specialist",
			"listingSearch": {},
			"agent": {},
			"user": {}
		})
	});

	it.skip('Featured Agent Email', () => {

	});

	it('Mortgage Calculator Link on Listing Card', () => {
		cy.get('div.sc-jrAGrp:first').find('span').contains('Simulasi KPR').trigger('click')
		cy.wait(2000)
		cy.checkGA({
			"event": "listingMortgage",
			"source": "SRP-Listing-Card",
			"listingSearch": {},
			"user": {}
		})
	});

	it.skip('Mortgage Calculator Link on Bottom SRPd', () => {

	});

	it.skip('Mortgage Calculator Popup', () => {

	});
});
