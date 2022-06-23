import React, {useEffect, useState, useMemo, ChangeEvent} from "react";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./components/home/Home";
import Header from "./components/Header";
import Results from "./components/results/Results";
import Donate from "./components/donate/Donate";
import {ThemeProvider, StyledEngineProvider} from "@mui/material/styles";
import {theme} from "./theme";
import {getResults} from "./api/getResults";
import {
  applyFilters,
  applyFilterChanges,
} from "./components/results/filterHelpers";
import {CurrentFilters, GlobalStateContextType, Result} from "./types";
import {setValues} from "./context/globalStates";

const App = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [data, setData] = useState<Result[]>([]);
  const [currentFilters, setCurrentFilters] = useState<CurrentFilters>({});
  const [filteredResults, setFilteredResults] = useState<Result[]>([]);

  const handleClearFilters = () => setCurrentFilters({});

  const handleFilterChange =
    (group: keyof CurrentFilters) => (event: ChangeEvent<HTMLInputElement>) => {
      applyFilterChanges(
        event.target.checked,
        event.target.name,
        group,
        currentFilters,
        setCurrentFilters
      );
    };

  useMemo(
    () => setFilteredResults(applyFilters(data, currentFilters)),
    [currentFilters, setFilteredResults, data]
  );

  const definedStateValues = {
    setCurrentFilters: setCurrentFilters,
    currentFilters: currentFilters,
    handleFilterChange: handleFilterChange,
    setIsFilterOpen: setIsFilterOpen,
    isFilterOpen: isFilterOpen,
    setInitialData: setData,
    initialData: data,
    filteredResults: filteredResults,
    setFilteredResults: setFilteredResults,
    handleClearFilters: handleClearFilters,
  } as GlobalStateContextType;
  setValues(definedStateValues);

  useEffect(() => {
    getResults().then(setData);
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="App">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/">
                <Home />
              </Route>
              <Route path="/results">
                <Results />
              </Route>
              <Route path="/donate">
                <Donate />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
