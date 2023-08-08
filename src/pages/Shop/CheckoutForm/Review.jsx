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
  CircularProgress,
  Checkbox,
} from "@material-ui/core";
import axios from "axios";
import useStyles from "./styles";
import { calculateOrderAmountWithTax, calculateOrderAmountNoTax } from "utils";

const Review = ({
  cart,
  totalItems,
  discount,
  setDiscount,
  donation,
  handleCheck,
  pickup,
}) => {
  const classes = useStyles();
  const concert = false;

  function round(num) {
    return Math.round(num * 100) / 100;
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
              primary={`${item.data.product.name} ${
                item.data.collection !== "s21-music"
                  ? `| ${item.data.size}`
                  : ""
              } ${
                item.data.product.name === '"HA317AT" Sweatshorts'
                  ? ` | ${item.data.customInseam}"`
                  : ""
              }`}
              secondary={`Quantity: ${item.quantity}`}
            />
            <Typography
              variant="subtitle1"
              className={classes.listItem}
              color="inherit"
            >
              ${item.price * item.quantity}
            </Typography>
          </ListItem>
        ))}
        {!donation && (
          <>
            <Divider />
            <DiscountForm discount={discount} setDiscount={setDiscount} />
            <Divider style={{ margin: "0 0 10px 0" }} />
          </>
        )}
        <ListItem className={classes.listItem}>
          <ListItemText
            primary="Subtotal"
            primaryTypographyProps={{ variant: "inherit" }}
          />
          <Typography variant="subtitle1">
            ${round(calculateOrderAmountNoTax(cart))}
          </Typography>
        </ListItem>
        {!donation && !pickup && (
          <ListItem className={classes.listItem}>
            <ListItemText
              primary="Shipping"
              primaryTypographyProps={{ variant: "inherit" }}
            />
            <Typography variant="subtitle1">Free!</Typography>
          </ListItem>
        )}
        {discount !== 0 && (
          <ListItem className={classes.listItem} style={{ color: "green" }}>
            <ListItemText
              primary="Discount!"
              primaryTypographyProps={{ variant: "inherit" }}
            />
            <Typography variant="subtitle1" color="inherit">
              - ${round(discount * calculateOrderAmountNoTax(cart))}
            </Typography>
          </ListItem>
        )}
        {!donation && (
          <ListItem className={classes.listItem}>
            <ListItemText
              primary="Taxes"
              primaryTypographyProps={{ variant: "inherit" }}
            />
            <Typography variant="subtitle1">
              $
              {round(
                (1 - discount) *
                  (calculateOrderAmountWithTax(cart) -
                    calculateOrderAmountNoTax(cart))
              )}
            </Typography>
          </ListItem>
        )}
        {!donation && concert && (
          <ListItem className={classes.listItem}>
            <ListItemText
              primary="Pickup At The Concert ($5 off)"
              primaryTypographyProps={{ variant: "inherit" }}
            />
            <Checkbox onChange={handleCheck} />
          </ListItem>
        )}
        <ListItem style={{ padding: "10px 0", fontWeight: 700 }}>
          <ListItemText
            primary="Total"
            primaryTypographyProps={{
              style: { fontWeight: 700, padding: "0", margin: "0" },
              variant: "h3",
            }}
          />
          <Typography variant="subtitle1">
            $
            {round(
              calculateOrderAmountWithTax(cart) * (1 - discount) - (pickup && 5)
            )}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

const DiscountForm = ({ setDiscount, discount }) => {
  const [couponCode, setCouponCode] = useState("");
  const [couponError, setCouponError] = useState("");
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const functionCouponUrl =
    "https://us-central1-sartorial-indy.cloudfunctions.net/checkEarlyBirdCoupon";
  // "http://localhost:5001/sartorial-indy/us-central1/checkEarlyBirdCoupon";

  const handleSubmit = () => {
    setLoading(true);
    setCouponError("");
    axios
      .post(
        functionCouponUrl,
        {
          couponCode: couponCode,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        // handle success
        setLoading(false);
        if (response.data.result === "success") {
          setDiscount(response.data.discount);
        } else if (response.data.result === "na") {
          setCouponError("Please enter a valid discount code or gift card");
        } else {
          setCouponError(
            couponCode === "EARLYBIRD"
              ? "EARLYBIRD has been used more than 30 times already, sorry :("
              : "That coupon has already been used... sorry :("
          );
        }
      })
      .catch(function (error) {
        // handle error
        setCouponError(
          "Some error has occurred, feel free to contact support."
        );
        console.log(error);
      });
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
            disabled={discount}
            fullWidth
            onKeyPress={(ev) => {
              if (ev.key === "Enter") {
                ev.preventDefault();
              }
            }}
            inputProps={{ maxLength: 50 }}
            onChange={(e) => setCouponCode(e.target.value.replace(/\s+/g, ""))}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            disabled={!couponCode || discount}
            className={classes.couponButton}
            onClick={handleSubmit}
          >
            {loading ? <CircularProgress /> : "Apply"}
          </Button>
        </Grid>
        {couponError && (
          <Grid item xs={12} container justify="flex-start">
            <Typography color="inherit" className={classes.couponError}>
              {couponError}
            </Typography>
          </Grid>
        )}
      </Grid>
    </form>
  );
};

export default Review;
