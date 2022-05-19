describe('Add new project',()=>{
    beforeEach(()=>{
        cy.viewport('macbook-15').visit('/')
    })

    it.only('C56302 Set Working Hours',function(){
        cy.signinERP();
        cy.openMenuProject();    
        cy.clickAddProject();
      
        cy.get('input[name="ProjectForm[name]"]').type('Project automation working hours')
        cy.get('[id="select2-projectform-r123projectid-container"]').type('test{enter}')
        cy.get('[id="select2-projectform-developerid-container"]').type('century{enter}')
        cy.get('[id="select2-projectform-accountmanagerid-container"]').type('istiq{enter}')
        cy.get('[name="ProjectForm[projectTypes][]"]').select('Apartement',{force: true})
        cy.get('[id="select2-projectform-telesalesid-container"]').type('istiq{enter}')
        cy.get('[name="ProjectForm[startWorkingHour]"]').click();
        cy.get('.dropdown-menu > .datetimepicker-hours > .table-condensed > tbody > tr > td > :nth-child(10)').click({force: true})
        cy.get('.dropdown-menu > .datetimepicker-minutes > .table-condensed > tbody > tr > td > :nth-child(1)').click({force: true})
        
        //cy.get('.col-sm-10 > .btn-success').click()
        //cy.url().should('include','projects/view') 
    })

    it ('C57084 Show error when all fields not filled',function(){
        cy.signinERP();
        cy.openMenuProject();    
        cy.clickAddProject();
        cy.get('.col-sm-10 > .btn-success').click()

        cy.get('.help-block').contains('Project Name cannot be blank.')
        cy.get('.help-block').contains('Developer cannot be blank.')
        cy.get('.help-block').contains('Account Owner cannot be blank.')
        cy.get('.help-block').contains('Project Types cannot be blank.')
        cy.get('.help-block').contains('Start Price cannot be blank.')
        cy.get('.help-block').contains('Telesales cannot be blank.')
    })
    
    it ('C2820 Add Project',function(){
        cy.signinERP();
        cy.openMenuProject();    
        cy.clickAddProject();
        cy.get('input[name="ProjectForm[name]"]').type('Project automation')
        cy.get('[id="select2-projectform-r123projectid-container"]').type('test{enter}')
        cy.get('[id="select2-projectform-developerid-container"]').type('century{enter}')
        cy.get('[id="select2-projectform-accountmanagerid-container"]').type('istiq{enter}')
        cy.get('[name="ProjectForm[projectTypes][]"]').select('Apartement',{force: true})
        cy.get('[id="select2-projectform-telesalesid-container"]').type('istiq{enter}')
       // cy.get('.col-sm-10 > .btn-success').click()
        //cy.url().should('include','projects/view') 
    })

    it ('C2822 Edit Project',function(){
        cy.signinERP();
        cy.openMenuProject();    
        cy.gotoEditProject();
        cy.get('input[name="ProjectForm[name]"]').type('Project automation update')
        cy.get('[id="select2-projectform-r123projectid-container"]').type('test{enter}')
        cy.get('[id="select2-projectform-developerid-container"]').type('century{enter}')
        cy.get('[id="select2-projectform-accountmanagerid-container"]').type('istiq{enter}')
        cy.get('[name="ProjectForm[projectTypes][]"]').select('Apartement',{force: true})
        cy.get('[id="select2-projectform-telesalesid-container"]').type('istiq{enter}')
       // cy.get('.col-sm-10 > .btn-success').click()
        //cy.url().should('include','projects/view') 
    })


})