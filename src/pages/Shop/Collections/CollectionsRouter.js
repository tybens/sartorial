import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Collections from "./Collections";
import Products from "../Products/Products";
import ProductPage from "../Products/ProductPage";

const CollectionsRouter = ({ collectionsData, onAddToCart }) => {
  const location = useLocation();

  return (
    <Routes>
      <Route path={`${location.pathname}/:collectionId/:productId`}>
        <ProductPage
          onAddToCart={onAddToCart}
          collectionsData={collectionsData}
        />
      </Route>
      <Route path={`${location.pathname}/:collectionId`}>
        <Products collectionsData={collectionsData} onAddToCart={onAddToCart} />
      </Route>
      <Route path={`${location.pathname}`}>
        <Collections url={location.pathname} collectionsData={collectionsData} />
      </Route>
    </Routes>
  );
};

export default CollectionsRouter;
