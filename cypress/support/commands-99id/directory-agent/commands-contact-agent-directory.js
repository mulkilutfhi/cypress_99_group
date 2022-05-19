Cypress.Commands.add('doCLickDirectoryFooter', function () {
    cy.get('[href="https://www.99.co/id/directory/agent"]')
        .scrollIntoView()
        .invoke('removeAttr', 'target')
        .click({ force: true });

    cy.location((url_directory_agent) => {
        expect(url_directory_agent.pathname).to.include('/directory/agent');
    });
});

Cypress.Commands.add('doSearchAgent', function (name_agent) {
    cy.get('input[name="search"]')
        .type(name_agent, { force: true })
        .get('.search-bar-advanced__input > button[type="submit"]')
        .click({ force: true });
});

Cypress.Commands.add('doClickAgent', function () {
    cy.get('a[href="/id/istiq"]').first().click({ force: true });

    cy.location((url_agent_istiq) => {
        expect(url_agent_istiq.pathname).to.include('/istiq');
    });
});

Cypress.Commands.add('doInputNameAgentDirectory', (name) => {
    const input_name_vl = '#agent-callback-form > div:nth-child(5) > input';
    if (name !== undefined) {
        cy.get(input_name_vl).type(name, { force: true });
    } else {
        cy.get(input_name_vl).clear();
        cy.get(input_name_vl).type(name, { force: true });
    }
});

Cypress.Commands.add('doInputPhoneAgentDirectory', (phone) => {
    const input_phone_vl = '#agent-callback-form > div:nth-child(6) > input';
    if (phone !== undefined) {
        cy.get(input_phone_vl).type(phone, { force: true });
    } else {
        cy.get(input_phone_vl).clear();
        cy.get(input_phone_vl).type(phone, { force: true });
    }
});

Cypress.Commands.add('doClickCarikanSayaProperti', () => {
    cy.get('.property-secondary__agent__button').click({ force: true });
});

Cypress.Commands.add('doValidationSuccessCallback', function () {
    cy.get('.agent-form__success-message--greet').should('be.visible');
});
