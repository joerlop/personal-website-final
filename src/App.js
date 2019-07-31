import React from 'react';
import './App.scss';
import { Route, NavLink } from "react-router-dom";

import Home from "./Components/Home/Home"
import Articles from "./Components/Articles/Articles"
import Portfolio from "./Components/Portfolio/Portfolio"
import Resources from "./Components/Resources/Resources"
import Article1 from "./Components/Article/Article1"

import Navigation from "./Styles/Navigation"
import Nav from "./Styles/Nav"

function App() {
  return (
    <div className="App">
      <Navigation>
        <NavLink to="/" className="logo">
          Jonathan Erlich
        </NavLink>
        <Nav>
        <NavLink
            to="/cv"
            className="nav-item"
            activeStyle={{ color: `#C49B66` }}
          >
            CV
          </NavLink>
          <NavLink
            to="/portfolio"
            className="nav-item"
            activeStyle={{ color: `#C49B66` }}
          >
            Portfolio
          </NavLink>
        </Nav>
      </Navigation>
      <Route exact path="/" render={routeProps => <Home />} />
      <Route exact path="/articles" render={routeProps => <Articles />} />
      <Route exact path="/portfolio" render={routeProps => <Portfolio />} />
      <Route exact path="/resources" render={routeProps => <Resources />} />
      <Route exact path="/articles/1" render={routeProps => <Article1 />} />
    </div>
  );
}

export default App;
