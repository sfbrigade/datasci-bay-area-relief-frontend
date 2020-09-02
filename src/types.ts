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
  _100_or_fewer: string;
  _500_or_fewer: string;
  _750_more: string;
  _750_or_fewer: string;
  alameda_county: string;
  award_amount_specified: string;
  award_type: string;
  black_owned: string;
  category: string;
  chinese: string;
  contra_costa_county: string;
  county: string;
  date_added: string;
  deadline: null;
  deadline_applicable: string;
  description: string;
  english: string;
  entity_name: string;
  id: number;
  interest_rate: number;
  interest_rate_applicable: string;
  lgbtq: string;
  max_award_amount: number;
  name: string;
  non_profit: string;
  relief_type: string;
  san_mateo_county: string;
  santa_clara_county: string;
  sector_type: string;
  sf_county: string;
  spanish: string;
  support_type: string;
  supported_entity: string;
  website_url: string;
  women_owned: string;
}
