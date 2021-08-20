import React from "react";
import useStyles from "./styles";
import { Grid, Typography } from "@material-ui/core";
import { Fade } from "react-reveal";

const OldCollection = ({ onClick, name, img, price, id }) => {
  const classes = useStyles();

  return (
    <Grid
      item
      xs={10}
      className={classes.landing}
      container
      justify="center"
      onClick={onClick}
      style={{ marginTop: id * 50 }}
    >
      <Fade bottom>
        <img src={img} alt={name} className={classes.landingImage} />
        <Typography
          variant="h3"
          color="primary"
          className={classes.title}
          align="right"
        >
          {name}
        </Typography>
        <Typography
          variant="h3"
          color="primary"
          className={classes.price}
          align="right"
        >
          {price}
        </Typography>
      </Fade>
    </Grid>
  );
};

export default OldCollection;
