import {act, RenderResult} from "@testing-library/react";
import {MemoryHistory} from "history";
import { ResultResponse } from "./types";

export const idleForIO = async (): Promise<void> => {
  await act(async () => {
    await new Promise((resolve) => resolve());
  });
};

export const apiResponse = {
  data: {
    results: [
      {
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
      } as ResultResponse,
    ],
  },
};

export type RenderResultWithHistory = RenderResult & {history: MemoryHistory};