import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Results from "./components/Results";
import HowItWorks from './HowItWorks';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutus" component={AboutUs}/>
          <Route exact path="/howitworks" component={HowItWorks} />
          <Route exact path="/results" component={Results} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
