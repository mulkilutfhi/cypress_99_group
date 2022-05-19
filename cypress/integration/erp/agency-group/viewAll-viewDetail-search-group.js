describe('Search Group',()=>{
    beforeEach(()=>{
        cy.viewport('macbook-15').visit('/')
    })

    it ('C54008 View All',function(){
        cy.signinERP();
        cy.openMenuAgentGroup();  
        cy.url().should('include', 'group/index')
    })
    it ('C54011 View Detail Group',function(){
        cy.signinERP();
        cy.openMenuAgentGroup(); 
        cy.window().then((win) => {
            cy.spy(win, 'open')
              .as('openNewTab');
          });
          cy.get('[data-cy="btn-detail"] > .glyphicon.glyphicon-eye-open')
            .eq(0)
            .click()
          cy.get('@openNewTab')
            .should('be.called');
    })
    
    it ('C54009 Search group name',function(){
        cy.signinERP();
        cy.openMenuAgentGroup();  
        cy.get('[name="GroupSearch[name]"]').type('group nov{enter}')
        cy.url().should('include', 'GroupSearch'||'name'||'group+nov')
    })

    it ('C54010 Search group project',function(){
        cy.signinERP();
        cy.openMenuAgentGroup();  
        cy.get('[id="select2-groupsearch-projectid-container"]').type('arumaya{enter}')
        cy.url().should('include', 'projectId'||'1817')
    })
})