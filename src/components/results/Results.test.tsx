import React from "react";
import {render, screen, within} from "@testing-library/react";
import Results from "./Results";
import {idleForIO} from "../../testUtils";
import * as api from "../../api/axiosApi";
import {formatInterestRate} from "./ResultCard";

describe("Results", () => {
  describe("when there are no results", () => {
    it("renders a no results image and message", async () => {
      jest.spyOn(api, "getResults").mockResolvedValueOnce([]);
      const {container} = render(<Results />);
      await idleForIO();
      expect(container.querySelector("svg")?.textContent).toBe("NoResults.svg");
      expect(screen.getByText(/Try clearing some filters/));
    });
  });

  describe("when there are results", () => {
    const results = [
      {name: "result 1", supportType: "Loan", interestRate: 0.01},
      {name: "result 2", supportType: "Grant", interestRate: null},
      {name: "result 3", supportType: "Loan", interestRate: 0},
      {name: "result 4", supportType: "Loan", interestRate: 0.0375},
    ];

    it("shows the results", async () => {
      jest.spyOn(api, "getResults").mockResolvedValueOnce(results);

      render(<Results />);
      await idleForIO();

      const resultCards = screen.getAllByRole("listitem");

      resultCards.forEach((resultCard, index) => {
        const {getByText} = within(resultCard);
        expect(getByText(results[index].name)).toBeInTheDocument();
        expect(getByText(results[index].supportType)).toBeInTheDocument();
        expect(
          getByText(
            formatInterestRate(
              results[index].interestRate,
              results[index].supportType
            )
          )
        ).toBeInTheDocument();
      });
    });

    it("does not show the no results image", async () => {
      jest.spyOn(api, "getResults").mockResolvedValueOnce(results);
      const {container} = render(<Results />);
      await idleForIO();

      expect(container.querySelector("svg")?.textContent).toBeUndefined();
    });
  });
});

describe("formatInterestRate", () => {
  describe("when the support type is a grant", () => {
    it("returns 'No Interest'", () => {
      expect(formatInterestRate(null, "Grant")).toEqual("No Interest");
    });
  });

  describe("when the support type is a loan", () => {
    describe("when the interest rate is a number", () => {
      it("returns the interest rate as a percentage and the word 'Interest' when the interest rate is nonzero", () => {
        expect(formatInterestRate(0.01, "Loan")).toEqual("1% Interest");
        expect(formatInterestRate(0.0375, "Loan")).toEqual("3.75% Interest");
      });

      it("returns'No Interest' when interest rate is 0", () => {
        expect(formatInterestRate(0, "Loan")).toEqual("No Interest");
      });
    });

    describe("when the interest rate is null", () => {
      it("returns 'Unknown", () => {
        expect(formatInterestRate(null, "Loan")).toEqual("Unknown");
      });
    });
  });
});
