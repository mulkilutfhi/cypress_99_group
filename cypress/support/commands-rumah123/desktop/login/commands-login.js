Cypress.Commands.add(
  "doLoginR123",
  (username = "123.superqa@gmail.com", password = "rumahnya123") => {
    cy.get(".ui-organism-navbar-r123__login").click();
    cy.get('input[name="email"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.wait(2000)
    cy.get('button[type="submit"]').click();
  }
);
Cypress.Commands.add("assertLoginDialogR123", () => {
  cy.contains("Selamat Datang di Rumah123.com").should("exist");
  cy.get('input[name="email"]').should("exist");
  cy.get('input[name="password"]').should("exist");
  cy.get('button[type="submit"]').should("exist");
});
