Cypress.Commands.add("Login", (username, password) => {

    cy.get('.navbar-button.register').click()

            cy
            .get('#mainloginform-username')
            .type(username)
            .get('#mainloginform-password')
            .type(password)
            .get('#login-page-regular-login-button').click()
        
 })
