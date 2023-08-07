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
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import Review from "./Review";

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
}) => {
  const [discount, setDiscount] = useState(0);
  const [pickup, setPickup] = useState(false);

  const handleCheck = () => {
    setPickup((pickup) => !pickup);
  };

  const options = {
    mode: "payment",
    amount: 1099,
    currency: "usd",
    // Customizable with appearance API.
    appearance: {
      /*...*/
    },
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
}) => {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  // const functionSecretUrl = 'http://localhost:5001/sartorial-indy/us-central1/paymentSecret'
  const functionSecretUrl =
    "https://us-central1-sartorial-indy.cloudfunctions.net/paymentSecret";
  const navigate = useNavigate();

  const classes = useStyles();

  useEffect(() => {
    // empty cart, so navigate to home
    if (Object.keys(cart).length === 0) {
      navigate("/");
    }
  }, [cart, navigate]);

  // const cardStyle = {
  //   style: {
  //     base: {
  //       color: "#32325d",
  //       fontFamily: "Arial, sans-serif",
  //       fontSmoothing: "antialiased",
  //       fontSize: "16px",
  //       "::placeholder": {
  //         color: "#32325d",
  //       },
  //     },
  //     invalid: {
  //       color: "orange",
  //       iconColor: "orange",
  //     },
  //   },
  // };

  // const handleChange = async (event) => {
  //   // Listen for changes in the CardElement
  //   // and display any errors as the customer types their card details
  //   setDisabled(event.empty);
  //   setError(event.error ? event.error.message : "");
  // };

  const onConfirm = async (event) => {
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
    const res = await axios
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
        setSucceeded(true)
        return { client_secret: response.data.clientSecret };
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setError(`Internal payment error ${error.message}`);
      });

    const { client_secret: clientSecret } = await res.json();

    // Confirm the PaymentIntent using the details collected by the Express Checkout Element
    const { thisError } = await stripe.confirmPayment({
      // `elements` instance used to create the Express Checkout Element
      elements,
      // `clientSecret` from the created PaymentIntent
      clientSecret,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (thisError) {
      // This point is only reached if there's an immediate error when
      // confirming the payment. Show the error to your customer (for example, payment details incomplete)
      setError(thisError.message);
    } else {
      // The payment UI automatically closes with a success animation.
      // Your customer is redirected to your `return_url`.

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
            payment_intent_id: "",
          },
          discount: discount,
        },
      };

      // log order to database
      onCaptureCheckout(orderData);
      setProcessing(false)
      nextStep();
    }
  };

  return (
    <div className={classes.paymentForm}>
      <ExpressCheckoutElement onConfirm={onConfirm} />
      <br /> <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="outlined" color="secondary" onClick={backStep}>
          Back
        </Button>
        <Button
          type="submit"
          variant="contained"
          className={
            processing || succeeded ? classes.disabled : ""
          }
          disabled={!succeeded}
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
    </div>
  );
};

export default PaymentForm;
