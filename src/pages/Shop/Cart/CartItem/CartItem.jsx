import React from "react";
import { Typography, Grid, Paper, IconButton, Box } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./styles";

import HoverImage from "components/HoverImage";

// props: position and isActive from the react cursor position wrapper
const CartItem = ({
  item,
  productData,
  productId,
  size,
  onUpdateCartQty,
  quantity,
  onRemoveFromCart,
}) => {
  const classes = useStyles();

  const handleUpdateCartQty = (newQuantity) =>
    onUpdateCartQty(productId, newQuantity, productData);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item></Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <HoverImage img={item.data.product.img}>
                  <Typography gutterBottom variant="h6">
                    {item.data.product.name}
                    {item.data.collection !== "s21-music" && ` | ${item.data.size}`}
                    {item.data.product.name === "\"HA317AT\" Sweatshorts" && ` | ${item.data.customInseam}"`}
                  </Typography>
                </HoverImage>
                {/* <span className={classes.description}>{item.data.product.description}</span> */}
              </Grid>
              <Grid item container direction="row" alignItems="center" xs>
                <IconButton
                  type="button"
                  size="small"
                  color="inherit"
                  onClick={() => handleUpdateCartQty(quantity - 1)}
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <Box component="span" fontWeight={700}>
                  &nbsp;{quantity}&nbsp;
                </Box>
                <IconButton
                  type="button"
                  size="small"
                  color="inherit"
                  onClick={() => handleUpdateCartQty(quantity + 1)}
                >
                  <AddCircleOutlineIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Grid
              item
              xs={2}
              container
              direction="column"
              alignItems="center"
              style={{ justifyContent: "space-between" }}
              spacing={2}
            >
              <Typography variant="subtitle1">${item.price}</Typography>
              <IconButton
                variant="contained"
                type="button"
                color="secondary"
                onClick={() => onRemoveFromCart(productId)}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default CartItem;
