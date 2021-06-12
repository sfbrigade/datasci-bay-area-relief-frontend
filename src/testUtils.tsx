import React from "react";
import {act, render, RenderResult} from "@testing-library/react";
import {createMemoryHistory, MemoryHistory} from "history";
import {Router} from "react-router-dom";
import {ReliefType, Result, SupportType} from "./types";

export const idleForIO = async (): Promise<void> => {
  await act(async () => {
    await new Promise((resolve) => setImmediate(resolve));
  });
};

export type RenderResultWithHistory = RenderResult & {history: MemoryHistory};

type RenderWithRouterFunction = (
  ui: React.ReactElement,
  routeOptions?: {path?: string; history?: MemoryHistory}
) => RenderResultWithHistory;

export const renderWithRouter: RenderWithRouterFunction = (
  ui,
  {path = "/", history = createMemoryHistory({initialEntries: [path]})} = {}
) => {
  const Wrapper: React.FC = ({children}) => (
    <Router history={history}>{children}</Router>
  );
  return {
    ...render(ui, {wrapper: Wrapper}),
    history,
  };
};

/*
export interface Result {
  id: number;
  name: string;
  supportType: SupportType;
  interestRate: number | null;
  dateAdded: string;
  maxAwardAmount: number | null;
  reliefType: ReliefType;
  deadline: string | null;
  deadlineApplicable: string | null;
  smallBusiness: boolean;
  nonProfit: boolean;
  employs100OrFewer: boolean;
  employs500OrFewer: boolean;
  employs750OrFewer: boolean;
  employs750More: boolean;
  sanMateoCounty: boolean;
  contraCostaCounty: boolean;
  santaClaraCounty: boolean;
  sfCounty: boolean;
  alamedaCounty: boolean;
  hasInterest: boolean;
  doesNotHaveInterest: boolean;
  covid19: boolean;
  protestDamage: boolean;
  blackOwned: boolean;
  lgbtq: boolean;
  public: boolean;
  private: boolean;
  spanish: boolean;
  chinese: boolean;
  websiteUrl: string;
}

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
 */

export const testResult: Result = {
  alamedaCounty: true,
  blackOwned: true,
  chinese: false,
  contraCostaCounty: false,
  covid19: true,
  deadlineApplicable: "Unknown",
  doesNotHaveInterest: false,
  employs100OrFewer: false,
  employs500OrFewer: true,
  employs750More: false,
  employs750OrFewer: false,
  hasInterest: true,
  lgbtq: false,
  nonProfit: true,
  private: false,
  protestDamage: false,
  public: true,
  sanMateoCounty: false,
  santaClaraCounty: false,
  sfCounty: false,
  smallBusiness: true,
  spanish: false,
  websiteUrl: "https://example.com",
  id: 12345,
  name: "I'm a big expensive loan",
  supportType: SupportType.Loan,
  interestRate: 0.01,
  dateAdded: "Fri, 05 Jun 2020 00:00:00 GMT",
  maxAwardAmount: 10000000,
  reliefType: ReliefType.COVID,
  deadline: null
};
export const testResult2: Result = {
  alamedaCounty: true,
  blackOwned: true,
  chinese: false,
  contraCostaCounty: false,
  covid19: true,
  deadlineApplicable: "Unknown",
  doesNotHaveInterest: false,
  employs100OrFewer: false,
  employs500OrFewer: true,
  employs750More: false,
  employs750OrFewer: false,
  hasInterest: true,
  lgbtq: false,
  nonProfit: false,
  private: false,
  protestDamage: false,
  public: true,
  sanMateoCounty: false,
  santaClaraCounty: false,
  sfCounty: false,
  smallBusiness: true,
  spanish: false,
  websiteUrl: "https://example.com",
  id: 12345,
  name: "I'm a big expensive loan",
  supportType: SupportType.Loan,
  interestRate: 0.01,
  dateAdded: "Fri, 05 Jun 2020 00:00:00 GMT",
  maxAwardAmount: 10000000,
  reliefType: ReliefType.COVID,
  deadline: null
};

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
