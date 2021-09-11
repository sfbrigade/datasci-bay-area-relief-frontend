import {CurrentFilters, HomeSearchFormTypes} from "../types";
import {Location} from "history";

const grabCurrentFiltersFromURLParams = (location: Location): CurrentFilters => {
  const pathFilters: HomeSearchFormTypes = {};
  if (location.search) {
    const params = new URLSearchParams(location.search);
    if (params.get("orgType")) {
      pathFilters["orgType"] = [params.get("orgType")];
    }
    if (params.get("county")) {
      pathFilters["county"] = [params.get("county")];
    }
  }
  return pathFilters;
};

export {
  grabCurrentFiltersFromURLParams
};
