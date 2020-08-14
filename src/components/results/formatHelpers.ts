import moment from "moment";

export const formatInterestRate = (
  interestRate: number | null,
  supportType: string
): string => {
  if (supportType === "Grant") return "No Interest";
  if (interestRate === null) return "Unknown";
  return interestRate === 0 ? "No Interest" : `${interestRate * 100}% Interest`;
};

export const formatDate = (dateString: string) => {
  return moment(dateString).format("M/D/YY");
};

export const formatAwardAmount = (amount: number | null) => {
  return amount ? `$${amount.toLocaleString("en-US")}` : "Amount Unknown";
};

export const formatReliefType = (reliefType: string) => {
  if (reliefType === "Both") return "COVID and Protest Damage relief";
  return reliefType + " relief";
};
