describe('Msite Navbar Properti Baru', function () {

	beforeEach(function () {
    cy.viewport('iphone-x').visit('/');
  });

  it('Display Properti Baru page', function () {
		cy.openBurgerMenu();
		cy.get('.ui-molecules-drawer__content-list > div').eq(2).click();
		cy.url().should('include', '/perumahan-baru/');
  });
});
