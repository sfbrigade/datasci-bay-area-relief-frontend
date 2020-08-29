import React from "react";
import {render, screen, within} from "@testing-library/react";
import Results from "./Results";
import {idleForIO} from "../../testUtils";
import * as api from "../../api/axiosApi";
import {
  formatInterestRate,
  formatDate,
  formatAwardAmount,
  formatReliefType,
} from "./formatHelpers";
import {Result, ReliefType, SupportType} from "../../types";

describe("Results", () => {
  describe("when there are no results", () => {
    it("renders a no results image and message", async () => {
      jest.spyOn(api, "getResults").mockResolvedValueOnce([]);
      render(<Results />);
      await idleForIO();

      expect(screen.getByTitle("No results")).toBeVisible();
      expect(screen.getByText(/Try clearing some filters/));
    });
  });

  describe("when there are results", () => {
    const results: Result[] = [
      {
        id: 1,
        name: "result 1",
        supportType: SupportType.Loan,
        interestRate: 0.01,
        dateAdded: "Fri, 05 Jun 2020 00:00:00 GMT",
        maxAwardAmount: 10000000,
        reliefType: ReliefType.COVID,
        deadline: "Fri, 20 Sep 2019 00:00:00 GMT",
        blackOwned: "No",
        lgbtq: "No"
      },
      {
        id: 2,
        name: "result 2",
        supportType: SupportType.Grant,
        interestRate: null,
        dateAdded: "Wed, 10 Jun 2020 00:00:00 GMT",
        maxAwardAmount: null,
        reliefType: ReliefType.ProtestDamage,
        deadline: "Thu, 16 Apr 2020 00:00:00 GMT",
        blackOwned: "Yes",
        lgbtq: "No"
      },
      {
        id: 3,
        name: "result 3",
        supportType: SupportType.Loan,
        interestRate: 0,
        dateAdded: "Wed, 10 Jun 2020 00:00:00 GMT",
        maxAwardAmount: 500,
        reliefType: ReliefType.Both,
        deadline: "Mon, 15 Jun 2020 00:00:00 GMT",
        blackOwned: "No",
        lgbtq: "Yes"
      },
      {
        id: 4,
        name: "result 4",
        supportType: SupportType.Loan,
        interestRate: 0.0375,
        dateAdded: "Fri, 05 Jun 2020 00:00:00 GMT",
        maxAwardAmount: 20000,
        reliefType: ReliefType.COVID,
        deadline: null,
        blackOwned: "Yes",
        lgbtq: "Yes"
      },
    ];

    it("shows the results", async () => {
      jest.spyOn(api, "getResults").mockResolvedValueOnce(results);

      render(<Results />);
      await idleForIO();

      const resultCards = screen.getAllByRole("listitem");

      resultCards.forEach((resultCard, index) => {
        const {getByText, queryByText} = within(resultCard);
        const currentResult = results[index];
        expect(getByText(currentResult.name)).toBeVisible();

        const supportTypeRegex = new RegExp(currentResult.supportType, "i");
        expect(getByText(supportTypeRegex)).toBeVisible();

        const formattedInterestRate = formatInterestRate(
          currentResult.interestRate,
          currentResult.supportType
        );
        const interestRateRegex = new RegExp(formattedInterestRate, "i");
        expect(getByText(interestRateRegex)).toBeVisible();

        const formattedDate = formatDate(currentResult.dateAdded);
        const dateAddedRegex = new RegExp(formattedDate, "i");
        expect(getByText(dateAddedRegex)).toBeVisible();

        expect(
          getByText(formatAwardAmount(currentResult.maxAwardAmount))
        ).toBeVisible();

        expect(
          getByText(formatReliefType(currentResult.reliefType))
        ).toBeVisible();

        expect(getByText("Apply")).toBeVisible();

        if (currentResult.blackOwned && currentResult.blackOwned === "Yes") {
          expect(queryByText("Black-owned")).toBeVisible();
        } else {
          expect(queryByText("Black-owned")).toBeNull();
        }

        if (currentResult.lgbtq && currentResult.lgbtq === "Yes") {
          expect(queryByText("LGBTQ")).toBeVisible();
        } else {
          expect(queryByText("LGBTQ")).toBeNull();
        }
      });
    });

    it("does not show the no results image", async () => {
      jest.spyOn(api, "getResults").mockResolvedValueOnce(results);
      render(<Results />);
      await idleForIO();

      expect(screen.queryByTitle("No results")).toBeNull();
      expect(screen.queryByText(/Try clearing some filters/)).toBeNull();
    });
  });
});
