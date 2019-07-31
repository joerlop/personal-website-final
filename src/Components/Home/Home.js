import React from 'react';
import './Home.scss';

import githubImage from "../../Images/github.svg"
import twitterImage from "../../Images/twitter.svg"
import emailImage from "../../Images/email.svg"

function Home() {
  return (
    <div className="home-main-container">
      <div className="content">
			  <h2>Entrepreneur. Coder.</h2>
				<h2>Interested in crypto and fintech.</h2>
			  <div className="icons">
				  <a target="_blank" href="https://github.com/joerlop"><img src={githubImage} alt="github icon" /></a>
				  <a target="_blank" href="https://twitter.com/JonathanErlichL"><img src={twitterImage} alt="twitter icon" /></a>
          <a target="_blank" href="mailto:jj.erlich155@gmail.com"><img src={emailImage} alt="twitter icon" /></a>
			  </div>
		  </div>
    </div>
  );
}

export default Home;
