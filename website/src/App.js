import React from 'react';
import './App.scss';
import { Route } from "react-router-dom";

import Home from "./Components/Home/Home"
import Articles from "./Components/Articles/Articles"

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={routeProps => <Home />} />
      <Route exact path="/articles" render={routeProps => <Articles />} />
    </div>
  );
}

export default App;
