import React from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Shop, Home } from './pages';

const App = () => {

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <CssBaseline />
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
