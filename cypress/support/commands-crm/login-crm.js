Cypress.Commands.add("loginCRM",(email, password) => 
	{
	  cy.get('input[data-cy="email"]').type(email)
	  if (email === 'skip') {
		cy.get('[data-cy="email"]').clear();
	}
	  cy.get('input[data-cy="password"]').type(password);
	  if (password === 'skip') {
		cy.get('[data-cy="password"]').clear();
	}
	  cy.get('button[data-cy="submit"]').click();
	}
  );
