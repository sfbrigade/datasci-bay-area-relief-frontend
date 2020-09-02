/* eslint @typescript-eslint/camelcase: 0 */
import axios from "axios";
import {getResults} from "./axiosApi";
import {ReliefType, Result, SupportType} from "../types";
import {standardizeFormat} from "./responseFormatter";

jest.mock("axios");

describe("getResults", () => {
  it("fetches data successfully from the API", async () => {
    const apiResponse = {
      data: {
        results: [
          {
            _100_or_fewer: "Yes",
            _500_or_fewer: "Yes",
            _750_more: "No",
            _750_or_fewer: "No",
            alameda_county: "Yes",
            award_amount_specified: "Yes",
            award_type: "Onetime",
            black_owned: "No",
            category: "All",
            chinese: "Yes",
            contra_costa_county: "Yes",
            county: "All",
            date_added: "Fri, 05 Jun 2020 00:00:00 GMT",
            deadline: null,
            deadline_applicable: "Unknown",
            description:
              "Funds can only be used to pay payroll costs (including benefits), interest on mortgages, rent, and utilities. The loan will be fully forgiven as long as 75% of the funds are used to cover payroll costs over an eight week period after the loan is made",
            english: "Yes",
            entity_name: "Municipal Gov",
            id: 0,
            interest_rate: 0.01,
            interest_rate_applicable: "Yes and Reported",
            lgbtq: "No",
            max_award_amount: 10000000,
            name: "SBA Payment Protection Program",
            non_profit: "Unknown",
            relief_type: "COVID",
            san_mateo_county: "Yes",
            santa_clara_county: "Yes",
            sector_type: "Public",
            sf_county: "Yes",
            spanish: "Yes",
            support_type: "Loan",
            supported_entity: "Government",
            website_url: "https://oewd.org/businesses-impacted-covid-19#Loans",
            women_owned: "No",
          },
        ],
      },
    };
    (axios.get as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve(apiResponse)
    );

    const expectedResults = [
      {
        name: apiResponse.data.results[0].name,
        supportType: apiResponse.data.results[0].support_type,
        interestRate: apiResponse.data.results[0].interest_rate,
      },
    ];

    const actualResults: Result[] = await getResults();

    actualResults.forEach((result, index) => {
      expect(result).toEqual(expect.objectContaining(expectedResults[index]));
    });
  });
});

describe("standardizeFormat", () => {
  it("transforms a result into a predictable format", () => {
    const rawResult = {
      _100_or_fewer: "Yes",
      _500_or_fewer: "Yes",
      _750_more: "No",
      _750_or_fewer: "No",
      alameda_county: "Yes",
      award_amount_specified: "Yes",
      award_type: "Onetime",
      black_owned: "No",
      category: "All",
      chinese: "Yes",
      contra_costa_county: "Yes",
      county: "All",
      date_added: "Fri, 05 Jun 2020 00:00:00 GMT",
      deadline: null,
      deadline_applicable: "Unknown",
      description:
        "Funds can only be used to pay payroll costs (including benefits), interest on mortgages, rent, and utilities. The loan will be fully forgiven as long as 75% of the funds are used to cover payroll costs over an eight week period after the loan is made",
      english: "Yes",
      entity_name: "Municipal Gov",
      id: 0,
      interest_rate: 0.01,
      interest_rate_applicable: "Yes and Reported",
      lgbtq: "No",
      max_award_amount: 10000000,
      name: "SBA Payment Protection Program",
      non_profit: "Unknown",
      relief_type: "COVID",
      san_mateo_county: "Yes",
      santa_clara_county: "Yes",
      sector_type: "Public",
      sf_county: "Yes",
      spanish: "Yes",
      support_type: "Loan",
      supported_entity: "Government",
      website_url: "https://oewd.org/businesses-impacted-covid-19#Loans",
      women_owned: "No",
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
    };
    expect(standardizeFormat(rawResult)).toEqual(transformedResult);
  });
});
