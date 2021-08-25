import React from "react";
import makeStyles from "./styles";

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
      <source
        src="https://res.cloudinary.com/habitatsartorial/video/upload/v1629926472/misc/intro_rqmr7m.mp4"
        type="video/mp4"
      />
    </video>
  );
};

export default HenryVid;
