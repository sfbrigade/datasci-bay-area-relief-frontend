import React, { useState } from "react";
import {render} from "@testing-library/react";
import Header from "./Header";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import {act} from "react-dom/test-utils";
import { Result, CurrentFilters } from "../types";
import {setValues} from "../context/globalStates";

describe("Header", () => {
  const history = createMemoryHistory();

  const HeaderWrapper = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [currentFilters, setCurrentFilters] = useState<CurrentFilters>({});
    const filteredResults = [] as Result[];

    setValues({
      setIsFilterOpen,
      isFilterOpen,
      setCurrentFilters,
      currentFilters
    });

    return (
      <Router history={history}>
        <Header />
      </Router>
    );
  };

  it("renders a logo", () => {
    const {getByRole} = render(< HeaderWrapper />);
    expect(getByRole("logo")).toBeVisible();
  });

  it("renders a menu with 3 links", () => {
    const {getByRole} = render(< HeaderWrapper />);
    expect(getByRole("link", { name: "Home" })).toBeVisible();
    expect(getByRole("link", { name: "Bay Area Relief Portal" })).toBeVisible();
    expect(getByRole("link", { name: "About" })).toBeVisible();
  });

  it("navigates to the home page", () => {
    const {getByRole} = render(< HeaderWrapper />);
    act(() => {
      getByRole("link", { name: "Home" }).click();
    });

    expect(history.location.pathname).toBe("/");
  });

  it("navigates to the portal", () => {
    const {getByRole} = render(< HeaderWrapper />);
    act(() => {
      getByRole("link", { name: "Bay Area Relief Portal"}).click();
    });

    expect(history.location.pathname).toBe("/results");
  });

  it("navigates to the about page", () => {
    const {getByRole} = render(< HeaderWrapper />);
    act(() => {
      getByRole("link", { name: "About"}).click();
    });

    expect(history.location.hash).toBe("#about");
  });
});
