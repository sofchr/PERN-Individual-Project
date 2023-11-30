import React from "react";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";

describe("<Login />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  });

  it("should focus on username input", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    cy.wait(500);
    cy.focused().should("have.id", "username");
  });
});
