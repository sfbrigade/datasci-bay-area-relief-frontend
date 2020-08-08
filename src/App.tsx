import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Header from "./components/Header";
import AboutUs from "./components/about/AboutUs";
import Results from "./components/results/Results";
import HowItWorks from './components/how/HowItWorks';
import ThankYou from './components/thankyou/ThankYou';
import Donate from './components/donate/Donate';



const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutus" component={AboutUs}/>
          <Route exact path="/howitworks" component={HowItWorks} />
          <Route exact path="/thankyou" component={ThankYou} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/donate" component={Donate} />
          
        </Switch>
      </Router>
    </div>
  );
};

export default App;
