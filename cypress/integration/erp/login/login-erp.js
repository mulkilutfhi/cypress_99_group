describe('Login ERP',()=>{
    beforeEach(()=>{
        cy.viewport('macbook-15').visit('/')
    })

    it ('C56336 Login as Unregistered User',function(){
        cy.stepSigninERP('test@ninetynine.id', 'admin')
        cy.get('.field-loginform-password > .help-block').should('be.visible')
    })

    it ('C56337 Login Blank Fields',function(){
        cy.stepSigninERP('skip', 'skip') 
        cy.get('.field-loginform-email > .help-block').should('be.visible')
        cy.get('.field-loginform-password > .help-block').should('be.visible')
    })

    it ('C56334 Login as Super Admin',function(){
        cy.stepSigninERP('admin@ninetynine.id', 'hello')
        cy.get('.img-circle').should('be.visible');   
    })

    it ('C56338 Logout',function(){
        cy.stepSigninERP('admin@ninetynine.id', 'hello')  
        cy.get('.dropdown-toggle.profile.waves-effect.waves-light > span ').click();
        cy.get('.profile-dropdown-footer > a').contains(' Logout').click()
        cy.url().should('include','login')  
    })
    
})