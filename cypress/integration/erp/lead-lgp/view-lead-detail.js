describe('View Detail Lead',()=>{
    beforeEach(()=>{
        cy.viewport('macbook-15').visit('https://admin.feature.ninetynine.id')
    })

    it ('C57000 Filter Lead',function(){
        cy.signinERP();
        cy.openMenuLeadLGP() ;  

        cy.get('.select2-selection__placeholder')
        .contains('Any Project')
        .click(); 
        cy.get('input[type="search"]').type('arumaya {enter}')  
        cy.url().should('include','projectInterestId'||'1817')    
    })

    it ('C56999 View All Lead',function(){
        cy.signinERP();
        cy.openMenuLeadLGP();
        
        cy.get('.table-striped.kv-table-wrap').should('be.visible')
    })

    it ('C57001 View Detail Lead',function(){
        cy.signinERP();
        cy.openMenuLeadLGP() ;  
        cy.gotoEditLead()
    })

    

})