/* eslint @typescript-eslint/camelcase: 0 */
import axios from "axios";
import { getResults } from "./axiosApi";
import { Result } from "../types";

jest.mock("axios");

describe("getResults", () => {
  it("fetches data successfully from the API", async () => {
    const response = {
      data: {
        json_list: [
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
            women_owned: "No"
          }
        ]
      }
    };
    (axios.get as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve(response)
    );

    const actualResponse: Result[] = await getResults();

    await expect(actualResponse).toEqual(response.data.json_list);
  });
});
