import {applyFilters, matchGroup} from "./filterHelpers";
import {makeResult} from "./testDataHelpers";
import {CurrentFilters, Result} from "../../types";

describe("matchGroup", () => {
  it("returns true for results that match at least one selected filter in a group", () => {
    const result1 = makeResult({sfCounty: true, alamedaCounty: false});
    const result2 = makeResult({sfCounty: false, alamedaCounty: true});
    const result3 = makeResult({sfCounty: true, alamedaCounty: true});

    const currentFilters: CurrentFilters = {
      county: ["sfCounty", "alamedaCounty"],
    };

    const tests: [Result, boolean][] = [
      [result1, true],
      [result2, true],
      [result3, true],
    ];
    tests.forEach(([result, expectedMatch]) => {
      expect(
        matchGroup({
          result,
          group: "county",
          currentFilters,
        })
      ).toBe(expectedMatch);
    });
  });
});

describe("applyFilters", () => {
  it("returns an empty array when there are no results", () => {
    expect(applyFilters([], {})).toEqual([]);
  });

  it("returns all results when there are no active filters", () => {
    const results = [
      makeResult({id: 1}),
      makeResult({id: 2}),
      makeResult({id: 3}),
    ];
    const filteredResults = applyFilters(results, {});
    expect(filteredResults).toEqual(results);
  });

  it("returns results that match all groups with active filters", () => {
    const result1 = makeResult({id: 1, sfCounty: true, blackOwned: true});
    const result2 = makeResult({id: 2, sfCounty: true, blackOwned: false});
    const result3 = makeResult({id: 3, sfCounty: false, blackOwned: true});

    const currentFilters = {
      county: ["sfCounty"],
      category: ["blackOwned"],
    };

    const filteredResults = applyFilters(
      [result1, result2, result3],
      currentFilters
    );
    expect(filteredResults).toEqual([result1]);
  });
});
