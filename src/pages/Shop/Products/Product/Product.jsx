import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useLocation, useNavigate } from "react-router-dom";
import { Fade } from "react-reveal";
import classNames from "classnames";
import useStyles from "./styles";

const Product = ({ product, id }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate(`${location.pathname}/${product.id}`);
  };

  return (
    <Grid
      item
      xs={10}
      className={classNames(
        classes.landing,
        product.disabled && classes.disabled
      )}
      container
      justify="center"
      onClick={!product.disabled ? handleClick : null}
      style={{ marginTop: Math.random() * 100 }}
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
          <span style={{ fontSize: "0.8em", verticalAlign: "3px" }}>$</span>
          {product.price}
        </Typography>
        <Typography variant="h4" color="primary" noWrap className={classes.soldOutText}>{product.disabled && "sold out"}</Typography>
      </Fade>
    </Grid>
  );
};

export default Product;
