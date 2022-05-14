import {getResults} from "./getResults";
import {ReliefType, Result, ResultResponse, SupportType} from "../types";
import {standardizeFormat} from "./responseFormatter";

const data = require("../assets/data/new_results.json");

describe("getResults", () => {
  it("fetches data successfully from the API", async () => {
    const expectedResults = [
      {
        name: data.results[0].name,
        supportType: data.results[0].supportType,
        interestRate: data.results[0].interestRate,
      },
    ];

    const actualResults: Result[] = await getResults();
    expect(actualResults[0].name).toEqual(expectedResults[0].name);
    expect(actualResults[0].supportType).toEqual(expectedResults[0].supportType);
    expect(actualResults[0].interestRate).toEqual(expectedResults[0].interestRate);
  });
});

describe("standardizeFormat", () => {
  it("transforms a result into a predictable format", () => {
    const rawResult: ResultResponse = {
      lte100: "Yes",
      lte500: "Yes",
      gt750: "No",
      lte750: "No",
      alamedaCounty: "Yes",
      awardAmountSpecified: "Yes",
      awardType: "Onetime",
      blackOwned: "No",
      category: "All",
      chinese: "Yes",
      contraCostaCounty: "Yes",
      county: "All",
      dateAdded: "Fri, 05 Jun 2020 00:00:00 GMT",
      deadline: null,
      deadlineApplicable: "Unknown",
      description:
        "Funds can only be used to pay payroll costs (including benefits), interest on mortgages, rent, and utilities. The loan will be fully forgiven as long as 75% of the funds are used to cover payroll costs over an eight week period after the loan is made",
      english: "Yes",
      entityName: "Municipal Gov",
      id: 0,
      interestRate: 0.01,
      interestRateApplicable: "Yes and Reported",
      lgbtq: "No",
      maxAwardAmount: 10000000,
      name: "SBA Payment Protection Program",
      nonProfit: "Unknown",
      reliefType: "COVID",
      sanMateoCounty: "Yes",
      santaClaraCounty: "Yes",
      sectorType: "Public",
      sfCounty: "Yes",
      spanish: "Yes",
      supportType: "Loan",
      supportedEntity: "Government",
      websiteUrl: "https://oewd.org/businesses-impacted-covid-19#Loans",
      womenOwned: "No",
    };

    const transformedResult: Result = {
      alamedaCounty: true,
      blackOwned: false,
      chinese: true,
      contraCostaCounty: true,
      covid19: true,
      dateAdded: "Fri, 05 Jun 2020 00:00:00 GMT",
      deadline: null,
      deadlineApplicable: "Unknown",
      doesNotHaveInterest: false,
      employs100OrFewer: true,
      employs500OrFewer: true,
      employs750More: false,
      employs750OrFewer: false,
      hasInterest: true,
      id: 0,
      interestRate: 0.01,
      lgbtq: false,
      maxAwardAmount: 10000000,
      name: "SBA Payment Protection Program",
      nonProfit: false,
      private: false,
      protestDamage: false,
      public: true,
      reliefType: ReliefType.COVID,
      sanMateoCounty: true,
      santaClaraCounty: true,
      sfCounty: true,
      smallBusiness: false,
      spanish: true,
      supportType: SupportType.Loan,
      websiteUrl: "https://oewd.org/businesses-impacted-covid-19#Loans",
    };
    expect(standardizeFormat(rawResult)).toEqual(transformedResult);
  });
});
