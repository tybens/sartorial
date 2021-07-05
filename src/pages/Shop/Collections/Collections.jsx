import React from "react";
import { Typography, Grid } from "@material-ui/core";
import OldCollection from "./OldCollection";
import { Link, withRouter } from "react-router-dom";
import useStyles from "./styles";

const Collections = ({ collectionsData }) => {
  const classes = useStyles();
  const newestCollectionName = "Sartorial Spring 2021";

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
        {collectionsData.map(({ id, name, img }, index) => {
          if (name === newestCollectionName) {
            return (
              <div className={classes.landing} key={name}>
                <Link
                  className={classes.landingImage}
                  style={{ backgroundImage: `url(${img})` }}
                  to={`/shop/collections/${id}`}
                />
                <Grid
                  container
                  direction="column"
                  justify="flex-start"
                  alignItems="flex-end"
                  className={classes.landingContent}
                >
                  <span className={classes.landingName}>{name}</span>
                  <Link
                    to={`/shop/collections/${id}`}
                    className={classes.landingSubName}
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
                url={"/shop/collections"}
                key={name}
              />
            );
          }
        })}
      </Grid>
    </>
  );
};

export default Collections;
