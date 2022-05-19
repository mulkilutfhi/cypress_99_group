Cypress.Commands.add("clickAddGroup",() => 
    {
        cy.get('[data-cy="btn-add"]').contains('Add Group').click();
        cy.url().should('include','/group/create') 
	});

Cypress.Commands.add('inputGroupForm', (groupname, projectname) => 
    {
        cy.get('input[name="GroupForm[name]"]').type(groupname);
        if (groupname === 'skip') {
            cy.get('[name="GroupForm[name]"]').clear();
        }

        cy.get('input[placeholder="Select Project"]').type(projectname);
        if (projectname === 'skip') {
            cy.get('[placeholder="Select Project"]').clear();
        }
    });

Cypress.Commands.add("openEditGroup",() => 
    {
        cy.get('.btn-primary').contains('Add Group').click();
        cy.url().should('include','/group/create') 
	});

Cypress.Commands.add('gotoViewGroupDetail', function () {
        cy.visit('agents/group/view?id=1171')
    });

    Cypress.Commands.add('gotoEditGroup', function () {
        cy.visit('/agents/group/update?id=1171')
    });