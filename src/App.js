import React from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Shop, Home } from './pages';
import VideoIntro from './components/VideoIntro';

const App = () => {

  // when doing nested routing, don't make the <Route /> "exact"
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <CssBaseline />
        <VideoIntro />
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
