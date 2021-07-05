import React from "react";
import { Typography, Grid, Paper, IconButton, Box } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./styles";

import HoverImage from "components/HoverImage";

// props: position and isActive from the react cursor position wrapper
const CartItem = ({ item, onUpdateCartQty, quantity, onRemoveFromCart }) => {
  const classes = useStyles();
  const handleUpdateCartQty = (lineItemId, newQuantity) =>
    onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item></Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <HoverImage img={item.img}>
                  <Typography gutterBottom variant="h6">
                    {item.name}
                  </Typography>
                </HoverImage>
                <span className={classes.description}>{item.description}</span>
              </Grid>
              <Grid item container direction="row" alignItems="center" xs>
                <IconButton
                  type="button"
                  size="small"
                  color="inherit"
                  onClick={() => handleUpdateCartQty(item.id, quantity - 1)}
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
                  onClick={() => handleUpdateCartQty(item.id, quantity + 1)}
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
                onClick={() => handleRemoveFromCart(item.id)}
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
