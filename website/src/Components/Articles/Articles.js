import React from 'react';
import './Articles.scss';
import { NavLink, Link } from "react-router-dom";

import Navigation from "../../Styles/Navigation"
import Nav from "../../Styles/Nav"

function Articles() {
  return (
    <div className="articles-main-container">
      <Navigation>
        <NavLink to="/" className="logo">
          Jonathan Erlich
        </NavLink>
        <Nav>
          <NavLink
            exact
            to="/"
            className="nav-item"
            activeStyle={{ color: `#C49B66` }}
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/portfolio"
            className="nav-item"
            activeStyle={{ color: `#C49B66` }}
          >
            Portfolio
          </NavLink>
          <NavLink
            exact
            to="/articles"
            className="nav-item"
            activeStyle={{ color: `#C49B66` }}
          >
            Articles
          </NavLink>
          <NavLink
            exact
            to="/resources"
            className="nav-item"
            activeStyle={{ color: `#C49B66` }}
          >
            Crypto Resources
          </NavLink>
        </Nav>
      </Navigation>
      <div className="main-article article one" id="1">
        <h1>SOME THOUGHTS ON THE STATE OF CENTRAL BANKING</h1>
      </div>
    </div>
  );
}

export default Articles;
