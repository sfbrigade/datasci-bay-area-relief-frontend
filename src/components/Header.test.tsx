import React, {useState} from "react";
import {render, screen} from "@testing-library/react";
import Header from "./Header";
import {BrowserRouter, useLocation} from "react-router-dom";
import {createMemoryHistory} from "history";
import {act} from "react-dom/test-utils";
import {CurrentFilters} from "../types";
import {setValues} from "../context/globalStates";

describe("Header", () => {
  const history = createMemoryHistory;
  const HeaderWrapper = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [currentFilters, setCurrentFilters] = useState<CurrentFilters>({});

    setValues({
      setIsFilterOpen,
      isFilterOpen,
      setCurrentFilters,
      currentFilters,
    });

    return (
      <BrowserRouter>
        <Header />
      </BrowserRouter>
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

    expect(location.pathname).toBe("/");
  });

  it("navigates to the portal", () => {
    act(() => {
      screen.getByRole("link", {name: "Search"}).click();
    });

    expect(location.pathname).toBe("/results");
  });

  it("navigates to the about page", () => {
    act(() => {
      screen.getByRole("link", {name: "About"}).click();
    });

    expect(location.hash).toBe("#about");
  });

  it("navigates to the donate page", () => {
    act(() => {
      screen.getByRole("link", {name: "Donate"}).click();
    });
    expect(location.pathname).toBe("/donate");
  });
});
