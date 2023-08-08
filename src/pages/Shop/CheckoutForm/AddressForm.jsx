import { useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import SelectUSState from "react-select-us-states";
import makeStyles from "./styles";
import FormInput from "./FormInput";

const AddressForm = ({ onSubmit, nextStep }) => {
  const [stateCode, setStateCode] = useState(null);

  const classes = makeStyles();
  const methods = useForm();

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={nextStep}
        style={{ marginBottom: 10 }}
      >
        Picking up at the concert? Click to skip to Payment
      </Button>
      <Typography variant="h6" gutterBottom>
        Shipping address (currently only within the US)
      </Typography>
      <Typography variant="body"></Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            onSubmit({
              ...data,
              stateCode,
            })
          )}
        >
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="address1" label="Address line 1" />
            <FormInput required name="city" label="City" />
            <Grid item xs={12} sm={6}>
              <SelectUSState
                className={classes.stateCode}
                onChange={setStateCode}
              />
            </Grid>
            <FormInput required name="zip" label="Zip / Postal code" />
          </Grid>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              component={Link}
              variant="outlined"
              color="secondary"
              to="/shop/cart"
            >
              Back to Cart
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
