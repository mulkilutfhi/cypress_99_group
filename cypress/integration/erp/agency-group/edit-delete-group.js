describe('Edit Group',()=>{
    beforeEach(()=>{
        cy.viewport('macbook-15').visit('/login')
    })

    it ('C54006 Edit Group name',function(){
        cy.signinERP();
        cy.openMenuAgentGroup();    
        cy.gotoEditGroup();
        cy.get('[name="GroupForm[name]"]').clear().type('group baru edit')
        cy.get('.btn-primary').click()
        cy.url().should('include','group/view') 
    })

    it ('C56342 Edit list project name',function(){
       
        cy.openMenuAgentGroup();    
        cy.gotoEditGroup();
        cy.get('.select2-search__field').type('discovery{enter}')
        cy.get('.btn-primary').click()
        cy.url().should('include','group/view')
    })

    it ('C56344 Edit routing chance',function(){
        
        cy.openMenuAgentGroup();    
        cy.gotoViewGroupDetail();
        cy.get('.glyphicon.glyphicon-pencil').click()
        cy.get('[name="UserGroup[0][percentage]"]').select('100%')
        cy.get('.glyphicon-ok').click()
        cy.url().should('include','group/view')
    })

    it ('C54007 Delete group member',function(){
        cy.signinERP();
        cy.openMenuAgentGroup();    
        cy.gotoViewGroupDetail();
        cy.get('.glyphicon-trash').click()
        cy.get('.btn-warning > span').click()
        cy.url().should('include','group/view')
    })

    it ('C56345 Delete group',function(){
        cy.signinERP();
        cy.openMenuAgentGroup();    
        cy.get('.glyphicon-trash')
        .eq(0)
        .click()
        cy.get('.btn-warning > span').click()
        cy.url().should('include','group/index')
    })
})