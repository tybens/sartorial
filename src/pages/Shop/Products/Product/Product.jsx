import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { Fade } from "react-reveal";

import useStyles from "./styles";

const Product = ({ history, product, id }) => {
  const classes = useStyles();

  const handleClick = () => {
    history.push(`${history.location.pathname}/${product.id}`);
  };

  return (
    <Grid
      item
      xs={10}
      className={classes.landing}
      container
      justify="center"
      onClick={handleClick}
      style={{ marginTop: Math.random() * 100}}
    >
      <Fade bottom>
        <img
          src={product.img}
          alt={product.name}
          className={classes.landingImage}
        />
        <Typography
          variant="h3"
          color="primary"
          className={classes.title}
          align="right"
        >
          {product.name}
        </Typography>
        <Typography
          variant="h3"
          color="primary"
          className={classes.price}
          align="right"
        >
          <span style={{fontSize: "0.8em", verticalAlign: "3px"}}>$</span>{product.price}
        </Typography>
      </Fade>
    </Grid>
  );
};

export default withRouter(Product);
