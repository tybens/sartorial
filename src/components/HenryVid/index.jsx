import React from "react";
import makeStyles from "./styles";
import Henry from "assets/vids/henryvid.mp4";

const HenryVid = () => {
  const classes = makeStyles();

  return (
    <video
      className={classes.videoPreloader}
      width="100%"
      height="100%"
      autoPlay="autoplay"
      muted
      loop
      playsInline
    >
      <source src={Henry} type="video/mp4" />
    </video>
  );
};

export default HenryVid;
