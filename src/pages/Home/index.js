import React, { useRef, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Fade } from "react-reveal";
import ReactRotatingText from "react-rotating-text";
import "./ReactRotatingText.css";

import makeStyles from "./styles.js";

const Home = ({ navColors, onSetNavColors }) => {
  const classes = makeStyles();
  const blackBgRef = useRef(null);
  // logic for changing header color
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navColors]);

  const listenScrollEvent = (event) => {
    const isScrolled =
      blackBgRef.current && window.scrollY > blackBgRef.current.offsetTop - 110;
    const isBlackBg = "white" !== navColors.background;
    if (isScrolled && !isBlackBg) {
      onSetNavColors({ background: "black", color: "white" });
    } else if (!isScrolled && isBlackBg) {
      onSetNavColors({ background: "white", color: "black" });
    }
  };

  function handleScrollClick() {
    if (blackBgRef.current) {
      blackBgRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div>
      <h1 className={classes.firstBlock}>
        <Grid
          container
          direction="row"
          justify="space-around"
          className={classes.firstRow}
        >
          <Grid item sm={6} xs={12}>
            Handcrafted
          </Grid>
          <Grid item sm={4} xs={12}>
            <span className="with--accent">
              <ReactRotatingText
                items={[
                  "clothing",
                  "threads",
                  "apparel",
                  "dress",
                  "fashion",
                  "finery",
                ]}
                pause={2500}
              />
            </span>
          </Grid>
        </Grid>
        <div>
          to build <span className="with--accent">habitats</span>
        </div>
        <div>for those who</div>
        <div className="with--accent">need it most</div>
        <Typography
          class="scroll-to scroll-to-arrow home-scroll-to"
          onClick={handleScrollClick}
        >
          <span class="scroll-arrow" />
          <span class="scroll-line" />
          Scroll
        </Typography>
      </h1>
      <div className="content-block block-1" ref={blackBgRef}>
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
};

export default Home;
