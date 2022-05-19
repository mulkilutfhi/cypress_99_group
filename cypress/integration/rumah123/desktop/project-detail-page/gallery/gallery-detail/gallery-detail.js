describe('Gallery Detail PDP (Gallery Detail)', () => {
  let actualtext;
  beforeEach(function () {
    cy.viewport('macbook-15').visit('/perumahan-baru/properti/biak-numfor/the-ocean-park/nps1566/');
    /*
      go to gallery detail
    */
    cy.getElement('pdp-banner-img').click({ force: true });
    cy.getElement('pdp-list-photos-area-gallery-section').eq(0).click();
  });
  it('C70621	check menu carousel in navbar should be exist', function () {
    cy.getElement('pdp-gallery-detail-list-menu-carousel').should('be.visible');
  });
  it('C70623	check prev arrow should be exist', function () {
    cy.getElement('pdp-gallery-detail-prev-arrow').should('be.visible');
  });
  it('C70624	check next arrow should be exist', function () {
    cy.getElement('pdp-gallery-detail-next-arrow').should('be.visible');
  });
  it('C70625	check pagination should be exist', function () {
    cy.getElement('pdp-gallery-detail-pagination').should('be.visible');
  });
  it('C70626	click menu carousel area, should be appear image area', function () {
    cy.getElement('pdp-gallery-detail-list-menu-carousel')
      .find('div > span')
      .each((menuCarousel) => {
        const menuCarouselText = menuCarousel.text();
        const split_text = menuCarouselText.split(' ');
        const expected = 'Area';
        actualtext = split_text[0].trim();

        if (actualtext === expected) {
          cy.get(menuCarousel)
            .contains(expected)
            .click()
            .parents('.ui-molecules-gallery-badge-slider-r123__badge')
            .should('have.class', 'active');
          /*
          not already yet :
            1. validation that image appear should be image area
               validation base on type image
               still fixing in develop env created by padrin
          */
        } else {
          cy.log('not exist');
        }
      });
  });
  it('	C70633	click menu carousel denah, it should be appear image denah', function () {
    cy.getElement('pdp-gallery-detail-list-menu-carousel')
      .find('div > span')
      .each((menuCarousel) => {
        const menuCarouselText = menuCarousel.text();
        const split_text = menuCarouselText.split(' ');
        const expected = 'Denah';
        actualtext = split_text[0].trim();

        if (actualtext === expected) {
          cy.get(menuCarousel)
            .contains(expected)
            .click()
            .parents('.ui-molecules-gallery-badge-slider-r123__badge')
            .should('have.class', 'active');
          /*
          not already yet :
            1. validation that image appear should be image area
               validation base on type image
               still fixing in develop env created by padrin
          */
        } else {
          cy.log('not exist');
        }
      });
  });
  it('C70634	click menu carousel 360 video tour, it should be appear 360 video', function () {
    cy.getElement('pdp-gallery-detail-list-menu-carousel')
      .find('div > span')
      .each((menuCarousel) => {
        const menuCarouselText = menuCarousel.text();
        const split_text = menuCarouselText.split(' ');
        const expected = 'Video';
        actualtext = split_text[0].trim();

        if (actualtext === expected) {
          cy.get(menuCarousel)
            .contains(expected)
            .click()
            .parents('.ui-molecules-gallery-badge-slider-r123__badge')
            .should('have.class', 'active');
          /*
          not already yet :
            1. validation that image appear should be image area
               validation base on type image
               still fixing in develop env created by padrin
          */
        } else {
          cy.log('not exist');
        }
      });
  });
  it('C70627	click menu carousel review rumah, it should be appear video property', function () {
    cy.getElement('pdp-gallery-detail-list-menu-carousel')
      .find('div > span')
      .each((menuCarousel) => {
        const menuCarouselText = menuCarousel.text();
        const split_text = menuCarouselText.split(' ');
        const expected = 'Review';
        actualtext = split_text[0].trim();

        if (actualtext === expected) {
          cy.get(menuCarousel)
            .contains(expected)
            .click()
            .parents('.ui-molecules-gallery-badge-slider-r123__badge')
            .should('have.class', 'active');
          /*
          not already yet :
            1. validation that image appear should be image area
               validation base on type image
               still fixing in develop env created by padrin
          */
        } else {
          cy.log('not exist');
        }
      });
  });
  it('C70635	click menu carousel unit, it should be appea image unit', function () {
    cy.getElement('pdp-gallery-detail-list-menu-carousel')
      .find('div > span')
      .each((menuCarousel) => {
        const menuCarouselText = menuCarousel.text();
        const split_text = menuCarouselText.split(' ');
        const expected = 'Unit';
        actualtext = split_text[0].trim();

        if (actualtext === expected) {
          cy.get(menuCarousel)
            .contains(expected)
            .click({ multiple: true })
            .parents('.ui-molecules-gallery-badge-slider-r123__badge')
            .should('have.class', 'active');
          /*
          not already yet :
            1. validation that image appear should be image area
               validation base on type image
               still fixing in develop env created by padrin
          */
        } else {
          cy.log('not exist');
        }
      });
  });
  it('C70628	click next arrow, it should be move to the next image', function () {
    cy.getElement('pdp-gallery-detail-next-arrow').click();
    cy.getElement('pdp-gallery-detail-img-slider').should(
      'have.attr',
      'style',
      'transform: translateX(-100%);'
    );
  });
  it('C70629	click prev arrow, it should be move to prev image ', function () {
    /*
      because especially for prev image should counting according total image
      which is total image is dynamic
      so we have to put logic like below
    */
    cy.getElement('pdp-gallery-detail-prev-arrow').click();
    cy.getElement('pdp-gallery-detail-img-slider-item').then((el) => {
      const length = el.length;
      const transformValue = (length - 1) * 100;
      cy.getElement('pdp-gallery-detail-img-slider').should(
        'have.attr',
        'style',
        `transform: translateX(-${transformValue}%);`
      );
    });
  });
});
