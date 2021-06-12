import React, {ChangeEvent} from "react";
import {FilterBar} from "./FilterBar";
import FilterContext, {FilterContextType} from "../../context/filter";
import {idleForIO, sleep, testResult, testResult2} from "../../testUtils";
import {fireEvent, render, screen} from "@testing-library/react";

const filterValue: FilterContextType = {
  setInitialData: jest.fn(),
  currentFilters: {},
  setCurrentFilters: jest.fn(),
  isFilterOpen: true,
  setIsFilterOpen: jest.fn(),
  initialData: [testResult2],
  filteredResults: [testResult2],
  handleFilterChange: jest.fn().mockImplementation((group: string) => (event: ChangeEvent<HTMLInputElement>) => {
    console.log("FilterBar.test.tsx::handleFilterChange " + "group: " + group + " name: " + event.target.name);
  }),
  handleClearFilters: jest.fn(),
  contextID: "c6991dfc-b67c-43ba-acb9-19f18db37e1d"
}

describe("FilterBar tests", () => {
  const FilterBarWrapper: React.FC<any> = () => {
    return (
      <FilterContext.Provider value={filterValue}>
        <FilterBar />
      </FilterContext.Provider>
    )
  }
  it('renders a FilterBar', () => {
    render(<FilterBarWrapper />)
  });

  it('calls handleFilterChange when checkboxes are checked', async () => {
    render(<FilterBarWrapper />);
    await idleForIO();
    let sfCountyCheckbox = await screen.findByRole("checkbox", {name: /san francisco/i});
    fireEvent.click(sfCountyCheckbox);
    console.log((filterValue.handleFilterChange as jest.Mock).mock.calls)
    expect(filterValue.handleFilterChange).lastCalledWith("county");
    expect(filterValue.handleFilterChange).toBeCalledTimes(1);

    screen.debug();
  });
});
