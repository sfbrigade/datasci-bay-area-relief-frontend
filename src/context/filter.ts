import {createContext, Dispatch, SetStateAction} from "react";
import {CurrentFilters, Result} from "../types";
interface FilterContextTypes {
  setCurrentFilters: Dispatch<SetStateAction<CurrentFilters>>;
  currentFilters: CurrentFilters;
  setIsFilterOpen: Dispatch<SetStateAction<boolean>>;
  isFilterOpen: boolean;
  setInitialData: Dispatch<SetStateAction<Result[]>>;
  initialData: Result[];
  filteredResults: Result[];
}

const FilterContext = createContext({} as FilterContextTypes);

export default FilterContext;
