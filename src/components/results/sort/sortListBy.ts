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
      console.log("High to Low!");
      sortedList = _.orderBy(sortedList, [(element) => {
        return element.maxAwardAmount;
      }], ['desc']);
      /*
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
       */
      break;
    case SortOptionType.AwardAmountLowToHigh:
      sortedList = _.orderBy(sortedList, [(element) => {
        return element.maxAwardAmount;
      }], ['asc']);
      /*
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
       */
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
        return Moment(a.deadline).diff(Moment(b.deadline));
      });
      break;
    case SortOptionType.DueDateNewToOld:
      sortedList = _.orderBy(sortedList, [(element) => {
        return element.deadline;
      }], ['desc']);
      /*
      sortedList.sort((a, b) => {
        const aMoment = Moment(a.deadline);
        const bMoment = Moment(b.deadline);
        console.log("SORTING NEW TO OLD!!!");
        if ((a.deadlineApplicable === 'No' || a.deadlineApplicable === 'Ongoing' || a.deadlineApplicable === 'Unknown')
            && b.deadlineApplicable === 'Yes') {
          //a is greater unless b is not expired.
          if (bMoment.isValid() && bMoment.isAfter(Moment())) {
            return 1;
          } else {
            return -1;
          }
        }
        if (a.deadlineApplicable === 'Yes' &&
          (b.deadlineApplicable === 'No' || b.deadlineApplicable === 'Ongoing' || b.deadlineApplicable === 'Unknown')) {
          //b is greater unless a is not expired.
          if (aMoment.isValid() && aMoment.isAfter(Moment())) {
            return -1;
          } else {
            return 1;
          }
        }
        if ((a.deadlineApplicable === 'No' || a.deadlineApplicable === 'Ongoing' || a.deadlineApplicable === 'Unknown') &&
          (b.deadlineApplicable === 'No' || b.deadlineApplicable === 'Ongoing' || b.deadlineApplicable === 'Unknown')) {
          return 0;
        }

        if (a.deadlineApplicable === 'Yes' && b.deadlineApplicable === 'Yes') {
          if (!aMoment.isValid() && bMoment.isValid()) {
            if (Moment().diff(bMoment) < 0) {
              console.log("We think this is expired:", Moment(b.deadline).format("mmddyy"));
            }
          }
          // if(aMoment.isValid() && !bMoment.isValid()) {
          //
          // }
          // if (!aMoment.isValid() && !bMoment.isValid()) {
          //
          // }
          //both are valid
          //is either one expired? rank them lower


          // if (a.deadline === null && b.deadline !== null) {
          //   if (Moment().diff(Moment(b.deadline)) < 0) {
          //     console.log("We think this is expired:", Moment(b.deadline).format("mmddyy"));
          //   }
          //   return 1;
          // }
          // if (a.deadline !== null && b.deadline === null) {
          //   return -1;
          // }
          // if (a.deadline === null && b.deadline === null) {
          //   return 0;
          // }
          return Moment(b.deadline).diff(Moment(a.deadline));
        }
      });
       */
      break;
    case SortOptionType.None:
    default:
      break;
  }
  return sortedList;
};
