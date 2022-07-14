import React, { useState, useEffect } from "react";
import { Typography, TextField, Grid, Button } from "@material-ui/core";
import emailRegex from "regex/emailRegex";
import { useForm } from "react-hook-form";
import useStyles from "./styles";

const DonationForm = () => {
  const [email, setEmail] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [amount, setAmount] = useState(1);

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
    console.log(amount)
    if (amount && (amount >= 0)) {
      setDonationError(false)
    } else {
      setDonationError(true)
    }

  }, [email, amount]);

  const handleBlur = () => {
    if (amount && amount <= 0) {
      setAmount(1);
    }
  };

  const handleSubmit = () => {
    console.log('handle submit');
  }

  let formFilled = email && !emailError && first && last && amount > 0 && !donationError;

  return (
    <Grid
      container
      className={classes.container}
      spacing={3}
      justify="center"
      id="media"
    >
      <Grid item xs={12} style={{ width: "100%" }} id="content--inner">
        <Typography variant="h6" color="inherit">
          Donate Today
        </Typography>
        <Typography variant="h6" color="inherit" class={classes.paragraph}>
          Why donate (tax-free!) to Habitat Sartorial? We made it possible to donate to charity just by buying apparel - the next phase of our plan is spreading the word. Through advertising, your contribution will enable millions of Indy folks - and eventually people nationwide - to give back to their city through fashion.
        </Typography>
      </Grid>
      <Grid item id="content--inner">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={3} justify="space-between" alignItems="center">
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
              <Button variant="contained" color="secondary" disabled={!formFilled}>
                Proceed to donation
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid >
  );
};

export default DonationForm;
