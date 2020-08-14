import React from "react";
import {render, screen, within} from "@testing-library/react";
import Results from "./Results";
import {idleForIO} from "../../testUtils";
import * as api from "../../api/axiosApi";
import {
  formatInterestRate,
  formatDate,
  formatAwardAmount,
} from "./formatHelpers";
import {Result} from "../../types";

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
    const results: Result[] = [
      {
        name: "result 1",
        supportType: "Loan",
        interestRate: 0.01,
        dateAdded: "Fri, 05 Jun 2020 00:00:00 GMT",
        maxAwardAmount: 10000000,
      },
      {
        name: "result 2",
        supportType: "Grant",
        interestRate: null,
        dateAdded: "Wed, 10 Jun 2020 00:00:00 GMT",
        maxAwardAmount: null,
      },
      {
        name: "result 3",
        supportType: "Loan",
        interestRate: 0,
        dateAdded: "Wed, 10 Jun 2020 00:00:00 GMT",
        maxAwardAmount: 500,
      },
      {
        name: "result 4",
        supportType: "Loan",
        interestRate: 0.0375,
        dateAdded: "Fri, 05 Jun 2020 00:00:00 GMT",
        maxAwardAmount: 20000,
      },
    ];

    it("shows the results", async () => {
      jest.spyOn(api, "getResults").mockResolvedValueOnce(results);

      render(<Results />);
      await idleForIO();

      const resultCards = screen.getAllByRole("listitem");

      resultCards.forEach((resultCard, index) => {
        const {getByText} = within(resultCard);
        const nameRegex = new RegExp(results[index].name, "i");
        expect(getByText(nameRegex)).toBeInTheDocument();

        const supportTypeRegex = new RegExp(results[index].supportType, "i");
        expect(getByText(supportTypeRegex)).toBeInTheDocument();

        const formattedInterestRate = formatInterestRate(
          results[index].interestRate,
          results[index].supportType
        );
        const interestRateRegex = new RegExp(formattedInterestRate, "i");
        expect(getByText(interestRateRegex)).toBeInTheDocument();

        const formattedDate = formatDate(results[index].dateAdded);
        const dateAddedRegex = new RegExp(formattedDate, "i");
        expect(getByText(dateAddedRegex)).toBeInTheDocument();

        expect(
          getByText(formatAwardAmount(results[index].maxAwardAmount))
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
