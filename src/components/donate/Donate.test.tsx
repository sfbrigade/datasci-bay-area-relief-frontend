import React from "react";
import {render, screen} from "@testing-library/react";
import Donate from "./Donate";
import {act} from "react-dom/test-utils";

describe("Donate page", () => {
  it("renders heading and description", () => {
    render(<Donate />);
    expect(screen.getByRole("heading", { name: "Donate"})).toBeInTheDocument();
    expect(screen.getByText("General")).toBeInTheDocument();
    expect(screen.getByText("Black Lives Matter")).toBeInTheDocument();
    expect(screen.getByText("LGBT")).toBeInTheDocument();
  });

  it("render links to donate websites", () => {
    render(<Donate />);

    act(() => {
      screen.getByText(/GoFundMe's/).click();
    });
    expect(screen.getByText(/GoFundMe's/)).toHaveTextContent(
      "GoFundMe's in the Bay area"
    );

    act(() => {
      screen.getByText(/Redwood City/).click();
    });
    expect(screen.getByText(/Redwood City/)).toHaveTextContent(
      "Redwood City Small Business Relief Fund"
    );

    act(() => {
      screen.getByText(/UC/).click();
    });
    expect(screen.getByText(/UC/)).toHaveTextContent(
      "UC Berkeley Law Pro Bono"
    );

    act(() => {
      screen.getByText(/COVID-19/).click();
    });
    expect(screen.getByText(/COVID-19/)).toHaveTextContent(
      "COVID-19 Regional Response Fund"
    );

    act(() => {
      screen.getByText(/Norcal/).click();
    });
    expect(screen.getByText(/Norcal/)).toHaveTextContent(
      "Norcal Small Business Relief Fund"
    );

    act(() => {
      screen.getByText(/Fair/).click();
    });
    expect(screen.getByText(/Fair/)).toHaveTextContent("One Fair Wage");

    act(() => {
      screen.getByText(/Berkeley Relief/).click();
    });
    expect(screen.getByText(/Berkeley Relief/)).toHaveTextContent(
      "Berkeley Relief Fund"
    );

    act(() => {
      screen.getByText(/Mutual Aid/).click();
    });
    expect(screen.getByText(/Mutual Aid/)).toHaveTextContent(
      "Berkeley Mutual Aid"
    );

    act(() => {
      screen.getByText(/China/).click();
    });
    expect(screen.getByText(/China/)).toHaveTextContent("Save Our China Towns");

    act(() => {
      screen.getByText(/MEDA/).click();
    });
    expect(screen.getByText(/MEDA/)).toHaveTextContent(
      "MEDA (Mission Economic Development Agency)"
    );

    act(() => {
      screen.getByText(/YouTube/).click();
    });
    expect(screen.getByText(/YouTube/)).toHaveTextContent(
      "YouTube Ad Proceeds to #BLM"
    );

    act(() => {
      screen.getByText(/BAOBOB/).click();
    });
    expect(screen.getByText(/BAOBOB/)).toHaveTextContent(
      "Bay Area Organization of Black Owned Businesses (BAOBOB)"
    );

    act(() => {
      screen.getByText(/Restaurants/).click();
    });
    expect(screen.getByText(/Restaurants/)).toHaveTextContent(
      "Black Owned Restaurants"
    );

    act(() => {
      screen.getByText(/ReliefFund/).click();
    });
    expect(screen.getByText(/ReliefFund/)).toHaveTextContent(
      "Black Owned Business ReliefFund"
    );

    act(() => {
      screen.getByText(/Chamber/).click();
    });
    expect(screen.getByText(/Chamber/)).toHaveTextContent(
      "Silicon Valley Central Chamber of Commerce"
    );

    act(() => {
      screen.getByText(/SF Gov/).click();
    });
    expect(screen.getByText(/SF Gov/)).toHaveTextContent("SF Gov");

    act(() => {
      screen.getByText(/Queer/).click();
    });
    expect(screen.getByText(/Queer/)).toHaveTextContent("Queer: Way Out");

    act(() => {
      screen.getByText(/Beard Foundation/).click();
    });
    expect(screen.getByText(/Beard Foundation/)).toHaveTextContent(
      "James Beard Foundation"
    );

    act(() => {
      screen.getByText(/Beard Webinars/).click();
    });
    expect(screen.getByText(/Beard Webinars/)).toHaveTextContent(
      "James Beard Webinars"
    );
  });
});
