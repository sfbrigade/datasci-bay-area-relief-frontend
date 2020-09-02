import {ReliefType, Result, SupportType} from "../../types";
import moment from "moment";

export const makeResult = (partial: Partial<Result> = {}): Result => {
  const id = partial.id ?? 1;
  return {
    id,
    name: partial.name ?? `Result ${id}`,
    supportType: partial.supportType ?? SupportType.Loan,
    interestRate: partial.interestRate ?? null,
    dateAdded: partial.dateAdded ?? moment().format(),
    maxAwardAmount: partial.maxAwardAmount ?? null,
    reliefType: partial.reliefType ?? ReliefType.COVID,
    deadline: partial.deadline ?? null,
    blackOwned: partial.blackOwned ?? false,
    lgbtq: partial.lgbtq ?? false,
    sfCounty: partial.sfCounty ?? false,
    alamedaCounty: partial.alamedaCounty ?? false,
    chinese: partial.chinese ?? false,
    contraCostaCounty: partial.contraCostaCounty ?? false,
    covid19: partial.covid19 ?? false,
    deadlineApplicable: partial.deadlineApplicable ?? "Unknown",
    doesNotHaveInterest: partial.doesNotHaveInterest ?? false,
    employs100OrFewer: partial.employs100OrFewer ?? false,
    employs500OrFewer: partial.employs500OrFewer ?? false,
    employs750More: partial.employs750More ?? false,
    employs750OrFewer: partial.employs750OrFewer ?? false,
    hasInterest: partial.hasInterest ?? false,
    nonProfit: partial.nonProfit ?? false,
    private: partial.private ?? false,
    protestDamage: partial.protestDamage ?? false,
    public: partial.public ?? false,
    sanMateoCounty: partial.sanMateoCounty ?? false,
    santaClaraCounty: partial.santaClaraCounty ?? false,
    smallBusiness: partial.smallBusiness ?? false,
    spanish: partial.spanish ?? false,
  };
};
