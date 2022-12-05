import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  contentBlock: {},

  profileBlock: {
    margin: "0 15%",
    [theme.breakpoints.down("sm")]: {
      margin: "0 5%",
    },
  },

  content: {
    margin: "0 15%",
  },

  textBlock: {
    padding: "15px",
  },

  title: {
    fontWeight: "300",
  },
  
  blurb: {
    fontSize: "calc(0.3vw + 13px)",

  },

  margin: {
    margin: "5% 0",
  },

  caption: {
    fontSize: "calc(0.5vw + 10px)",
    margin: "0 20%",
    [theme.breakpoints.up("md")]: {
      margin: "0 30%"
    },
    display: "inline-block",
    lineHeight: 1.3,
  },

  img: {
    height: "35vh",
    backgroundSize: "cover",
    backgroundPosition: "top",
  },
}));

const profiles = [
  {
    name: "Tyler Benson",
    blurb:
      "Taking a gap year 2020-21 from Princeton University in an attempt to find what makes me tick, I spent my time using data science to reduce hospital mortality, volunteering at blood drives, and building web apps for nonprofits. I find that I yield fulfillment in committing myself towards helping others. I'll be using my knowledge of data science, experience in web development, studies of computer science, and especially my drive to help others to keep Habitat Sartorial growing.",
    img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1670179966/misc/tyler_idrw3j.jpg",
    title: "Head of Engineering",
  },
  {
    name: "Jack Hidde",
    blurb:
      "I began my journey in the fashion industry thanks to our Executive Director. I have fostered my love for fashion and design at Indiana University since then, and with Habitat Sartorial I hope to use my knowledge and skills to empower those less fortunate than myself. Using the techniques of design I have learned from Merchandising and Fashion Design courses at IU, I create meaningful products that connect those supporting and those benefitting from the charities who receive our donations.",
    img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1670179669/misc/nice_pic_for_ppt_wxtgtf.png",
    title: "Head of Design",
  },
  {
    name: "Edem Kabasa",
    blurb:
      "As a long time friend of the other three members, the opportunity to assist in a charitable business venture was a lucrative and exciting call. The combination of our strengths and skills, zeal for success, and unitive synergy have fostered an idea manifesting in excellence. I have always been concerned with the ethical side of business, especially in the fashion industry, and my philosophical experience and human connection bring a fresh take to the pragmatic nonprofit and industrial world of fashion development and design.",
    img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1670187815/misc/A57B6DCB-D26F-4E22-A5CC-79F41AD4BF05_rwqa89.jpg",
    title: "Head of Philosophy",
  },
  {
    name: "Payne Vogtman",
    blurb:
      "The four of us gathered in 2020 to discuss our mutual desire to give back to the city we were raised in. By combining our strengths to create an avenue for anyone to give back through ordinary activities, we've created this company as the result of that desire. I use the market analysis, accounting and financial projection skills I've picked up at Indiana University, as well as the strong network I've built of creatives in and around Indianapolis, to keep Habitat Sartorial strong and constantly expanding.",
    img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1670180060/misc/Screen_Shot_2022-12-04_at_13.54.02_cj8ypo.png",
    title: "Executive Director, Head of Operations",
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
            have a wide background, each contributing unique skills that push us
            to succeed and grow.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          container
          className={classes.profileBlock}
          spacing={4}
        >
          {profiles.map((data, id) => {
            let even = id % 2 === 0;
            return (
              <Grid
                item
                container
                xs={12}
                key={id}
                direction={even ? "row-reverse" : "row"}
              >
                <Grid
                  item
                  xs={12}
                  sm={6}
                  className={classes.img}
                  style={{ backgroundImage: `url(${data.img})` }}
                />
                <Grid
                  item
                  container
                  className={classes.textBlock}
                  direction="column"
                  xs={12}
                  sm={6}
                >
                  <Typography variant="h5" align={even ? "right" : "left"}>
                    {data.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    align={even ? "right" : "left"}
                  >
                    {data.title}
                  </Typography>
                  <Typography variant="body1" align={even ? "right" : "left"} className={classes.blurb}>
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
