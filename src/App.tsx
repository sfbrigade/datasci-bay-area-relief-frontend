import React, {useEffect, useState, useMemo, createContext, Dispatch, SetStateAction, ChangeEvent} from "react";
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

  const contextID = "43de757f-c6f5-4b80-80e1-98ab19ad9aa7";

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

  const handleClearFilters = () => setCurrentFilters({});

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
        value={{
          currentFilters,
          setCurrentFilters,
          isFilterOpen,
          setIsFilterOpen,
          initialData,
          setInitialData,
          filteredResults,
          handleFilterChange,
          handleClearFilters,
          contextID
        }}>
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
