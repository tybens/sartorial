import React, { useState } from "react";
import { Typography, Button, Grid, Collapse } from "@material-ui/core";
import { Link } from "react-router-dom";

import classNames from "classnames";
import PriceGuidelines from "assets/price_guidelines.png";
import HoverImage from "components/HoverImage";
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
  const [showModal, setShowModal] = useState(false);
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
    <div id="content" className={classes.cartWrapper}>
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
      <Grid
        item
        xs={12}
        container
        justify="space-between"
        className={classes.cardDetails}
      >
        <Grid item>
          <Typography variant="h4" align="left" className={classes.noPadding}>
            Total: ${totalPrice(cart)}
          </Typography>
          <div
          className={classes.underline}
            onMouseEnter={() => setShowModal(true)}
            onMouseLeave={() => setShowModal(false)}
          >
            <Typography variant="subtitle1" color="secondary" align="left">
              Where does this price come from?
            </Typography>
          </div>
        </Grid>
        <Grid item>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
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
            color="secondary"
          >
            Checkout
          </Button>
        </Grid>
      </Grid>
      <Collapse in={showModal}>
        <img
          src={PriceGuidelines}
          className={classNames(classes.modal, showModal && classes.opaque)}
        />
      </Collapse>
    </div>
  );

  return (
    <div className={classes.content}>
      <h1 style={{ margin: "0" }}>Your Cart</h1>
      {!Object.keys(cart).length ? renderEmptyCart() : renderCart()}
    </div>
  );
};

export default Cart;
