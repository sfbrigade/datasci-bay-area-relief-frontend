import { MemoryHistory } from "history/createMemoryHistory";
import {Dispatch, SetStateAction} from "react";

export enum County {
  SanFrancisco = "San Francisco",
  Alameda = "Alameda",
  SanMateo = "San Mateo",
  ContraCosta = "Contra Costa",
  SantaClara = "Santa Clara",
  Any = "Any",
}

export enum OrgType {
  SmallBusiness = "Small business",
  NonProfit = "Non-profit",
}

export interface FilterOptions {
  businessType: OrgType;
  county: County;
}

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

export interface DonorInfo {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  county: County;
  orgType: OrgType;
  comments: string;
  dateAdded: string;
  reliefType: ReliefType;
  supportType: SupportType;
  websiteUrl: string;
}

export enum SupportType {
  Loan = "Loan",
  Grant = "Grant",
  Insurance = "Insurance",
}

export enum ReliefType {
  COVID = "COVID",
  ProtestDamage = "Protest Damage",
  Both = "Both",
}

export enum PaymentMethods {
  PayPal = "PayPal",
  Venmo = "Venmo",
  CashApp = "Cashapp",
  Check = "Check",
  Bitcoin = "Bitcoin",
  Other = "Other",
}

export enum OrgList {
  LocalGoFundMe = "GoFundMe in the Bay area",
  RedWoodCity = "Redwood City Small Business Relief Fund",
  UCBerkleyLaw = "UC Berkeley Law Pro Bono",
  COVIDFund = "COVID-19 Regional Response Fund",
  NorCalFund = "Norcal Small Business Relief Fund",
  OneFairWage = "One Fair Wage",
  BerkleyFund = "Berkeley Relief Fund",
  BerkleyAid = "Berkeley Mutual Aid",
  ChinaTowns = "Save Our China Towns",
  MEDA =  "Mission Economic Development Agency (MEDA)",
  BLM = "Black Lives (BLM)",
  BAOBOB = "Bay Area Organization of Black Owned Businesses (BAOBOB)",
  BlackRestaurants = "Black Owned Restaurants",
  BlackOwnedFund = "Black Owned Business ReliefFund",
  ChamberOfCommerce = "Silicon Valley Central Chamber of Commerce",
  SFGov = "San Francisco Government",
  QueerWay = "Queer Way Out",
  JamesBeard = "James Beard Foundation",
  JamesBeardWeb = "James Beard Webinars",

}

export type LocationState = {
  toHome?: boolean | undefined;
  toAbout?: boolean | undefined;
};

export enum SortOptionType {
  DueDateNewToOld,
  DueDateOldToNew,
  InterestHighToLow,
  InterestLowToHigh,
  AwardAmountLowToHigh,
  AwardAmountHighToLow,
  None,
}

export interface CurrentFilters {
  orgType?: string[];
  county?: string[];
  employees?: string[];
  hasInterest?: string[];
  reliefType?: string[];
  category?: string[];
  sector?: string[];
  language?: string[];
}

export interface AddReliefBody {
  firstName?: string;
  lastName?: string;
  email: string;
  phoneNumber?: string;
  url: string;
  county?: string;
  orgType?: string;
  reliefType?: string;
  comments?: string;
}

export interface ResultResponse {
  lte100: string;
  lte500: string;
  gt750: string;
  lte750: string;
  alamedaCounty: string;
  awardAmountSpecified: string;
  awardType: string;
  blackOwned: string;
  category: string;
  chinese: string;
  contraCostaCounty: string;
  county: string;
  dateAdded: string;
  deadline: string | null;
  deadlineApplicable: string;
  description: string;
  english: string;
  entityName: string;
  id: number;
  interestRate: number;
  interestRateApplicable: string;
  lgbtq: string;
  maxAwardAmount: number;
  name: string;
  nonProfit: string;
  reliefType: string;
  sanMateoCounty: string;
  santaClaraCounty: string;
  sectorType: string;
  sfCounty: string;
  spanish: string;
  supportType: string;
  supportedEntity: string;
  websiteUrl: string;
  womenOwned: string;
}

export interface HeaderProps {
  setIsFilterOpen: Dispatch<boolean>;
  isFilterOpen: boolean;
  currentFilters: CurrentFilters;
  setCurrentFilters: Dispatch<SetStateAction<CurrentFilters>>;
  filteredResults: Result[];
}

export interface ResultsProps {
  setIsFilterOpen: Dispatch<boolean>;
  isFilterOpen: boolean;
  currentFilters: CurrentFilters;
  setResults: Dispatch<SetStateAction<Result[]>>;
  setCurrentFilters: Dispatch<SetStateAction<CurrentFilters>>;
  filteredResults: Result[];
}

export interface AddResourceProps {
  isFilterOpen: Dispatch<boolean>;
  setIsFilterOpen: boolean;
  currentFilters: CurrentFilters;
  setDonorInfo: Dispatch<SetStateAction<DonorInfo[]>>;
  donorInfo: DonorInfo[];
}

export interface ResultWrapperType {
  history: MemoryHistory<{}>;
  results: Result[];
}
