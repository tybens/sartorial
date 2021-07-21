import React from "react";
import { Switch, Route } from "react-router-dom";
import BlogReader from "./BlogReader";
import Blog from "./index";

import postsData from "data/blog-posts";

const BlogRouter = ({ match }) => {
  return (
    <Switch>
      <Route path="/blog/:blogId">
        <BlogReader postsData={postsData} />
      </Route>
      <Route path="/blog">
        <Blog postsData={postsData} />
      </Route>
    </Switch>
  );
};

export default BlogRouter;
