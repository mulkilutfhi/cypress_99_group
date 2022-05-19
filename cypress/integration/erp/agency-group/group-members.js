describe('Edit Group information',()=>{
    beforeEach(()=>{
        cy.viewport('macbook-15').visit('/')
    })

    it('C57083 View Edit group page',function(){
        cy.signinERP();
        cy.openMenuAgentGroup();  
        cy.get('[data-cy="btn-update"] > .glyphicon-pencil')
            .eq(0)
            .click()
        cy.url().should('include', 'group/update') 
    })

    it ('C54005 Add group member',function(){
        cy.signinERP();
        cy.openMenuAgentGroup();  
        cy.gotoViewGroupDetail();
        
        cy.get('.btn-primary > i').click()
        //cy.get('.modal-content').should('be.visible')
        cy.get('[id="select2-usergroupform-userid-container"]')
        .type('alvino')
        cy.get('.select2-results__option')
        .click({force:true})
        cy.get('[id="select2-usergroupform-percentage-container"]')
        .type('75{enter}')
        cy.get('.btn-success').click()
    })

})