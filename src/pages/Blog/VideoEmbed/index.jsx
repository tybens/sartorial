import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const VideoEmbed = ({ src, caption }) => {
  const classes = useStyles();

  return (
    <Grid item container>
      <video
        className={classes.video}
        width="100%"
        height="100%"
        controls
        playsInline
      >
        <source src={src} type="video/mp4" />
      </video>
      <Grid item container alignItems="center" justify="center" xs={12} className={classes.caption}>
        <Typography variant="body2" color="inherit">
          {caption}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default VideoEmbed;
