import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import "./transition-styles.css";
import makeStyles from './styles'

const VideoIntro = () => {
    const [introComplete, setIntroComplete] = useState(false)
    const classes = makeStyles();

    useEffect(() => {
        if (!introComplete) {
            const timer = setTimeout(() => {
                setIntroComplete(true);
            }, 5000);

            return () => clearTimeout(timer);
        }
    });

    return (

        <CSSTransition
            in={!introComplete}
            timeout={300}
            classNames={"videoPreloader"}
            unmountOnExit
            appear
        >
            <div className={classes.videoPreloader}>
                <video width="100%" height="100%" autoPlay="autoplay" muted loop playsInline>
                    <source src="/videos/temp_intro.mp4" type="video/mp4" />
                </video>
            </div>
        </CSSTransition>

    )
}

export default VideoIntro
