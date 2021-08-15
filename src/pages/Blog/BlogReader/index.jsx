import React from "react";
import { withRouter } from "react-router-dom";
import { Typography, Grid, Divider, Avatar } from "@material-ui/core";
import useStyles from "./styles";
import VideoEmbed from "../VideoEmbed";
import ShareComponent from "components/Share";
import { PayneImg, EdemImg, JackImg, TylerImg } from "assets/blog/people";
import BlogHead from "../BlogHead";

const BlogReader = ({ postsData, match }) => {
  const classes = useStyles();
  const blogId = match.params.blogId;
  const blog = postsData.find(({ id }) => id === blogId);

  const authorMapper = {
    "Payne Vogtman": PayneImg,
    "Tyler Benson": TylerImg,
    "Edem Kabasa": EdemImg,
    "Jack Hidde": JackImg,
  };


  return (
    <>
      <BlogHead description={blog?.title} image={blog?.img1Src} blogId={blogId} />
      <Grid container className={classes.container}>
        <Grid item container xs={12}>
          <Grid item xs={12} md={9}>
            <Typography variant="h2" color="primary" align="left">
              {blog?.title}
            </Typography>
          </Grid>
          <Grid
            item
            md={3}
            xs={12}
            container
            justify="space-between"
            alignItems="center"
            spacing={1}
            className={classes.authorShareBox}
          >
            <Grid
              item
              container
              alignItems="center"
              justify="flex-end"
              spacing={1}
              sm={6}
              md={12}
              className={classes.authorBox}
            >
              <Grid item>
                <Avatar src={authorMapper[blog?.author]} alt={blog?.author} />
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
            <Grid item xs={12} sm={6} md={12}>
              <ShareComponent exampleImage={blog?.imgSrc} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider className={classes.thickDivider} />
          </Grid>
        </Grid>

        <Grid container spacing={3} className={classes.contentBox}>
          <Grid item xs={12} md={6}>
            {Array.isArray(blog?.text1)
              ? blog?.text1.map((text) => (
                  <Typography
                    variant="body1"
                    color="primary"
                    align="left"
                    className={classes.paragraph}
                  >
                    {text}
                  </Typography>
                ))
              : blog?.text1}
          </Grid>
          <Grid item xs={12} md={6}>
            {blog?.vid1Src ? (
              <VideoEmbed src={blog?.vid1Src} caption={blog?.vid1Desc} />
            ) : (
              <img
                src={blog?.img1Src}
                alt={blog?.img1Desc}
                width="100%"
                height="100%"
              />
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            {blog?.vid2Src ? (
              <VideoEmbed src={blog?.vid2Src} caption={blog?.vid2Desc} />
            ) : (
              <img
                src={blog?.img2Src}
                alt={blog?.img2Desc}
                width="100%"
                height="100%"
              />
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            {Array.isArray(blog?.text2)
              ? blog?.text2.map((text) => (
                  <Typography
                    variant="body1"
                    color="primary"
                    align="left"
                    className={classes.paragraph}
                  >
                    {text}
                  </Typography>
                ))
              : blog?.text2}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider className={classes.thickDivider} />
        </Grid>
        <Grid item xs={12}>
          {blog?.suffix}
        </Grid>
      </Grid>
    </>
  );
};

export default withRouter(BlogReader);
