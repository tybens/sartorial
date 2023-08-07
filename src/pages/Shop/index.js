import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
}) => {
  const location = useLocation();

  // title logic
  useEffect(() => {
    document.title = "Habitat Sartorial | Shop for a cause"
    return () => {
      document.title = "Habitat Sartorial | Fashion for a cause"
    }
  }, [])


  return (
    <div>
      <Routes>
        <Route exact path={`${location.pathname}/checkout`}>
          <Checkout
            cart={cart}
            order={order}
            totalItems={totalItems}
            onCaptureCheckout={handleCaptureCheckout}
            error={errorMessage}
          />
        </Route>
        <Route exact path={`${location.pathname}/cart`}>
          <Cart
            cart={cart}
            totalItems={totalItems}
            totalPrice={totalPrice}
            onUpdateCartQty={handleUpdateCartQty}
            onRemoveFromCart={handleRemoveFromCart}
            onEmptyCart={handleEmptyCart}
          />
        </Route>
        <Route path={`${location.pathname}/collections`}>
          <CollectionsRouter
            collectionsData={collectionsData}
            onAddToCart={handleAddToCart}
          />
        </Route>
        <Route path={`${location.pathname}/artist/:artistId`}>
          <ArtistMerch onAddToCart={handleAddToCart} />
        </Route>
        <Route path={`${location.pathname}/artist`}>
          <Collections url={`${location.pathname}/artist`} collectionsData={artistCollectionData} />
        </Route>
      </Routes>
    </div>
  );
};

export default Shop;
