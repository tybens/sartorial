import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Transition, TransitionGroup } from "react-transition-group";
import { omit } from "lodash";
import { Session } from "bc-react-session";
import axios from "axios";

import {
  Shop,
  Home,
  Sponsors,
  BusinessPlan,
  Philosophy,
  ContactUs,
  Blog,
  Support
} from "pages";
import Navbar from "components/Navbar/Navbar";
import { play, exit } from "timelines";
import VideoIntro from "components/VideoIntro";
// import products from "data/products";
import useWindowSize from "hooks/useWindowSize";
import theme from "./theme.js";
import Footer from "components/Footer";
import PageWrapper from "components/PageWrapper/index.jsx";

const App = () => {
  const [order, setOrder] = useState({});
  const [cart, setCart] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [introComplete, setIntroComplete] = useState(false);
  const [navColors, setNavColors] = useState({
    color: "black",
    background: "white",
  });
  const [returningUser, setReturningUser] = useState(true);

  const windowSize = useWindowSize();
  // to figure out if the black background ref is on screen
  const useWhiteFontColor = navColors.background !== "white";
  const habitatLogo =
    windowSize.width <= 760
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

  // useeffect for showing intro video only for non-returning visitors
  useEffect(() => {
    let session = Session.get("name");
    if (session.isValid) {
      setReturningUser(true);
    } else {
      Session.start({ expiration: 3600000 }); // starts user session, expires after an hour
      setReturningUser(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        obj[el].hasOwnProperty("price")
      ) {
        sum += parseFloat(obj[el].quantity) * parseFloat(obj[el].price);
      }
    }
    return sum; // returns price in dollars
  }

  const priceMapper = {
    Sweatshorts: 31,
    Sweatpants: 36,
    Hoodie: 36,
    "Cropped Hoodie": 36,
    "Mockneck Tee": 26,
    "LS Tee": 24,
    Tee: 19,
  };

  // add an item to the cart
  const handleAddToCart = async (
    productId,
    quantity,
    productData = { size: "", type: "" }
  ) => {
    setCart((prev) => ({
      ...prev,
      [productId]: {
        quantity:
          cart[productId] && cart[productId].quantity
            ? parseInt(cart[productId].quantity) + 1
            : parseInt(quantity),
        data: productData,
        price: priceMapper[productData.product.type],
      },
    }));
  };

  // update the quantity of an item in the cart
  const handleUpdateCartQty = async (
    productId,
    quantity,
    productData = { size: "", type: "" }
  ) => {
    if (parseInt(quantity) < 1) {
      handleRemoveFromCart(productId);
    } else {
      setCart((prev) => ({
        ...prev,
        [productId]: {
          quantity: parseInt(quantity),
          data: productData,
          price: priceMapper[productData.product.type],
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

  // function thisProduct(productId) {
  //   var thisProd;
  //   products.forEach((prod) => {
  //     if (parseInt(prod.id) === parseInt(productId)) {
  //       thisProd = prod;
  //     }
  //   });
  //   return thisProd;
  // }

  // when doing nested routing, don't make the <Route /> "exact"
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div
          className="app"
          style={{
            background: navColors.background,
            color: navColors.color,
            minHeight: windowSize.height,
            transition: "color 0.5s ease-in-out, background 0.5s ease-in-out",
          }}
        >
          {!introComplete && !returningUser ? (
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
                        onEnter={(node, appears) =>
                          play(pathname, node, appears)
                        }
                        onExit={(node, appears) => exit(node, appears)}
                        timeout={{ enter: 750, exit: 150 }}
                      >
                        <div>
                          <Switch location={location}>
                            <Route exact path="/">
                              <PageWrapper title="Fashion">
                                <Home
                                  navColors={navColors}
                                  onSetNavColors={(colors) =>
                                    setNavColors(colors)
                                  }
                                />
                              </PageWrapper>
                            </Route>
                            <Route path="/shop">
                              <PageWrapper title="Shop">
                                <Shop
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
                              </PageWrapper>
                            </Route>
                            <Route path="/sponsors">
                              <PageWrapper title="Sponsored">
                                <Sponsors setNavColors={setNavColors} />
                              </PageWrapper>
                            </Route>
                            <Route path="/philosophy">
                              <PageWrapper title="Blog">
                                <Philosophy
                                  navColors={navColors}
                                  onSetNavColors={(colors) =>
                                    setNavColors(colors)
                                  }
                                />
                              </PageWrapper>
                            </Route>
                            <Route path="/blog">
                              <PageWrapper title="Mission">
                                <Blog />
                              </PageWrapper>
                            </Route>
                            <Route path="/contact">
                              <PageWrapper title="Contact">
                                <ContactUs />
                              </PageWrapper>
                            </Route>
                            <Route path="/support">
                              <PageWrapper title="Support">
                                <Support />
                              </PageWrapper>
                            </Route>
                            <Route
                              path="/linkedin"
                              component={() => {
                                var link = document.createElement("a");
                                link.href =
                                  "https://www.linkedin.com/company/habitatsartorial/";
                                document.body.appendChild(link);

                                link.click();
                                return null;
                              }}
                            />
                            <Route exact path="/businessplan">
                              <PageWrapper title="Business Plan">
                                <BusinessPlan />
                              </PageWrapper>
                            </Route>
                          </Switch>
                          <Footer />
                        </div>
                      </Transition>
                    </TransitionGroup>
                  );
                }}
              />
            </>
          )}
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
