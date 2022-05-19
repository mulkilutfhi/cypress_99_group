describe('Suggestion Autocomplete', () => {
  let data;

  beforeEach(() => {
    cy.restoreLocalStorage().viewport('macbook-15').visit('/jual/residensial/');
    cy.fixture('listing').then((listing) => {
      data = listing;
    });
  });

  it('C3105 Search by province', () => {
    cy.inputSearchbarHomepage('sumatera');
    cy.getHeadingSuggestionSRP({
      index: 0,
      value: 'sumatera'
    });
    cy.getTruncateSuggestionSRP({
      index: 0,
      value: 'Provinsi'
    });

    for (let indexUpdate = 1; indexUpdate < 10; indexUpdate++) {
      cy.getHeadingSuggestionSRP({
        index: indexUpdate,
        value: 'sumatera'
      });
    }
  });
  it('C3106 Search by city', () => {
    cy.inputSearchbarSRP('garut');
    cy.getHeadingSuggestionSRP({
      index: 0,
      value: 'garut'
    });
    cy.getTruncateSuggestionSRP({
      index: 0,
      value: 'Kota'
    });
    for (let indexUpdate = 1; indexUpdate < 10; indexUpdate++) {
      cy.getHeadingSuggestionSRP({
        index: indexUpdate,
        value: 'garut'
      });
    }
  });
  it('C3107 Search by area', () => {
    cy.inputSearchbarSRP('antapani');
    cy.getHeadingSuggestionSRP({
      index: 0,
      value: 'antapani'
    });
    cy.getTruncateSuggestionSRP({
      index: 0,
      value: 'Area'
    });
    for (let indexUpdate = 1; indexUpdate < 10; indexUpdate++) {
      cy.getHeadingSuggestionSRP({
        index: indexUpdate,
        value: 'antapani'
      });
    }
  });

  it('C3108 Search by primary developer', () => {
    cy.inputSearchbarSRP('Ciputra Group');
    cy.getHeadingSuggestionSRP({
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
      cy.getHeadingSuggestionSRP({
        index: indexUpdate,
        value: 'ciputra group'
      });
    }
  });

  it('C3109 Search by ID listing', () => {
    cy.inputSearchbarSRP('hos8749298');
    cy.getHeadingSuggestionSRP({
      index: 0,
      value: 'ping me so throughput but call in the air support'
    });
  });

  it('C3110 Checking pencarian terakhir', () => {
    const isSearchListing = ['wanaraja', 'bandung', 'antapani', 'jawa', 'bekasi'];
    /*
		Search 5 listing according isSearchListing
		*/
    for (let i = 0; i < isSearchListing.length; i++) {
      cy.get('.flex-wrap > li > input');
      if (i !== 0) {
        cy.get('.ui-atomic-badges__close').click();
      }

      cy.inputSearchbarSRP(isSearchListing[i]);
      cy.get('.ui-molecules-multiple-selection__item').eq(0).click();
      cy.get('.ui-organism-search-srp-r123 > .ui-atomic-button').click();
      cy.intercept({
        method: 'POST',
        url: '/api/property/find-by-filter-simple'
      }).as('waitResponse');
      cy.wait('@waitResponse').its('response.statusCode').should('eq', 200);
      cy.url().should('include', isSearchListing[i]);
    }

    /*
		validation pencarian terakhir
		*/
    cy.get('.flex-wrap > li > input').click({ force: true });
    cy.get('.ui-atomic-badges__close').click();
    isSearchListing.reverse();
    for (let indexUpdate = 0; indexUpdate < isSearchListing.length; indexUpdate++) {
      cy.getHeadingSuggestionSRP({
        index: indexUpdate,
        value: isSearchListing[indexUpdate]
      });
    }
  });
});
