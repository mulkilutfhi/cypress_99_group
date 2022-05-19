describe('Add new Lead',()=>{
    beforeEach(()=>{
        cy.clearCookies();
        cy.viewport('macbook-11').visit('/')
        cy.loginCRM('backdoor@99.co', 'belladona');  
        cy.clickAddLeadButton();
    })

    it('C33932 Check Required field',function(){
        cy.get('[data-cy="submit"]').contains("Create").click()
        
        cy.contains("Email is required")
        cy.contains("Leads name is required")
        cy.contains("Agency is required")
        cy.contains("Phone number is required")
        cy.contains("WhatsApp number is required")
        cy.contains("Password is required")
        cy.contains("Confirm password is required")
        cy.contains("Province is required")
        cy.contains("City is required")
        cy.contains("Area is required")
        cy.contains("Address is required")
        cy.contains("Status is required")
    });

    it('C43486 Email already registered',function(){
        cy.get('input[data-cy="email"]').type('yaya@gg.co')

        cy.intercept({
            method: 'GET',
            url: '/v1/leads/agent-by-email/yaya@gg.co',
            }).as('messageerror');
            cy.wait('@messageerror').its('response.statusCode').should('eq',404)
        cy.getElement('error-message').should('be.visible')
   
    });

    it('C33931 Cancel create lead',function(){
        cy.get('[data-cy="cancel"]').click()
        cy.getElement('form-add-lead').should('not.be.visible')
   
    });

    it('C33930 Add new lead',function(){
        cy.emailNewLead();
       
        cy.get('input[data-cy="lead_name"]').type('Automation New Lead')
        
        cy.get('[data-cy=agency_id] > .ant-select-selector').type("ninetynine")
        cy.getElement('select-item-option').contains('ninetynine').click()

        cy.get('input[data-cy="phone_number"]').type('08657900900')

        cy.get('input[data-cy="whatsapp_number"]').type('08657900100')

        cy.get('[data-cy=lead_source_id] > .ant-select-selector').click({ multiple: true })
        cy.getElement('select-item-option').contains('Rumah 123').click({force:true})

        cy.get('input[data-cy="password"]').type('qwerty')
        cy.get('input[data-cy="confirm_password"]').type('qwerty')


        cy.get('[data-cy=lead_owner_id] > .ant-select-selector').type('abdillah')
        cy.getElement('select-item-option').contains('Abdillah').click({ force: true })

        cy.get('[data-cy=lead_status_id] > .ant-select-selector').click()
        cy.getElement('select-item-option').contains('New').click({ force: true })

        cy.get('button[data-cy="submit"]').click({ multiple: true })
        cy.getElement('success-message').should('be.visible')
        cy.compareNum();
        
    });
})
