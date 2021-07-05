import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Collections from "./Collections";
import Products from "../Products/Products";

const CollectionsRouter = ({ collectionsData, onAddToCart, match }) => {
  return (
    <Switch>
      <Route path={`/shop/collections/:collectionId`}>
        <Products collectionsData={collectionsData} onAddToCart={onAddToCart} />
      </Route>
      <Route exact path={`/shop/collections`}>
        <Collections collectionsData={collectionsData} />
      </Route>
    </Switch>
  );
};

export default CollectionsRouter;
