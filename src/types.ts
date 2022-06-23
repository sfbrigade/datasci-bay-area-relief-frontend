import {MemoryHistory} from "history/createMemoryHistory";
import {ChangeEvent, Dispatch, SetStateAction} from "react";

// export enum County {
//   SanFrancisco = "San Francisco",
//   Alameda = "Alameda",
//   SanMateo = "San Mateo",
//   ContraCosta = "Contra Costa",
//   SantaClara = "Santa Clara",
//   Any = "Any",
// }

export enum County {
  SanFrancisco = "sfCounty",
  Alameda = "alamedaCounty",
  SanMateo = "sanMateoCounty",
  ContraCosta = "contraCostaCounty",
  SantaClara = "santaClaraCounty",
  Any = "any",
}

// export enum OrgType {
//   SmallBusiness = "Small business",
//   NonProfit = "Non-profit",
// }

export enum OrgType {
  SmallBusiness = "smallBusiness",
  NonProfit = "nonProfit",
  Any = "any",
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

export interface ResultWrapperType {
  initialEntries?: Array<string>;
  initialResults: Result[];
}

export interface HomeSearchFormTypes {
  orgType?: string[];
  county?: string[];
}

export interface GlobalStateContextType {
  setCurrentFilters?: Dispatch<SetStateAction<CurrentFilters>>;
  currentFilters?: CurrentFilters;
  handleFilterChange?: (
    group: keyof CurrentFilters
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  setIsFilterOpen?: Dispatch<SetStateAction<boolean>>;
  isFilterOpen: boolean;
  setInitialData?: Dispatch<SetStateAction<Result[]>>;
  initialData?: Result[];
  filteredResults?: Result[];
  setFilteredResults?: Dispatch<SetStateAction<Result[]>>;
  handleClearFilters?: () => void;
}
