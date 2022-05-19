describe('testing navbar', function () {
  const mainNavbar = {
    logoR123: '.logo',
    dijual: '[title="Dijual"]',
    disewa: '[title="Disewa"]',
    proeprtibaru: '[title="Properti Baru"]',
    KPR: '[title="KPR"]',
    cariAgent: '[title="Cari Agen"]',
    iklankanProperti: '.ui-organism-navbar-r123__advertise-property',
    akun: '#accountPopupTrigger'
  };
  beforeEach(function () {
    cy.viewport('macbook-15').visit('/');
  });
  it('C68731	check wording Rumah123.com should appear on navbar', function () {
    cy.getNavbar({ el: mainNavbar.logoR123 }).should('be.visible');
  });
  it('C68732	check menu dijual should be appear on navbar', function () {
    cy.getNavbar({ el: mainNavbar.dijual }).should('be.visible');
  });
  it('C68733	check menu disewa should be appear on navbar ', function () {
    cy.getNavbar({ el: mainNavbar.disewa }).should('be.visible');
  });
  it('C68734	check menu property baru should be appear on navbar ', function () {
    cy.getNavbar({ el: mainNavbar.proeprtibaru }).should('be.visible');
  });
  it('C68735	check menu KPR should be appear on navbar ', function () {
    cy.getNavbar({ el: mainNavbar.KPR }).should('be.visible');
  });
  it('C68736	check menu cari agent should be appear on navbar ', function () {
    cy.getNavbar({ el: mainNavbar.cariAgent }).should('be.visible');
  });
  it('C68738	check menu button iklankan properti should be appear on navbar ', function () {
    cy.getNavbar({ el: mainNavbar.iklankanProperti }).should('be.visible');
  });
  it('C68739	check menu account should be appear on navbar ', function () {
    cy.getNavbar({ el: mainNavbar.akun }).should('be.visible');
  });
  it('C68740	wording rumah123.com in navbar should be clickable ', function () {
    cy.getNavbar({ el: mainNavbar.logoR123 }).should(
      'have.attr',
      'href',
      'https://www.rumah123.com:443'
    );
  });
  it('C68741	hover menu dijual in navbar, then should be shown submenu dijual ', function () {
    cy.getNavbar({ el: mainNavbar.dijual }).realHover();
    cy.get('.ui-organism-navbar-r123__main').find('.navbar-dropdown-drawer').invoke('show');
    cy.get('[title="Dijual"]')
      .parent()
      .find('.ui-organism-navbar-r123__mega-menu__item > span')
      .then(($megaMenu) => {
        const txtMegaMenu = $megaMenu.text();
        expect(txtMegaMenu).to.include('Dijual');
        expect(txtMegaMenu).not.include('Disewa');
      });
  });
  it('C68742	hover menu disewa in navbar, then should be shown submenu disewa ', function () {
    cy.getNavbar({ el: mainNavbar.disewa }).realHover();
    cy.get('.ui-organism-navbar-r123__main').find('.navbar-dropdown-drawer').invoke('show');
    cy.get('[title="Disewa"]')
      .parent()
      .find('.ui-organism-navbar-r123__mega-menu__item > span')
      .then(($megaMenu) => {
        const txtMegaMenu = $megaMenu.text();
        expect(txtMegaMenu).to.include('Sewa');
        expect(txtMegaMenu).not.include('Dijual');
      });
  });
  it('C68743	click menu properti baru in navbar, then it should be redirect to /properti-baru ', function () {
    cy.getNavbar({ el: mainNavbar.proeprtibaru }).click();
    cy.url().should('include', '/perumahan-baru');
  });
  it('C68744	click menu KPR, it should be redirect to /cari-kpr ', function () {
    cy.getNavbar({ el: mainNavbar.KPR }).click();
    cy.url().should('include', '/cari-kpr');
  });
  it('C68745	click menu cari agent, it should be redirect to /agent-properti ', function () {
    cy.getNavbar({ el: mainNavbar.cariAgent }).click();
    cy.url().should('include', '/cari-agen/');
  });
  it('C68747	click menu iklankan properti in navbar, it should be redirect to /agent-registrasi ', function () {
    cy.getNavbar({ el: mainNavbar.iklankanProperti }).click();
    cy.url().should('include', '/agen-registrasi');
  });
  it('C68748	click menu account, it should be appear popup login/register form ', function () {
    cy.getNavbar({ el: mainNavbar.akun }).click();
    cy.get('.ui-organisms-login-r123__forms').contains('Login').should('be.visible');
  });
});
