import React from "react";
import useStyles from "./styles";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

const OldCollection = ({ index, name, img, url, id }) => {
  const classes = useStyles();

  return (
    <Grid
      item
      xs={12}
      md={6}
      lg={4}
      className={classes.landing}
      key={id}
      style={{ marginTop: id * 50 }}
    >
      <Fade bottom>
        <Link
          className={classes.landingImage}
          style={{ backgroundImage: `url(${img})` }}
          to={`${url}/${id}`}
        />
        <Typography
          variant="h3"
          color="primary"
          className={classes.title}
          align="right"
        >
          {name}
        </Typography>
      </Fade>
    </Grid>
  );
};

export default OldCollection;
