import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import CartItem from "./CartItem/CartItem";
import useStyles from "./styles";

const Cart = ({
  cart,
  totalItems,
  totalPrice,
  onUpdateCartQty,
  onRemoveFromCart,
  onEmptyCart,
}) => {
  const classes = useStyles();
  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,{" "}
      <Link className={classes.link} to="/shop/collections">
        start adding some
      </Link>
      !
    </Typography>
  );

  const renderCart = () => (
    <>
      <h6 style={{ margin: "-20px 0 10px 0", color: "grey" }}>
        hover product name for preview
      </h6>
      <Grid container direction="column" alignItems="center" spacing={3}>
        {Object.entries(cart).map(([productId, item]) => {
          return (
            <Grid item xs={12} key={productId}>
              <CartItem
                item={item.product}
                quantity={parseInt(item.quantity)}
                onUpdateCartQty={onUpdateCartQty}
                onRemoveFromCart={onRemoveFromCart}
              />
            </Grid>
          );
        })}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Total: ${totalPrice(cart)}</Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty cart
          </Button>
          <Button
            className={classes.checkoutButton}
            component={Link}
            to="/shop/checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <div className={classes.content}>
      <h1 style={{ margin: "0" }}>Your Cart</h1>
      {!Object.keys(cart).length ? renderEmptyCart() : renderCart()}
    </div>
  );
};

export default Cart;
