import React from "react";
import {render, screen} from "@testing-library/react";

import App from "./App";
import axios from "axios";
import { apiResponse, idleForIO } from "./testUtils";
jest.mock("axios");

describe("App", () => {
  beforeEach(async () => {
    (axios.get as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve(apiResponse)
    );
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
