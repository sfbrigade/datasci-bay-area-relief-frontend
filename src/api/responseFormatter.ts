import {ResultResponse} from "../types";

const convertToBoolean = (value: string | null) => !!value && value === "Yes";

export const standardizeFormat = (r: ResultResponse) => {
  return {
    id: r.id,
    name: r.name,
    supportType: r.supportType,
    interestRate: r.interestRate,
    dateAdded: r.dateAdded,
    maxAwardAmount: r.maxAwardAmount,
    reliefType: r.reliefType,
    deadline: r.deadline,
    deadlineApplicable: r.deadlineApplicable,
    smallBusiness: r.nonProfit === "Businesses Only" || r.nonProfit === "All",
    nonProfit: r.nonProfit === "Non-Profits Only" || r.nonProfit === "All",
    employs100OrFewer: convertToBoolean(r.lte100),
    employs500OrFewer: convertToBoolean(r.lte500),
    employs750OrFewer: convertToBoolean(r.lte750),
    employs750More: convertToBoolean(r.gt750),
    sanMateoCounty: convertToBoolean(r.sanMateoCounty),
    contraCostaCounty: convertToBoolean(r.contraCostaCounty),
    santaClaraCounty: convertToBoolean(r.santaClaraCounty),
    sfCounty: convertToBoolean(r.alamedaCounty),
    alamedaCounty: convertToBoolean(r.alamedaCounty),
    hasInterest:
      r.interestRateApplicable === "Yes and Reported" ||
      r.interestRateApplicable === "Yes but not Reported ",
    doesNotHaveInterest: r.interestRateApplicable === "No",
    covid19: r.reliefType === "Both" || r.reliefType === "COVID",
    protestDamage:
      r.reliefType === "Both" || r.reliefType === "Protest Damage",
    blackOwned: convertToBoolean(r.blackOwned),
    lgbtq: convertToBoolean(r.lgbtq),
    public: r.sectorType === "Public",
    private: r.sectorType === "Private",
    spanish: convertToBoolean(r.spanish),
    chinese: convertToBoolean(r.chinese),
    websiteUrl: r.websiteUrl,
  };
};
