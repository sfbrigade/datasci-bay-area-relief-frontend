import React, {useEffect, useState, useMemo} from "react";
import "./App.css";
import {Router, Route, Switch} from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "./components/home/Home";
import Header from "./components/Header";
import Results from "./components/results/Results";
import Donate from "./components/donate/Donate";
import {ThemeProvider} from "@material-ui/core/styles";
import {theme} from "./theme";
import { getResults } from "./api/axiosApi";
import {applyFilters} from "./components/results/filterHelpers";
import { CurrentFilters, GlobalStateContextType, Result } from "./types";
import { ChangeEvent } from "react";
import { setValues } from "./context/globalStates";


const history = createBrowserHistory();


const App = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [data, setData] = useState<Result[]>([]);
  const [currentFilters, setCurrentFilters] = useState<CurrentFilters>({});
  // const [filteredResults, setFilteredResults] = useState<Result[]>([]);

  console.log(`currentFilters::${currentFilters}`);

  const handleClearFilters = () => setCurrentFilters({});

  const handleFilterChange = (group: keyof CurrentFilters) => (event: ChangeEvent<HTMLInputElement>) => {
    console.log(`App.tsx::handleFilterChange, ${group}, ${event.target.name}`);
    const newFilters = {...currentFilters};
    if (event.target.checked) {
      if (group in newFilters) {
        if (!newFilters[group]?.includes(event.target.name)) {
          newFilters[group]?.push(event.target.name);
        }
      } else {
        newFilters[group] = [event.target.name];
      }
    } else {
      const index = newFilters[group]?.indexOf(event.target.name);
      if (index >= 0) newFilters[group]?.splice(index, 1);
      if (newFilters[group]?.length === 0) delete newFilters[group];
    }
    setCurrentFilters(newFilters);
  };

  const filteredResults = useMemo(() => applyFilters(data, currentFilters), [
    currentFilters,
    data,
  ]);

  console.log({filteredResults});

  const definedStateValues = {
    setCurrentFilters: setCurrentFilters,
    currentFilters: currentFilters,
    handleFilterChange: handleFilterChange,
    setIsFilterOpen: setIsFilterOpen,
    isFilterOpen: isFilterOpen,
    setInitialData: setData,
    initialData: data,
    filteredResults: filteredResults,
    handleClearFilters: handleClearFilters} as GlobalStateContextType;
  setValues(definedStateValues);

  useEffect(() => {
    getResults()
      .then(setData);
  }, []);

  // useEffect(() => {
  //   const filteredResults = useMemo(() => applyFilters(initialData, currentFilters), [
  //     currentFilters,
  //     initialData,
  //   ]);
  //   setFilteredResults(filteredResults);
  // }, [currentFilters]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router history={history}>
          <Header
            isFilterOpen={isFilterOpen}
            setIsFilterOpen={setIsFilterOpen}
            currentFilters={currentFilters}
            setCurrentFilters={setCurrentFilters}
            filteredResults={filteredResults}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/results">
              <Results
                //isFilterOpen={isFilterOpen}
                setIsFilterOpen={setIsFilterOpen}
                currentFilters={currentFilters}
                setCurrentFilters={setCurrentFilters}
                setResults={setData}
                // filteredResults={filteredResults}
              />
            </Route>
            <Route exact path="/donate" component={Donate} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
