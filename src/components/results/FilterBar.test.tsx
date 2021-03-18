import {render, screen} from "@testing-library/react";
import React from "react";
import {FilterBar} from "./FilterBar";

describe("FilterBar", () => {
  it.only("renders a static filter bar on the side of the screen", async () => {
    const onChange = jest.fn();
    const onClear = jest.fn();
    const setter = jest.fn();
    render(
      <FilterBar
        currentFilters={{}}
        matchCounts={{"Small business": 1}}
        onChange={onChange}
        onClear={onClear}
        isFilterOpen={false}
        setIsFilterOpen={setter}
      />
    );
    const response = await screen.findByTestId("sidebar");
    console.log({response});
    await screen.findByText("Type");
    await screen.findByText("Small business (1)");
  });

  it("renders a conditionalwrap when screen size is below 770", () => {});

  it("check boxes", () => {});

  it("renders numbers next to filter labels", () => {});
});
