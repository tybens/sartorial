import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Divider,
  CircularProgress,
} from "@material-ui/core";
import {
  Elements,
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

import useStyles from "./styles";
import Review from "./Review";

const stripePromise = loadStripe("pk_live_51IBADsLCfTcKYCUjbICBBDL4ix1PYw36eqqQtagck0wc5mqXaNqVy02xeeRjESwb2cBvc1vSBN8PNkXQ3P8IcZ4V004Iznuds0");

const PaymentForm = ({
  cart,
  nextStep,
  backStep,
  shippingData,
  onCaptureCheckout,
  totalItems,
  donation=false
}) => {
  const [discount, setDiscount] = useState(0);
  const [pickup, setPickup] = useState(false)

  const handleCheck = () => {
    setPickup((pickup) => !pickup)
  }

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
      <Elements stripe={stripePromise}>
        <StripePayment
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
  pickup
}) => {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  // const functionSecretUrl = 'http://localhost:5001/sartorial-indy/us-central1/paymentSecret'
  const functionSecretUrl =
    "https://us-central1-sartorial-indy.cloudfunctions.net/paymentSecret";

  const classes = useStyles();

  useEffect(() => {
    // generate payment intent as soon as page loads or discount is applied
    axios
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
        setClientSecret(response.data.clientSecret);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setError(`Internal payment error ${error.message}`);
      });
    // eslint-disable-next-line
  }, [discount]);

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
        payment_intent_id: "test",
      },
      discount: discount,
    },}
    console.log(orderData)
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);

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
            payment_intent_id: payload.paymentIntent.id,
          },
          discount: discount,
        },
      };

      // log order to database
      onCaptureCheckout(orderData);

      nextStep();
    }
  };

  return (
    <form className={classes.paymentForm} onSubmit={handleSubmit}>
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

export default PaymentForm;
