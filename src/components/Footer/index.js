import { Grid, Typography } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Footer = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      className={classNames(classes.colorBlack, classes.fullHeightContainer)}
    >
      <Grid
        item
        xs={11}
        md={10}
        xl={9}
        container
        direction="column"
        justify="space-evenly"
      >
        <Grid item container justify={"space-between"} spacing={2}>
          <Grid
            item
            xs={4}
            container
            direction="column"
            className={classes.titleDiv1}
          >
            <Grid item>
              <Link to="/technology" className={classes.linkStyle}>
                <Typography variant={"h5"} className={classes.titleLinkText}>
                  Habitat Sartorial
                </Typography>
              </Link>
            </Grid>
            <Grid item className={classes.copyrightText}>
              <Typography variant={"body2"}>
                <span className={classes.copyrightText}>
                  © Copyright 2021 Habitat Sartorial LLC. All rights reserved.
                </span>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            md={2}
            container
            direction="column"
            spacing={2}
          >
            <Grid
              item
              component={Link}
              to="/shop/collections"
              className={classes.linkStyle}
            >
              <Typography variant={"h5"} className={classes.footerLinkText}>
                Product
              </Typography>
            </Grid>
            <Grid item>
              <Link to="/shop/collections" className={classes.linkStyle}>
                <Typography variant={"body1"}>Collections</Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/philosophy" className={classes.linkStyle}>
                <Typography variant={"body1"}>Philosophy</Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/sponsors" className={classes.linkStyle}>
                <Typography variant={"body1"}>Sponsors</Typography>
              </Link>
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            md={2}
            container
            direction="column"
            spacing={2}
          >
            <Grid item component={Link} to="/" className={classes.linkStyle}>
              <Typography variant={"h5"} className={classes.footerLinkText}>
                Company
              </Typography>
            </Grid>
            <Grid item>
              <Link to="/philosophy" className={classes.linkStyle}>
                <Typography variant={"body1"}>About</Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/contact" className={classes.linkStyle}>
                <Typography variant={"body1"}>Contact</Typography>
              </Link>
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            md={2}
            container
            direction="column"
            spacing={2}
          >
            <Grid
              item
              component={Link}
              to="/linkedin"
              className={classes.linkStyle}
            >
              <Typography variant={"h5"} className={classes.footerLinkText}>
                Follow us
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            container
            direction="column"
            className={classes.titleDiv2}
          >
            <Grid item>
              <Link to="/technology" className={classes.linkStyle}>
                <Typography variant={"h5"} className={classes.titleLinkText}>
                  Habitat Sartorial
                </Typography>
              </Link>
            </Grid>
            <Grid item className={classes.copyrightText}>
              <Typography variant={"body2"}>
                <span className={classes.copyrightText}>
                  © Copyright 2021 Habitat Sartorial LLC. All rights reserved.
                </span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
