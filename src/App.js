import React, { useState } from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { omit } from 'lodash';

import { Navbar, Products, Cart, Checkout } from "./components";
import products from './products.js'

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [order, setOrder] = useState({});
  const [cart, setCart] = useState({})
  const [errorMessage, setErrorMessage] = useState("");

  function totalItems(obj) {
    var sum = 0;
    for (var el in obj) {
      if (obj.hasOwnProperty(el)) {
        sum += parseFloat(obj[el]);
      }
    }
    return sum;
  }

  const handleAddToCart = async (productId, quantity) => {
    setCart((prev) => ({
      ...prev,
      [productId]: cart[productId] ? parseInt(cart[productId]) + 1 : parseInt(quantity)
    }))

  };


  const handleUpdateCartQty = async (productId, quantity) => {
    if (parseInt(quantity) < 1) {
      handleRemoveFromCart(productId)
    } else {
      setCart((prev) => ({
        ...prev,
        [productId]: parseInt(quantity)
      }))
    }
  };

  const handleRemoveFromCart = async (productId) => {
    setCart(Object.assign({}, omit(cart, productId)))
  };

  const handleEmptyCart = async () => {
    setCart({}); // empties the cart
  };

  const handleCaptureCheckout = async (incomingOrder) => {
    try {

      // send an email to Payne or add to database, if successful payment... 

      setOrder(incomingOrder);
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  function thisProduct(productId) {
    var thisProd;
    products.forEach((prod) => {
      if (parseInt(prod.id) === parseInt(productId)) {
        thisProd = prod;
      }
    })
    return thisProd;
  }


  return (
    <Router>
      <div style={{ display: "flex" }}>
        <CssBaseline />
        <Navbar
          totalItems={totalItems(cart)}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Switch>
          <Route exact path="/">
            <Products
              products={products}
              onAddToCart={handleAddToCart}
              handleUpdateCartQty
            />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              thisProduct={thisProduct}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
