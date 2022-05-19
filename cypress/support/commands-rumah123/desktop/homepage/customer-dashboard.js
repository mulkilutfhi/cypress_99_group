Cypress.Commands.add('closeBannerPopup', () => {
    cy.get('.hidden-xs').then((banner) => {
        if (banner.is.apply) {
            cy.get('[role="document"] > button').click();
        }
    });
});

Cypress.Commands.add('buttonAccountText', () => {
    cy.get('#accountPopupTrigger > a');
});
