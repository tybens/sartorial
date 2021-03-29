import React, { useRef } from 'react';
import { Grid } from '@material-ui/core'
import { Fade } from 'react-reveal';
import ReactRotatingText from 'react-rotating-text';
import './ReactRotatingText.css';

import makeStyles from './styles.js'

const Home = () => {
    const classes = makeStyles();
    const firstBlockRef = useRef(null);

    function handleScrollClick() {
        firstBlockRef.current.scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <div>
            <h1 className={classes.firstBlock}>
                <Grid container direction="row" justify="space-around" className={classes.firstRow}>
                    <Grid item xs={6}>
                        Handcrafted
                    </Grid>
                    <Grid item xs={4}>
                        <span className="with--accent"><ReactRotatingText items={['clothing', 'threads', 'apparel', 'dress', 'fashion', 'finery']} pause={2500} /></span>
                    </Grid>
                </Grid>
                <div>to build <span className="with--accent">habitats</span></div>
                <div>for those who</div>
                <div className="with--accent">need it most</div>
                <a class="scroll-to scroll-to-arrow home-scroll-to" onClick={handleScrollClick}>
                    <span class="scroll-arrow" />
                    <span class="scroll-line" />
                Scroll
            </a>
            </h1>
            <div className="content-block block-1" ref={firstBlockRef}>
                <Fade bottom>
                    <h1>This block holds more content</h1>
                </Fade>
            </div>

            <div className="content-block block-3">
                <Fade bottom>
                    <h1>This shows even more</h1>
                </Fade>
            </div>
            <div className="content-block block-0">
                <Fade bottom>
                    <h1>This block holds even more content</h1>
                </Fade>
            </div>
            <div className="content-block block-2">
                <Fade bottom>
                    <h1>This block holds more content</h1>
                </Fade>
            </div>



        </div>
    );
}

export default Home
