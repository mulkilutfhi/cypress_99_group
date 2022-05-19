Cypress.Commands.add("clickAddProject",() => 
    {
      cy.get('.btn-group > .btn-primary').contains('Add Project').click();
      cy.url().should('include','projects/create') 
	  });

Cypress.Commands.add("gotoEditProject",() => 
      {
        cy.get('.glyphicon-pencil')
        .eq(0)
        .click();
        cy.url().should('include','projects/update?id=') 
        });