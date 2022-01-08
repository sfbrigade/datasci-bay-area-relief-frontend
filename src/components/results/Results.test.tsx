import React, {useState, useMemo, ChangeEvent} from "react";
import { act, fireEvent, render, screen, within } from "@testing-library/react";
import {createMemoryHistory} from "history";
import Results from "./Results";
import {Router} from "react-router-dom";
import {idleForIO} from "../../testUtils";
import {applyFilterChanges, applyFilters} from "./filterHelpers";
import {
  formatAwardAmount,
  formatDate,
  formatInterestRate,
  formatReliefType
} from "./formatHelpers";
import {Result, CurrentFilters, ResultWrapperType} from "../../types";
import {makeResult} from "./testDataHelpers";
import {setValues} from "../../context/globalStates";

describe("Results", () => {
  const results = [
    makeResult({
      id: 1,
      sanMateoCounty: true,
      nonProfit: true
    }),
    makeResult({
      id: 2,
      sanMateoCounty: false,
      nonProfit: false
    })
  ];

  let handleClearFiltersCalledTimes = 0;

  beforeEach(() => {
    handleClearFiltersCalledTimes = 0;
  });

  const ResultWrapper: React.FC<ResultWrapperType> = ({history, initialResults}) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [results] = useState<Result[]>(initialResults);
    const [currentFilters, setCurrentFilters] = useState<CurrentFilters>({});
    const [filteredResults, setFilteredResults] = useState<Result[]>([]);
    const handleFilterChange = (group: keyof CurrentFilters) => (event: ChangeEvent<HTMLInputElement>) => {
      applyFilterChanges(event.target.checked, event.target.name, group, currentFilters, setCurrentFilters);
    };

    const handleClearFilters = () => {
      ++handleClearFiltersCalledTimes;
      setCurrentFilters({});
    };

    useMemo(
      () => setFilteredResults(applyFilters(results, currentFilters)),
      [currentFilters, setFilteredResults, results]
    );

    setValues({
      filteredResults,
      setFilteredResults,
      isFilterOpen,
      currentFilters,
      setCurrentFilters,
      setIsFilterOpen,
      handleFilterChange,
      handleClearFilters
    });

    return (
      <Router history={history}>
        <Results/>
      </Router>
    );
  };

  describe("results filtering", () => {
    it("applies the filters passed in", async () => {
      const history = createMemoryHistory();

      history.push("/?orgType=nonProfit&county=sanMateoCounty");
      await act(async () => {
        await render(<ResultWrapper history={history} initialResults={results}/>);
      });

      const nonProfitCheckbox = screen.getByLabelText(
        /non-profit/i
      ) as HTMLInputElement;
      const sanMateoCountyCheckbox = screen.getByLabelText(
        /san mateo/i
      ) as HTMLInputElement;

      expect(nonProfitCheckbox.checked).toEqual(true);
      expect(sanMateoCountyCheckbox.checked).toEqual(true);
    });

    it("allows the user to select filters that narrow down the matches shown", async () => {
      const narrowedResults = [
        makeResult({
          id: 1,
          name: "captain marvel",
          sfCounty: true,
          alamedaCounty: false
        }),
        makeResult({
          id: 2,
          name: "black panther",
          sfCounty: false,
          alamedaCounty: true
        }),
        makeResult({
          id: 3,
          name: "hulk",
          sfCounty: false,
          alamedaCounty: false
        }),
        makeResult({
          id: 4,
          name: "doctor strange",
          sfCounty: false,
          alamedaCounty: false
        })
      ];
      const history = createMemoryHistory();
      render(<ResultWrapper history={history} initialResults={narrowedResults}/>);
      await idleForIO();

      const checkBoxSFCounty = screen.getByLabelText(
        /san francisco/i
      ) as HTMLInputElement;
      const checkBoxAlamedaCounty = screen.getByLabelText(
        /alameda/i
      ) as HTMLInputElement;

      expect(checkBoxSFCounty.checked).toEqual(false);
      expect(checkBoxAlamedaCounty.checked).toEqual(false);

      fireEvent.click(checkBoxSFCounty);
      fireEvent.click(checkBoxAlamedaCounty);

      const resultCardsBefore = screen.getAllByRole("listitem");
      expect(resultCardsBefore.length).toEqual(results.length);

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
      const clearingAllFiltersResults: Result[] = [
        makeResult({
          id: 1,
          sfCounty: true,
          smallBusiness: true
        }),
        makeResult({
          id: 2,
          sfCounty: false,
          smallBusiness: true
        }),
        makeResult({
          id: 3,
          sfCounty: true,
          smallBusiness: false
        })
      ];

      const history = createMemoryHistory();
      render(<ResultWrapper history={history} initialResults={clearingAllFiltersResults}/>);
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

      expect(handleClearFiltersCalledTimes).toEqual(1);

      expect(sfCountyFilter.checked).toEqual(false);
      expect(smallBusinessFilter.checked).toEqual(false);

      const unfilteredResults = screen.getAllByRole("listitem");
      expect(unfilteredResults.length).toEqual(3);
    });
  });

  describe("results list", () => {
    describe("when there are no matches", () => {
      it("renders a no results image and message", async () => {
        const history = createMemoryHistory();
        render(<ResultWrapper history={history} initialResults={[]}/>);
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
          makeResult({id: 1, maxAwardAmount: 100000, deadlineApplicable: 'Yes', deadline: '2019-09-25T00:00:00.000Z'}),
          makeResult({id: 2, maxAwardAmount: 50000, deadlineApplicable: 'Yes', deadline: '2019-09-25T00:00:00.000Z'}),
          makeResult({id: 3, maxAwardAmount: 25000, deadlineApplicable: 'Yes', deadline: '2019-09-25T00:00:00.000Z'})
        ];

        const history = createMemoryHistory();
        render(<ResultWrapper history={history} initialResults={results}/>);
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

          const formattedDate = formatDate(currentResult.deadline);
          const supportTypeHeaders = screen.getAllByTestId('support-type-header');
          expect(supportTypeHeaders[i]).toBeVisible();
          expect(supportTypeHeaders[i].textContent).toContain(formattedDate);

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
        const singleResult = [makeResult()];
        const history = createMemoryHistory();
        render(<ResultWrapper history={history} initialResults={singleResult}/>);
        await idleForIO();

        expect(screen.queryByTitle("No results")).toBeNull();
        expect(screen.queryByText(/Try clearing some filters/)).toBeNull();
      });
    });
  });
});
