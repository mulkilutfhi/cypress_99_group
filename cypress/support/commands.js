// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.overwrite('visit', async (orig, url, options) => {
  if (!['prod'].includes(Cypress.env('ENV'))) {
    const auth = {
      username: '',
      password: ''
    };

    switch (Cypress.env('MARKET')) {
      case 'rumah123':
        auth.username = 'core';
        auth.password = 'core99iddev';
        break;
      case 'rumah123Legacy':
        auth.username = 'r123';
        auth.password = 'rumah123';
        break;
      case '99id':
        auth.username = 'urbanindo';
        auth.password = 'jMD0aYPcgO8WNAsyxjpQ';
        break;
      case '99sg':
        auth.username = '99';
        auth.password = 'theredpill';
        break;
    }

    if (options) {
      options.auth = auth;
    } else {
      options = {
        auth,
        failOnStatusCode: false
      };
    }
    return await orig(url, options);
  } else {
    return await orig(url);
  }
});

Cypress.Commands.add('getElement', (alias) => {
  return cy
    .fixture(Cypress.env('MARKET') + '/page-object.json')
    .then((pageObject) => cy.get(pageObject[alias]));
});

Cypress.Commands.add('visitPage', (alias) => {
  return cy
    .fixture(Cypress.env('MARKET') + '/page-object.json')
    .then((pageObject) => cy.visit(pageObject[alias]));
});


Cypress.Commands.add('getJwtToken', ()=>
{
	cy.request({
		method: 'POST',
		url: 'https://rumah123portal.develop.99iddev.net/consumersiteauth/login/oauth/token',
		headers: {
			'x-client-Type' : 'jgUhR2MKeu9/ybViMQbYXTfOayzE0CsYYCSvNLHZjTkWfknMMzExcoqLP1G59zgmDhBK0rw3+hpG4ezBs9Cmwyz671eiKKqIFMP/GYFsx8uowAhIX1WxjfCQ0hvKqsP/knvdEXcx60p2wkyvXI9XreLXOW8guKMBcRbX9/XxCIlY/p1X9hsiBN/6lr5gjnNNVoJOaCPL8k9K23WdzKQxjw==|z04Sq6vw0Q5VpSeMx+aM2greF85kcMN+RTMmRATRsT4=',
			'Authorization' : 'Basic cmVnLXdlYjpyZWctd2ViLXIxMjM=',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		form: true, 
		body: {
			username: '123.superqa@gmail.com',
			password: 'rumahnya123',
			grant_type: 'password'
		},
		failOnStatusCode: false
	}).should((response) => {
		const jwt = response.body.token;
    	cy.wrap(jwt).as('jwtToken');
	})
})

Cypress.Commands.add('requestRaptor', (jwt, bodyQuery)=>
{
	return cy.request({
			method: 'POST',
			url: '/query',
			headers: {
				'x-market' : Cypress.env('MARKET'),
                'x-client' : Cypress.env('xClientType'),
                'Authorization' : jwt,
                'Content-Type': Cypress.env('contentType'),
                'accept-language' : 'id-ID'
			},
			body: {
				query: bodyQuery,
			},
			failOnStatusCode: false,
		});
})

// the next comment line loads the custom commands from the plugin
// so that our editor understands "cy.frameLoaded" and "cy.iframe"
/// <reference types="cypress-iframe" />
import 'cypress-iframe';
import 'cypress-file-upload';

import { validateSchema } from "./validate-schema-command";
Cypress.Commands.add("validateSchema", validateSchema);

import { postLogin } from "./api-login-command";
Cypress.Commands.add("postLogin", postLogin);
