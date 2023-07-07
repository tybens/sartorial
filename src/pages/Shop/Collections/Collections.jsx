import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Collections = ({ collectionsData, url }) => {
  const classes = useStyles();
  const newestCollectionName = ["bifi-23"];

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
        <Grid item container justify="space-around">
          {collectionsData.map(({ id, name, img }, index) => {
            return (
              newestCollectionName.includes(id) && (
                <Grid item xs={12} lg={12} className={classes.landing} key={id}>
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
                      <span
                        style={{
                          "-webkit-text-stroke":
                            name === "Henryd" ? "1px black" : "",
                        }}
                      >
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
          {collectionsData.length > 2 && (
            <Grid item xs={12} style={{ marginTop: "5vw" }}>
              <Typography
                gutterBottom
                variant="h2"
                color="initial"
                style={{ width: "100%" }}
              >
                past collections:
              </Typography>
            </Grid>
          )}
          {collectionsData.map(({ id, altLink, name, img }, index) => {
            return (
              !newestCollectionName.includes(id) && (
                <Grid style={{marginTop: Math.random() * 50, marginLeft: Math.random() * 50}} item xs={8} md={5} className={classes.oldLanding} key={id}>
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
                    >
                      {name}
                    </Typography>
                  </Grid>
                </Grid>
              )
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default Collections;
