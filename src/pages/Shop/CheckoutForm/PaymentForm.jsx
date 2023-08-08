import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Divider,
  CircularProgress,
} from "@material-ui/core";
import {
  Elements,
  useElements,
  useStripe,
  ExpressCheckoutElement,
  CardElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { withRouter } from "react-router-dom";
import useStyles from "./styles";
import Review from "./Review";
import { calculateOrderAmountWithTax } from "utils";

const stripePromise = loadStripe(
  "pk_live_51IBADsLCfTcKYCUjbICBBDL4ix1PYw36eqqQtagck0wc5mqXaNqVy02xeeRjESwb2cBvc1vSBN8PNkXQ3P8IcZ4V004Iznuds0"
);

const PaymentForm = ({
  cart,
  nextStep,
  backStep,
  shippingData,
  onCaptureCheckout,
  totalItems,
  donation = false,
  history,
  discount,
  setDiscount
}) => {
  const [pickup, setPickup] = useState(false);
  const [options, setOptions] = useState({
    mode: "payment",
    amount: Math.round(
      calculateOrderAmountWithTax(cart) * (1 - discount) * 100
    ),
    currency: "usd",
    // Customizable with appearance API.
  });

  useEffect(() => {
    setOptions({
      ...options,
      amount: Math.round(
        calculateOrderAmountWithTax(cart) * (1 - discount) * 100
      ),
    });
    // eslint-disable-next-line
  }, [discount, cart]);

  const handleCheck = () => {
    setPickup((pickup) => !pickup);
  };

  return (
    <>
      <Review
        cart={cart}
        totalItems={totalItems}
        handleCheck={handleCheck}
        discount={discount}
        setDiscount={setDiscount}
        donation={donation}
        pickup={pickup}
      />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment method
      </Typography>
      <Elements stripe={stripePromise} options={options}>
        <StripePayment
          history={history}
          cart={cart}
          pickup={pickup}
          onCaptureCheckout={onCaptureCheckout}
          nextStep={nextStep}
          backStep={backStep}
          shippingData={shippingData}
          discount={discount}
        />
      </Elements>
    </>
  );
};

const StripePayment = ({
  cart,
  onCaptureCheckout,
  nextStep,
  backStep,
  shippingData,
  discount,
  pickup,
  history,
}) => {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const stripe = useStripe();
  const elements = useElements();
  // const functionSecretUrl = 'http://localhost:5001/sartorial-indy/us-central1/paymentSecret'
  const functionSecretUrl =
    "https://us-central1-sartorial-indy.cloudfunctions.net/paymentSecret";

  const classes = useStyles();

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "orange",
        iconColor: "orange",
      },
    },
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const captureCheckout = (express, paymentIntentId) => {
    let orderData = {
      cart: cart,
      pickup: pickup,
      customer: {
        firstname: shippingData.firstName,
        lastname: shippingData.lastName,
        email: shippingData.email,
      },
      shipping: {
        name: `${shippingData.firstName} ${shippingData.lastName}`,
        address1: shippingData.address1,
        city: shippingData.city,
        state_code: shippingData.stateCode,
        country_code: "US",
        zip: shippingData.zip,
        email: shippingData.email,
      },
      fulfillment: { shipping_method: shippingData.shippingOption },
      payment: {
        gateway: "stripe",
        stripe: {
          payment_intent_id: paymentIntentId,
        },
        discount: discount,
      },
    };

    // log order to database
    // include tag for express? and if express than need to verify cart... or just keep unverified (and manually verify payment through stripe)
    onCaptureCheckout(orderData);
  }

  const onConfirm = async (event, express) => {
    if (event) {
      event.preventDefault();
    }
    setProcessing(true);

    if (!stripe) {
      // Stripe.js hasn't loaded yet.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setError(submitError.message);
      return;
    }

    // Create the PaymentIntent and obtain clientSecret
    const clientSecret = await axios
      .post(
        functionSecretUrl,
        { cart: cart, discount: discount, pickup: pickup },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        // handle success
        setSucceeded(true);
        return response.data.clientSecret;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setError(`Internal payment error ${error.message}`);
        return false;
      });
    if (!clientSecret) return;
    // Confirm the PaymentIntent using the details collected by the chosen Checkout Element
    var payload = null;
    if (express) {

      captureCheckout(express, "express-checkout");
      // if express call confirm Payment
      payload = await stripe.confirmPayment({
        // `elements` instance used to create the Express Checkout Element
        elements,
        // `clientSecret` from the created PaymentIntent
        clientSecret,
        confirmParams: {
          return_url:
            "https://habitatsartorial.org/shop/checkout/complete",
        },
      });
    } else {
      // otherwise call stripe.confirmCardPayment
      payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
    }

    if (payload.error) {
      // This point is only reached if there's an immediate error when
      // confirming the payment. Show the error to your customer (for example, payment details incomplete)
      setError(error.message);
      setProcessing(false);
    } else {
      // The payment UI automatically closes with a success animation.
      setError(null);
      setProcessing(false);
      setSucceeded(true);

      if (!express) {
        // need to capture checkout if normal card payment
        captureCheckout(express, payload.paymentIntent.id);
      }
      nextStep();
    }
  };


  return (
    <form
      className={classes.paymentForm}
      onSubmit={(event) => onConfirm(event, false)}
    >
      <ExpressCheckoutElement onConfirm={() => onConfirm(false, true)} />
      <div style={{margin: "10px 0"}}>
      <Typography variant='body1' gutterBottom >
        or
      </Typography>
      </div>
      <CardElement
        className={classes.cardElement}
        options={cardStyle}
        onChange={handleChange}
      />
      <br /> <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="outlined" color="secondary" onClick={backStep}>
          Back
        </Button>
        <Button
          type="submit"
          variant="contained"
          className={
            processing || disabled || succeeded ? classes.disabled : ""
          }
          disabled={disabled}
          id="submit"
          color="primary"
        >
          <span className={classes.buttonText}>
            {processing ? (
              <CircularProgress className={classes.spinner} />
            ) : (
              "Pay"
            )}
          </span>
        </Button>
      </div>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className={classes.cardError} role="alert">
          {error}
        </div>
      )}
    </form>
  );
};

export default withRouter(PaymentForm);
