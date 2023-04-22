import React from 'react'
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/HomePage/Homepage';
import Donate from './Components/Donate/Donate';
import Contact from './Components/Contact/Contact';
import Mission from './Components/Missions/Mission';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/mission" component={Mission} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
