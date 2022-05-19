Cypress.Commands.add("doClickContactAgentOnSRP", () => {
  const cardBasic = cy.get(".ui-atomic-card.box-shadow-r123.ui-organisms-card-r123-basic")

  /**
   * Simulate Click
   */
  cardBasic
    .get("section:nth-child(3)")
    .get(".ui-organisms-card-r123-basic__contact-row > button")
    .click();
});

Cypress.Commands.add("doClickPropertyListing", () => {
  const cardBasic = cy.get(".ui-organisms-card-r123-basic__price-section");

  cardBasic.click();
});
