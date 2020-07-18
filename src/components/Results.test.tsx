import React from "react";
import { render, screen } from "@testing-library/react";
import Results from "./Results";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { idleForIO } from "../testUtils";
import * as api from "../api/axiosApi";

describe("Results", () => {
  const history = createMemoryHistory();
  it("renders a no results image and message", async () => {
    jest.spyOn(api, 'getResults').mockResolvedValueOnce([]);
    const { container } = render(
      <Router history={history}>
        <Results />
      </Router>
    );
    await idleForIO();
    expect(container.querySelector("svg")?.textContent).toBe("NoResults.svg");
    expect(screen.getByText(/Try clearing some filters/))
  });

  it('fetches all results on load', async () => {
    jest.spyOn(api, 'getResults').mockResolvedValueOnce([
      { name: 'result 1'}, { name: 'result 2'}
    ]);
    const { container } = render(
        <Router history={history}>
          <Results />
        </Router>
    );
    await idleForIO();
    expect(container.querySelector("svg")?.textContent).toBeUndefined();
    expect(screen.getByText('result 1'));
    expect(screen.getByText('result 2'));
  });
});
