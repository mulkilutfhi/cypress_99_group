describe('Duplicate lead',()=>{
    beforeEach(()=>{
        cy.viewport('macbook-15').visit('/')
    })


    it ('C53247	Cancel Duplicate lead',function(){
        cy.signinERP();
        cy.openMenuLeadLGP() ;  

        cy.get('.btn-duplicate')
            .eq(1)
            .click()
        cy.get('.modal-content').should('be.visible')
        cy.get('[id="select2-projectInterestId-container"').type('arumaya{enter}')
        cy.get('.modal-footer > .btn-default').click()
    })

    it ('C53242	Duplicate Lead from Table Lead',function(){
        cy.signinERP();
        cy.openMenuLeadLGP();    
        cy.clickAddLeadERP();
        cy.inputDataLeadInformation(
            { 
                fullname: 'test auto dupicate' , 
                telephone: '876669993000' , 
                email: 'fakeduplicate@email.com',
                type: 'Whatsapp{enter}',
                source: 'ERP{enter}',
                projectname: 'arumaya {enter}'
            })
        cy.get('.modal-footer > .btn').click()
        cy.get('.modal-footer > .btn-next-to-fu-result').click()
        cy.get('.modal-footer > .btn-next-to-lead-preference').click()
        cy.get('.modal-footer > .btn-detail').click()
        cy.url().should('include', 'lead-paid-lgp/view')

        cy.openMenuLeadLGP(); 
        cy.get('.btn-duplicate')
            .eq(0)
            .click()
        cy.get('.modal-content').should('be.visible')
        cy.get('[id="select2-projectInterestId-container"').type('DICOBA SAJA{enter}')
        cy.get('.modal-footer > .btn-primary').click()
        cy.get('.modal-content').should('be.visible')
    })


})