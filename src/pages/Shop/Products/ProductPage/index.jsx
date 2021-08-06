import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Button, Grid, Typography } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import Carousel from "react-material-ui-carousel";
import classNames from "classnames";

import useStyles from "./styles";

const ProductPage = ({ collectionsData, onAddToCart, match }) => {
  const classes = useStyles();
    const handleAddToCart = () => onAddToCart(product.id, selectedSize, 1);
  const [selectedSize, setSelectedSize] = useState("M");

  const { collectionId, productId } = match.params;
  const collection = collectionsData.find(
    ({ id }) => id === parseInt(collectionId)
  );
  const product = collection.products.find(
    ({ id }) => id === parseInt(productId)
  );

  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <Grid container justify="space-around" className={classes.wrapper}>
      <Grid item xs={12} sm={5}>
        <Carousel interval={10000} animation="fade">
          {product.images.map((item, i) => (
            <img src={item} alt={`carousel ${i}`} key={i} width="100%" />
          ))}
        </Carousel>
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        container
        spacing={3}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          <Typography
            variant="h1"
            align="left"
            color="initial"
            className={classes.title}
          >
            {product.name}
          </Typography>
          <Typography
            variant="body1"
            align="left"
            color="textSecondary"
            className={classes.type}
            gutterBottom
          >
            {product.type}, ${product.price}
          </Typography>
          <Typography variant="h3" color="initial" align="left">
            {product.description}
          </Typography>
        </Grid>

        <Grid item container xs={10} spacing={4} justify="center">
          <Grid
            item
            xs={12}
            container
            direction="row"
            justify="space-between"
            className={classes.sizeWrap}
          >
            {sizes.map((size, i) => (
              <Grid
                item
                className={classNames(classes.sizeBox, classes.noSelect)}
                onClick={() => setSelectedSize(size)}
                style={
                  selectedSize === size
                    ? { borderColor: "black" }
                    : { borderColor: "lightgrey" }
                }
                key={i}
              >
                {size}
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              aria-label="Add to Cart"
              onClick={handleAddToCart}
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<AddShoppingCart />}
            >
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withRouter(ProductPage);
