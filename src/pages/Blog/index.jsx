import React, { useEffect }  from "react";
import { Grid } from "@material-ui/core";

import makeStyles from "./styles.js";

const Blog = () => {

  return (
    <Grid container justify-content="flex-start" direction="column">
      <div id="dib-posts" ></div>
    </Grid>
  );
};

export default Blog;
