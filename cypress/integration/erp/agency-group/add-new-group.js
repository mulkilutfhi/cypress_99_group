describe('Add new Group',()=>{
    beforeEach(()=>{
        cy.viewport('macbook-15').visit('https://admin.feature.ninetynine.id/')
    })

    it ('C57076 Check validation field',function(){
        cy.signinERP();
        cy.openMenuAgentGroup();    
        cy.clickAddGroup();
        cy.get('.btn-success').click()

    })

    it ('C57082 Group name already created',function(){
        cy.signinERP();
        cy.openMenuAgentGroup();    
        cy.clickAddGroup();
        cy.inputGroupForm('Discovery','arumaya{enter}')
        cy.get('.btn-success').click()
        cy.get('.field-groupform-name > .help-block').should('be.visible')
    })

    it.only('C56341 Add group single project name',function(){
        cy.signinERP();
        cy.openMenuAgentGroup();    
        cy.clickAddGroup();
        cy.inputGroupForm('group 341','arumaya{enter}')
        cy.get('.btn-success').click()
        cy.url().should('include','group/view')  
    })

    it ('C56341 Add group multiple project name',function(){
        cy.signinERP();
        cy.openMenuAgentGroup();    
        cy.clickAddGroup();
        cy.inputGroupForm('group automation multiple','arumaya{enter} proddes {enter} Morizen {enter}')
        cy.get('.btn-success').click()
        cy.url().should('include','group/view') 
    })
})