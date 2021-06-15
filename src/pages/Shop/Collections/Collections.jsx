import React from "react";
import { Typography, Grid } from "@material-ui/core";
// import { Link, useRouteMatch } from 'react-router-dom'

// import OldCollection from './OldCollection';
import useStyles from "./styles";
import EmailList from "components/EmailList";
import HenryVid from "components/HenryVid";

const Collections = ({ collectionsData }) => {
  // const { url } = useRouteMatch()
  const classes = useStyles();
  // const newestCollectionName = 'Sartorial Spring 2021's

  return (
    <>
      <Grid
        container
        className={classes.parentWrap}
        justify="space-between"
        alignItems="flex-start"
        direction="column"
      >
        <HenryVid />
        <Grid item>
          <Typography variant="h2" align="center" className={classes.header}>
            Collections coming soon...
          </Typography>
        </Grid>
        <Grid item container justify="flex-end" xs={12}>
          <EmailList />
        </Grid>
        {/* {collectionsData.map(({ id, name, img }, index) => {
                if (name === newestCollectionName) {
                    return (
                        <div className={classes.landing} key={name}>
                            <Link className={classes.landingImage} style={{ backgroundImage: `url(${img})` }} to={`${url}/${id}`} />
                            <Grid
                                container
                                direction="column"
                                justify="flex-start"
                                alignItems="flex-end"
                                className={classes.landingContent}
                            > <span className={classes.landingName}>
                                {name}
                            </span>
                            <Link to={`${url}/${id}`} className={classes.landingSubName}>
                                browse
                            </Link>
                            </Grid>
                        </div>
                    )
                } else {
                    return (
                        <OldCollection index={index} name={name} id={id} img={img} url={url} key={name}/>
                        
                    )
                }
            })} */}
      </Grid>
    </>
  );
};

export default Collections;
