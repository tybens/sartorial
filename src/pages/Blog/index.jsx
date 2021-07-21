import React from "react";
import { Grid, Typography } from "@material-ui/core";

import EmailList from "components/EmailList";
import BlogCard from "./BlogCard";
import useStyles from "./styles.js";

const Blog = ({ postsData }) => {
  const classes = useStyles();

  const posts = postsData.map((data, index) => (
    <Grid item xs={12} sm={6} container justify="center" id="content--inner">
      <BlogCard key={index} data={data} />
    </Grid>
  ));

  // only show blog posts when in development
  const content = window.location.href.includes("localhost") ? (
    <>
      <Grid item xs={12}>
        <Typography variant="h1" color="primary" id="content">
          Blog
        </Typography>
      </Grid>
      {posts}
    </>
  ) : (
    <>
      <Grid item xs={12}>
        <Typography variant="h1" align="center" id="content" color="primary">
          Blog coming soon...
        </Typography>
      </Grid>

      <Grid item container xs={12} justify="center">
        <EmailList />
      </Grid>
    </>
  );

  return (
    <Grid
      container
      justify="center"
      direction="row"
      spacing={3}
      className={classes.wrapper}
    >
      {content}
    </Grid>
  );
};

export default Blog;
