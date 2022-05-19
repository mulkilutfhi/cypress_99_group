describe('Distribute lead',()=>{
    beforeEach(()=>{
        cy.viewport('macbook-15').visit('/')
    })

    it ('C63138	Distribution to groups that do not have a list agent',function(){
        cy.signinERP();
        cy.openMenuLeadLGP() ;  

        cy.get('.btn-xs.btn-default.btn')
            //.eq(1)
            .contains('Distribute')
            .click({force:true})
        
        cy.get('#w4 > li > .btn-distribute').contains('group nov')
        .click({force:true})
        cy.get('.modal-content').should('be.visible')
        cy.get('#btn-distribute-lead').should('not.be.visible')
    })


    it.only(' Distribute',function(){
        cy.signinERP();
        cy.openMenuLeadLGP();    
        cy.clickAddLeadERP();
        cy.inputDataLeadInformation(
            { 
                fullname: 'test auto distribute' , 
                telephone: '85644999383000' , 
                email: 'fakedistribute@email.com',
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