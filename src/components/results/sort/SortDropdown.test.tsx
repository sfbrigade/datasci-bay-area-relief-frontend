import React from "react";
import SortDropdown from "./SortDropdown";
import {fireEvent, render, screen} from "@testing-library/react";
import {SortOptionType} from "../../../types";

describe("SortDropdown", () => {
  const setSortOptionMock = jest.fn();

  beforeEach(() => {
    render(<SortDropdown setSortOption={setSortOptionMock} />);
  });

  it("renders a sort dropdown with a default option", () => {
    expect(screen.getByText("Sort by:")).toBeVisible();
    expect(screen.getByText("Due date: New-Old")).toBeVisible();

    expect(screen.getByText("Interest: High-Low")).toBeInTheDocument();
    expect(screen.getByText("Interest: Low-High")).toBeInTheDocument();
    expect(screen.getByText("Amount: High-Low")).toBeInTheDocument();
    expect(screen.getByText("Amount: Low-High")).toBeInTheDocument();
    expect(screen.getByText("Due date: Old-New")).toBeInTheDocument();
  });

  it("calls setSortOption with a new SortOption when choosing it from the dropdown", async () => {
    const element = screen.getByRole("combobox");
    fireEvent.change(element, {
      target: {value: SortOptionType.AwardAmountHighToLow},
    });
    expect(setSortOptionMock).toBeCalledWith(
      SortOptionType.AwardAmountHighToLow.valueOf().toString()
    );

    fireEvent.change(element, {
      target: {value: SortOptionType.InterestLowToHigh},
    });
    expect(setSortOptionMock).toBeCalledWith(
      SortOptionType.InterestLowToHigh.valueOf().toString()
    );
  });
});
