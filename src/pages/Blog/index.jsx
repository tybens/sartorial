import React from "react";
import { Grid, Typography } from "@material-ui/core";

import BlogCard from "./BlogCard";
import useStyles from "./styles.js";

const Blog = ({ postsData, type = "mission" }) => {
  const classes = useStyles();

  const posts = postsData.map((data, index) => (
    <Grid
      key={index}
      item
      xs={12}
      sm={6}
      container
      justify="center"
      id="content--inner"
      className={classes.blogCard}
    >
      <BlogCard data={data} type={type}/>
    </Grid>
  ));

  return (
    <Grid
      container
      justify="center"
      direction="row"
      spacing={3}
      className={classes.wrapper}
    >
      <Grid item xs={12}>
        <Typography variant="h1" color="primary" id="content">
          {type === "mission" ? "Mission" : "Content"}
        </Typography>
      </Grid>
      {posts}
    </Grid>
  );
};

export default Blog;
