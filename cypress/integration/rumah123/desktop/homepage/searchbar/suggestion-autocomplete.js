const selectorHeading = '.ui-molecules-autocomplete-r123__text > p > span';
const selectorLabel = '.ui-molecules-autocomplete-r123__text > p';

describe('Suggestion Autocomplete', function () {
  beforeEach(() => {
    cy.viewport('macbook-15').visit('/');
    cy.clearLocalStorage();
  });

  it('C3066   Search by province', function () {
    cy.inputSearchbarHomepage('kalimantan');
    cy.getHeadingSuggestionHomepage({
      index: 0,
      value: 'kalimantan'
    });
    cy.getTruncateSuggestionHomepage({
      index: 0,
      value: 'Provinsi'
    });
    /*
			TODO:
			validation if search by province
			should appear 9 city in province
		*/
    for (let indexUpdate = 1; indexUpdate < 10; indexUpdate++) {
      cy.getHeadingSuggestionHomepage({
        index: indexUpdate,
        value: 'kalimantan'
      });
    }
  });

  it('C3067	Search by city', function () {
    cy.inputSearchbarHomepage('bekasi');
    cy.getHeadingSuggestionHomepage({
      index: 0,
      value: 'bekasi'
    });
    cy.getTruncateSuggestionHomepage({
      index: 0,
      value: 'Kota'
    });
    /*
			TODO:
			validation if search by city
			should appear 9 area in city
		*/
    for (let indexUpdate = 1; indexUpdate < 10; indexUpdate++) {
      cy.getHeadingSuggestionHomepage({
        index: indexUpdate,
        value: 'bekasi'
      });
    }
  });

  it('C3068	Search by area', function () {
    cy.inputSearchbarHomepage('ujung berung');
    cy.getHeadingSuggestionHomepage({
      index: 0,
      value: 'ujung berung'
    });
    cy.getTruncateSuggestionHomepage({
      index: 0,
      value: 'Area'
    });

    for (let indexUpdate = 1; indexUpdate < 10; indexUpdate++) {
      cy.getHeadingSuggestionHomepage({
        index: indexUpdate,
        value: 'ujung berung'
      });
    }
  });

  it('C3070	Search by primary developer', function () {
    const selectorSubLabel = '.ui-molecules-autocomplete-r123__text > span';
    cy.inputSearchbarHomepage('Ciputra Group');
    cy.getHeadingSuggestionHomepage({
      index: 0,
      value: 'ciputra group'
    });
    /*
			TODO:
			validation if search by developer
			should appear listing in developer
		*/
    for (let indexUpdate = 1; indexUpdate < 10; indexUpdate++) {
      cy.get('.ui-molecules-multiple-selection__item');
      cy.getHeadingSuggestionHomepage({
        index: indexUpdate,
        value: 'ciputra group'
      });
    }
  });

  it('C3071	Search by ID listing', function () {
    cy.inputSearchbarHomepage('hos8749298');
    cy.getHeadingSuggestionHomepage({
      index: 0,
      value: 'ping me so throughput but call in the air support'
    });
  });

  it('C3072	Checking pencarian terakhir', function () {
    const isSearchListing = ['Wanaraja', 'Garut', 'Ujung Berung', 'Jawa Barat', 'Bekasi'];
    /*
		Search 5 listing according isSearchListing
		*/
    for (let i = 0; i < isSearchListing.length; i++) {
      cy.get('.flex-wrap > li > input');
      if (i !== 0) {
        cy.get('.ui-atomic-badges__close').click();
      }

      cy.inputSearchbarHomepage(isSearchListing[i]);
      cy.get('.ui-molecules-multiple-selection__item').eq(0).click();
      cy.getElement('hp-search-button').click();
      cy.get('[title=rumah123]').should('be.visible');
      cy.go('back');
    }

    /*
		validation pencarian terakhir
		*/
    cy.get('.flex-wrap > li > input').click({ force: true });
    cy.get('.ui-atomic-badges__close').click();
    isSearchListing.reverse();
    for (let indexUpdate = 0; indexUpdate < isSearchListing.length; indexUpdate++) {
      cy.getTruncateSuggestionHomepage({
        index: indexUpdate,
        value: isSearchListing[indexUpdate]
      });
    }
  });
});
