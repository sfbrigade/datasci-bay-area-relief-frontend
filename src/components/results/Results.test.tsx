import React from "react";
import {fireEvent, screen, within} from "@testing-library/react";
import {createMemoryHistory} from "history";
import Results from "./Results";
import {idleForIO, renderWithRouter} from "../../testUtils";
import * as api from "../../api/axiosApi";
import {
  formatAwardAmount,
  formatDate,
  formatInterestRate,
  formatReliefType,
} from "./formatHelpers";
import {Result} from "../../types";
import {makeResult} from "./testDataHelpers";

describe("Results", () => {
  describe("results filtering", () => {
    it("applies the filters passed in", async () => {
      const results: Result[] = [
        makeResult({
          id: 1,
          sanMateoCounty: true,
          nonProfit: true,
        }),
        makeResult({
          id: 2,
          sanMateoCounty: false,
          nonProfit: false,
        }),
      ];
      jest.spyOn(api, "getResults").mockResolvedValueOnce(results);

      const history = createMemoryHistory();
      const initialState = {
        currentFilters: {
          orgType: ["nonProfit"],
          county: ["sanMateoCounty"],
        },
      };
      history.push("/", initialState);
      renderWithRouter(<Results />, {history});
      await idleForIO();

      const nonProfitCheckbox = screen.getByLabelText(
        /non-profit/i
      ) as HTMLInputElement;
      const sanMateoCountyCheckbox = screen.getByLabelText(
        /san mateo/i
      ) as HTMLInputElement;

      expect(nonProfitCheckbox.checked).toEqual(true);
      expect(sanMateoCountyCheckbox.checked).toEqual(true);
    });

    it("shows dynamic counts for the filters", async () => {
      const results: Result[] = [
        makeResult({
          id: 1,
          sfCounty: true,
          smallBusiness: true,
        }),
        makeResult({
          id: 2,
          sfCounty: true,
          smallBusiness: true,
        }),
        makeResult({
          id: 3,
          sfCounty: true,
          smallBusiness: false,
        }),
        makeResult({
          id: 4,
          sfCounty: false,
          smallBusiness: true,
        }),
        makeResult({
          id: 5,
          sfCounty: false,
          smallBusiness: true,
        }),
      ];
      jest.spyOn(api, "getResults").mockResolvedValueOnce(results);

      renderWithRouter(<Results />);
      await idleForIO();
      const sfCountyCheckbox = screen.getByLabelText(
        /san francisco/i
      ) as HTMLInputElement;
      const smallBizCheckbox = screen.getByLabelText(
        /small business/i
      ) as HTMLInputElement;
      expect(screen.getByRole("checkbox", {name: /san francisco \(3\)/i}));
      expect(screen.getByRole("checkbox", {name: /small business \(4\)/i}));

      fireEvent.click(smallBizCheckbox);
      expect(screen.getByRole("checkbox", {name: /san francisco \(2\)/i}));
      expect(screen.getByRole("checkbox", {name: /small business \(4\)/i}));

      fireEvent.click(sfCountyCheckbox);
      expect(screen.getByRole("checkbox", {name: /san francisco \(2\)/i}));
      expect(screen.getByRole("checkbox", {name: /small business \(2\)/i}));
    });

    it("allows the user to select filters that narrow down the matches shown", async () => {
      const results: Result[] = [
        makeResult({
          id: 1,
          name: "captain marvel",
          sfCounty: true,
          alamedaCounty: false,
        }),
        makeResult({
          id: 2,
          name: "black panther",
          sfCounty: false,
          alamedaCounty: true,
        }),
        makeResult({
          id: 3,
          name: "hulk",
          sfCounty: false,
          alamedaCounty: false,
        }),
        makeResult({
          id: 4,
          name: "doctor strange",
          sfCounty: false,
          alamedaCounty: false,
        }),
      ];

      jest.spyOn(api, "getResults").mockResolvedValueOnce(results);
      renderWithRouter(<Results />);
      await idleForIO();

      const checkBoxSFCounty = screen.getByLabelText(
        /san francisco/i
      ) as HTMLInputElement;
      const checkBoxAlamedaCounty = screen.getByLabelText(
        /alameda/i
      ) as HTMLInputElement;

      expect(checkBoxSFCounty.checked).toEqual(false);
      expect(checkBoxAlamedaCounty.checked).toEqual(false);

      const resultCardsBefore = screen.getAllByRole("listitem");
      expect(resultCardsBefore.length).toEqual(results.length);

      fireEvent.click(checkBoxSFCounty);
      fireEvent.click(checkBoxAlamedaCounty);

      expect(checkBoxSFCounty.checked).toEqual(true);
      expect(checkBoxAlamedaCounty.checked).toEqual(true);

      const resultCardsAfter = screen.getAllByRole("listitem");
      expect(resultCardsAfter.length).toEqual(2);

      const resultsList = screen.getByRole("list");
      expect(
        within(resultsList).getByText("captain marvel")
      ).toBeInTheDocument();
      expect(
        within(resultsList).getByText("black panther")
      ).toBeInTheDocument();
      expect(within(resultsList).queryByText("hulk")).toBeNull();
      expect(within(resultsList).queryByText("doctor strange")).toBeNull();
    });

    it("clearing all filters", async () => {
      const results: Result[] = [
        makeResult({
          id: 1,
          sfCounty: true,
          smallBusiness: true,
        }),
        makeResult({
          id: 2,
          sfCounty: false,
          smallBusiness: true,
        }),
        makeResult({
          id: 3,
          sfCounty: true,
          smallBusiness: false,
        }),
      ];

      jest.spyOn(api, "getResults").mockResolvedValueOnce(results);
      renderWithRouter(<Results />);
      await idleForIO();

      const sfCountyFilter = screen.getByLabelText(
        /san francisco/i
      ) as HTMLInputElement;
      const smallBusinessFilter = screen.getByLabelText(
        /small business/i
      ) as HTMLInputElement;
      fireEvent.click(sfCountyFilter);
      fireEvent.click(smallBusinessFilter);

      const filteredResults = screen.getAllByRole("listitem");
      expect(filteredResults.length).toEqual(1);

      fireEvent.click(screen.getByText(/clear/i));

      expect(sfCountyFilter.checked).toEqual(false);
      expect(smallBusinessFilter.checked).toEqual(false);

      const unfilteredResults = screen.getAllByRole("listitem");
      expect(unfilteredResults.length).toEqual(3);
    });
  });

  describe("results list", () => {
    describe("when there are no matches", () => {
      it("renders a no results image and message", async () => {
        jest
          .spyOn(api, "getResults")
          .mockResolvedValueOnce([
            makeResult({id: 5, smallBusiness: true, nonProfit: false}),
            makeResult({id: 6, smallBusiness: true, nonProfit: false}),
          ]);
        renderWithRouter(<Results />);
        await idleForIO();

        const nonProfitCheckbox = screen.getByLabelText(
          /non-profit/i
        ) as HTMLInputElement;
        fireEvent.click(nonProfitCheckbox);

        expect(screen.getByAltText("No Results")).toBeVisible();
        expect(screen.getByText(/Try clearing some filters/));
      });
    });

    describe("when there are matches", () => {
      it("displays the matches with relevant information on result cards", async () => {
        const results = [
          makeResult({id: 1, maxAwardAmount: 100000}),
          makeResult({id: 2, maxAwardAmount: 50000}),
          makeResult({id: 3, maxAwardAmount: 25000}),
        ];
        jest.spyOn(api, "getResults").mockResolvedValueOnce(results);

        renderWithRouter(<Results />);
        await idleForIO();

        const resultCards = screen.getAllByRole("listitem");

        /* Result Cards Tests */

        for (let i = 0; i < resultCards.length; ++i) {
          const resultCard = resultCards[i];
          const currentResult = results[i];
          global.open = jest.fn();

          const {getByText, queryByText} = within(resultCard);

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

          if (currentResult.websiteUrl === "None") {
            expect(queryByText("Apply")).toBeNull();
          } else {
            expect(getByText("Apply")).toBeVisible();
            const element:
              | HTMLElement
              | null
              | Error
              | HTMLElement[] = await getByText("Apply");
            fireEvent.click(element as HTMLElement);
            expect(global.open).toBeCalledWith(
              currentResult.websiteUrl,
              "_blank"
            );
          }

          if (currentResult.blackOwned) {
            expect(queryByText("Black-owned")).toBeVisible();
          } else {
            expect(queryByText("Black-owned")).toBeNull();
          }

          if (currentResult.lgbtq) {
            expect(queryByText("LGBTQ")).toBeVisible();
          } else {
            expect(queryByText("LGBTQ")).toBeNull();
          }
        }
      });

      it("does not show the no results image", async () => {
        const results = [makeResult()];
        jest.spyOn(api, "getResults").mockResolvedValueOnce(results);
        renderWithRouter(<Results />);
        await idleForIO();

        expect(screen.queryByTitle("No results")).toBeNull();
        expect(screen.queryByText(/Try clearing some filters/)).toBeNull();
      });
    });
  });
});
