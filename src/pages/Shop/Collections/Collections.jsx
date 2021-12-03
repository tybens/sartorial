import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import EmailList from "components/EmailList";
import HenryVid from "components/HenryVid";
// import OldCollection from "./OldCollection";

const Collections = ({ collectionsData, url }) => {
  const classes = useStyles();
  const newestCollectionName = ["Fall/Winter 2021 Classics"];
  const showCollections = false;

  return (
    <>
      <Grid
        container
        item
        className={classes.parentWrap}
        justify="space-between"
        alignItems="flex-start"
        direction="column"
        id="media"
      >
        {showCollections ? (
          <>
            <HenryVid />
            <Grid item xs={12}>
              <Typography
                variant="h2"
                align="center"
                className={classes.header}
                id="content--inner"
              >
                Collections releasing Friday, August 20 at 9a EST!
              </Typography>
            </Grid>
            <Grid item container xs={12} justify="flex-end">
              <EmailList />
            </Grid>
          </>
        ) : (
          <Grid item container justify="space-around">
            {collectionsData.map(({ id, name, img }, index) => {
              return (
                newestCollectionName.includes(name) && (
                  <Grid
                    item
                    xs={12}
                    lg={6}
                    className={classes.landing}
                    key={id}
                  >
                    <Link
                      className={classes.landingImage}
                      style={{ backgroundImage: `url(${img})` }}
                      to={`${url}/${id}`}
                    />
                    <Grid
                      container
                      direction="column"
                      justify="flex-start"
                      alignItems="flex-end"
                      className={classes.landingContent}
                    >
                      <Typography
                        variant="h2"
                        color="inherit"
                        className={classes.landingName}
                      >
                        {name}
                      </Typography>
                      <Link
                        to={`${url}/${id}`}
                        className={classes.landingSubName}
                        // TODO: onHover={scale(1.5)}
                      >
                        browse
                      </Link>
                    </Grid>
                  </Grid>
                )
              );
            })}
            <Grid item xs={12} style={{marginTop: "5vw"}}>
              <Typography gutterBottom variant="h2" color="initial" style={{width: "100%"}}>
                past collections:
              </Typography>
            </Grid>
            {collectionsData.map(({ id, altLink, name, img }, index) => {
              return (
                !newestCollectionName.includes(name) && (
                  <Grid item xs={5} className={classes.oldLanding} key={id}>
                    <Link
                      className={classes.landingImage}
                      style={{ backgroundImage: `url(${img})` }}
                      to={`/media/${altLink}`}
                    />
                    <Grid
                      container
                      direction="column"
                      justify="flex-start"
                      alignItems="flex-end"
                      className={classes.landingContent}
                    >
                      <Typography
                        variant="h2"
                        color="inherit"
                        className={classes.oldLandingName}
                        noWrap
                      >
                        {name}
                      </Typography>
                    </Grid>
                  </Grid>
                )
              );
            })}
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Collections;
