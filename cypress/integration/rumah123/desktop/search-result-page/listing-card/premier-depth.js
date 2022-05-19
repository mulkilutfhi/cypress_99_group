describe('check all component in premier depth', function () {
  const imageCardPremier = 'picture > img';
  const imageCarousel = '.ui-molecules-carousel__item';
  const dotIconCarousel = '.ui-molecules-carousel__dots';
  const iconCamera = '.rui-icon-camera';
  const iconSave = '[title="Simpan"]';
  const badgeTypeProperty = '[title] > h2';
  const badgePremier =
    '.ui-organisms-card-r123-featured__middle-section__badge > div:nth-child(2) > div';
  const iconKPR = '#Mobilepro-apps';
  const price = '.ui-organisms-card-r123-featured__middle-section__price > strong';
  const installment = '.ui-organisms-card-r123-featured__middle-section__price > em';
  const title =
    '.ui-organisms-card-r123-featured__middle-section > .ui-organisms-card-r123-featured__middle-section__title';
  const address = '.ui-organisms-card-r123-featured__middle-section__address';
  const iconFacilities = '.ui-organisms-card-r123-featured__icon-bottom';
  const attributeInfo1 =
    '.ui-organisms-card-r123-featured__middle-section__attribute > div:nth-child(2)';
  const attributeInfo2 =
    '.ui-organisms-card-r123-featured__middle-section__attribute > div:nth-child(3)';
  const logoAgency = '.ui-organisms-card-r123-featured__middle-section__agency-logo';
  const imageAgent = '.ui-organisms-card-r123-basic__bottom-section__agent > img';
  const nameAgent = '.ui-organisms-card-r123-basic__bottom-section__agent > div > p:nth-child(1)';
  const inquiryPhone = '.ui-organisms-card-r123-basic__bottom-section__actions > a';
  const inquiryWhatsapp = '.ui-organisms-card-r123-basic__bottom-section__actions > div';

  beforeEach(function () {
    cy.viewport('macbook-15').visit('/jual/bandung/residensial/');
  });
  it('C54136	check image of listing should be exist', function () {
    cy.checkElementPremierCard({ elementCard: imageCardPremier });
  });
  it('C54137	check dot icon for carousel image', function () {
    cy.checkElementPremierCard({ elementCard: imageCarousel });
    cy.checkElementPremierCard({ elementCard: dotIconCarousel });
  });
  it('C54138	check photo icon should be exist', function () {
    cy.checkElementPremierCard({ elementCard: iconCamera });
  });
  it('C54139	check save button should be exist', function () {
    cy.checkElementPremierCard({ elementCard: iconSave });
  });
  it('C54141	check badge type property should be exist', function () {
    cy.checkElementPremierCard({ elementCard: badgeTypeProperty });
  });
  it('C54142	check badge premier should be exist', function () {
    cy.checkElementPremierCard({ elementCard: badgePremier });
  });
  it('C54143	check icon KPR simulation should be exist', function () {
    cy.checkElementPremierCard({ elementCard: iconKPR });
  });
  it('C54144	check price of listing should be exist', function () {
    /*
      because the price is dynamic, so for get key point of 'price'
      i validate price must have text 'Rp'
    */
    cy.checkElementPremierCard({ elementCard: price }).validatePrice({
      elementCard: price,
      slice1: 0,
      slice2: 3
    });
  });
  it('C54145	check installment price per month should be exist', function () {
    /*
    bacause the installment is dynamic, so for get key point of 'installment'
    im validate installment must have text 'cicilan'
    */
    cy.checkElementPremierCard({ elementCard: installment }).validatePrice({
      elementCard: installment,
      slice1: 0,
      slice2: 7
    });
  });
  it('C54146	check title of listing should be exist', function () {
    cy.checkElementPremierCard({ elementCard: title });
  });
  it('C54147	check location of listing should be exist', function () {
    cy.checkElementPremierCard({ elementCard: address });
  });
  it('C54148	check facility of listing should be exist especially for (residential, house, apartement )', function () {
    // iconFacilities is KM, KT, Carport
    cy.checkElementPremierCard({ elementCard: iconFacilities });
  });
  it('C54149	check land size and building size should be exist, except (type property land)', function () {
    // attributeInfo1 is LT
    cy.checkElementPremierCard({ elementCard: attributeInfo1 });
    // attributeInfo2 is LB
    cy.checkElementPremierCard({ elementCard: attributeInfo2 });
  });
  it('C54150	check icon agency should be visible', function () {
    /*
      because the icon agency dinamic, the following is the logic like below
    */
    cy.get('.ui-search-page__content >  div').then((contentSRP) => {
      if (contentSRP.find('.ui-organisms-card-r123-featured--premier').length > 0) {
        cy.get('.ui-organisms-card-r123-featured--premier')
          .eq(0)
          .find('.ui-organisms-card-r123-featured__middle-section')
          .then(($primaryMiddleSection) => {
            if ($primaryMiddleSection.find('img').length > 0) {
              cy.get(logoAgency).should('be.visible');
            } else {
              cy.get(logoAgency).should('not.be.visible');
            }
          });
      } else {
        cy.get('.ui-molecule-paginate__item--next > [role="button"]').click({ force: true });
      }
    });
  });
  it('C54151	check photo and agent name should be exist', function () {
    cy.checkElementPremierCard({ elementCard: imageAgent });
    cy.checkElementPremierCard({ elementCard: nameAgent });
  });
  it('C54153	check inquiry button (call and whatsapp) should be exist', function () {
    cy.checkElementPremierCard({ elementCard: inquiryPhone });
    cy.checkElementPremierCard({ elementCard: inquiryWhatsapp });
  });
  it('C54157	as a buyer, i should be able to click icon KPR simulation', function () {
    cy.window().then((win) => {
      cy.stub(win, 'open', (url) => {
        win.location.href = 'https://www.rumah123.com/cari-kpr/';
      }).as('newWindows');
    });

    cy.get('.ui-search-page__content >  div').then((contentSRP) => {
      if (contentSRP.find('.ui-organisms-card-r123-featured--premier').length > 0) {
        cy.get('.ui-organisms-card-r123-featured--premier')
          .eq(0)
          .find(iconKPR)
          .click({ force: true });
        cy.get('@newWindows').should('be.calledOnce');
      }
    });
  });
});
