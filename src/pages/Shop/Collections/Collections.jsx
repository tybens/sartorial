import React from "react";
import { Typography, Grid } from "@material-ui/core";

import useStyles from "./styles";
import EmailList from "components/EmailList";
import HenryVid from "components/HenryVid";

const Collections = ({ collectionsData }) => {
  const classes = useStyles();
  // const newestCollectionName = 'Sartorial Spring 2021's

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
        <HenryVid />
        <Grid item xs={12}>
          <Typography variant="h2" align="center" className={classes.header} id="content--inner">
            Collections coming soon...
          </Typography>
        </Grid>
        <Grid item container xs={12} justify="flex-end">
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
