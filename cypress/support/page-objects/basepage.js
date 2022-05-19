import _ from 'lodash';

export class PageClass {
  constructor() {
    this.configPath = this.generateConfigPath();
    Cypress.on("uncaught:exception", (err, runnable) => {
        return false
    });
  }

  checkListContents(selector, values) {
    cy.fixture(this.configPath)
      .then(fxConfig => cy.get(fxConfig[selector]))
      .each((element, index) => {
        expect(Cypress.$(element).text()).to.equal(values[index]);
      });
  }

  getCurrentBreadcrumb(selector) {
    return cy.get(selector).invoke('text');
  }

  getElement(selector) {
    return cy
      .fixture(this.configPath)
      .then(fxConfig => cy.get(fxConfig[selector]));
  }

  generateConfigPath() {
    try {
      //simplify config, fixture folder have reupdate in plugin
      return Cypress.env('ENV') + '.json';
    } catch (e) {
      throw new Error(e);
    }
  }

  visit(selector) {
    if (selector) {
      cy.fixture(this.configPath).then(fxConfig =>
        cy.visit(fxConfig[selector])
      );
    }
  }

  closePopupExpo(){
    cy.log('popup gtm expo blocked searching, need to be closed first');
    cy.wait(12000);
    cy.get('.fancybox-overlay a.fancybox-close').click();
    cy.wait(1000);
    cy.get('.fancybox-overlay a.fancybox-close').click();
    cy.wait(1000);
  }

  requestCapi(method, url, query = '', body = '') {
    return cy.fixture(this.configPath).then(fxConfig => {
      cy.request({
        method: method,
        url:
          query !== ''
            ? fxConfig['capi-base-url'] +
              _.replace(fxConfig[url], /{query}/g, query)
            : fxConfig['capi-base-url'] + fxConfig[url],
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept-Language': 'en-GB',
          'x-api-key': fxConfig['capi-x-api-key'],
        },
        body: body !== '' ? body : null,
        failOnStatusCode: false,
      });
    });
  }

  requestNewApi(method, url, query = '', body = '') {
    return cy.fixture(this.configPath).then(fxConfig => {
      cy.request({
        method: method,
        url:
          query != ''
            ? fxConfig['newapi-base-url'] +
              _.replace(fxConfig[url], /{query}/g, query)
            : fxConfig['newapi-base-url'] + fxConfig[url],
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': 'en-GB',
          'X-Client-Type': fxConfig['newapi-x-client-type'],
        },
        body: body !== '' ? body : null,
        failOnStatusCode: false,
      });
    });
  }

  requestNlapi(method, url, query = '', body = '') {
    return cy.fixture(this.configPath).then(fxConfig => {
      cy.request({
        method: method,
        url:
          query != ''
            ? fxConfig['nlapi-base-url'] +
              _.replace(fxConfig[url], /{query}/g, query)
            : fxConfig['nlapi-base-url'] + fxConfig[url],
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': 'en-GB',
        },
        body: body !== '' ? body : null,
        failOnStatusCode: false,
      });
    });
  }

  requestRaptor(method, selector) {
    return cy.fixture(this.configPath).then(fxConfig => {
      cy.request({
        method: method,
        url: fxConfig['raptor-url'],
        headers: {
          'Content-Type': 'application/json',
          market: fxConfig['raptor-market'],
        },
        body: {
          query: fxConfig[selector],
        },
        failOnStatusCode: false,
      });
    });
  }

  checkGA(gtm) {
    return cy.window().then(win => {
      let result = '';
      _.forOwn(gtm, function(value, key) {
        if (!_.isEmpty(value) && !_.isArray(value))
          result += key + ' = ' + value + ', ';
        else result += key + ', ';
      });
      result = result.slice(0, -2);
      if (_.some(win.dataLayer, gtm)) {
        expect(result).to.eq(result);
      } else {
        expect(result).to.eq('Not Found in dataLayer');
      }
      console.log(win.dataLayer);
    });
  }

  srpSorting(selector, value) {
    return cy.fixture(this.configPath).then(fxConfig => {
      cy.get(fxConfig[selector])
        .click()
        .find('ul > li')
        .contains(fxConfig[value])
        .trigger('click');
    });
  }

  srpFilter(selector, value) {
    return cy.fixture(this.configPath).then(fxConfig => {
      cy.get(fxConfig[selector])
        .click()
        .parent()
        .parent()
        .find('ul > li')
        .contains(fxConfig[value])
        .trigger('click');
    });
  }

  manualLoginID(url) {
    return cy.fixture(this.configPath).then(fxConfig => {
      cy.get(fxConfig['login-icon'])
        .parent()
        .click();
      cy.get(fxConfig['login-input-email']).type(fxConfig['login-email']);
      cy.get(fxConfig['login-input-password']).type(fxConfig['login-password']);
      cy.get(fxConfig['login-button']).click();
      cy.wait(3000);
      cy.visit(fxConfig[url]);
      cy.viewport('macbook-15');
    });
  }
  malaysiaLoginID() {
    return cy.fixture(this.pathConfig).then(fxConfig => {
      cy.get(fxConfig['login-icon'])
        .parent()
        .click();
      cy.get(fxConfig['login-link']).click();
      cy.get(fxConfig['login-input-email']).type(fxConfig['login-email']);
      cy.get(fxConfig['login-input-password']).type(fxConfig['login-password']);
      cy.get(fxConfig['login-button']).click();
      cy.wait(5000);
      // cy.visit(fxConfig[url])
      // cy.viewport("macbook-15")
    });
  }
  sendEnquiryPdp(selector) {
    return cy.fixture(this.configPath).then(fxConfig => {
      cy.get(fxConfig[selector + '-name']).type(fxConfig['data-name']);
      cy.get(fxConfig[selector + '-email']).type(fxConfig['data-email']);
      cy.get(fxConfig[selector + '-phone']).type(fxConfig['data-phone']);
      cy.get(fxConfig[selector + '-send']).click();
      cy.wait(3000);
    });
  }

  sendEnquiryNlsrp(selector) {
    return cy.fixture(this.configPath).then(fxConfig => {
      cy.get(fxConfig[selector + '-name']).type(fxConfig['data-name']);
      cy.get(fxConfig[selector + '-email']).type(fxConfig['data-email']);
      cy.get(fxConfig[selector + '-phone']).type(fxConfig['data-phone']);
      cy.get(fxConfig[selector + '-send']).click();
      cy.wait(3000);
    });
  }
}

export default new PageClass();
