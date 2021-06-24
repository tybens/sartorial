import React, { useEffect }  from "react";
import useStyles from "./styles";
import EmailList from "components/EmailList";
import { Grid, Typography } from "@material-ui/core";

const ContactUs = () => {
  const classes = useStyles();

  const MyTypography = ({content="", children="", align}) => {

    return (<Typography
      variant="h3"
      id="content--inner"
      className={classes.noMargin}
      color="primary"
      align={align}
    >
      {content}
      {children}
    </Typography>)
  }
  return (
    <Grid
      container
      justify="space-around"
      alignItems="center"
      className={classes.container}
      direction="column"
    >
      <Grid item xs={12} className={classes.containerInner} id="content" container>
        <Grid item xs={3}><MyTypography align="left" content="Tel:" /></Grid>
        <Grid item xs={9}><MyTypography align="right" content="+1 (317) 469-8797" /></Grid>
        <Grid item xs={3}><MyTypography align="left" content="email:" /></Grid>
        <Grid item xs={9}><MyTypography align="right" content="payne@habitatsartorial.org" /></Grid>
        <Grid item xs={3}><MyTypography align="left" content="address:" /></Grid>
        <Grid item xs={9}><MyTypography align="right"><p className={classes.noMargin}>3250A w 86th st #1005</p>
          <p className={classes.noMargin}>Indianapolis, IN 46268</p></MyTypography></Grid>
  
      </Grid>
        <EmailList />
    </Grid>
  );
};

export default ContactUs;
