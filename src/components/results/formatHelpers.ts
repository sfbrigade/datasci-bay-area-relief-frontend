import moment from "moment";
import {ReliefType, SupportType} from "../../types";

export const formatInterestRate = (
  interestRate: number | null,
  supportType: SupportType
): string => {
  if (supportType === SupportType.Grant) return "No Interest";
  if (interestRate === null) return "Unknown";
  return interestRate === 0 ? "No Interest" : `${interestRate * 100}% Interest`;
};

export const formatDate = (dateString: string) => {
  return moment(dateString).format("M/D/YY");
};

export const formatAwardAmount = (amount: number | null) => {
  return amount ? `$${amount.toLocaleString("en-US")}` : "Unspecified Amount";
};

export const formatReliefType = (reliefType: ReliefType) => {
  if (reliefType === ReliefType.Both) return "COVID and Protest relief";
  return reliefType + " relief";
};
