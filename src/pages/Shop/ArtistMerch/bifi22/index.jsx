import React from "react";
import Products from "../../Products/Products"
import ProductPage from "../../Products/ProductPage";
import { Route } from "react-router-dom";
import artistCollectionData from "data/artist-collection-data";


const BiFiRouter = ({ match, onAddToCart }) => {
  return (
    <>
      <Route path={`/shop/artist/:collectionId/:productId`}>
        <ProductPage
          onAddToCart={onAddToCart}
          collectionsData={artistCollectionData}
        />
      </Route>
      <Route exact path={`/shop/artist/bifi22`}>
        <Products
          collectionsData={artistCollectionData}
          collectionId="bifi22"
        />
      </Route>
    </>
  );
};

export default BiFiRouter;
