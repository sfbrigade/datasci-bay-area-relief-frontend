import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Aboutus from "./Aboutus";
import Header from "./components/Header";
import Results from "./components/Results";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Aboutus" component={Aboutus} />
          <Route exact path="/results" component={Results} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
