import React, {useState} from "react";
import {render, screen} from "@testing-library/react";
import Header from "./Header";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import {act} from "react-dom/test-utils";
import {CurrentFilters} from "../types";
import {setValues} from "../context/globalStates";

describe("Header", () => {
  const history = createMemoryHistory();

  const HeaderWrapper = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [currentFilters, setCurrentFilters] = useState<CurrentFilters>({});

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

  beforeEach(() => {
    render(<HeaderWrapper />);
  });

  it("renders a logo", () => {        
    expect(screen.getByRole("logo")).toBeVisible();
  });

  it("renders a menu with 3 links", () => {
    expect(screen.getByRole("link", {name: "Home"})).toBeVisible();
    expect(screen.getByRole("link", {name: "Search"})).toBeVisible();
    expect(screen.getByRole("link", {name: "About"})).toBeVisible();
    expect(screen.getByRole("link", {name: "Donate"})).toBeVisible();
  });

  it("navigates to the home page", () => {
    act(() => {
      screen.getByRole("link", {name: "Home"}).click();
    });

    expect(history.location.pathname).toBe("/");
  });

  it("navigates to the portal", () => {
    act(() => {
      screen.getByRole("link", {name: "Search"}).click();
    });

    expect(history.location.pathname).toBe("/results");
  });

  it("navigates to the about page", () => {
    act(() => {
      screen.getByRole("link", {name: "About"}).click();
    });

    expect(history.location.hash).toBe("#about");
  });

  it("navigates to the donate page", () => {
    act(() => {
      screen.getByRole("link", {name: "Donate"}).click();
    });
    expect(history.location.pathname).toBe("/donate");
  });
});
