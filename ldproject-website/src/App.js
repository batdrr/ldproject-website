import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import Architecture from './components/Architecture/architecture';
import Emailform from './pages/emailform';
import Contractor from "./components/Contractor/contractor";
import Interior from "./components/Interior/interior";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/emailform" component={Emailform} exact />
        <Route path="/architecture" component={Architecture} exact />
        <Route path="/contractor" component={Contractor} exact />
        <Route path="/interior" component={Interior} exact />
      </Switch>
    </Router>
  );
}

export default App;