import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Favorite from "./components/Favorite";
import Rated from "./components/Rated";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/favorite">
          <Favorite />
        </Route>
        <Route path="/rated">
          <Rated />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
