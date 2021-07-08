import React  from "react";
import { Grid } from "@material-ui/core";

import BlogCard from "./BlogCard"
// import useStyles from "./styles.js";

const Blog = () => {
  // const classes = useStyles();
  return (
    <Grid container justify-content="flex-start" direction="column">
      {[...Array(5)].forEach((i) => (
        <BlogCard />
      ))}
    </Grid>
  );
};

export default Blog;
