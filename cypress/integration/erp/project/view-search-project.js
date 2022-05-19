describe('View and seacrh Projects',()=>{
    beforeEach(()=>{
        cy.viewport('macbook-15').visit('/')
    })

    it ('C2819 View All Projects',function(){
        cy.signinERP();
        cy.openMenuProject();    
        cy.url().should('include', 'projects/index')
    })

    it ('C2821 View Project Detail',function(){
        cy.signinERP();
        cy.openMenuProject();   
        cy.get('.glyphicon-eye-open').eq(0).click()
        cy.url().should('include', 'projects/view?id=')
    })

    it ('C2823 Delete Project',function(){
        cy.signinERP();
        cy.openMenuProject();   
        cy.get('.glyphicon-trash').eq(0).click()
        cy.get('.btn-warning > span').click()
        cy.url().should('include', 'projects/view?id=')
    })

})