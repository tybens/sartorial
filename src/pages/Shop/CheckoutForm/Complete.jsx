import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { Paper, Typography, Divider, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      // width: "100%",
      marginTop: 60,
    },
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },

  layout: {
    width: "auto",
    minHeight: "50vh",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: "100vw",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}));

const Complete = ({
  location,
}) => {
  const classes = useStyles();
  const payment_intent_id = new URLSearchParams(location.search).get("payment_intent");

  return (
    <Grid
      className={classes.layout}
      container
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout Complete!
          </Typography>
          <Divider style={{ margin: "0 0 10px 0" }} />
          <Typography variant="h6">Thank you for your purchase!</Typography>
          <Typography variant="caption">Your order reference: {payment_intent_id}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withRouter(Complete);
