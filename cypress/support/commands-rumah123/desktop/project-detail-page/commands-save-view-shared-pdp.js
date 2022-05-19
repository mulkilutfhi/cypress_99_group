Cypress.Commands.add("getSaveBtn_PDP", () => {
  cy.get(
    ".ui-organism-property-summary__action-panel > a.ui-molecules-hollow-link[title=Simpan]"
  );
});

Cypress.Commands.add("getSharedBtn_PDP", () => {
  cy.get(".ui-organism-property-summary__action-panel .share-link");
});

Cypress.Commands.add("getSharedDropdownItem_PDP", () => {
  cy.get(
    ".ui-organism-property-summary__action-panel > .inline-block > .ui-molecules-dropdown__wrapper > .ui-molecules-dropdown__content > .ui-molecules-dropdown__item"
  );
});

Cypress.Commands.add("getView_PDP", () => {
  cy.get(
    ".r123-o-property-summary__detail--action-panel .r123-o-property-summary__detail--action-link.preview-link"
  );
});
