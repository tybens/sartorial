import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Collections from "./Collections";
import Products from "../Products/Products";

const CollectionsRouter = ({ collectionsData, onAddToCart, match }) => {
  return (
    <Switch>
        <Route path={`${match.path}/:collectionId`}>
          <Products collectionsData={collectionsData} onAddToCart={onAddToCart} />
        </Route>
        <Route path={`${match.path}`}>
        <Collections
            url={match.path}
            collectionsData={collectionsData}
          />
        </Route>
    </Switch>
  );
};

export default withRouter(CollectionsRouter);
