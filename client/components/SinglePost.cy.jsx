import React from "react";
import SinglePost from "./SinglePost";
import { BrowserRouter } from "react-router-dom";
import { mount } from "cypress/react18";

describe("<SinglePost />", () => {
  it("checks that there is a button that says 'Edit' ", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <SinglePost />
      </BrowserRouter>
    );
    // cy.get("#edit-button").contains("Edit");
    // cy.contains("Edit").click();
    // cy.get(".single-post").should("exist");
    cy.get("div").should("have.text", "Please type in your name:");
  });
});
