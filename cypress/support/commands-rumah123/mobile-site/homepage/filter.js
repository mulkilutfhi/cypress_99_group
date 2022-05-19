Cypress.Commands.add('openFilterSRP',()=> 
{
  cy.get('.rui-icon-navdeck').click()
  const NavMenu = 
  [
    'Dijual',
    'Disewa',
    'Properti Baru',
    'KPR',
    'Panduan',
    'Berita'
  ]
  for(let i = 0; i < NavMenu.length ; i++){
    cy.get('.ui-molecules-drawer__content-list > div').contains(NavMenu[i])
      .should('have.text', NavMenu[i])
  }
  cy.get('.rui-icon-arrow-right-small').eq(0).click();
  cy.get('.ui-molecules-drawer__content-list > div').contains("Rumah").click()
})

Cypress.Commands.add('ResetFilterResults',()=>
{
  cy.get('.ui-organism-mobile-search-filter__filter-column').click()
  cy.get('.ui-molecules-action-bar').find('.ui-atomic-button--children').eq(0).click()
})

Cypress.Commands.add('FilterbyKategori',()=>
{
  cy.get('.ui-organism-mobile-search-filter__filter-column').click()
  cy.get(':nth-child(3) > .ui-organisms-mobile-dsearch-filter__filter-filed > .flex').click({force:true})
})

Cypress.Commands.add('FilterbyKondisi',()=>
{
  cy.get('.ui-organism-mobile-search-filter__filter-column').click()
  cy.get(':nth-child(4) > .ui-organisms-mobile-dsearch-filter__filter-filed > .flex').click({force:true})
})

Cypress.Commands.add('FilterbyTipe',()=>
{
  cy.get('.ui-organism-mobile-search-filter__filter-column').click()
  cy.get(':nth-child(5) > .ui-organisms-mobile-dsearch-filter__filter-filed > .flex').click({force:true})
})

Cypress.Commands.add('FilterbyMinimumPrice',()=>
{
  cy.get('.ui-organism-mobile-search-filter__filter-column').click()
  cy.get(':nth-child(6) > .ui-organisms-mobile-dsearch-filter__filter-filed > .flex').click({force:true})
})

Cypress.Commands.add('FilterbyMaximumPrice',()=>
{
  cy.get('.ui-organism-mobile-search-filter__filter-column').click()
  cy.get(':nth-child(7) > .ui-organisms-mobile-dsearch-filter__filter-filed > .flex').click({force:true})
})

Cypress.Commands.add('FilterbyKamarTidur',()=>
{
  cy.get('.ui-organism-mobile-search-filter__filter-column').click()
  cy.get(':nth-child(10) > .ui-organisms-mobile-dsearch-filter__filter-filed > .flex').click({force:true})
})

Cypress.Commands.add('FilterbyKamarMandi',()=>
{
  cy.get('.ui-organism-mobile-search-filter__filter-column').click()
  cy.get(':nth-child(11) > .ui-organisms-mobile-dsearch-filter__filter-filed > .flex').click({force:true})
})

Cypress.Commands.add('SubmitFilter',()=>
{
  cy.get('.ui-molecules-action-bar').find('.ui-atomic-button--children').eq(1).click()
})