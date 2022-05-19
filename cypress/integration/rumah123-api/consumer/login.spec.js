/// <reference types="Cypress" />

import { postLoginSchema, postLoginFailedSchema } from "../../../schemas/post-login-schema";

describe("Check API Login", () => {

  it("Check Login Sukses", () => {
    cy.postLogin("123.superqa@gmail.com","rumahnya123").then((response) => {
      cy.validateSchema(postLoginSchema, response.body);
    });
  });

  it("Check Login Failed", () => {
    cy.postLogin("123.superqa@gmail.com","rumahnya123test").then((response) => {
      cy.validateSchema(postLoginFailedSchema, response.body);
    });
  });

});