import React from 'react'
import "./transition-styles.css";
import makeStyles from './styles'

const VideoIntro = () => {
    const classes = makeStyles();

    return (
            <div className={classes.videoPreloader}>
                <video width="100%" height="100%" autoPlay="autoplay" muted loop playsInline>
                    <source src="/videos/temp_intro.mp4" type="video/mp4" />
                </video>
            </div>

    )
}

export default VideoIntro
