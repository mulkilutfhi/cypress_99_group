describe('Add new Lead',()=>{
    beforeEach(()=>{
        cy.viewport('macbook-15').visit('https://develop.crm.rumah123.com/')
    })

    it ('C33932-Check Required field',function(){
        cy.loginCRM();  
        cy.openLeadModule();
        cy.clickAddLeadButton();
        //Click button save
        cy.get('.ant-btn.ant-btn-primary').contains("Create").click({ multiple: true })

    });

    it ('C43486-Email already registered',function(){
        cy.loginCRM();  
        cy.openLeadModule();
        cy.clickAddLeadButton();
        //Fill registered email
        cy.get('input[name="email"]').type('automation@gmail.com')

        //Click button save
        cy.get('.ant-btn.ant-btn-primary').contains("Create").click({ multiple: true })
        cy.get(':nth-child(1) > .ant-notification-notice-content > .ant-notification-notice-with-icon > .ant-notification-notice-message')
        .should('be.visible')
   
    });

    it ('C33930 Add new lead without add product',function(){
        cy.loginCRM();  
        cy.openLeadModule();
        cy.clickAddLeadButton();
    
        //Fill unregistered email
        cy.get('input[data-cy="email"]').type('automation03@gmail.com')
        
        //Fill Lead Name
        cy.get('input[data-cy="lead_name"]').type('Automation 03')
        //Select Agency
        cy.get('input[aria-controls="rc_select_17_list"]').type('brighton')
        cy.wait(1000)
        cy.get('.ant-select-item-option-content').contains('BRIGHTON GADING SERPONG').click({ force: true })

        //Fill phone number
        cy.get('input[data-cy="phone_number"]').type('08657900900')
        
        //Fill whatsapp number
        cy.get('input[data-cy="whatsapp_number"]').type('08657900100')

        //Select Lead Source
        cy.get('.ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click({ multiple: true })
        cy.get('.ant-select-item-option-content').contains('Rumah 123').click({force:true})

        //Fill password
        cy.get('input[data-cy="password"]').type('qwerty')
        cy.get('input[data-cy="confirm_password"]').type('qwerty')

        //Fill KTP NPWP
        cy.get('input[data-cy="ktp"]').type('13100999009292')
        cy.get('input[data-cy="npwp"]').type('646523772882')

        //Select Lead Owner
        cy.get('input[aria-controls="rc_select_22_list"]').click()
        cy.wait(1000)
        cy.get('.ant-select-item-option-content').contains('BDE M 1').click({ force: true })

        //Select Status
        cy.get('input[aria-controls="rc_select_23_list"]').click()
        cy.wait(1000)
        cy.get('.ant-select-item-option-content').contains('New').click({ force: true })

        //Click button save
        //cy.get('button[data-cy="submit"]').click({ multiple: true })
        //cy.get('.ant-table-container').should('be.visible').contains('Automation 03')
        
    });

  

})
