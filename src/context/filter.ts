import {ChangeEvent, createContext, Dispatch, SetStateAction} from "react";
import {CurrentFilters, Result} from "../types";
export interface FilterContextType {
  setCurrentFilters: Dispatch<SetStateAction<CurrentFilters>>;
  currentFilters: CurrentFilters;
  handleFilterChange: (
    group: keyof CurrentFilters
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  setIsFilterOpen: Dispatch<SetStateAction<boolean>>;
  isFilterOpen: boolean;
  setInitialData: Dispatch<SetStateAction<Result[]>>;
  initialData: Result[];
  filteredResults: Result[];
  handleClearFilters: () => void;
  contextID: string;
}

const FilterContext = createContext({} as FilterContextType);

export default FilterContext;
