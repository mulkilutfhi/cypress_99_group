describe('check all functionality in mininavbar', function () {
  const aboutUs = '[title="Tentang Rumah123"]';
  const news = '[title="Berita"]';
  const panduan = '[title="Panduan"]';
  const QR = '.ui-organism-apps-download-r123__qr';
  const IOS = '.ui-organism-apps-download-r123__devices > a:nth-child(1)';
  const android = '.ui-organism-apps-download-r123__devices > a:nth-child(2)';
  const feedback = '[title="Beri Saran"]';

  beforeEach(function () {
    cy.viewport('macbook-15').visit('/');
  });

  it('C68682	check button doanload aplication should be appear on mini navbar', function () {
    cy.get('.ui-organism-navbar-r123__mini-download')
      .find('p')
      .should('be.visible')
      .and('have.text', 'Download Aplikasi Rumah123');
  });
  it('C68683	check button tentang rumah123 should be appear on mini navbar ', function () {
    cy.getMiniNavbar({ page: aboutUs }).should('be.visible').and('have.text', 'Tentang Rumah123');
  });
  it('C68684	check button panduan should be appear on mini navabar ', function () {
    cy.getMiniNavbar({ page: news }).should('be.visible').and('have.text', 'Berita');
  });
  it('C68685	check button feedback should be appear on mini navabr ', function () {
    cy.getMiniNavbar({ page: panduan }).should('be.visible').and('have.text', 'Panduan');
  });
  it('C68686	check mini navbar should have color code #254993 ', function () {
    cy.get('.ui-organism-navbar-r123__mini')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(37, 73, 147)');
  });
  it('C68687	hover button download aplication button, it should be shown barcode ', function () {
    cy.getDownloadApk({ elementDownload: QR }).should('be.visible');
  });
  it('C68693	scan qr code using IOS device, it should be redirect to apple store ', function () {
    cy.getDownloadApk({ elementDownload: IOS })
      .should('be.visible')
      .should('have.attr', 'href')
      .and('include', 'https://apps.apple.com/id/app');
  });
  it('C68694	scan qr code using android device, it should be redirect to googleplay ', function () {
    cy.getDownloadApk({ elementDownload: android })
      .should('be.visible')
      .should('have.attr', 'href')
      .and('include', 'https://play.google.com/store/apps');
  });
  it('C68688	click button tentang rumah123, it should be redirect to https://www.rumah123.com/tentang-kami/ ', function () {
    cy.getMiniNavbar({ page: aboutUs }).click();
    cy.url().should('include', 'tentang-kami');
  });
  it('C68689	click button panduan, it should be redirect to /panduan ', function () {
    cy.getMiniNavbar({ page: panduan }).click();
    cy.url().should('include', '/panduan-properti-id.html');
  });
  it('C68690	click button feedback, it should be redirect to feedback form ', function () {
    cy.getMiniNavbar({ page: feedback }).click();
    cy.get('.r123-m-survey-dialog > div').should('be.visible');
  });
  it('C68712	input survey monkey, and ensure the data have to sumbmit', function () {
    cy.getMiniNavbar({ page: feedback }).click();
    cy.get('.smcx-widget > .smcx-iframe-container').then(($iframe) => {
      var element = $iframe.contents().find('#736335116');
      cy.wrap(element).click();
    });
  });
});
