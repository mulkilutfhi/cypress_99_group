describe('testing all functionality navbar dijual', function () {
  const tipeProperti = ['Rumah', 'Apartemen', 'Ruko', 'Tanah'];
  const mainNavbar = {
    dijual: '[title="Dijual"]',
    disewa: '[title="Disewa"]'
  };
  beforeEach(function () {
    cy.viewport('macbook-15').visit('/');
  });
  it('C69021	in submenu dijual should be appear section type properti', function () {
    cy.getNavbar({ el: mainNavbar.dijual }).realHover();
    cy.get('.ui-organism-navbar-r123__main').find('.navbar-dropdown-drawer').invoke('show');
    for (let i = 0; i < tipeProperti.length; i++) {
      cy.get('.ui-organism-navbar-r123__dropdown')
        .find('.ui-organism-navbar-r123__item')
        .contains(tipeProperti[i])
        .should('be.visible')
        .and('have.attr', 'href')
        .and('include', tipeProperti[i]);
    }
  });
});
