import React from "react";
import {withRouter, Switch, Route } from "react-router-dom";

import AnywhereMap from "pages/Anywhere/AnywhereMap";
import Guatemala from "pages/Anywhere/Guatemala";
import Tanzania from "pages/Anywhere/Tanzania";
import Honduras from "pages/Anywhere/Honduras";

const AnywhereRouter = ({ match}) => {
  var linkMap = [{
    path: "guatemala",
    component: <Guatemala />,
  },
{
  path: "tanzania",
  component: <Tanzania />
},
  {
  path: "honduras",
  component: <Honduras />
}
  
  ]
  return (
    <Switch>
      {linkMap.map(({ path, component }) => {
        return <Route key={path} path={`${match.path}/${path}`}>{component}</Route>;
      })}
      <Route path={`${match.path}`}>
        <AnywhereMap />
      </Route>
    </Switch>
  );
};

export default withRouter(AnywhereRouter);
