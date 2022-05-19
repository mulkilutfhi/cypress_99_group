const PDPSubLink = '/perumahan-baru/properti/biak-numfor/the-ocean-park/nps1555/';

describe('Sub Unit in Project Detail Page', function () {
  beforeEach(function () {
    cy.viewport('macbook-15').visit(PDPSubLink);
  });

  it('C33920 Unit Image Carousel', function () {
    cy.getElement('pdp-unit-card').eq(0).click();
    cy.getElement('pdp-unit-apartemencantik-img').then((imgUnit) => {
      for (let i = 0; i < imgUnit.length; i++) {
        cy.get(imgUnit[i]).should('be.visible').getElement('pdp-unit-next-arrow').eq(0).click();
      }
    });
  });

  it('C33921 Unit Specification ', function () {
    cy.getElement('pdp-unit-card').eq(0).click();
    // cy.reload();
    // cy.getCardUnit();
    // cy.getUnitDetail();
    // cy.getPopupUnitDetail();

    const title = '.ui-organism-project-unit-r123__dialog-title';
    const price = '.ui-organism-project-unit-r123__dialog-price';
    const LandAndBuild = '.ui-organism-project-unit-r123__dialog-land-size';
    const spesifikasi = '.ui-organism-project-unit-r123__dialog-spesification-description';
    let InfoUnit = [title, price, LandAndBuild, spesifikasi];
    for (let i = 0; i < InfoUnit.length; i++) {
      cy.get(InfoUnit[i]).should('be.visible');
    }
  });
  it('C70804	check all unit and subunit', function () {
    cy.get('.ui-organism-project-unit-r123 > div > div > div')
      .find('.ui-molecules-tab__pane')
      .then((tabUnitPdp) => {
        if (tabUnitPdp.length > 0) {
          for (let index = 0; index < tabUnitPdp.length; index++) {
            cy.get(tabUnitPdp[index]).click({ force: true });
            cy.get('.ui-organism-project-unit-r123__card').each((cardUnit) => {
              const totalCardUnit = cardUnit.length;
              cy.get(cardUnit)
                .click()
                .get(
                  '.ui-organism-project-unit-r123__dialog--first-image > .ui-atomic-dialog__content'
                )
                .should('be.visible');
              cy.get(
                '.ui-organism-project-unit-r123__dialog--first-image > .ui-atomic-dialog__content > i'
              ).click();
            });
          }
        }
      });
  });
});
