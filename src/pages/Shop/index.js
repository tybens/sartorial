import React, { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Products from './Products/Products'
import Cart from './Cart/Cart'
import Checkout from './CheckoutForm/Checkout/Checkout'
import Navbar from './Navbar/Navbar'
import products from '../../products.js'

const Shop = ({ cart, order, totalItems, handleCaptureCheckout, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart, errorMessage, handleAddToCart }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  let match = useRouteMatch();


  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <div>
      <Navbar
        totalItems={totalItems(cart)}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Switch>
        <Route exact path={`${match.path}/checkout`}>
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
            onUpdateCartQty={handleUpdateCartQty}
            onRemoveFromCart={handleRemoveFromCart}
            onEmptyCart={handleEmptyCart}
          />
        </Route>
        <Route exact path={`${match.path}`}>
          <Products
            products={products}
            onAddToCart={handleAddToCart}
            handleUpdateCartQty
          />
        </Route>
      </Switch>
    </div>
  );
};

export default Shop;
