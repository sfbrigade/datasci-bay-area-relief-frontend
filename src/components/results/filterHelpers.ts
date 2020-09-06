import {CurrentFilters, Result} from "../../types";

const isEmptyObject = (object: Record<string, any>) =>
  Object.keys(object).length === 0;

type MatchGroupArgs = {
  result: Result;
  group: string;
  currentFilters: CurrentFilters;
};

export const matchGroup = ({result, group, currentFilters}: MatchGroupArgs) => {
  for (const filter of currentFilters[group as keyof CurrentFilters]!) {
    if (result[filter as keyof Result]) {
      return true;
    }
  }
  return false;
};

export const applyFilters = (
  results: Result[],
  currentFilters: CurrentFilters
): Result[] => {
  if (results.length === 0) return [];
  if (isEmptyObject(currentFilters)) return results;
  return results.filter((result) => {
    for (const group in currentFilters) {
      if (!matchGroup({result, group, currentFilters})) return false;
    }
    return true;
  });
};

export const allFilters = [
  "smallBusiness",
  "nonProfit",
  "sfCounty",
  "alamedaCounty",
  "sanMateoCounty",
  "contraCostaCounty",
  "santaClaraCounty",
  "employs100OrFewer",
  "employs500OrFewer",
  "employs750OrFewer",
  "employs750More",
  "hasInterest",
  "doesNotHaveInterest",
  "covid19",
  "protestDamage",
  "blackOwned",
  "lgbtq",
  "public",
  "private",
  "spanish",
  "chinese",
];

const defaultMatchCounts = () => {
  const matchCounts = {} as {[key: string]: number};
  for (const filter of allFilters) matchCounts[filter] = 0;
  return matchCounts;
};

export const getMatchCounts = (filteredResults: Result[]) =>
  filteredResults.reduce((matchCounts, result) => {
    for (const filter of allFilters) {
      if (result[filter as keyof Result]) {
        matchCounts[filter]++;
      }
    }
    return matchCounts;
  }, defaultMatchCounts());

type FilterGroup = {
  groupName: string;
  groupLabel: string;
  filters: {
    name: string;
    label: string;
  }[];
};

export const filterGroups: FilterGroup[] = [
  {
    groupName: "orgType",
    groupLabel: "Type",
    filters: [
      {name: "smallBusiness", label: "Small business"},
      {name: "nonProfit", label: "Non-profit"},
    ],
  },
  {
    groupName: "county",
    groupLabel: "County",
    filters: [
      {name: "sfCounty", label: "San Francisco"},
      {name: "alamedaCounty", label: "Alameda"},
      {name: "sanMateoCounty", label: "San Mateo"},
      {name: "contraCostaCounty", label: "Contra Costa"},
      {name: "santaClaraCounty", label: "Santa Clara"},
    ],
  },
  {
    groupName: "employees",
    groupLabel: "Employees",
    filters: [
      {name: "employs100OrFewer", label: "<100"},
      {name: "employs500OrFewer", label: "<500"},
      {name: "employs750OrFewer", label: "<750"},
      {name: "employs750More", label: ">751"},
    ],
  },
  {
    groupName: "hasInterest",
    groupLabel: "Has Interest?",
    filters: [
      {name: "hasInterest", label: "Yes"},
      {name: "doesNotHaveInterest", label: "No"},
    ],
  },
  {
    groupName: "reliefType",
    groupLabel: "Relief Type",
    filters: [
      {name: "covid19", label: "COVID-19"},
      {name: "protestDamage", label: "Protest damage"},
    ],
  },
  {
    groupName: "category",
    groupLabel: "Category",
    filters: [
      {name: "blackOwned", label: "Black-owned"},
      {name: "lgbtq", label: "LGBTQ"},
    ],
  },
  {
    groupName: "sector",
    groupLabel: "Sector",
    filters: [
      {name: "public", label: "Public"},
      {name: "private", label: "Private"},
    ],
  },
  {
    groupName: "language",
    groupLabel: "Language",
    filters: [
      {name: "spanish", label: "Spanish"},
      {name: "chinese", label: "Chinese"},
    ],
  },
];

export const getFilterNameFromGroupAndLabel = (
  groupName: string,
  label: string
): string | undefined => {
  const foundGroup = filterGroups.find(
    (group) => group.groupName === groupName
  );
  if (foundGroup) {
    const foundFilter = foundGroup.filters.find(
      (filter) => filter.label === label
    );
    if (foundFilter) {
      return foundFilter.name;
    }
  }
  return undefined;
};
