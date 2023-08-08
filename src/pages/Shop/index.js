import React, { useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Cart from "./Cart/Cart";
import Checkout from "./CheckoutForm/Checkout/Checkout";
import Collections from "./Collections/Collections";
import CollectionsRouter from "./Collections/CollectionsRouter";
import collectionsData from "data/collections-data";
import artistCollectionData from "data/artist-collection-data";
import ArtistMerch from "./ArtistMerch";

const Shop = ({
  cart,
  order,
  totalItems,
  totalPrice,
  handleCaptureCheckout,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
  errorMessage,
  handleAddToCart,
  match,
}) => {
  // title logic
  useEffect(() => {
    document.title = "Habitat Sartorial | Shop for a cause";
    return () => {
      document.title = "Habitat Sartorial | Fashion for a cause";
    };
  }, []);

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/checkout`}>
          <Checkout
            cart={cart}
            order={order}
            totalItems={totalItems}
            onCaptureCheckout={handleCaptureCheckout}
            error={errorMessage}
          />
        </Route>
        <Route exact path={`${match.path}/cart`}>
          <Cart
            cart={cart}
            totalItems={totalItems}
            totalPrice={totalPrice}
            onUpdateCartQty={handleUpdateCartQty}
            onRemoveFromCart={handleRemoveFromCart}
            onEmptyCart={handleEmptyCart}
          />
        </Route>
        <Route path={`${match.path}/collections`}>
          <CollectionsRouter
            collectionsData={collectionsData}
            onAddToCart={handleAddToCart}
          />
        </Route>
        <Route path={`${match.path}/artist/:artistId`}>
          <ArtistMerch onAddToCart={handleAddToCart} />
        </Route>
        <Route path={`${match.path}/artist`}>
          <Collections
            url={`${match.path}/artist`}
            collectionsData={artistCollectionData}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default withRouter(Shop);
