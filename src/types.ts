import { MemoryHistory } from "history/createMemoryHistory";

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
  setIsFilterOpen: any;
  isFilterOpen: any;
  currentFilters: CurrentFilters;
  setCurrentFilters: React.Dispatch<React.SetStateAction<CurrentFilters>>;
  filteredResults: Result[];
}

export interface ResultsProps {
  isFilterOpen: any;
  setIsFilterOpen: any;
  currentFilters: CurrentFilters;
  setResults: React.Dispatch<React.SetStateAction<Result[]>>;
  setCurrentFilters: React.Dispatch<React.SetStateAction<CurrentFilters>>;
  filteredResults: Result[];
}

export interface ResultWrapperType {
  history: MemoryHistory<{}>;
  results: Result[];
}