import React from "react";
import {render, screen, within, fireEvent} from "@testing-library/react";
import Results from "./Results";
import {idleForIO} from "../../testUtils";
import * as api from "../../api/axiosApi";
import {
  formatInterestRate,
  formatDate,
  formatAwardAmount,
  formatReliefType
} from "./formatHelpers";
import {Result, ReliefType, SupportType} from "../../types";

describe("Results", () => {
  const result1 = {
    id: 1,
    name: "result 1",
    supportType: SupportType.Loan,
    interestRate: 0.01,
    dateAdded: "Fri, 05 Jun 2020 00:00:00 GMT",
    maxAwardAmount: 10000000,
    reliefType: ReliefType.COVID,
    sfCounty: "Yes",
    alamedaCounty: "Yes"
  };
  const result2 = {
    id: 2,
    name: "result 2",
    supportType: SupportType.Grant,
    interestRate: null,
    dateAdded: "Wed, 10 Jun 2020 00:00:00 GMT",
    maxAwardAmount: null,
    reliefType: ReliefType.ProtestDamage,
    sfCounty: "No",
    alamedaCounty: "Yes"
  };
  const result3 = {
    id: 3,
    name: "result 3",
    supportType: SupportType.Loan,
    interestRate: 0,
    dateAdded: "Wed, 10 Jun 2020 00:00:00 GMT",
    maxAwardAmount: 500,
    reliefType: ReliefType.Both,
    sfCounty: "No",
    alamedaCounty: "Yes"
  };
  const result4 = {
    id: 4,
    name: "result 4",
    supportType: SupportType.Loan,
    interestRate: 0.0375,
    dateAdded: "Fri, 05 Jun 2020 00:00:00 GMT",
    maxAwardAmount: 20000,
    reliefType: ReliefType.COVID,
    sfCounty: "Yes",
    alamedaCounty: "No"
  };

  const results: Result[] = [result1, result2, result3, result4];

  describe("results filtering", () => {
    it("shows categories with counts", async () => {
      jest.spyOn(api, "getResults").mockResolvedValueOnce(results);
      render(<Results/>);
      await idleForIO();

      expect(screen.getByLabelText(/san francisco \(2\)/i)).toBeInTheDocument()
      expect(screen.getByText(/alameda (3)/i)).toBeVisible()
    });

    it("allows the user to select categories", async () => {
      jest.spyOn(api, "getResults").mockResolvedValueOnce(results);
      // ARRANGE
      render(<Results/>);
      await idleForIO();

      const checkBoxSFCounty = screen.getByLabelText(/san francisco/i) as HTMLInputElement;
      const checkBoxAlamedaCounty = screen.getByLabelText(/alameda/i) as HTMLInputElement;

      // None of the categories are checked
      expect(checkBoxSFCounty.checked).toEqual(false);
      expect(checkBoxAlamedaCounty.checked).toEqual(false);

      // The user sees all result cards
      const resultCards = screen.getAllByRole("listitem");
      expect(resultCards.length).toEqual(4);

      // ACT
      // User clicks on checkbox(es)
      fireEvent.click(checkBoxSFCounty);

      // ASSERT
      // The checkboxes are checked
      expect(checkBoxSFCounty.checked).toEqual(true);
      expect(checkBoxAlamedaCounty.checked).toEqual(false);

      // User sees only cards under the selected categories
      expect(resultCards.length).toEqual(2);
      expect(resultCards).toEqual(expect.arrayContaining([result1, result4]));

      // User does not see cards that are not part of selected categories
      // (make sure to include nuance of cards belonging to multiple categories)
      expect(resultCards).toEqual(expect.not.arrayContaining([result2, result3]));

    });
  });

  describe("results list", () => {
    it.todo("shows all the results from selected categories without duplicates ");

    describe("when there are no results", () => {
      // TODO: Update to not do API call
      it("renders a no results image and message", async () => {
        jest.spyOn(api, "getResults").mockResolvedValueOnce([]);
        render(<Results/>);
        await idleForIO();
        expect(
          screen.getByAltText("No Results")
        ).toHaveAttribute("src", "../../assets/NoResults.svg");
        expect(screen.getByAltText(/no results/i)).toBeVisible();
        expect(screen.getByText(/Try clearing some filters/));
      });
    });

    describe("when there are results", () => {
      it("shows the results", async () => {
        jest.spyOn(api, "getResults").mockResolvedValueOnce(results);

        render(<Results/>);
        await idleForIO();

        const resultCards = screen.getAllByRole("listitem");

        resultCards.forEach((resultCard, index) => {
          const {getByText} = within(resultCard);
          expect(getByText(results[index].name)).toBeVisible();

          const supportTypeRegex = new RegExp(results[index].supportType, "i");
          expect(getByText(supportTypeRegex)).toBeVisible();

          const formattedInterestRate = formatInterestRate(
            results[index].interestRate,
            results[index].supportType
          );
          const interestRateRegex = new RegExp(formattedInterestRate, "i");
          expect(getByText(interestRateRegex)).toBeVisible();

          const formattedDate = formatDate(results[index].dateAdded);
          const dateAddedRegex = new RegExp(formattedDate, "i");
          expect(getByText(dateAddedRegex)).toBeVisible();

          expect(
            getByText(formatAwardAmount(results[index].maxAwardAmount))
          ).toBeVisible();

          expect(
            getByText(formatReliefType(results[index].reliefType))
          ).toBeVisible();

          expect(getByText("Apply")).toBeVisible();
        });
      });

      it("does not show the no results image", async () => {
        jest.spyOn(api, "getResults").mockResolvedValueOnce(results);
        const {container} = render(<Results/>);
        await idleForIO();
        expect(screen.queryByAltText(/no results/i)).not.toBeInTheDocument();
      });
    });
  });
});
