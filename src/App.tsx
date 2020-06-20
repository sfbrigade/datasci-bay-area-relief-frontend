import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./Home";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/results">
            <h1>Results</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
