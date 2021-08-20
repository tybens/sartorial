import { Grid, IconButton, Typography } from "@material-ui/core";
import {
  Instagram,
  LinkedIn,
  Pinterest,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Footer = (props) => {
  const classes = useStyles();

  const followButtons = [
    {
      icon: <LinkedIn />,
      ariaLabel: "LinkedIn",
      url: "https://www.linkedin.com/company/habitatsartorial",
      color: "lightblue",
    },
    {
      icon: <Pinterest />,
      ariaLabel: "Pinterest",
      url: "https://www.pinterest.com/habitatsartorial",
      color: "red",
    },
    {
      icon: <YouTube />,
      ariaLabel: "Youtube",
      url: "https://www.youtube.com/channel/UCZPuIrntJktPnG2OAA1pr8A?sub_confirmation=1",
      color: "red",
    },
    {
      icon: <Twitter />,
      ariaLabel: "Twitter",
      url: "https://www.twitter.com/ha317at",
      color: "lighterblue",
    },
    {
      icon: <Instagram />,
      ariaLabel: "Instagram",
      url: "https://www.instagram.com/habitatsartorial",
      color: "magenta",
    },
  ];

  const TitleDiv = ({titleDiv1}) => (
    <Grid
      item
      xs={titleDiv1 ? 4 : 12}
      container
      direction="column"
      className={titleDiv1 ? classes.titleDiv1 : classes.titleDiv2}
    >
      <Grid item>
        <Link to="/philosophy" className={classes.linkStyle}>
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
  );

  return (
    <Grid
      container
      justify="center"
      id="footer"
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
          {<TitleDiv titleDiv1={true} />}
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
                <Typography variant={"body2"} className={classes.subLinks}>
                  Collections
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/philosophy" className={classes.linkStyle}>
                <Typography variant={"body2"} className={classes.subLinks}>
                  Philosophy
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/sponsors" className={classes.linkStyle}>
                <Typography variant={"body2"} className={classes.subLinks}>
                  Sponsors
                </Typography>
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
                <Typography variant={"body2"} className={classes.subLinks}>
                  About
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/contact" className={classes.linkStyle}>
                <Typography variant={"body2"} className={classes.subLinks}>
                  Contact
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/support" className={classes.linkStyle}>
                <Typography variant={"body2"} className={classes.subLinks}>
                  Questions?
                </Typography>
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
              onClick={() =>
                window.open(
                  followButtons.find(
                    ({ ariaLabel }) => ariaLabel === "LinkedIn"
                  ).url,
                  "_blank"
                )
              }
              className={classes.linkStyle}
            >
              <Typography variant={"h5"} className={classes.footerLinkText}>
                Follow us
              </Typography>
            </Grid>
            <Grid item container>
              {followButtons.map(({ icon, ariaLabel, url, color }, id) => (
                <Grid item xs={6} key={id} style={{ color: "" }}>
                  <IconButton
                    color="inherit"
                    edge="start"
                    aria-label={ariaLabel}
                    onClick={() => window.open(url, "_blank")}
                  >
                    {icon}
                  </IconButton>
                </Grid>
              ))}
            </Grid>
          </Grid>
          {<TitleDiv titleDiv1={false} />}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
