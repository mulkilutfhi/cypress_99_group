describe('Search Suggestion',()=>{
    beforeEach(()=>{
        cy.viewport('macbook-15').visit('/')
        cy.loginCRM('backdoor@99.co', 'belladona');  
        cy.openLeadModule();
    })

    it('C43479 No search result', function () {
      cy.get('input[data-cy="search"]').type("fake test")
      cy.intercept({
        method: 'GET',
        url: '/v1/leads/suggestion-search?keyword=fake+test',
        }).as('waitsuggestion');
        cy.wait('@waitsuggestion').its('response.statusCode').should('eq',200)
        cy.get('input[data-cy="search"]').type("{enter}")
        cy.getElement('no-data-lead').should('be.visible')
    });

    it('C43475 Search by lead name', function () {
        cy.get('input[data-cy="search"]').type("automation 01")
        cy.intercept({
          method: 'GET',
          url: '/v1/leads/suggestion-search?keyword=automation+01',
          }).as('waitsuggestion');
          cy.wait('@waitsuggestion').its('response.statusCode').should('eq',200)
        cy.get('input[data-cy="search"]').type("{enter}")
        cy.url().should('include','automation'||'01') 
    });

    it('C43476 Search by agency', function () {
        cy.get('input[data-cy="search"]').type("ninetynine")
        cy.intercept({
          method: 'GET',
          url: '/v1/leads/suggestion-search?keyword=ninetynine',
          }).as('waitsuggestion');
          cy.wait('@waitsuggestion').its('response.statusCode').should('eq',200)
          cy.get('input[data-cy="search"]').type("{enter}")
          cy.url().should('include','ninetynine') 
    });

    it('C43477 Search by lead owner', function () {
        cy.get('input[data-cy="search"]').type("tresya kurniawan")
        cy.intercept({
          method: 'GET',
          url: '/v1/leads/suggestion-search?keyword=tresya+kurniawan',
          }).as('waitsuggestion');
          cy.wait('@waitsuggestion').its('response.statusCode').should('eq',200)
          cy.getElement('select-item-option')
          .click()
          cy.url().should('include','1043')
    });

  

})