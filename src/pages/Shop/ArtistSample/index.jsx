import { Grid, Typography } from "@material-ui/core";
import artistCollectionData from "data/artist-collection-data";
import Products from "../Products/Products";
import { Switch, Route, withRouter, NavLink } from "react-router-dom";

import useStyles from "./styles";

const ArtistSample = ({ match }) => {
  const classes = useStyles();

  return (
    <div>
      <Switch>
        <Grid
          className={classes.container}
          container
          alignItems="center"
          direction="column"
        >
          <Grid item className={classes.intro}>
            <Typography variant="body2" align="center">
              Your future home - use this page to show Indianapolis your music
              AND tell them who you are. Send an email to
              payne@habitatsartorial.org with your social profiles and logo,
              and we'll work with you to design, promote, and sell merch to your
              listeners.
            </Typography>
          </Grid>
          <Grid item container className={classes.titleContainer}>
            <Grid item xs={12}>
              <Typography variant="h2" align="center">
                Your Stage Name Here
              </Typography>

              <Typography variant="body1" align="center">
                Support my music while you support a cause.
              </Typography>
            </Grid>
          </Grid>
          <Route exact path={`${match.path}/products`}>
            <Products
              collectionsData={artistCollectionData}
              collectionId="artist-sample"
            />
          </Route>
          <Route exact path={`${match.path}`}>
            <Grid
              item
              container
              justify="center"
              xs={12}
              className={classes.productsContainer}
            >
              <NavLink
                strict
                exact
                to={`${match.path}/products`}
                className={classes.productsLink}
              >
                Products
              </NavLink>
            </Grid>
            <Grid item container justify="space-around" direction="row">
              <Grid
                item
                container
                justify="center"
                xs={4}
                className={classes.artistPhoto}
                style={{ borderRight: "3px dotted black" }}
              >
                <Typography
                  variant="h3"
                  color="inherit"
                  className={classes.subTitle}
                  style={{ color: "white" }}
                >
                  Artist Photo
                </Typography>
              </Grid>
              <Grid
                item
                container
                justify="center"
                xs={4}
                style={{ borderRight: "3px dotted black" }}
              >
                <Typography
                  variant="h3"
                  color="inherit"
                  className={classes.subTitle}
                >
                  Artist Bio
                </Typography>
              </Grid>
              <Grid
                item
                container
                justify="center"
                xs={4}
                className={classes.trioContainer}
              >
                <Typography
                  variant="h3"
                  color="inherit"
                  className={classes.subTitle}
                >
                  Recent Work
                </Typography>
              </Grid>
            </Grid>
          </Route>
        </Grid>
      </Switch>
    </div>
  );
};

export default withRouter(ArtistSample);
