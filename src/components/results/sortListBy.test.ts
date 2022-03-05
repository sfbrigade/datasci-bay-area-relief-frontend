import sortListBy from "./sortListBy";
import {Result, ReliefType, SupportType, SortOptionType} from "../../types";
import { makeResult } from "./testDataHelpers";

describe("sortListBy", () => {
  const result1 = makeResult({
    id: 1,
    name: "result 1",
    supportType: SupportType.Loan,
    interestRate: 0.01,
    dateAdded: "Fri, 05 Jun 2020 00:00:00 GMT",
    maxAwardAmount: 10000000,
    reliefType: ReliefType.COVID,
    deadline: "Fri, 20 Sep 2019 00:00:00 GMT",
  });
  const result2 = makeResult({
    id: 2,
    name: "result 2",
    supportType: SupportType.Grant,
    interestRate: null,
    dateAdded: "Wed, 10 Jun 2020 00:00:00 GMT",
    maxAwardAmount: null,
    reliefType: ReliefType.ProtestDamage,
    deadline: "Thu, 16 Apr 2020 00:00:00 GMT",
  });
  const result3 = makeResult({
    id: 3,
    name: "result 3",
    supportType: SupportType.Loan,
    interestRate: 0,
    dateAdded: "Wed, 10 Jun 2020 00:00:00 GMT",
    maxAwardAmount: 500,
    reliefType: ReliefType.Both,
    deadline: "Mon, 15 Jun 2020 00:00:00 GMT",
  });
  const result4 = makeResult({
    id: 4,
    name: "result 4",
    supportType: SupportType.Loan,
    interestRate: 0.0375,
    dateAdded: "Fri, 05 Jun 2020 00:00:00 GMT",
    maxAwardAmount: 20000,
    reliefType: ReliefType.COVID,
    deadline: null,
  });
  const result5 = makeResult({
    id: 5,
    name: "result 5",
    supportType: SupportType.Loan,
    interestRate: 0,
    dateAdded: "Fri, 01 Jun 2020 00:00:00 GMT",
    maxAwardAmount: null,
    reliefType: ReliefType.COVID,
    deadline: null,
  });
  const result6 = makeResult({
    id: 6,
    name: "result 6",
    supportType: SupportType.Loan,
    interestRate: null,
    dateAdded: "Fri, 02 Jun 2020 00:00:00 GMT",
    maxAwardAmount: null,
    reliefType: ReliefType.COVID,
    deadline: null,
  });

  const results: Result[] = [result1, result2, result3, result4, result5];

  it("Should return a new list and not mutate the given list ", () => {
    const output = sortListBy(results, SortOptionType.None);
    expect(output).not.toBe(results);
  });

  describe("Sorting by award amount", () => {
    it("places results with null award amount at the end", () => {
      const results: Result[] = [result5, result1];
      const answer: Result[] = [result1, result5];
      expect(sortListBy(results, SortOptionType.AwardAmountHighToLow)).toEqual(
        answer
      );
      expect(sortListBy(results, SortOptionType.AwardAmountLowToHigh)).toEqual(
        answer
      );
    });
    it("sorts results from high to low award amounts when sort option is AwardAmountHighToLow", () => {
      const answer: Result[] = [result1, result4, result3, result2, result5];
      const highToLow = sortListBy(
        results,
        SortOptionType.AwardAmountHighToLow
      );
      expect(highToLow).toEqual(answer);
    });
    it("sorts results from low to high award amounts when sort option is AwardAmountLowToHigh", () => {
      const answer: Result[] = [result3, result4, result1, result2, result5];
      const lowToHigh = sortListBy(
        results,
        SortOptionType.AwardAmountLowToHigh
      );
      expect(lowToHigh).toEqual(answer);
    });
  });

  describe("Sorting by interest", () => {
    it("places results with non loan support types at the end", () => {
      const results: Result[] = [result2, result1];
      const answer: Result[] = [result1, result2];
      expect(sortListBy(results, SortOptionType.InterestLowToHigh)).toEqual(
        answer
      );
      expect(sortListBy(results, SortOptionType.InterestHighToLow)).toEqual(
        answer
      );
    });

    it("places results with support type loan and null interest rates at the end", () => {
      const results: Result[] = [result6, result1];
      const answer: Result[] = [result1, result6];
      expect(sortListBy(results, SortOptionType.InterestLowToHigh)).toEqual(
        answer
      );
      expect(sortListBy(results, SortOptionType.InterestHighToLow)).toEqual(
        answer
      );
    });

    it("sorts results from low to high interest rates when sort option is InterestLowToHigh ", () => {
      const answer: Result[] = [result3, result5, result1, result4, result2];
      expect(sortListBy(results, SortOptionType.InterestLowToHigh)).toEqual(
        answer
      );
    });

    it("sorts results from high to low interest rates when sort option is InterestHighToLow ", () => {
      const answer: Result[] = [result4, result1, result3, result5, result2];
      expect(sortListBy(results, SortOptionType.InterestHighToLow)).toEqual(
        answer
      );
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
