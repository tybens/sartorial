import React, { useRef, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import classNames from "classnames";
import Wave from "react-wavify";

import DonationForm from "components/DonationForm";
import makeStyles from "./styles.js";
import SunshineSvg from "components/SunshineSvg";

const Donate = ({
  navColors,
  onSetNavColors,
  handleAddToCart,
  cart,
  totalItems,
  order,
  handleCaptureCheckout,
}) => {
  const classes = makeStyles();
  const donateFormRef = useRef(null);
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
    if (donateFormRef.current) {
      donateFormRef.current.scrollIntoView({ behavior: "smooth" });
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
            src="images/new_rotary.jpg"
            alt="Rotary Logo"
            width="70%"
            height="auto"
            className={classes.rotaryImg}
          />
        </Grid>
        <Grid item xs={11} md={6} container justify="center" direction="row">
          <DonationForm
            onAddToCart={handleAddToCart}
            cart={cart}
            onCaptureCheckout={handleCaptureCheckout}
            totalItems={totalItems}
            order={order}
          />
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
          More info
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
          <Grid item container md={5} xs={11} justify="center" direction="row">
            <Typography variant="h6" color="inherit">
              We're officially 501(c)(3) certified. But what does that mean? It
              means that our founding documents, operations, and financial
              statements have been examined carefully and proven to be true to
              our mission: helping Indy's homeless, one garment at a time.
            </Typography>
          </Grid>
          <Grid item xs={11} md={5} className={classes.imgWrapper}>
            <img
              src="https://res.cloudinary.com/habitatsartorial/image/upload/v1657759042/2022/Website/donationmodel.001_dh5iuu.jpg"
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
              For Those Who Believe
            </Typography>
          </Grid>
          <Grid item container justify="center" direction="row">
            <Grid item xs={11} lg={6}>
              <Typography
                className={classes.paragraph}
                style={{ marginBottom: "0" }}
                variant="h6"
                color="inherit"
              >
                The people who believe in Habitat Sartorial have donated over
                500 hours ($10,000 in wages) to bring this mission to life. We
                will also use contributions to compensate their future work
                coding, drawing, designing, writing, printing, and running the
                business. Every dollar contributed brings us closer to our goal:
                tangible, substantial donations to many Indianapolis charities
                every December. Thank you!
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

export default Donate;
