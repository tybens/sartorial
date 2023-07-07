import React from "react";
import { Grid, Typography } from "@material-ui/core";

const ConcertMerchReleasingSoon = () => {
  return (
    <Grid
      item
      xs={12}
      fullWidth
      style={{ border: "solid black", padding: "40px" }}
    >
      <Typography
        variant="h4"
        align="center"
        className={classes.header}
        id="content--inner"
      >
        Concert Merch Releasing Soon!
      </Typography>
    </Grid>
  );
};

export default ConcertMerchReleasingSoon;
