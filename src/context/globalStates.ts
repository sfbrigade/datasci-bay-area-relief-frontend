import {createContext} from "react";
import {GlobalStateContextType} from "../types";

export let GlobalStateContext = createContext({isFilterOpen: true} as GlobalStateContextType);
export const setValues = (values: GlobalStateContextType) => {
  GlobalStateContext = createContext(values);
};

// export default GlobalStateContext;