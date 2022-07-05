import { Grid, Typography } from "@material-ui/core";
import artistCollectionData from "data/artist-collection-data";
import Products from "../../Products/Products";
import ProductPage from "../../Products/ProductPage";
import { Switch, Route, withRouter, NavLink } from "react-router-dom";
import Spotify from "components/Spotify";
import useStyles from "./styles";

const HenryD = ({ match, onAddToCart }) => {
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
          <Grid item container className={classes.titleContainer}>
            <Grid item xs={12}>
              <Typography variant="h2" align="center">
                Henryd
              </Typography>

              <Typography variant="body1" align="center">
                Support my music while you support Indy's homeless.
              </Typography>
            </Grid>
          </Grid>
          <Route path={`/shop/artist/:collectionId/products/:productId`}>
            <ProductPage
              onAddToCart={onAddToCart}
              collectionsData={artistCollectionData}
            />
          </Route>
          <Route exact path={`/shop/artist/henryd/products`}>
            <Products
              collectionsData={artistCollectionData}
              collectionId="henryd"
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
                to={`/shop/artist/henryd/products`}
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
                xs={12}
                sm={6}
                md={4}
                className={classes.artistPhoto}
                style={{ borderRight: "3px dotted black" }}
              >
              </Grid>
              <Grid
                item
                container
                justify="center"
                xs={12}
                sm={6}
                md={4}
                style={{ borderRight: "3px dotted black" }}
              >
                <Typography
                  variant="h3"
                  color="inherit"
                  className={classes.description}
                >
                  Hi I'm Henry and I'm a 21 year old musician from Zionsville. <br />I've been making music since early middle school and I recently started working as a data analyst for White Lodging. I love writing songs, listening to music, and going on late night drives with friends. Zionsville is a huge part of who I am, so I'm always looking for ways to give back to the area I'm from. Shoutout to the guys at habitat sartorial for shining some light on the 317 and making a difference in the community.
                </Typography>
              </Grid>
              <Grid
                item
                container
                alignItems="center"
                direction="column"
                xs={12}
                sm={6}
                md={4}
                className={classes.trioContainer}
              >
                <Spotify link="https://open.spotify.com/album/5zgjlEk9KEw43rdUhSg541?si=Kch6Oni5RfmCqiOv8yEqug" />
              </Grid>
            </Grid>
          </Route>
        </Grid>
      </Switch>
    </div>
  );
};

export default withRouter(HenryD);