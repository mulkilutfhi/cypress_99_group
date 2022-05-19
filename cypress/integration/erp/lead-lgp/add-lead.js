
describe('Add new Lead',()=>{
    beforeEach(()=>{
        cy.viewport('macbook-15').visit('https://admin.feature.ninetynine.id/')
    })

    it ('C57076 Check validation field',function(){
        cy.signinERP();
        cy.openMenuLeadLGP();    
        cy.clickAddLeadERP();
        cy.inputDataLeadInformation(
            { 
                fullname: 'skip' , 
                telephone: 'skip' , 
                email: 'skip',
                type: 'skip{enter}',
                source: 'skip{enter}',
                projectname: 'skip{enter}'
            })

        cy.get('.btn-insert-lead').click()
        cy.get('.help-block').contains('Full Name cannot be blank.')
        cy.get('.help-block').contains('Telephone cannot be blank')
        cy.get('.help-block').contains('Lead Type cannot be blank.')
        cy.get('.help-block').contains('Source cannot be blank.')
        cy.get('.help-block').contains('Project Name cannot be blank.')
    })

    it ('C57075 telephone number, project and source are already registered',function(){
        cy.signinERP();
        cy.openMenuLeadLGP();    
        cy.clickAddLeadERP();
        cy.inputDataLeadInformation(
            { 
                fullname: 'automation' , 
                telephone: '8657330300' , 
                email: 'abcde@email.com',
                type: 'Whatsapp{enter}',
                source: 'ERP{enter}',
                projectname: 'arumaya {enter}' 
            })

        //cy.get('#select2-leadinformationform-projectinterestid-container').type(' Test  Project 001{enter}')
        cy.get('.btn-insert-lead').click()
        cy.get('.help-block').contains('This phone number is already registered on this project!')
    })

    it.only('C57013 Create only data lead information',function(){
        cy.signinERP();
        cy.openMenuLeadLGP();    
        cy.clickAddLeadERP();
        cy.inputDataLeadInformation(
            { 
                fullname: 'Secret1' , 
                telephone: '8564253452452' , 
                email: 'fake@email.com',
                type: 'Whatsapp{enter}',
                source: 'ERP{enter}',
                projectname: 'arumaya {enter}'
            })
        cy.get('.modal-footer > .btn-insert-lead').click()
        cy.get('.close').click()
    })

})