import {ResultResponse} from "../types";

const convertToBoolean = (value: string | null) => !!value && value === "Yes";
export const standardizeFormat = (r: ResultResponse) => {
  return {
    id: r.id,
    name: r.name,
    supportType: r.support_type,
    interestRate: r.interest_rate,
    dateAdded: r.date_added,
    maxAwardAmount: r.max_award_amount,
    reliefType: r.relief_type,
    deadline: r.deadline,
    deadlineApplicable: r.deadline_applicable,
    smallBusiness: r.non_profit === "Businesses Only" || r.non_profit === "All",
    nonProfit: r.non_profit === "Non-Profits Only" || r.non_profit === "All",
    employs100OrFewer: convertToBoolean(r._100_or_fewer),
    employs500OrFewer: convertToBoolean(r._500_or_fewer),
    employs750OrFewer: convertToBoolean(r._750_or_fewer),
    employs750More: convertToBoolean(r._750_more),
    sanMateoCounty: convertToBoolean(r.san_mateo_county),
    contraCostaCounty: convertToBoolean(r.contra_costa_county),
    santaClaraCounty: convertToBoolean(r.santa_clara_county),
    sfCounty: convertToBoolean(r.alameda_county),
    alamedaCounty: convertToBoolean(r.alameda_county),
    hasInterest:
      r.interest_rate_applicable === "Yes and Reported" ||
      r.interest_rate_applicable === "Yes but not Reported ",
    doesNotHaveInterest: r.interest_rate_applicable === "No",
    covid19: r.relief_type === "Both" || r.relief_type === "COVID",
    protestDamage:
      r.relief_type === "Both" || r.relief_type === "Protest Damage",
    blackOwned: convertToBoolean(r.black_owned),
    lgbtq: convertToBoolean(r.lgbtq),
    public: r.sector_type === "Public",
    private: r.sector_type === "Private",
    spanish: convertToBoolean(r.spanish),
    chinese: convertToBoolean(r.chinese),
  };
};
