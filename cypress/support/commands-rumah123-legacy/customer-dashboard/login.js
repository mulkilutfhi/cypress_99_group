Cypress.Commands.add('LoginToCustomerDashboard', ()=>
{
    let data
    cy.fixture('rumah123-legacy/json-file/credential').then((creds)=>
    {
        data = creds;
    //cy.get('#accountPopupTrigger').click()
    cy.get('#username').type(data.username1)
    cy.get('#passwd').type(data.password1)
    cy.get('.button-login > .btn').eq(0).click()
    cy.url().should('include', 'customer/dashboard')
    cy.get('.hidden-xs').should('be.visible')
    cy.get('.jpw-popup-close').click()
    })
})
Cypress.Commands.add('OnboardingPageNext', ()=>
{
    for(let i = 1; i < 5; i++)
    {
        cy.get('.btn-end-tour', {timeout: 2000}).click();
    }
    cy.get('.btn-exit-tour').click()
})