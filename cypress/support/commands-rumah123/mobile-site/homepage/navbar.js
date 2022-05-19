Cypress.Commands.add('openBurgerMenu',()=> 
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
})