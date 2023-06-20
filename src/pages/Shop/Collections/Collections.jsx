import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import EmailList from "components/EmailList";
import HenryVid from "components/HenryVid";
// import OldCollection from "./OldCollection";

const Collections = ({ collectionsData, url }) => {
  const classes = useStyles();
  const newestCollectionName = [];
  const showCollections = false;

  return (
    <>
      <Grid
        container
        item
        className={classes.parentWrap}
        justify="space-between"
        alignItems="center"
        direction="column"
        id="content"
      >
        <Grid item xs={12} fullWidth style={{border: "solid black", padding: "40px"}}>
              <Typography
                variant="h4"
                align="center"
                className={classes.header}
                id="content--inner"
              >
                Concert Merch Releasing Soon! 
              </Typography>
            </Grid>
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
                        <span style={{ "-webkit-text-stroke": name === "Henryd" ? "1px black" : "" }}>
                          {name}
                        </span>
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
            {(collectionsData.length > 2) && (
              <Grid item xs={12} style={{ marginTop: "5vw" }}>
                <Typography gutterBottom variant="h2" color="initial" style={{ width: "100%" }}>
                  past collections:
                </Typography>
              </Grid>
            )}
            {collectionsData.map(({ id, altLink, name, img }, index) => {
              return (
                !newestCollectionName.includes(name) && (
                  <Grid item xs={5} className={classes.oldLanding} key={id}>
                    <Link
                      className={classes.landingImage}
                      style={{ backgroundImage: `url(${img})` }}
                      to={`${altLink}`}
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
                        style={{ "color": id === "fw21-classics-2" ? "white" : "" }}
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
