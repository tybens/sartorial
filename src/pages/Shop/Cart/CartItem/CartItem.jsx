import React from "react";
import {
  Typography,
  Button,
  Grid,
  Paper,
} from "@material-ui/core";

import useStyles from "./styles";


const CartItem = ({ item, onUpdateCartQty, quantity, onRemoveFromCart }) => {
  const classes = useStyles();

  const handleUpdateCartQty = (lineItemId, newQuantity) =>
    onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <div className={classes.image}>
              <img className={classes.img} alt={item.name} src={item.img} />
            </div>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {item.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {item.description}
                </Typography>
              </Grid>
              <Grid item>
                <div className={classes.buttons}>
                  <Button
                    type="button"
                    size="small"
                    onClick={() => handleUpdateCartQty(item.id, quantity - 1)}
                  >
                    -
                  </Button>
                  <Typography>&nbsp;{quantity}&nbsp;</Typography>
                  <Button
                    type="button"
                    size="small"
                    onClick={() => handleUpdateCartQty(item.id, quantity + 1)}
                  >
                    +
                  </Button>
                </div>
                <Button
                  variant="contained"
                  type="button"
                  color="secondary"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">${item.price}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}


export default CartItem;