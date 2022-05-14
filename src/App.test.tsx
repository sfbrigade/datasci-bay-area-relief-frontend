import React from "react";
import {render, screen} from "@testing-library/react";

import App from "./App";
import { idleForIO } from "./testUtils";

describe("App", () => {
  beforeEach(async () => {
    render(<App />);
    await idleForIO();
  });

  it("renders a header with a menu", () => {
    // expect(screen.findByRole("menu")).toBeVisible();
    expect(screen.getByRole("menu")).toBeVisible();
  });

  it("displays the home page by default", () => {
    expect(
      screen.getByRole("heading", {name: "Find Loans & Grants"})
    ).toBeVisible();
  });
});
