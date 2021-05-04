import React from 'react'
import { Typography } from '@material-ui/core';
// import { Link, useRouteMatch } from 'react-router-dom'

// import OldCollection from './OldCollection';
import useStyles from './styles';

const Collections = ({ collectionsData  }) => {
    // const { url } = useRouteMatch()
    const classes = useStyles();
    // const newestCollectionName = 'Sartorial Spring 2021'

    return (
        <div className={classes.parentWrap}>
            <Typography variant="h2" align="center" className={classes.header}>
                Collections coming soon...
            </Typography>
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
        </div>
    )
}

export default Collections
