describe('Add new project',()=>{
    beforeEach(()=>{
        cy.viewport('macbook-15').visit('/')
    })
    it ('C57013 Create only data lead information',function(){
        cy.signinERP();
        cy.openMenuLeadLGP();    
        cy.clickAddLeadERP();
        cy.inputDataLeadInformation(
            { 
                fullname: 'auto 3des1' , 
                telephone: '8564978481000' , 
                email: 'fake2des2@email.com',
                type: 'Whatsapp{enter}',
                source: 'Microsite{enter}',
                projectname: 'arumaya {enter}'
            })
        cy.get('.modal-footer > .btn').click()
        cy.get('.modal-footer > .btn-next-to-fu-result').click()
        cy.get('.modal-footer > .btn-next-to-lead-preference').click()
        cy.get('.modal-footer > .btn-detail').click()
        cy.url().should('include', 'lead-paid-lgp/view')

        cy.openMenuLeadLGP(); 
        cy.get('.dropdown-toggle').eq(2).click({force:true})
        
        cy.get('#w4 > li > .btn-distribute').contains('inactive agent')
        .click({force:true})
        cy.get('.modal-content').should('be.visible')
        cy.get('#btn-distribute-lead').click()
    })
})