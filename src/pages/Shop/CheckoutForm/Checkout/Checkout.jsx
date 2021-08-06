import React, { useState } from "react";
import {
  CssBaseline,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import useStyles from "./styles";

const steps = ["Shipping address", "Payment details"];

const Checkout = ({ cart, totalItems, onCaptureCheckout, order, error }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const classes = useStyles();

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);


  const onSubmit = (data) => {
    setShippingData(data);

    nextStep();
  };
  let Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <Typography variant="h5">
            Thank you for your purchase, {order.customer.firstname}{" "}
            {order.customer.lastname}!
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitle2">
            Order ref: {order.payment.stripe.payment_intent_id}
          </Typography>
        </div>
        <div style={{display: "flex", justifyContent: "center", marginTop: "2rem"}}>
          <br />
          <Button component={Link} variant="outlined" color="inherit" type="button" to="/shop">
            Back to shopping
        </Button>
        </div>
      </>
    ) : (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      );

  if (error) {
    Confirmation = () => (
      <>
        <Typography variant="h5">Error: {error}</Typography>
        <br />
        <Button component={Link} variant="outlined" color="inherit" type="button" to="/shop">
          Back to shopping
        </Button>
      </>
    );
  }

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm
        nextStep={nextStep}
        setShippingData={setShippingData}
        onSubmit={onSubmit}
      />
    ) : (
        <PaymentForm
          cart={cart}
          totalItems={totalItems}
          nextStep={nextStep}
          backStep={backStep}
          shippingData={shippingData}
          onCaptureCheckout={onCaptureCheckout}
        />
      );

  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
              <Form />
            )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
