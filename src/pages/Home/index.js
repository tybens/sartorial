import React, { useRef, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import ReactRotatingText from "react-rotating-text";
import { withRouter } from "react-router-dom";
import "./ReactRotatingText.css";
import classNames from "classnames";
import Wave from "react-wavify";
import Blobs from "./blobs";

import makeStyles from "./styles.js";
import EmailList from "components/EmailList";

const Home = ({ history, navColors, onSetNavColors }) => {
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
      window.scrollY > blackBgRef.current.offsetTop &&
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

  const handleClickFlyer = () => {
    history.push(`/tickets`);
  };

  const waveOptions = {
    height: 60,
    amplitude: 40,
    speed: 0.1,
    points: 4,
  };

  return (
    <>
      <Grid item xs={12} className={classes.gutterBottom} container direction="column" alignItems="center">
        <h1 className={classes.concertText}>We're hosting a concert!</h1>
        <Typography variant="h6" color="inherit" className={classes.flyerText}>
          By Indy, For Indy; a summer concert brought to you by Habitat Sartorial comes this
          August 4th. Tickets are available now. Click the flyer to purchase!
        </Typography>
        <img
          className={classes.flyer}
          src="https://res.cloudinary.com/do8jxdvtx/image/upload/v1658156249/hsllc/IMG_6722_jxuaj3.jpg"
          width="50%"
          alt="flyer"
          height="100%"
          onClick={handleClickFlyer}
        />
      </Grid>
      <video width="100%" height="100%" autoPlay muted loop playsInline>
        <source src="/videos/recap.mp4" type="video/mp4" />
      </video>
      <h1 className={classes.firstBlock}>
          <Grid
            container
            direction="row"
            justify="space-around"
            className={classes.firstRow}
          >
            <Grid item sm xs={12}>
              Handcrafted
            </Grid>
            <Grid item sm={5} xs={12}>
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
        </h1>
      <Grid container justify="flex-start" direction="column">
        <Grid
          item
          container
          className="content-block block-1"
          style={{ minHeight: 0 }}
          ref={blackBgRef}
        >
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
            className={classes.contentWrap}
          >
            <Grid item xs={11} md={5} className={classes.imgWrapper}>
              <Blobs />
            </Grid>
            <Grid
              item
              md={5}
              xs={11}
              justify="flex-end"
              container
              direction="column"
              style={{ height: "100%" }}
            >
              <Typography
                variant="h6"
                color="inherit"
                className={classes.gutterBottom}
              >
                We are a nonprofit fashion design studio, making fashion
                valuable beyond the aesthetics.
              </Typography>
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
          justify="center"
          className="content-block block-3"
          direction="column"
          style={{ position: "relative", minHeight: "60vh" }}
        >
          {/* <Grid item style={{marginBottom: 30}}>
            <Typography variant="h2">Collections releasing Friday, August 20!</Typography>
          </Grid> */}
          <EmailList />
        </Grid>
      </Grid>
    </>
  );
};

export default withRouter(Home);
