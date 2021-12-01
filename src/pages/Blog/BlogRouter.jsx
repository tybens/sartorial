import React from "react";
import { Switch, Route } from "react-router-dom";
import BlogReader from "./BlogReader";
import Blog from "./index";

import missionData from "data/mission-data";
import mediaData from "data/media-data"

const BlogRouter = ({ match, type="blog" }) => {
  var postsData = (type === "blog") ? missionData : mediaData;

  return (
    <Switch>
      <Route path={`/${type}/:blogId`}>
        <BlogReader postsData={postsData} />
      </Route>
      <Route path={`/${type}`}>
        <Blog type={type} postsData={postsData} />
      </Route>
    </Switch>
  );
};

export default BlogRouter;
