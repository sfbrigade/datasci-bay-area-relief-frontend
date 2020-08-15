import React from "react";
import {render, screen} from "@testing-library/react";

import App from "./App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("renders a header with a menu", () => {
    expect(screen.getByRole("menu")).toBeVisible();
  });

  it("displays the home page by default", () => {
    expect(
      screen.getByRole("heading", {name: "Find Loans & Grants"})
    ).toBeVisible();
  });
});
