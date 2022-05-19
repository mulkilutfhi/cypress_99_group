describe("LDP Data Tracker", () => {

	beforeEach(() => {
		if (Cypress.mocha.getRunner().suite.ctx.currentTest.title === 'AJAX Page Ready') return
		cy.viewport('macbook-15');
		cy.visit('/properti/jakarta-utara/hos5619092/');
	});

	it('Page Load', () => {
		cy.checkGA({
			"event": "pageview",
			"source": "PDP",
			"userInfo": {}
		})
	});

	it('AJAX Page Ready', () => {
		cy.viewport('macbook-15');
		cy.visit('/');
	});

	it.skip('Media Interaction or Load', () => {

	});

	it.skip('Save to Shortlist', () => {

	});

	it.skip('Phone Reveal', () => {

	});

	it.skip('Email Message', () => {

	});

	it.skip('Agent Profile Link', () => {

	});

	it.skip('Mortgage Calculator Link', () => {

	});

	it.skip('Mortgage Calculator Popup', () => {

	});

	it.skip('Click on pageview button', () => {

	});

	it.skip('Share Popup', () => {

	});

	it.skip('Share Submit', () => {

	});

	it.skip('view on similar property listing', () => {

	});

	it.skip('Click on similar property listing', () => {

	});

	it.skip('Click on Thumbnails/Carousel in Gallery', () => {

	});
});