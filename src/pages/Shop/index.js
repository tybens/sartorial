import React, { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { omit } from 'lodash';
import axios from 'axios';
import Products from './Products/Products'
import Cart from './Cart/Cart'
import Checkout from './CheckoutForm/Checkout/Checkout'
import Navbar from './Navbar/Navbar'
import products from '../../products.js'

const Shop = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [order, setOrder] = useState({});
  const [cart, setCart] = useState({})
  const [errorMessage, setErrorMessage] = useState("");
  let match = useRouteMatch();
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
    <>
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
    </>
  );
};

export default Shop;
