const elementParent = '.ant-select-item-option-grouped > .ant-select-item-option-content';
describe('Search Suggestion',()=>{
    beforeEach(()=>{
        cy.viewport('macbook-15').visit('/')
		cy.loginCRM('backdoor@99.co', 'belladona'); 
    })


    it('C33810 Search lead name suggestion', function () {
        cy.get('input[data-cy="search"]').type("automation 01")
		cy.SearchSuggestionLead({
			index: 0,
			selector: elementParent,
			value: 'Automation 01'
		});
    })

    it('C67787 Search agency suggestion', function () {
        cy.get('input[data-cy="search"]').type("ninetynine")
		cy.SearchSuggestionLead({
			index: 0,
			selector: elementParent,
			value: 'ninetynine'
		});
    })

    it('C67788 Search lead owner suggestion', function () {
        cy.get('input[data-cy="search"]').type("tresya")
		cy.SearchSuggestionLead({
			index: 0,
			selector: elementParent,
			value: 'Tresya Kurniawan'
		});
    })



})