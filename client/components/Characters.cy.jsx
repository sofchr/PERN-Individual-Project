import React from "react";
import Characters from "./Characters";
import { BrowserRouter } from "react-router-dom";

describe("<Characters />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <Characters />
      </BrowserRouter>
    );
  });
});
