import React from 'react'
import useStyles from './styles'
import { Link } from 'react-router-dom'

const OldCollection = ({ index, name, img, url, id }) => {
    const classes = useStyles();

    return (
        <div className={classes.collection} key={name}>
            <div>
                {name}
            </div>
            <Link
                className={classes.otherCollectionImage}
                style={{ backgroundImage: `url(${img})` }}
                to={`${url}/${id}`}
            />
        </div>
    )
}

export default OldCollection
