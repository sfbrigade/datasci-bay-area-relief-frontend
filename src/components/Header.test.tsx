import React from "react";
import {render} from "@testing-library/react";
import Header from "./Header";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import {act} from "react-dom/test-utils";

describe("Header", () => {
  const history = createMemoryHistory();

  it("renders a logo", () => {
    const {getByRole} = render(
      <Router history={history}>
        <Header />
      </Router>
    );

    expect(getByRole("logo")).toBeVisible();
  });

  it("renders a menu with 3 links", () => {
    const {getByText} = render(
      <Router history={history}>
        <Header />
      </Router>
    );

    expect(getByText("Home")).toBeVisible();
    expect(getByText("Bay Area Relief Portal")).toBeVisible();
    expect(getByText("About")).toBeVisible();
  });

  it("renders a menu with 3 links", () => {
    const {getByText} = render(
      <Router history={history}>
        <Header />
      </Router>
    );

    expect(getByText("Home")).toBeVisible();
    expect(getByText("Bay Area Relief Portal")).toBeVisible();
    expect(getByText("About")).toBeVisible();
  });

  it("navigates to the home page", () => {
    const {getByText} = render(
      <Router history={history}>
        <Header />
      </Router>
    );

    act(() => {
      getByText("Home").click();
    });

    expect(history.location.pathname).toBe("/");
  });

  it("navigates to the portal", () => {
    const {getByText} = render(
      <Router history={history}>
        <Header />
      </Router>
    );

    act(() => {
      getByText("Bay Area Relief Portal").click();
    });

    expect(history.location.pathname).toBe("/results");
  });

  it("navigates to the about page", () => {
    const {getByText} = render(
      <Router history={history}>
        <Header />
      </Router>
    );

    act(() => {
      getByText("About").click();
    });

    expect(history.location.hash).toBe("#about");
  });
});
