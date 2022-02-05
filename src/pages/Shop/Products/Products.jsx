import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product/Product";
import useStyles from "./styles";
import { withRouter } from "react-router-dom";
import MusicProducts from "../MusicProducts"
const Products = ({ collectionsData, onAddToCart, match, collectionId= null }) => {
  const classes = useStyles();
  collectionId = !collectionId ? match.params.collectionId : collectionId;
  const collection = collectionsData.find(({ id }) => id === collectionId);

  if (collectionId === "s21-music") {
    return <MusicProducts collection={collection} onAddToCart={onAddToCart}/>;
  }


  return (
    <>
      <main className={classes.content}>
        <Grid container justify="center" spacing={4}>
          {collection.products.map((product, id) => (
            <Grid item container justify="center" key={id} xs={12} sm={6} md={4}>
              <Product product={product} onAddToCart={onAddToCart} id={id} />
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  );
};

export default withRouter(Products);
