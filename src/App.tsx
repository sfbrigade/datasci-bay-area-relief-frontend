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
import { CurrentFilters, Result } from "./types";


const history = createBrowserHistory();

import {AddPage} from "./components/addResources/AddPage";

const App = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [initialData, setInitialData] = useState<Result[]>([]);
  const [currentFilters, setCurrentFilters] = useState<CurrentFilters>({});

  const filteredResults = useMemo(() => applyFilters(initialData, currentFilters), [
    currentFilters,
    initialData,
  ]);

  useEffect(() => {
    getResults()
      .then(setInitialData);
  }, []);

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
                isFilterOpen={isFilterOpen}
                setIsFilterOpen={setIsFilterOpen} 
                currentFilters={currentFilters}
                setCurrentFilters={setCurrentFilters}
                setResults={setInitialData}
                filteredResults={filteredResults}
              />
            </Route>
            <Route exact path="/donate" component={Donate} />
            <Route exact path="/add" component={AddPage} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
