import {Result, SortOptionType} from "../../types";

import * as _ from "lodash";
// const _ = require("lodash");

/**
 * Sorts a copy of the given list with the given option and returns the copy.
 * @param list of results
 * @param option sort option type
 */
export default (list: Result[], option: SortOptionType): Result[] => {
  let newlySorted = [];

  switch (option) {
    case SortOptionType.AwardAmountLowToHigh:
      return _.orderBy(list, ['maxAwardAmount'], ['asc']);
    case SortOptionType.AwardAmountHighToLow:
      return _.orderBy(list, ['maxAwardAmount'], ['desc']);
    case SortOptionType.InterestLowToHigh:
      return _.orderBy(list, ['interestRate'], ['asc']);
    case SortOptionType.InterestHighToLow:
      list.forEach((result) => {
        if(result.interestRate === null) {
          result.interestRate = -999;
        }
      });
      newlySorted =  _.orderBy(list, ['interestRate'], ['desc']);
      newlySorted.forEach((result: Result) => {
        if (result.interestRate === -999) {
          result.interestRate = null;
        }
      });
      return newlySorted;
    case SortOptionType.DueDateNewToOld:
      return;
    case SortOptionType.DueDateOldToNew:
      return;
  }
};
