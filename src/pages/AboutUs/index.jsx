import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  contentBlock: {},

  content: {
    margin: "0 15%",
  },

  title: {
    fontWeight: "300",
  },

  margin: {
    margin: "5% 0",
  },

  caption: {
    fontSize: "calc(0.5vw + 10px)",
    maxWidth: "500px",
    display: "inline-block",
    lineHeight: 1.3,
  },

  img: {
    minHeight: "75vh",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

const profiles = [
  {
    name: "Payne Vogtman",
    blurb: "Very special description of roles and qualifications",
    img: "https://res.cloudinary.com/chickennuggets/image/upload/v1665770123/SpaceTiger/snowman_wgmm8w.jpg",
    title: "Head of Operations",
  },
  {
    name: "Tyler Benson",
    blurb: "Very special description of roles and qualifications",
    img: "https://res.cloudinary.com/chickennuggets/image/upload/v1665770123/SpaceTiger/snowman_wgmm8w.jpg",
    title: "Head of Engineering",
  },
  {
    name: "Edem Kabasa",
    blurb: "Very special description of roles and qualifications",
    img: "https://res.cloudinary.com/chickennuggets/image/upload/v1665770123/SpaceTiger/snowman_wgmm8w.jpg",
    title: "Head of Philosophy",
  },
  {
    name: "Jack Hidde",
    blurb: "Very special description of roles and qualifications",
    img: "https://res.cloudinary.com/chickennuggets/image/upload/v1665770123/SpaceTiger/snowman_wgmm8w.jpg",
    title: "Head of Design",
  },
];

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item container className={classes.contentBlock} spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h2" color="initial" className={classes.title}>
            Meet the Team
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            Habitat Sartorial is built on talent and collaboration. Our founders
            have a wide background, each contributing unique skills that allow
            HS to succeed.
          </Typography>
        </Grid>
        <Grid item xs={12} container>
          {profiles.map((data, id) => {
            return (
              <Grid item container xs={12} key={id}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  className={classes.img}
                  style={{ backgroundImage: `url(${data.img})` }}
                />
                <Grid item container direction="column" xs={12} sm={6}>
                  <Typography variant="h5" align="right">
                    {data.name}
                  </Typography>
                  <Typography variant="subtitle1" align="right">
                    {data.title}
                  </Typography>
                  <Typography variant="body2" align="right">
                    {data.blurb}
                  </Typography>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default AboutUs;
