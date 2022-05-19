const elementParent = '.ui-molecules-dialog-location-r123__text > p';
describe('Search by enter on SRP', function () {
    beforeEach(function () {
        cy.viewport('iphone-x').visit('/');
    });

    it('C55495	Search location level province', function () {
      cy.gotoSearchPage();
      cy.clickSearchProperty('Jawa Barat') 
      cy.intercept({
        method: 'GET',
        url: '/api/search-suggestion/get-by-text?language=id&query=Jawa+Barat&subChannel=SUB_SALE',
        }).as('waitsuggestion');
        cy.wait('@waitsuggestion').its('response.statusCode').should('eq',200)
        cy.get('input[maxlength]').type('{enter}')
        cy.url().should('include','Jawa'||'Barat') 
    }); 
    
    it('C55496	Search location level city', function () {
      cy.gotoSearchPage();
      cy.clickSearchProperty('bandung') 
      cy.intercept({
        method: 'GET',
        url: '/api/search-suggestion/get-by-text?language=id&query=bandung&subChannel=SUB_SALE',
        }).as('waitsuggestion');
        cy.wait('@waitsuggestion').its('response.statusCode').should('eq',200)
        cy.get('input[maxlength]').type('{enter}')
        cy.url().should('include','bandung/residensial') 
    });

    it('C55497	Search location level area', function () {
      cy.gotoSearchPage();
      cy.clickSearchProperty('sukajadi') 
      cy.intercept({
        method: 'GET',
        url: '/api/search-suggestion/get-by-text?language=id&query=sukajadi&subChannel=SUB_SALE',
        }).as('waitsuggestion');
        cy.wait('@waitsuggestion').its('response.statusCode').should('eq',200)
        cy.get('input[maxlength]').type('{enter}')
        cy.url().should('include','sukajadi/residensial') 
    });

    it('C55498	Search by keywords ', function () {
      cy.gotoSearchPage();
      cy.clickSearchProperty('rumah minimalis {enter}')  
      cy.url().should('include','rumah'||'minimalis')     
    });

});
