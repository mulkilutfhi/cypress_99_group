Cypress.Commands.add('openDisewaSRP',()=> 
{
  cy.get('.rui-icon-navdeck').click()
  cy.get('.rui-icon-arrow-right-small').eq(1).click();
  cy.get('.ui-molecules-drawer__content-list > div').contains("Rumah").click()
  cy.url().should('include','/sewa')
})

Cypress.Commands.add('SearchLocation',(loc)=>
{
  cy.get('.ui-atomic-card > .flex-align-center').click()
  cy.get('.ui-molecules-dropdown__toggle__children > .flex-align-center').type(loc)
  cy.get('.ui-molecules-dropdown__content.relative.box-shadow-r123')
    .should('be.visible')
})

Cypress.Commands.add('CheckLocationSuggestion', ({ selector, index, value }) => {
  cy.get('.ui-molecules-multiple-selection__item')
    .eq(index)
    .find(selector)
    .should('contain', value);
})

Cypress.Commands.add('FilterDisewabyTipe',()=>
{
  cy.get('.ui-organism-mobile-search-filter__filter-column').click()
  cy.get(':nth-child(3) > .ui-organisms-mobile-dsearch-filter__filter-filed > .flex').click({force:true})
})

Cypress.Commands.add('FilterDisewabyMinimumPrice',()=>
{
  cy.get('.ui-organism-mobile-search-filter__filter-column').click()
  cy.get(':nth-child(4) > .ui-organisms-mobile-dsearch-filter__filter-filed > .flex').click({force:true})
})

Cypress.Commands.add('FilterDisewabyMaximumPrice',()=>
{
  cy.get('.ui-organism-mobile-search-filter__filter-column').click()
  cy.get(':nth-child(5) > .ui-organisms-mobile-dsearch-filter__filter-filed > .flex').click({force:true})
})

Cypress.Commands.add('FilterDisewabyKamarTidur',()=>
{
  cy.get('.ui-organism-mobile-search-filter__filter-column').click()
  cy.get(':nth-child(8) > .ui-organisms-mobile-dsearch-filter__filter-filed > .flex').click({force:true})
})

Cypress.Commands.add('FilterDisewabyKamarMandi',()=>
{
  cy.get('.ui-organism-mobile-search-filter__filter-column').click()
  cy.get(':nth-child(9) > .ui-organisms-mobile-dsearch-filter__filter-filed > .flex').click({force:true})
})

Cypress.Commands.add('SubmitFilterDisewa',()=>
{
  cy.get('.relative > .ui-atomic-button--theme-primary').click()
})
