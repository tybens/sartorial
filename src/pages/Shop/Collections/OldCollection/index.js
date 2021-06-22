import React from "react";
import useStyles from "./styles";
import { Grid, Typography } from "@material-ui/core";

const OldCollection = ({ index, name, img, url, id }) => {
  const classes = useStyles();
  // const history = useHistory();

  const handleClick = () => {
    // history.push(`${url}/${id}`);
  };

  return (
    <Grid item xs={12} md={6} lg={4} className={classes.landing} key={id} style={{marginTop: id*50}}>
      <img src={img} className={classes.landingImage} onClick={handleClick} />
      <Typography variant="h3" color="primary" className={classes.title} align="right">{name}</Typography>
    </Grid>
  );
};

export default OldCollection;
