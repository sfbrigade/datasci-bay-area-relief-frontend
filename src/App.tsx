import React, {useEffect, useState, useMemo, ChangeEvent} from "react";
import "./App.css";
import {Router, Route, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";

import Home from "./components/home/Home";
import Header from "./components/Header";
import Results from "./components/results/Results";
import Donate from "./components/donate/Donate";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import {theme} from "./theme";
import {getResults} from "./api/getResults";
import {applyFilters, applyFilterChanges} from "./components/results/filterHelpers";
import {CurrentFilters, GlobalStateContextType, Result} from "./types";
import {setValues} from "./context/globalStates";
import { SearchBar, SearchButton, SearchGroup } from "./components/results/Results.styles";
import Button from "@mui/material/Button";


const history = createBrowserHistory();

const App = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [data, setData] = useState<Result[]>([]);
  const [currentFilters, setCurrentFilters] = useState<CurrentFilters>({});
  const [filteredResults, setFilteredResults] = useState<Result[]>([]);

  const handleClearFilters = () => setCurrentFilters({});

  const handleFilterChange = (group: keyof CurrentFilters) => (event: ChangeEvent<HTMLInputElement>) => {
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
    handleClearFilters: handleClearFilters
  } as GlobalStateContextType;
  setValues(definedStateValues);

  useEffect(() => {
    getResults()
      .then(setData);
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router history={history}>
            <Header/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/results" component={Results}/>
              <Route exact path="/donate" component={Donate}/>
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
