import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Typography, Grid, Divider, Avatar } from "@material-ui/core";
import useStyles from "./styles";
import VideoEmbed from "../VideoEmbed";
import ShareComponent from "components/Share";

const BlogReader = ({ postsData, match }) => {
  const classes = useStyles();
  const blogId = match.params.blogId;
  const blog = postsData.find(({ id }) => id === blogId);

  // useeffect to change og:image to the blog's image
  useEffect(() => {
    document.getElementsByTagName("META").namedItem("image").content = blog?.imgSrc
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container justify="center">
      <Grid
        container
        justify="center"
        direction="row"
        className={classes.container}
        spacing={3}
      >
        <Grid item xs={12}>
          <Typography variant="h2" color="primary" align="left">
            {blog?.title}
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          container
          direction="row"
          alignItems="center"
          spacing={1}
        >
          <Grid item>
            <Avatar className={classes.orange}>T</Avatar>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" color="inherit" align="left">
              {blog?.author}
            </Typography>
            <Typography
              variant="subtitle1"
              color="primary"
              align="left"
              className={classes.colorGray}
            >
              {blog?.date}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <ShareComponent exampleImage={blog?.imgSrc} />
        </Grid>
        <Grid item xs={12}>
          <Divider className={classes.thickDivider} />
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="body1"
            color="primary"
            align="left"
            className={classes.paragraph}
          >
            {blog?.text}
          </Typography>
          <Typography
            variant="body1"
            color="primary"
            align="left"
            className={classes.paragraph}
          >
            {blog?.text}
          </Typography>
          <Typography
            variant="body1"
            color="primary"
            align="left"
            className={classes.paragraph}
          >
            {blog?.text}
          </Typography>
          <VideoEmbed src={blog?.vidSrc} caption={blog?.vidDesc} />
          <img src={blog?.imgSrc} alt={blog?.imgDesc} width="100%" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withRouter(BlogReader);
