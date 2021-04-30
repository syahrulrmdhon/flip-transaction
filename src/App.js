import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./containers/HomePage";
import DetailTransaction from "./containers/DetailTransaction";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/"} exact component={HomePage} />
        <Route path={"/detail-transaction/:idTransaction"} exact component={DetailTransaction} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
