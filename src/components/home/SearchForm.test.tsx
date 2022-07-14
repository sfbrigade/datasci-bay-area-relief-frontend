import React from "react";
import {act, fireEvent, render, screen} from "@testing-library/react";
import {SearchForm} from "./SearchForm";
import {idleForIO} from "../../testUtils";
import {createMemoryHistory} from "history";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Search} from "@mui/icons-material";

const history = createMemoryHistory();
jest.spyOn(history, "push");

describe("SearchForm selections", () => {
  beforeEach(async () => {
    await act(async () => {
      await render(
        <BrowserRouter>
          <Routes>
            <Route element={<SearchForm />} />
          </Routes>
        </BrowserRouter>
      );
    });
  });

  it("renders a SearchForm with two default Anys", async () => {
    await idleForIO();
    const anyObject = screen.getAllByRole("option", {name: "Any"});
    expect(anyObject).toHaveLength(2);
  });

  it("can search with no user selections", async () => {
    const searchButton = screen.getByText("Search");
    fireEvent.click(searchButton);

    expect(history.push).toHaveBeenLastCalledWith("/results");

    const anyObject = screen.getAllByRole("option", {name: "Any"});
    expect((anyObject[0] as HTMLOptionElement).selected).toBeTruthy();
    expect((anyObject[1] as HTMLOptionElement).selected).toBeTruthy();
  });

  it("can search by orgType", async () => {
    fireEvent.change(screen.getByLabelText("I am a..."), {
      target: {value: "smallBusiness"},
    });

    const searchButton = screen.getByText("Search");
    fireEvent.click(searchButton);

    await idleForIO();

    expect(history.push).toHaveBeenLastCalledWith(
      "/results?orgType=smallBusiness"
    );

    const smallBusinessOption = screen.getAllByRole("option", {
      name: "Small business",
    });
    expect((smallBusinessOption[0] as HTMLOptionElement).selected).toBeTruthy();
    const anyObject = screen.getAllByRole("option", {name: "Any"});
    expect((anyObject[0] as HTMLOptionElement).selected).toBeFalsy();
    expect((anyObject[1] as HTMLOptionElement).selected).toBeTruthy();
  });

  it("can search by county only", async () => {
    fireEvent.change(screen.getByLabelText("County"), {
      target: {value: "alamedaCounty"},
    });

    const searchButton = screen.getByText("Search");
    fireEvent.click(searchButton);

    await idleForIO();

    expect(history.push).toHaveBeenLastCalledWith(
      "/results?county=alamedaCounty"
    );

    const countyOption = screen.getAllByRole("option", {name: "Alameda"});
    expect((countyOption[0] as HTMLOptionElement).selected).toBeTruthy();
    const anyObject = screen.getAllByRole("option", {name: "Any"});
    expect((anyObject[0] as HTMLOptionElement).selected).toBeTruthy();
    expect((anyObject[1] as HTMLOptionElement).selected).toBeFalsy();
  });

  it("can search by county and org type", async () => {
    fireEvent.change(screen.getByLabelText("I am a..."), {
      target: {value: "smallBusiness"},
    });
    fireEvent.change(screen.getByLabelText("County"), {
      target: {value: "alamedaCounty"},
    });

    const searchButton = screen.getByText("Search");
    fireEvent.click(searchButton);

    await idleForIO();

    expect(history.push).toHaveBeenLastCalledWith(
      "/results?orgType=smallBusiness&county=alamedaCounty"
    );

    const countyOption = screen.getAllByRole("option", {name: "Alameda"});
    expect((countyOption[0] as HTMLOptionElement).selected).toBeTruthy();
    const smallBusinessOption = screen.getAllByRole("option", {
      name: "Small business",
    });
    expect((smallBusinessOption[0] as HTMLOptionElement).selected).toBeTruthy();
  });
});
