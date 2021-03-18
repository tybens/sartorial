import React, { useState } from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { omit } from 'lodash';
import axios from 'axios';
import { Navbar, Products, Cart, Checkout } from "./components";
import products from './products.js'

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [order, setOrder] = useState({});
  const [cart, setCart] = useState({})
  const [errorMessage, setErrorMessage] = useState("");
  // const functionUrl = 'http://localhost:5001/sartorial-indy/us-central1/recordOrder' // change to production
  const functionUrl = 'https://us-central1-sartorial-indy.cloudfunctions.net/recordOrder';

  function totalItems(obj) {
    var sum = 0;
    for (var el in obj) {
      if (obj.hasOwnProperty(el) && obj[el].hasOwnProperty('quantity')) {
        sum += parseFloat(obj[el].quantity);
      }
    }
    return sum;
  };

  const handleAddToCart = async (productId, quantity) => {
    setCart((prev) => ({
      ...prev,
      [productId]: {
        quantity: cart[productId] && cart[productId].quantity ? parseInt(cart[productId].quantity) + 1 : parseInt(quantity),
        product: thisProduct(productId)
      }
    }))
    console.log(cart)
  };


  const handleUpdateCartQty = async (productId, quantity) => {
    if (parseInt(quantity) < 1) {
      handleRemoveFromCart(productId)
    } else {
      setCart((prev) => ({
        ...prev,
        [productId]: {
          quantity: parseInt(quantity),
          product: thisProduct(productId)
        }
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

      // add to database, if successful payment... 
      axios.post(functionUrl, incomingOrder, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(function (response) {
          // handle success
          console.log(response);
          // set local order so that they are shown confirmation message
          setOrder(incomingOrder);
          // empty the cart so they can buy again :)
          handleEmptyCart();
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          setErrorMessage(error)
        })
        .then(function () {
          // always executed
          console.log('so anyway')
        });
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
              totalItems={totalItems}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              totalItems={totalItems}
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
