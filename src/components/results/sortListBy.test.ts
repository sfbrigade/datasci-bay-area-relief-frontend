import sortListBy from "./sortListBy";
import {Result, ReliefType, SupportType, SortOptionType} from "../../types";

/*
Refactor case variable names
Fix due date sort
 */

describe("sortListBy", () => {
  const result1 = {
    id: 1,
    name: "result 1",
    supportType: SupportType.Loan,
    interestRate: 0.01,
    dateAdded: "Fri, 05 Jun 2020 00:00:00 GMT",
    maxAwardAmount: 10000000,
    reliefType: ReliefType.COVID,
    deadline: "Fri, 20 Sep 2019 00:00:00 GMT",
  };
  const result2 = {
    id: 2,
    name: "result 2",
    supportType: SupportType.Grant,
    interestRate: null,
    dateAdded: "Wed, 10 Jun 2020 00:00:00 GMT",
    maxAwardAmount: 0,
    reliefType: ReliefType.ProtestDamage,
    deadline: "Thu, 16 Apr 2020 00:00:00 GMT",
  };
  const result3 = {
    id: 3,
    name: "result 3",
    supportType: SupportType.Loan,
    interestRate: 0,
    dateAdded: "Wed, 10 Jun 2020 00:00:00 GMT",
    maxAwardAmount: 500,
    reliefType: ReliefType.Both,
    deadline: "Mon, 15 Jun 2020 00:00:00 GMT",
  };
  const result4 = {
    id: 4,
    name: "result 4",
    supportType: SupportType.Loan,
    interestRate: 0.0375,
    dateAdded: "Fri, 05 Jun 2020 00:00:00 GMT",
    maxAwardAmount: 20000,
    reliefType: ReliefType.COVID,
    deadline: null,
  };
  const result5 = {
    id: 5,
    name: "result 5",
    supportType: SupportType.Loan,
    interestRate: 0,
    dateAdded: "Fri, 01 Jun 2020 00:00:00 GMT",
    maxAwardAmount: null,
    reliefType: ReliefType.COVID,
    deadline: null,
  };
  const result6 = {
    id: 6,
    name: "result 6",
    supportType: SupportType.Loan,
    interestRate: 0,
    dateAdded: "Fri, 02 Jun 2020 00:00:00 GMT",
    maxAwardAmount: 0,
    reliefType: ReliefType.COVID,
    deadline: null,
  };

  const awardAmountHighToLow: Result[] = [result1, result4, result3];
  const awardAmountLowToHigh: Result[] = [result3, result4, result1];

  const interestRatesLowToHigh: Result[] = [result6, result1];
  const interestRatesHighToLow: Result[] = [result1, result6];

  const results: Result[] = [result1, result2, result3, result4, result5, result6];



  it("Should return a new list and not mutate the given list ", () => {
    const output = sortListBy(results, SortOptionType.None);
    expect(output).not.toBe(results);
  });

  describe("Sorting by award amount", () => {
    it("sorts results from highest to lowest maxAwardAmount with null value at beginning", () => {
      // Sort results[] objects from high to low maxAwardAmount
      const sortedResultsList: Result[] = sortListBy(results, SortOptionType.AwardAmountHighToLow);

      // For each result object in sortedResultsList, extract maxAwardAmount and store in sortedValuesList
      const sortedValuesList: number[] = sortedResultsList.map(sortedResultsList => sortedResultsList.maxAwardAmount);
      const answer: number[] = [null, 10000000, 20000, 500, 0, 0];

      expect(sortedValuesList).toEqual(answer);
    });

    it("sorts results from low to high award amounts when sort option is AwardAmountLowToHigh", () => {
      // Sort results[] objects from low to high maxAwardAmount
      const sortedResultsList: Result[] = sortListBy(results, SortOptionType.AwardAmountLowToHigh);

      // For each result object in sortedResultsList, extract maxAwardAmount and store in sortedValuesList
      const sortedValuesList: number[] = sortedResultsList.map(sortedResultsList => sortedResultsList.maxAwardAmount);
      const answer: number[] = [0, 0, 500, 20000, 10000000, null];

      expect(sortedValuesList).toEqual(answer);
    });
  });

  describe("Sorting by interest", () => {
    it("Sorts interest rates lowest to highest", () => {
      // Sort results[] objects from low to high interestRate
      const sortedResultsList: Result[] = sortListBy(results, SortOptionType.InterestLowToHigh);

      // For each result object in sortedResultsList, extract interestRate and store in sortedValuesList
      const sortedValuesList: number[] = sortedResultsList.map(sortedResultsList => sortedResultsList.interestRate);
      const answer: number[] = [0, 0, 0, 0.01, 0.0375, null];

      expect(sortedValuesList).toEqual(answer);
    });

    // TODO: Currently failing, check behavior of null in sortListBy for interest rates
    it("Sorts interest rates highest to lowest", () => {
      // Sort results[] objects from low to high interestRate
      const sortedResultsList: Result[] = sortListBy(results, SortOptionType.InterestHighToLow);

      // For each result object in sortedResultsList, extract interestRate and store in sortedValuesList
      const sortedValuesList: number[] = sortedResultsList.map(sortedResultsList => sortedResultsList.interestRate);
      const answer: number[] = [null, 0.0375, 0.01, 0, 0 ,0];

      expect(sortedValuesList).toEqual(answer);
    });
  });

  describe("Sorting by due date", () => {
    it("places results with a null deadline value at the end", () => {
      const results: Result[] = [result6, result1];
      const answer: Result[] = [result1, result6];
      expect(sortListBy(results, SortOptionType.DueDateOldToNew)).toEqual(
        answer
      );
      expect(sortListBy(results, SortOptionType.DueDateNewToOld)).toEqual(
        answer
      );
    });

    it("sorts results from oldest deadline to newest deadline when sort option is DueDateOldToNew", () => {
      const answer: Result[] = [result3, result2, result1, result4, result5];
      expect(sortListBy(results, SortOptionType.DueDateOldToNew)).toEqual(
        answer
      );
    });

    it("sorts results from newest deadline to oldest deadline when sort option is DueDateNewToOld", () => {
      const answer: Result[] = [result1, result2, result3, result4, result5];
      expect(sortListBy(results, SortOptionType.DueDateNewToOld)).toEqual(
        answer
      );
    });
  });
});
