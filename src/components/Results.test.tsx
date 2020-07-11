import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Results from "./Results";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("Results", () => {
  const history = createMemoryHistory();
  // let container: HTMLElement;
  // beforeEach(() => {
  //   { container } = render(
  //     <Router history={history}>
  //       <Results />
  //     </Router>
  //   );
  // });
  it("renders a no results image", () => {
    const { container } = render(
      <Router history={history}>
        <Results />
      </Router>
    );
    expect(container.querySelector("svg")?.textContent).toBe("NoResults.svg");
  });
});
