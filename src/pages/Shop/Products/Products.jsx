import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product/Product";
import useStyles from "./styles";
import { withRouter } from "react-router-dom";

const Products = ({ collectionsData, onAddToCart, match }) => {
  const classes = useStyles();
  const collectionId = match.params.collectionId;
  const collection = collectionsData.find(
    ({ id }) => id === parseInt(collectionId)
  );

  return (
    <div className={classes.content} id="content">
      <Grid container justify="center" spacing={4}>
        {collection.products.map((product) => (
          <Grid
            item
            key={product.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            id="content--inner"
          >
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default withRouter(Products);
