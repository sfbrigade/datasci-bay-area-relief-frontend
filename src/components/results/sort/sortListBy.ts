import {SortOptionType, Result, SupportType} from "../../../types";
import Moment from "moment";
import _ from "lodash";

/**
 * TODO use lodash
 * Sorts a copy of the given list with the given option and returns the copy.
 * @param {Result[]} list - filteredResults from ../Results.tsx
 * @param {SortOptionType} option - Sort order
 */
export default (list: Result[], option: SortOptionType): Result[] => {
  let sortedList = [...list];
  switch (+option) {
    case SortOptionType.AwardAmountHighToLow:
      sortedList = _.orderBy(sortedList, [(element) => {
        if (element.maxAwardAmount === null) {
          return 0;
        }
        return element.maxAwardAmount;
      }], ['desc']);
      break;
    case SortOptionType.AwardAmountLowToHigh:
      sortedList = _.orderBy(sortedList, [(element) => {
        if (element.maxAwardAmount === null) {
          return 0;
        }
        return element.maxAwardAmount;
      }], ['asc']);
      break;
    case SortOptionType.InterestLowToHigh:
      sortedList.sort((a, b) => {
        if (
          a.supportType === SupportType.Loan &&
          b.supportType === SupportType.Loan
        ) {
          if (a.interestRate !== null && b.interestRate !== null) {
            return a.interestRate - b.interestRate;
          } else if (a.interestRate !== null && b.interestRate === null) {
            return -1;
          } else if (a.interestRate === null && b.interestRate !== null) {
            return 1;
          } else {
            return 0;
          }
        } else if (
          a.supportType === SupportType.Loan &&
          b.supportType !== SupportType.Loan
        ) {
          return -1;
        } else if (
          a.supportType !== SupportType.Loan &&
          b.supportType === SupportType.Loan
        ) {
          return 1;
        } else {
          return 0;
        }
      });
      break;
    case SortOptionType.InterestHighToLow:
      sortedList.sort((a, b) => {
        if (
          a.supportType === SupportType.Loan &&
          b.supportType === SupportType.Loan
        ) {
          if (a.interestRate !== null && b.interestRate !== null) {
            return b.interestRate - a.interestRate;
          } else if (a.interestRate !== null && b.interestRate === null) {
            return -1;
          } else if (a.interestRate === null && b.interestRate !== null) {
            return 1;
          } else {
            return 0;
          }
        } else if (
          a.supportType === SupportType.Loan &&
          b.supportType !== SupportType.Loan
        ) {
          return -1;
        } else if (
          a.supportType !== SupportType.Loan &&
          b.supportType === SupportType.Loan
        ) {
          return 1;
        } else {
          return 0;
        }
      });
      break;
    case SortOptionType.DueDateOldToNew:
      sortedList = _.orderBy(sortedList, [(element) => {
        if (!element.deadline) {
          return Moment().toDate();
        }
        return Moment(element.deadline).toDate();
      }], ['asc']);
      break;
    case SortOptionType.DueDateNewToOld:
      sortedList = _.orderBy(sortedList, [(element) => {
        if (!element.deadline) {
          return Moment().toDate();
        }
        return Moment(element.deadline).toDate();
      }], ['desc']);
      break;
    case SortOptionType.None:
    default:
      break;
  }
  return sortedList;
};
