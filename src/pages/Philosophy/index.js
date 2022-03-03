import React, { useRef, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import classNames from "classnames";
import Wave from "react-wavify";

import makeStyles from "./styles.js";
import SunshineSvg from "components/SunshineSvg";

const Philosophy = ({ navColors, onSetNavColors }) => {
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
      blackBgRef.current &&
      window.scrollY > blackBgRef.current.offsetTop - 110 &&
      window.scrollY <
        blackBgRef.current.getBoundingClientRect().height -
          110 +
          blackBgRef.current.offsetTop;

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

  const waveOptions = {
    height: 60,
    amplitude: 40,
    speed: 0.1,
    points: 4,
  };

  return (
    <Grid container justify-content="flex-start" direction="column">
      <Grid
        item
        xs={12}
        container
        alignItems="center"
        justify="flex-start"
        className="content-block"
        direction="row"
      >
        <Grid item xs={12} md={5} className={classes.imgWrapper}>
          <img
            src="images/spinningrotary.gif"
            alt="Spinning Rotary Logo"
            width="70%"
            height="auto"
            className={classes.rotaryImg}
          />
        </Grid>
        <Grid item xs={11} md={5} container justify="center" direction="row">
          <Grid item xs={12}>
            <Typography variant="h1" color="inherit" className={classes.header}>
              Free Gift With Donation?
              <br />
              clothing.
            </Typography>
          </Grid>
          <Grid item container xs={11} lg={8} justify="center" direction="row">
            <Typography
              className={classes.paragraph}
              variant="h6"
              color="inherit"
            >
              We've replaced the 'free gift' often exchanged for a donation with
              durable, attractive clothing, a basic need for everyone, and
              instead of trying to save money and selling something cheap, we
              dedicated over a year to finding the softest, strongest fabrics,
              and practicing the most precise printing methods available.
            </Typography>
          </Grid>
        </Grid>
        <Typography
          className={classNames(
            "scroll-to",
            "scroll-to-arrow",
            "home-scroll-to"
          )}
          onClick={handleScrollClick}
        >
          <span className="scroll-arrow" />
          <span className="scroll-line" />
          Scroll
        </Typography>
      </Grid>
      <Grid item container className="content-block block-1" ref={blackBgRef}>
        <Wave
          fill="#000"
          paused={false}
          options={waveOptions}
          className={classes.waveUp}
        />
        <Grid item className={classes.waveUpColorCorrect} />
        <Grid
          item
          container
          alignItems="center"
          justify="space-around"
          direction="row"
        >
          <Grid item md={5} xs={11} justify="center" direction="row">
            <Typography variant="h6" color="inherit">
              Individuals often donate to a good cause, but don't get to
              interact with the effect. Most of the time, people only donate
              once, and end up feeling like their gift hasn't actually helped
              anyone. We give you a tangible reminder of the good you've done
              and show you the effects of your purchase right here on our
              website.
            </Typography>
          </Grid>
          <Grid item xs={11} md={5} className={classes.imgWrapper}>
            <img
              src="images/habitat-humanity.jpg"
              alt="Habitat for Humanity Partnership"
              width="100%"
              height="auto"
              className={classes.img}
            />
          </Grid>
        </Grid>
        <Wave
          fill="#ffffff"
          paused={false}
          options={waveOptions}
          className={classes.waveDown}
        />
        <Grid item className={classes.waveDownColorCorrect} />
      </Grid>

      <Grid
        item
        xs={12}
        container
        alignItems="center"
        justify="flex-start"
        className="content-block block-3"
        direction="column"
        style={{ position: "relative", minHeight: "60vh" }}
      >
        <Grid
          item
          xs={12}
          container
          justify="flex-start"
          direction="column"
          style={{ position: "relative", zIndex: 1 }}
        >
          <Grid item>
            <Typography variant="h1" color="inherit" className={classes.header}>
              Zero Begging Policy
            </Typography>
          </Grid>
          <Grid item container justify="center" direction="row">
            <Grid item xs={11} lg={8}>
              <Typography
                className={classes.paragraph}
                style={{ marginBottom: "0" }}
                variant="h6"
                color="inherit"
              >
                Instead of sending letters to ask for money, we offer new styles
                and new releases of apparel to serve as our request for more
                donations - allowing your desire to look and feel good
                incentivize further donation. Every time a customer makes a
                purchase with us, they know they’ve put their money towards
                their own community.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <SunshineSvg
          style={{
            width: "calc(400px + 10vw)",
            zIndex: 0,
            height: "auto",
            position: "absolute",
            bottom: 0,
            left: "25%",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Philosophy;
