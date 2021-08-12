import React, { useState } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  TextField,
  Grid,
  Button,
} from "@material-ui/core";
import axios from "axios";
import useStyles from "./styles";

const Review = ({ cart, totalItems, discount, setDiscount }) => {
  const classes = useStyles();
  const taxes = 1.07;

  function calculateOrderAmount(cart) {
    var sum = 0;
    for (var el in cart) {
      if (
        cart.hasOwnProperty(el) &&
        cart[el].hasOwnProperty("quantity") &&
        cart[el].hasOwnProperty("product")
      ) {
        sum +=
          parseFloat(cart[el].quantity) * parseFloat(cart[el].product.price);
      }
    }
    return sum;
  }


  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {Object.entries(cart).map(([productId, item]) => (
          <ListItem style={{ padding: "10px 0" }} key={productId}>
            <ListItemText
              primary={`${item.product.name} | ${item.size}`}
              secondary={`Quantity: ${item.quantity}`}
            />
            <Typography variant="body2">${item.quantity * 25}</Typography>
          </ListItem>
        ))}
        <Divider />
        <DiscountForm discount={discount} setDiscount={setDiscount} />
        <Divider style={{ margin: "0 0 10px 0" }} />
        <ListItem className={classes.listItem}>
          <ListItemText primary="Subtotal" />
          <Typography variant="subtitle1">
            ${calculateOrderAmount(cart)} {/* assuming every item is $25 */}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Shipping" />
          <Typography variant="subtitle1">Free!</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Taxes" />
          <Typography variant="subtitle1">
            ${Math.round((taxes - 1) * calculateOrderAmount(cart) * 100) / 100}{" "}
            {/* assuming every item is $25 */}
          </Typography>
        </ListItem>
        <ListItem style={{ padding: "10px 0", fontWeight: 700 }}>
          <ListItemText
            primary="Total"
            primaryTypographyProps={{
              style: { fontWeight: 700, padding: "0", margin: "0" },
              variant: "h3",
            }}
          />
          <Typography variant="subtitle1">
            ${calculateOrderAmount(cart) * taxes}{" "}
            {/* assuming every item is $25 */}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

const DiscountForm = ({ setDiscount }) => {
  const [couponCode, setCouponCode] = useState("");
  const [couponError, setCouponError] = useState(false);
  const classes = useStyles();
  const functionCouponUrl =
    "https://us-central1-sartorial-indy.cloudfunctions.net/checkEarlyBirdCoupon";

  const handleSubmit = () => {
    if (couponCode === "EARLYBIRD") {
      setCouponError(false);
      axios
        .post(
          functionCouponUrl,
          { body: "" },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          // handle success
          if (response) setDiscount(0.05);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    } else {
      setCouponError(true);
    }
  };

  return (
    <form className={classes.discountForm} onSubmit={handleSubmit}>
      <Grid container spacing={2} justify="flex-start">
        <Grid item xs={9} container justify="flex-start">
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Gift card or discount code"
            value={couponCode}
            onKeyPress={(ev) => {
              if (ev.key === "Enter") {
                ev.preventDefault();
              }
            }}
            inputProps={{ maxLength: 50 }}
            onChange={(e) => setCouponCode(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            disabled={!couponCode}
            className={classes.couponButton}
            onClick={handleSubmit}
          >
            Apply
          </Button>
        </Grid>
        {couponError && (
          <Grid item xs={12} container justify="flex-start">
            <Typography color="inherit" className={classes.couponError}>
              Enter a valid discount code or gift card
            </Typography>
          </Grid>
        )}
      </Grid>
    </form>
  );
};

export default Review;
