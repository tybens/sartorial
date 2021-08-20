import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Button, Grid, Typography, TextField } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import Carousel from "react-material-ui-carousel";
import classNames from "classnames";

import useStyles from "./styles";

const ProductPage = ({ collectionsData, onAddToCart, match }) => {
  const classes = useStyles();
  const handleAddToCart = () =>
    onAddToCart(
      `${product.id}${selectedSize}${
        product.name === '"HA317AT" Sweatshorts' ? customInseam : ""
      }`,
      1,
      {
        size: selectedSize,
        collection: collection.name,
        product: product,
        ...(product.name === '"HA317AT" Sweatshorts' && {
          customInseam:
            customInseam > 8 ? 8 : customInseam < 1.5 ? 1.5 : customInseam,
        }),
      }
    );

  // custom inseam logic only for sweatshorts of summer21 so far
  const [customInseam, setCustomInseam] = useState(5.5);
  const handleBlur = () => {
    if (customInseam > 8) {
      setCustomInseam(8);
    } else if (customInseam < 1.5) {
      setCustomInseam(1.5);
    }
  };

  const [selectedSize, setSelectedSize] = useState("M");

  const { collectionId, productId } = match.params;
  const collection = collectionsData.find(({ id }) => id === collectionId);
  const product = collection.products.find(
    ({ id }) => id === parseInt(productId)
  );

  const sizes = ["S", "M", "L", "XL"];

  return (
    <Grid container justify="space-around" className={classes.wrapper}>
      <Grid item xs={12} sm={5}>
        <Carousel interval={5000} animation="fade">
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
            variant="h2"
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
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            color="primary"
            align="left"
            gutterBottom
            component="div"
          >
            Details
          </Typography>
          <br />
          {product.description.map((text, id) => (
            <Typography
              variant="body2"
              color="primary"
              align="left"
              component="div"
              gutterBottom
              key={id}
            >
              {text}
            </Typography>
          ))}
        </Grid>
        {product.name === '"HA317AT" Sweatshorts' && (
          <Grid item xs={12} md={10} container justify="flex-start">
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Customize Inseam"
              value={customInseam}
              type="number"
              disabled={false}
              onBlur={handleBlur}
              inputProps={{
                step: 0.1,
                max: 8,
                min: 1.5,
              }}
              onKeyPress={(ev) => {
                if (ev.key === "Enter") {
                  ev.preventDefault();
                }
              }}
              onChange={(e) => setCustomInseam(e.target.value)}
            />
          </Grid>
        )}

        <Grid item container xs={12} md={10} spacing={4} justify="center">
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
