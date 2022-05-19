describe('Login CRM',()=>{
    beforeEach(()=>{
        cy.viewport('macbook-15').visit('/')
    })

    it('C33803 Login with blank field',function(){
        cy.loginCRM('skip', 'skip')
        cy.get('.ant-form-item-explain-error').should('be.visible'); 
    })

    it('C33804 Login with unregister user',function(){
        cy.loginCRM('aabbc@99.co', 'belladona')
        cy.get('.ant-alert').should('be.visible'); 
    })

    it ('C33799 Login as Super Admin',function(){
        cy.loginCRM('backdoor@99.co', 'belladona')
        cy.get('.anticon-user').should('be.visible'); 
    })

    it ('C33800 Login as BDE Leader',function(){
        cy.loginCRM('maulana.sobri@99.co', 'B3lladona')
        cy.get('.anticon-user').should('be.visible'); 
    })

    it ('C33801 Login as BDE Member',function(){
        cy.loginCRM('kelik.warsito@99.co', 'B3lladona')
        cy.get('.anticon-user').should('be.visible'); 
    })

    it ('C43464 Login as AE Member',function(){
        cy.loginCRM('kelik.warsito@99.co', 'B3lladona')
        cy.get('.anticon-user').should('be.visible'); 
    })

    
})