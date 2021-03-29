import React, { useState, useEffect, useRef } from "react";
// import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Transition, TransitionGroup } from "react-transition-group";
import { omit } from "lodash";
import axios from "axios";
import { Shop, Home, Sponsors } from "./pages";
import Navbar from "./pages/Shop/Navbar/Navbar";
import { play, exit } from "./timelines";
import VideoIntro from "./components/VideoIntro";
import products from "./products";
import useWindowSize from "./hooks/useWindowSize";

const App = () => {
  const [order, setOrder] = useState({});
  const [cart, setCart] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [introComplete, setIntroComplete] = useState(false);
  const [navColors, setNavColors] = useState({
    color: "black",
    background: "white",
  });
  const isBlackBg = navColors.background !== "white";
  const windowSize = useWindowSize();
  // to figure out if the black background ref is on screen
  const blackBgRef = useRef(null);
  const useWhiteFontColor = navColors.background !== "white";
  const habitatLogo =
    windowSize.width < 769
      ? useWhiteFontColor
        ? "/images/banners/whitestraight.png"
        : "/images/banners/blackstraight.png"
      : useWhiteFontColor
      ? "/images/banners/whitestacked.png"
      : "/images/banners/blackstacked.png";

  // effect for video intro hide after preload
  useEffect(() => {
    if (!introComplete) {
      const timer = setTimeout(() => {
        setIntroComplete(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // logic for changing header color
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listenScrollEvent = (event) => {
    const isScrolled = blackBgRef.current && (window.scrollY > blackBgRef.current.offsetTop)
    if (isScrolled && !isBlackBg) {
      setNavColors({ background: "black", color: "white" });
    } else if (!isScrolled && isBlackBg) {
      setNavColors({ background: "white", color: "black" });
    }
  };

  // const functionUrl = 'http://localhost:5001/sartorial-indy/us-central1/recordOrder' // change to production
  const functionUrl =
    "https://us-central1-sartorial-indy.cloudfunctions.net/recordOrder";

  // given a cart, returns total number of items
  function totalItems(obj) {
    var sum = 0;
    for (var el in obj) {
      if (obj.hasOwnProperty(el) && obj[el].hasOwnProperty("quantity")) {
        sum += parseFloat(obj[el].quantity);
      }
    }
    return sum;
  }

  // given a cart, returns price in dollars
  function totalPrice(obj) {
    var sum = 0;
    for (var el in obj) {
      if (
        obj.hasOwnProperty(el) &&
        obj[el].hasOwnProperty("quantity") &&
        obj[el].hasOwnProperty("product")
      ) {
        sum += parseFloat(obj[el].quantity) * parseFloat(obj[el].product.price);
      }
    }
    return sum; // returns price in dolars
  }

  // add an item to the cart
  const handleAddToCart = async (productId, quantity) => {
    setCart((prev) => ({
      ...prev,
      [productId]: {
        quantity:
          cart[productId] && cart[productId].quantity
            ? parseInt(cart[productId].quantity) + 1
            : parseInt(quantity),
        product: thisProduct(productId),
      },
    }));
  };

  // update the quantity of an item in the cart
  const handleUpdateCartQty = async (productId, quantity) => {
    if (parseInt(quantity) < 1) {
      handleRemoveFromCart(productId);
    } else {
      setCart((prev) => ({
        ...prev,
        [productId]: {
          quantity: parseInt(quantity),
          product: thisProduct(productId),
        },
      }));
    }
  };

  const handleRemoveFromCart = async (productId) => {
    setCart(Object.assign({}, omit(cart, productId)));
  };

  const handleEmptyCart = async () => {
    setCart({}); // empties the cart
  };

  const handleCaptureCheckout = async (incomingOrder) => {
    try {
      // add to database, if successful payment...
      axios
        .post(functionUrl, incomingOrder, {
          headers: {
            "Content-Type": "application/json",
          },
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
          setErrorMessage(error);
        });
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  function thisProduct(productId) {
    var thisProd;
    products.forEach((prod) => {
      if (parseInt(prod.id) === parseInt(productId)) {
        thisProd = prod;
      }
    });
    return thisProd;
  }

  // when doing nested routing, don't make the <Route /> "exact"
  return (
    <Router>
      <div
        className="app"
        style={{
          background: navColors.background,
          color: navColors.color,
          minHeight: windowSize.height,
          transition: "color 0.5s ease-in, background 0.5s ease-in",
        }}
      >
        {!introComplete ? (
          <VideoIntro />
        ) : (
          <>
            <div className="fake-toolbar-div" />
            <Navbar habitatLogo={habitatLogo} totalItems={totalItems(cart)} />
            <Route
              render={({ location }) => {
                const { pathname, key } = location;

                return (
                  <TransitionGroup component={null}>
                    <Transition
                      key={key}
                      appear={true}
                      onEnter={(node, appears) => play(pathname, node, appears)}
                      onExit={(node, appears) => exit(node, appears)}
                      timeout={{ enter: 750, exit: 150 }}
                    >
                      <Switch location={location}>
                        <Route exact path="/">
                          <Home blackBgRef={blackBgRef} />
                        </Route>
                        <Route path="/shop">
                          <Shop
                            thisProduct={thisProduct}
                            handleCaptureCheckout={handleCaptureCheckout}
                            handleEmptyCart={handleEmptyCart}
                            order={order}
                            cart={cart}
                            errorMessage={errorMessage}
                            totalItems={totalItems}
                            totalPrice={totalPrice}
                            handleAddToCart={handleAddToCart}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleUpdateCartQty={handleUpdateCartQty}
                          />
                        </Route>
                        <Route path="/sponsors">
                          <Sponsors setNavColors={setNavColors} />
                        </Route>
                      </Switch>
                    </Transition>
                  </TransitionGroup>
                );
              }}
            />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
