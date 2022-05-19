Cypress.Commands.add('Login', (username, password) => {
    cy.get('.navbar-button.register').click();

    cy.get('#mainloginform-username')
        .type(username)
        .get('#mainloginform-password')
        .type(password)
        .get('#login-page-regular-login-button')
        .click();
});

Cypress.Commands.add('modify_verify_phone_api', () => {
    cy.intercept('POST', '/mobile/v3/web/verify-phone', (req) => {
        req.body.cypress_qa = 'true';
        req.continue();
    });
});

Cypress.Commands.add('verify_phone_enquire_api', () => {
    cy.intercept('POST', '/-/v2/legacy/verify-phone/enquire', (req) => {
        req.body.cypress_qa = 'true';
        req.continue();
    });
});

// hide Enable Auto Import as sometimes show
Cypress.Commands.add('hide_enable_auto_import', () => {
    cy.wait(2000);
    cy.get('#content > div')
        .find('div')
        .each((result) => {
            if (Cypress.$(result).find("img[alt='toggle']").length != 0) {
                cy.contains('Enable Auto Import').prev().click();
                return false;
            }
        });
});
