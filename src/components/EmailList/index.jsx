import React, { useState, useEffect } from "react";
import { Typography, TextField, Grid, Button } from "@material-ui/core";
import emailRegex from "regex/emailRegex";
import useStyles from "./styles";
import axios from "axios";

const EmailList = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const classes = useStyles();
  // window.location.href.includes("localhost")
  // ? "http://localhost:5001/sartorial-indy/us-central1/emailListJoin"
  const localFunction = false;
  const functionUrl = localFunction
    ? "http://localhost:5001/sartorial-indy/us-central1/emailListJoin"
    : "https://us-central1-sartorial-indy.cloudfunctions.net/emailListJoin";

  // this lets us dynamically disable / allow the button
  useEffect(() => {
    if (email && email.length > 0) {
      if (emailRegex(email)) {
        setError(false);
      } else {
        setError(true);
      }
    } else if (email.length === 0) {
      setError(false);
    }
  }, [email]);

  const handleSubmit = () => {
    // axios and function logic to add email to the database
    try {
      // add to database, if successful payment...
      axios
        .post(
          functionUrl,
          { email: email },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          // handle success
          // set local order so that they are shown confirmation message
          setResponseMessage(response.result);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          setErrorMessage(error.data);
        });
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  return (
    <Grid
      container
      className={classes.container}
      spacing={3}
      justify="center"
      id="media"
    >
      {responseMessage === "" && errorMessage === "" ? (
        <>
          <Grid item xs={12} style={{ width: "100%" }} id="content--inner">
            <Button
              variant={!error && email !== "" ? "contained" : "text"}
              color={!error && email !== "" ? "secondary" : "inherit"}
              style={
                !error && email !== "" ? { color: "white" } : { color: "black" }
              }
              disabled={error || email === ""}
              onClick={handleSubmit}
            >
              <Typography variant="h6" color="inherit">
                Join the Email List:
              </Typography>
            </Button>
          </Grid>
          <Grid item id="content--inner">
            <form autoComplete="off">
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="Your email"
                value={email}
                autoFocus
                onKeyPress={(ev) => {
                  if (ev.key === "Enter") {
                    ev.preventDefault();
                  }
                }}
                inputProps={{ maxLength: 50 }}
                onChange={(e) => setEmail(e.target.value)}
                helperText="i swear we'll only email you when we drop a collection"
              />
            </form>
            {error && (
              <Typography
                color="error"
                className={classes.errorLogin}
                align="left"
              >
                Please enter a valid email
              </Typography>
            )}
          </Grid>
        </>
      ) : errorMessage !== "" ? (
        <Typography color="error" className={classes.errorLogin} align="left">
          There was a backend error: {errorMessage}
        </Typography>
      ) : (
        responseMessage !== "" && (
          <>
            <Grid item>
              <Typography color="primary" variant="h2" align="left">
                Success!
              </Typography>
            </Grid>
            <Grid item>
              <Typography>{email} was added to our email list!</Typography>
            </Grid>
          </>
        )
      )}

      {}
    </Grid>
  );
};

export default EmailList;
