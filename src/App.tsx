import React, {useState} from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/Header";
import Results from "./components/results/Results";
import Donate from "./components/donate/Donate";
import {ThemeProvider} from "@material-ui/core/styles";
import {theme} from "./theme";
import { CurrentFilters } from "./types";

const App = () => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [currentFilters, setCurrentFilters] = useState<CurrentFilters>({});

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Header setIsFilterOpen={setIsFilterOpen} isFilterOpen={isFilterOpen} currentFilters={currentFilters} setCurrentFilters={setCurrentFilters}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/results">
              <Results setIsFilterOpen={setIsFilterOpen} isFilterOpen={isFilterOpen} currentFilters={currentFilters} setCurrentFilters={setCurrentFilters}/>
            </Route>
            <Route exact path="/donate" component={Donate} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
