import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import EmailList from "components/EmailList";
import HenryVid from "components/HenryVid";
import OldCollection from "./OldCollection";

const Collections = ({ collectionsData, url }) => {
  const classes = useStyles();
  const newestCollectionName = "Sartorial Spring 2021";
  // variable for testing collection page
  const showCollections = true;

  return (
    <>
      <Grid
        container
        item
        className={classes.parentWrap}
        justify="space-between"
        alignItems="flex-start"
        direction="column"
        id="content"
      >
        {!showCollections ? (
          <>
            <HenryVid />
            <Grid item xs={12}>
              <Typography
                variant="h2"
                align="center"
                className={classes.header}
                id="content--inner"
              >
                Collections coming soon...
              </Typography>
            </Grid>
            <Grid item container xs={12} justify="flex-end">
              <EmailList />
            </Grid>
          </>
        ) : (
          <Grid item container justify="space-around">
            {collectionsData.map(({ id, name, img }, index) => {
              if (name === newestCollectionName) {
                return (
                  <div className={classes.landing} key={id}>
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
                  </div>
                );
              } else {
                return (
                  <OldCollection
                    index={index}
                    name={name}
                    id={id}
                    img={img}
                    url={url}
                    key={name}
                  />
                );
              }
            })}
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Collections;
