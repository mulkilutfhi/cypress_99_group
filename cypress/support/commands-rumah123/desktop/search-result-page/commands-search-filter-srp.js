Cypress.Commands.add('getTitle_FilterListing', () => {
    cy.get('h1');
});

Cypress.Commands.add('getComboBox_FilterListing', () => {
    cy.get('.ui-organism-search-filter__combobox-filter');
});

Cypress.Commands.add('getComboBoxText_FilterListing', () => {
    cy.get(
        '.ui-organism-search-filter .ui-organism-search-filter__filter-content .ui-organism-search-filter__combobox-filter .ui-molecules-dropdown__toggle > span'
    );
});

Cypress.Commands.add('getComboBoxDropdown_FilterListing', () => {
    cy.get('.ui-molecules-dropdown__wrapper .ui-molecules-dropdown__item > p');
});

Cypress.Commands.add('getButton_FilterListing', () => {
    cy.get('.ui-organism-search-filter-r123__left-section > [role="button"]');
});

Cypress.Commands.add('getRangeFilterText_FilterListing', () => {
    cy.get(
        '.ui-organism-search-filter .ui-organism-search-filter__filter-content .ui-organism-search-filter__range-filter .ui-molecules-dropdown__toggle > span'
    );
});

Cypress.Commands.add('getButtonSort_FilterListing', () => {
    cy.get('.ui-organism-search-filter-r123__sorting-section');
});

Cypress.Commands.add('getToggleFilterText_FilterListing', () => {
    cy.get(
        '.ui-organism-search-filter .ui-organism-search-filter__filter-content .ui-organism-search-filter__filter-toggle > span'
    );
});

Cypress.Commands.add('getToggleFilterComboBox_FilterListing', () => {
    cy.get(
        '.ui-organism-search-filter .ui-organism-search-filter__combobox-filter'
    );
});

Cypress.Commands.add('getToggleFilterComboBox_FilterListing', () => {
    cy.get(
        '.ui-organism-search-filter .ui-organism-search-filter__combobox-filter .ui-molecules-dropdown__toggle > span'
    );
});

Cypress.Commands.add('getToggleFilterCheckbox_FilterListing', () => {
    cy.get(
        '.ui-organism-search-filter .ui-organism-search-filter__checkbox-filter'
    );
});

Cypress.Commands.add('getToggleFilterRangeFilter_FilterListing', () => {
    cy.get(
        '.ui-organism-search-filter .ui-organism-search-filter__range-filter'
    );
});

Cypress.Commands.add('getToggleFilterRangeFilterText_FilterListing', () => {
    cy.get(
        '.ui-organism-search-filter .ui-organism-search-filter__range-filter .ui-molecules-dropdown__toggle > span'
    );
});

Cypress.Commands.add('getCard_FilterListing', () => {
    cy.get('.ui-search-page__content .ui-atomic-card');
});
