import React from 'react';
import './Home.scss';
import { NavLink } from "react-router-dom";

import Navigation from "../../Styles/Navigation"
import Nav from "../../Styles/Nav"

import githubImage from "../../Images/github.svg"
import twitterImage from "../../Images/twitter.svg"

function Home() {
  return (
    <div className="home-main-container">

      <Navigation>
        <NavLink to="/" className="logo">Jonathan Erlich</NavLink>
        <Nav>
          <NavLink exact to="/" className="nav-item" activeStyle={{color: `#C49B66`}}>
            Home
          </NavLink>
          <NavLink exact to="/portfolio" className="nav-item" activeStyle={{color: `#C49B66`}}>
            Portfolio
          </NavLink>
          <NavLink exact to="/articles" className="nav-item" activeStyle={{color: `#C49B66`}}>
            Articles
          </NavLink>
          <NavLink exact to="/resources" className="nav-item" activeStyle={{color: `#C49B66`}}>
            Crypto Resources
          </NavLink>
        </Nav>
      </Navigation>

      <div className="content">
			  <h2>Coder. Indsutrial engineer. Economist.</h2>
			  <h2>Passionate about crypto and clean, beautiful design.</h2>
			  <div className="icons">
				  <a target="_blank" href="https://github.com/joerlop"><img src={githubImage} alt="github icon" /></a>
				  <a target="_blank" href="https://twitter.com/JonathanErlichL"><img src={twitterImage} alt="twitter icon" /></a>
			  </div>
		  </div>

    </div>
  );
}

export default Home;
