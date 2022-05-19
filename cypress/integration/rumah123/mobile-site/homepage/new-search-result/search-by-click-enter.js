const { eq } = require("lodash");

describe('testing functionality new search result', function () {
    beforeEach(function () {
        cy.viewport('iphone-x').visit('/');
    });
    it('C52396  Search location level province', function () {
        cy.get('button[color="searchPlaceholder"]').click()
          .get('.ui-molecules-multiple-selection__toggle-content > ul > li > input').type('jawa')
          .intercept({
            method: 'GET',
            url:'/api/search-suggestion/get-by-text?language=id&query=jawa&subChannel=SUB_SALE'
        }).as('waitResponse')
          .wait('@waitResponse').its('response.statusCode').should('eq',200)
          .get('.ui-molecules-multiple-selection__toggle-content > ul > li > input').type('{enter}')
          .url().should('include','/jawa-barat/residensial')
        });
    it('C52397  Search location level city', function () {
        cy.get('button[color="searchPlaceholder"]').click()
          .get('.ui-molecules-multiple-selection__toggle-content > ul > li > input').type('bandung')
          .intercept({
            method: 'GET',
            url: '/api/search-suggestion/get-by-text?language=id&query=bandung&subChannel=SUB_SALE'
        }).as('waitResponse')
          .wait('@waitResponse').its('response.statusCode').should('eq',200)
          .get('.ui-molecules-multiple-selection__toggle-content > ul > li > input').type('{enter}')
          .url().should('include','/bandung/residensial')
        });
    it('C52398  Search location level area', function () {
        cy.get('button[color="searchPlaceholder"]').click()
          .get('.ui-molecules-multiple-selection__toggle-content > ul > li > input').type('dago')
          .intercept({
              method: 'GET',
              url: '/api/search-suggestion/get-by-text?language=id&query=dago&subChannel=SUB_SALE'
        }).as('waitResponse')
          .wait('@waitResponse').its('response.statusCode').should('eq',200)
          .get('.ui-molecules-multiple-selection__toggle-content > ul > li > input').type('{enter}')
          .url().should('include','/dago/residensial')
        });
    it('C52710 Search by keyword', function () {
        cy.get('button[color="searchPlaceholder"]').click()
          .get('.ui-molecules-multiple-selection__toggle-content > ul > li > input').type('rumah minimalis')
          .intercept({
              method: 'GET',
              url: '/api/search-suggestion/get-by-text?language=id&query=rumah+minimalis&subChannel=SUB_SALE'
          }).as('waitResponse')
            .wait('@waitResponse').its('response.statusCode').should('eq',200)
            .get('.ui-molecules-multiple-selection__toggle-content > ul > li > input').type('{enter}')
            .url().should('include','/residensial/?q=rumah%20minimalis')
        });
    })

