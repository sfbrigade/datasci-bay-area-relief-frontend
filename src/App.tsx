import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Aboutus from './Aboutus';
import Results from "./components/Results";
import Howitworks from './Howitworks';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Aboutus" component={Aboutus}/>
          <Route exact path="/Howitworks" component={Howitworks}/>

          <Route exact path="/results" component={Results} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
