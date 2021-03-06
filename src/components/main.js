import React from 'react';
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import About from "./about";

const Main = () => (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/" component={About} />
    </Switch>
)

export default Main;