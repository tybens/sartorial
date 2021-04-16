import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product/Product";
import useStyles from "./styles";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Products = ({ collectionsData, onAddToCart }) => {
  const classes = useStyles();
  const { collectionId } = useParams();
  const collection = collectionsData.find(
    ({ id }) => id === parseInt(collectionId)
  );

  return (
    <>
      <main className={classes.content}>
        <Grid container justify="center" spacing={4}>
          {collection.products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  );
};

export default Products;
