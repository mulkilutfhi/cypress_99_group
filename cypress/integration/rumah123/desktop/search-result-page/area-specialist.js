describe('testing all element and functionality area spesialist', function () {
  beforeEach(function () {
    cy.viewport('macbook-15').visit('/jual/jakarta-selatan/kemang/rumah/');
  });

  it('C72205	Agent Specialist must be show on srp district kemang', function () {
    cy.getElement('srp-area-specialist').should('be.visible');
  });
  it('C72206	Agent Specialist must be show on srp district sentul city ', function () {
    cy.visit('/jual/bogor/sentul-city/rumah/');
    cy.getElement('srp-area-specialist').should('be.visible');
  });
  it('C72207	Check Image area specialist ', function () {
    const photoProfile = '.ui-organism-area-specialist-r123__agent__avatar';
    cy.containerAreaSpecialist({ isElement: photoProfile }).should('be.visible');
  });
  it('C72208	Check name area specialist', function () {
    const agentName = '.ui-organism-area-specialist-r123__agent__name';
    cy.containerAreaSpecialist({ isElement: agentName }).then((name) => {
      for (let indexName = 0; indexName < name.length; indexName++) {
        if (name.length > 0) {
          cy.wrap(name).eq(indexName).should('be.visible');
          cy.getElement('srp-area-specialist')
            .find('.ui-molecules-carousel__action--next')
            .click({ force: true });
        } else {
          expect(name[indexName]).to.be.visible;
        }
      }
    });
  });
  it('C72209	Click name area specialist', function () {
    const agentName = '.ui-organism-area-specialist-r123__agent__name';
    cy.containerAreaSpecialist({ isElement: agentName }).parent().eq(0).click({ force: true });
    cy.url().should('include', '/agen-properti/');
  });
  it('C72210	Check carousell image on area specialist ', function () {
    const photoProfile = '.ui-organism-area-specialist-r123__agent__avatar';
    cy.containerAreaSpecialist({ isElement: photoProfile }).then((avatarAgent) => {
      for (let indexImg = 0; indexImg < avatarAgent.length; indexImg++) {
        if (avatarAgent.length > 0) {
          cy.wrap(avatarAgent).eq(indexImg).should('be.visible');
          cy.getElement('srp-area-specialist')
            .find('.ui-molecules-carousel__action--next')
            .click({ force: true });
        } else {
          expect(avatarAgent[indexImg]).to.be.visible;
        }
      }
    });
  });
  it('C72211	Click carousell image on area specialist ', function () {});
  // it('C72212	Show total property on area', function () {
  //   const totalProperty = '.ui-organism-area-specialist-r123__agent__summary';
  //   cy.containerAreaSpecialist({ isElement: totalProperty }).should('be.visible');
  //   cy.containerAreaSpecialist({ isElement: totalProperty })
  //     .eq(0)
  //     .invoke('text')
  //     .then((text) => {
  //       var splitText = text.split(' ')[];
  //       cy.log(splitText);
  //     });
});
it('C72213	Click button kontak agen ', function () {});
