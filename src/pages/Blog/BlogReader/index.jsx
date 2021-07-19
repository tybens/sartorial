import React from "react";
import { withRouter } from "react-router-dom";
import { Typography, Grid } from "@material-ui/core";
import useStyles from "./styles";
import VideoEmbed from "../VideoEmbed";
import henryVid from "assets/vids/henryvid.mp4"

const BlogReader = ({ postsData, match }) => {
  const classes = useStyles();
  const blogId = match.params.blogId;
  const blog = postsData.find(({ id }) => id === blogId);

  return (
    <Grid container justify="center">
      <Grid
        container
        justify="center"
        direction="row"
        className={classes.container}
      >
        <Grid item xs={12}>
          <Typography variant="h1" color="primary">
            {blog?.title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" color="primary" align="left" className={classes.paragraph}>
            {blog?.text}
          </Typography>
          <Typography variant="body1" color="primary" align="left" className={classes.paragraph}>
            {blog?.text}
          </Typography>
          <Typography variant="body1" color="primary" align="left" className={classes.paragraph}>
            {blog?.text}
          </Typography>
          <VideoEmbed src={henryVid} caption="Example video placeholder" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withRouter(BlogReader);
