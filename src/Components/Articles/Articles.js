import React from 'react';
import './Articles.scss';
import { NavLink, Link } from "react-router-dom";

function Articles() {
  return (
    <div className="articles-main-container">
      <div className="main-article article one" id="1">
        <Link exact to="/articles/1" className="article-title">
          SOME THOUGHTS ON THE STATE OF CENTRAL BANKING
        </Link>
      </div>
    </div>
  );
}

export default Articles;
