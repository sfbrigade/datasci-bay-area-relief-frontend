import React, {useEffect, useState, useMemo, createContext} from "react";
import "./App.css";
import {Router, Route, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";
import Home from "./components/home/Home";
import Header from "./components/Header";
import Results from "./components/results/Results";
import Donate from "./components/donate/Donate";
import {ThemeProvider} from "@material-ui/core/styles";
import {theme} from "./theme";
import {getResults} from "./api/axiosApi";
import {applyFilters} from "./components/results/filterHelpers";
import {CurrentFilters, Result} from "./types";
import {AddPage} from "./components/addResources/AddPage";
import FilterContext from "./context/filter";

const history = createBrowserHistory();

const App = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [initialData, setInitialData] = useState<Result[]>([]);
  const [currentFilters, setCurrentFilters] = useState<CurrentFilters>({});
  const [filteredResults, setFilteredResults] = useState<Result[]>([]);

  useEffect(() => {
    setFilteredResults(applyFilters(initialData, currentFilters));
  }, [currentFilters, initialData])

  useEffect(() => {
    getResults()
      .then(setInitialData);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <FilterContext.Provider
        value={{currentFilters, setCurrentFilters, isFilterOpen, setIsFilterOpen, initialData, setInitialData, filteredResults}}>
        <div className="App">
          <Router history={history}>
            <Header />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/results" component={Results} />
              <Route exact path="/donate" component={Donate}/>
              <Route exact path="/add" component={AddPage}/>
            </Switch>
          </Router>
        </div>
      </FilterContext.Provider>
    </ThemeProvider>
  );
};

export default App;
