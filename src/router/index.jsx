import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from '../components/nav/';
import Home from '../pages/HomePage/';
import Hero from '../pages/HeroPage/';
import SavedHero from '../pages/SavedPage/';
import About from '../pages/AboutPage/';

export default function PageRouter() {
  return (
    <Router>
      <div>
        <Nav />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/savedHero">
            <SavedHero />
          </Route>
          <Route path="/hero">
            <Hero />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}