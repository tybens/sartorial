import React, { useRef, useState } from "react";
import { Typography, Grid, Paper, IconButton, Box } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./styles";

// props: position and isActive from the react cursor position wrapper
const CartItem = ({
  item,
  onUpdateCartQty,
  quantity,
  onRemoveFromCart,
  position,
  isActive,
}) => {
  const classes = useStyles();
  const cardRef = useRef(null);
  const [offSetTopAndLeft, setOffSetTopAndLeft] = useState({ top: 0, left: 0 });
  const handleUpdateCartQty = (lineItemId, newQuantity) =>
    onUpdateCartQty(lineItemId, newQuantity);
  const [hideImage, setHideImage] = useState(false)

  if (isActive && (position.x < 0 || position.y < 0 || position.x > 500 || position.y > 128) && !hideImage) {
    // the mouse has left the card div and the image is showing, hide the image
    setHideImage(true)
    // set to false after a 1/10th of a second to allow for re-hovering
    setTimeout(() => {
      setHideImage(false)
    }, 100)
  }

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  const handleMouseEnterHoverImage = () => {
    if (cardRef.current) {
      let { offsetTop, offsetLeft } = cardRef.current;
      setOffSetTopAndLeft({ top: offsetTop, left: offsetLeft });
    }
  };

  return (
    <div className={classes.root}>
      <div
        className={
          (isActive && !hideImage)
            ? `${classes.hoverImage} ${classes.hovered}`
            : classes.hoverImage
        }
        style={{
          background: `rgba(0,0,0,0) url(${item.img}) no-repeat scroll center center`,
          backgroundImage: item.img,
          top: offSetTopAndLeft.top + position.y,
          left: offSetTopAndLeft.left + position.x,
        }}
      />
      <Paper
        className={classes.paper}
        onMouseEnter={handleMouseEnterHoverImage}
        ref={cardRef}
      >

        <Grid container spacing={2}>
          <Grid item>
            {/* <div className={classes.image}>
              <img className={classes.img} alt={item.name} src={item.img} />
            </div> */}
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h6">
                  {item.name}
                </Typography>
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
