import React from 'react'
import makeStyles from './styles'

const VideoIntro = () => {
    const classes = makeStyles();

    return (
            <div className={classes.videoPreloader}>
                <video width="100%" height="100%" autoPlay="autoplay" muted loop playsInline>
                    <source src="https://res.cloudinary.com/do8jxdvtx/video/upload/v1658155847/hsllc/intro2_wpqtqg.mp4" type="video/mp4" />
                </video>
            </div>

    )
}

export default VideoIntro
