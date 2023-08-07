import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Grid, Divider, Avatar } from "@material-ui/core";
import useStyles from "./styles";
import VideoEmbed from "../VideoEmbed";
import ShareComponent from "components/Share";
import { PayneImg, EdemImg, JackImg, TylerImg } from "assets/blog/people";
import HabitatImg from "assets/icons/rswhite.png";
import BlogHead from "../BlogHead";
import ReactPlayer from "react-player/lazy";
import Carousel from "react-material-ui-carousel";
import BifiArtistApparel from "./bifi23-artist";

const BlogReader = ({ postsData }) => {
  const classes = useStyles();
  const params = useParams();
  const blogId = params.blogId;
  const blog = postsData.find(({ id }) => id === blogId);

  const authorMapper = {
    "Payne Vogtman": PayneImg,
    "Tyler Benson": TylerImg,
    "Edem Kabasa": EdemImg,
    "Jack Hidde": JackImg,
    "Habitat Sartorial": HabitatImg,
  };

  const contentMapper = {
    article: <Article blog={blog} />,
    lookbook: <Lookbook blog={blog} />,
    video: <Video blog={blog} />,
    carousel: <MyCarousel blog={blog} />,
    concert: <BifiArtistApparel />
  };

  return (
    <>
      <BlogHead
        description={blog?.title}
        image={blog?.img1Src}
        blogId={blogId}
      />
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
        {contentMapper[blog?.type]}
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

const Article = ({ blog }) => {
  const classes = useStyles();

  return (
    <>
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
    </>
  );
};

const Lookbook = ({ blog }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.contentBox}>
      {blog?.images?.map((image, id) => (
        <Grid item xs={12} sm={6} key={id} className={classes.lookbookImageDiv}>
          <img
            className={classes.lookbookImage}
            alt={`lookbook ${id}`}
            width="100%"
            height="100%"
            src={image}
          />
        </Grid>
      ))}
    </Grid>
  );
};

const Video = ({ blog }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.contentBox}>
      <Grid item xs={12} className={classes.videoContainer}>
        <ReactPlayer url={blog?.video} autoplay width="100%" height="100%" />
      </Grid>
    </Grid>
  );
};

const MyCarousel = ({ blog }) => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      window.scroll({ top: 500, behavior: "smooth" });
    }, 1000);
  }, []);

  return (
    <Grid container className={classes.contentBox}>
      <Grid item xs={12} className={classes.videoContainer}>
        <Carousel
          autoPlay={false}
          animation="fade"
          onChange={(ind, active) => setIndex(ind)}
        >
          {blog?.carousel.map((item, i) => (
            <img src={item.image} alt={`carousel ${i}`} key={i} width="100%" />
          ))}
        </Carousel>
      </Grid>
      <Grid item container justify="center">
        <Grid
          item
          xs={12}
          md={8}
          container
          direction="column"
          style={{ maxWidth: 1000 }}
        >
          <Typography variant="h1" color="initial" style={{ maxWidth: "" }}>
            {blog?.carousel[index].text.heading}
          </Typography>
          <Typography variant="h3" color="initial" gutterBottom>
            {blog?.carousel[index].text.caption}
          </Typography>
          <Typography variant="h5" color="initial">
            {blog?.carousel[index].text.closing}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BlogReader;
