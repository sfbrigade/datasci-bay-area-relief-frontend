import {SortOptionType, Result, SupportType} from "../../types";
import Moment from "moment";

/**
 * Sorts a copy of the given list with the given option and returns the copy.
 * @param list of results
 * @param option sort option type
 */
export default (list: Result[], option: SortOptionType): Result[] => {
  const sortedList = [...list];
  switch (+option) {
    case SortOptionType.AwardAmountHighToLow:
      sortedList.sort((a, b) => {
        if (a.maxAwardAmount !== null && b.maxAwardAmount !== null) {
          return b.maxAwardAmount - a.maxAwardAmount;
        } else if (a.maxAwardAmount !== null && b.maxAwardAmount === null) {
          return -1;
        } else if (a.maxAwardAmount === null && b.maxAwardAmount !== null) {
          return 1;
        } else {
          return 0;
        }
      });
      break;
    case SortOptionType.AwardAmountLowToHigh:
      sortedList.sort((a, b) => {
        if (a.maxAwardAmount !== null && b.maxAwardAmount !== null) {
          return a.maxAwardAmount - b.maxAwardAmount;
        } else if (a.maxAwardAmount !== null && b.maxAwardAmount === null) {
          return -1;
        } else if (a.maxAwardAmount === null && b.maxAwardAmount !== null) {
          return 1;
        } else {
          return 0;
        }
      });
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
      sortedList.sort((a, b) => {
        if (a.deadline === null && b.deadline !== null) {
          return 1;
        }
        if (a.deadline !== null && b.deadline === null) {
          return -1;
        }
        if (a.deadline === null && b.deadline === null) {
          return 0;
        }
        return Moment(b.deadline).diff(Moment(a.deadline));
      });
      break;
    case SortOptionType.DueDateNewToOld:
      sortedList.sort((a, b) => {
        if (a.deadline === null && b.deadline !== null) {
          return 1;
        }
        if (a.deadline !== null && b.deadline === null) {
          return -1;
        }
        if (a.deadline === null && b.deadline === null) {
          return 0;
        }
        return Moment(a.deadline).diff(Moment(b.deadline));
      });
      break;
    case SortOptionType.None:
    default:
      break;
  }
  return sortedList;
};
