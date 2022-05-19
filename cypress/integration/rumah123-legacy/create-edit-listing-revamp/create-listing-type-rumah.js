describe('Create Listing Revamp Flow for Listing type Rumah', function() {

	beforeEach(function() {
		cy.viewport('macbook-15')
		cy.visit('/login/')
  });

  it('C46455 Add new listing for type Rumah (Dijual and Tayangkan)', function() {
		cy.LoginToCustomerDashboard()
		cy.OnboardingPageNext()
		cy.get('#accountPopupTrigger').click()
		cy.get('.content > .profile-menu > :nth-child(2)').click()
  });
});