export enum County {
  SanFrancisco = "San Francisco",
  Alameda = "Alameda",
  SanMateo = "San Mateo",
  ContraCosta = "Contra Costa",
  SantaClara = "Santa Clara",
  Any = "Any",
}

export enum BusinessType {
  SmallBusiness = "Small business",
  NonProfit = "Non-profit",
}

export interface FilterOptions {
  businessType: BusinessType;
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
}
