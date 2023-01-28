import React, { useState, useEffect } from "react";
import {
  Typography,
  TextField,
  Grid,
  Button,
  CircularProgress,
  Divider,
} from "@material-ui/core";
import emailRegex from "regex/emailRegex";
import { Link } from "react-router-dom";
import useStyles from "./styles";

import PaymentForm from "pages/Shop/CheckoutForm/PaymentForm";

const DonationForm = ({
  onAddToCart,
  cart,
  onCaptureCheckout,
  totalItems,
  order,
}) => {
  const [email, setEmail] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [amount, setAmount] = useState(1);

  const [step, setStep] = useState(0);

  const [emailError, setEmailError] = useState(false);
  const [donationError, setDonationError] = useState(false);

  const classes = useStyles();

  // this lets us dynamically disable / allow the button
  useEffect(() => {
    if (email && email.length > 0) {
      if (emailRegex(email)) {
        setEmailError(false);
      } else {
        setEmailError(true);
      }
    } else if (email.length === 0) {
      setEmailError(false);
    }

    if (amount && amount >= 0) {
      setDonationError(false);
    } else {
      setDonationError(true);
    }
  }, [email, amount]);

  const handleBlur = () => {
    if (amount && amount <= 0) {
      setAmount(1);
    }
  };

  const donationProduct = {
    id: 999999,
    price: amount,
    type: "",
    img: `https://res.cloudinary.com/do8jxdvtx/image/upload/v1657897902/hsllc/HS_rotary_yj4o2v.jpg`,
    images: [],
    description: ["thank you for your donation"],
    name: "Donation",
    disabled: false,
  };

  const shippingData = {
    firstName: first,
    lastName: last,
    email: email,
    address1: "",
    city: "",
    stateCode: "",
    zip: "",
    shippingOption: "",
  };

  const cartHasNonDonationItem = () => {
    for (var el in cart) {
      if (cart[el].data.collection !== "donation") {
        return true;
      }
    }
    return false;
  };

  const handleAddToCart = () => {
    onAddToCart("donation", 1, {
      size: "",
      collection: "donation",
      product: donationProduct,
    });

    nextStep();
  };

  let Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <Typography variant="h5">
            Thank you for your donation, {order.customer.firstname}{" "}
            {order.customer.lastname}!
          </Typography>
          <Typography variant="body2">
            We will send a donation receipt for tax reporting purposes within 24
            hours of the donation.
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitle2">
            Order ref: {order.payment.stripe.payment_intent_id}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <br />
          <Button
            component={Link}
            variant="outlined"
            color="inherit"
            type="button"
            to="/shop/collections"
          >
            Back to shopping
          </Button>
        </div>
      </>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );

  const nextStep = () => setStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setStep((prevActiveStep) => prevActiveStep - 1);

  let formFilled =
    email &&
    !emailError &&
    first &&
    last &&
    amount > 0 &&
    !donationError &&
    !cartHasNonDonationItem();

  return (
    <Grid
      container
      className={classes.container}
      spacing={3}
      justify="center"
      id="media"
    >
      {step === 1 ? (
        <Grid item xs={12}>
          <PaymentForm
            cart={cart}
            nextStep={nextStep}
            backStep={backStep}
            shippingData={shippingData}
            onCaptureCheckout={onCaptureCheckout}
            totalItems={totalItems}
            donation={true}
          />
        </Grid>
      ) : step === 0 ? (
        <>
          <Grid item xs={12} style={{ width: "100%" }} id="content--inner">
            <Typography variant="h6" color="inherit" gutterBottom>
              Donate Today
            </Typography>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.paragraph}
            >
              Why donate (tax-free!) to Habitat Sartorial? We made it possible
              to donate to charity just by buying apparel - the next phase of
              our plan is spreading the word. Through advertising, your
              contribution will enable millions of Indy folks - and eventually
              people nationwide - to give back to their city through fashion.
            </Typography>
          </Grid>
          <Grid item id="content--inner">
            <form autoComplete="off" onSubmit={handleAddToCart}>
              <Grid
                container
                spacing={3}
                justify="space-between"
                alignItems="center"
              >
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="First name"
                    value={first}
                    autoFocus
                    fullWidth
                    onKeyPress={(ev) => {
                      if (ev.key === "Enter") {
                        ev.preventDefault();
                      }
                    }}
                    inputProps={{ maxLength: 50 }}
                    onChange={(e) => setFirst(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Last name"
                    value={last}
                    fullWidth
                    onKeyPress={(ev) => {
                      if (ev.key === "Enter") {
                        ev.preventDefault();
                      }
                    }}
                    inputProps={{ maxLength: 50 }}
                    onChange={(e) => setLast(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Your email"
                    value={email}
                    onKeyPress={(ev) => {
                      if (ev.key === "Enter") {
                        ev.preventDefault();
                      }
                    }}
                    fullWidth
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailError && (
                    <Typography
                      color="error"
                      className={classes.errorLogin}
                      align="left"
                    >
                      Please enter a valid email
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Donation Amount"
                    value={amount}
                    fullWidth
                    type="number"
                    disabled={false}
                    onBlur={handleBlur}
                    inputProps={{
                      step: 1,
                      min: 1,
                    }}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  {donationError && (
                    <Typography
                      color="error"
                      className={classes.errorLogin}
                      align="left"
                    >
                      Please enter a valid donation amount
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={6} container justify="center">
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    disabled={!formFilled}
                  >
                    Proceed to donation
                  </Button>
                </Grid>
              </Grid>
            </form>
            {cartHasNonDonationItem() && (
              <Typography
                color="error"
                className={classes.errorLogin}
                align="left"
              >
                Sorry, but your cart has an item that's not a donation. Remove
                it before proceeding
              </Typography>
            )}
          </Grid>
        </>
      ) : (
        <Confirmation />
      )}
    </Grid>
  );
};

export default DonationForm;
