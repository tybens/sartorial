import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Divider, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  contentBlock: {},

  profileBlock: {
    margin: "0 5%",
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
      margin: "0 30%",
    },
    display: "inline-block",
    lineHeight: 1.3,
  },

  img: {
    height: "40vh",
    backgroundSize: "cover",
    backgroundPosition: "top",
    transition: "transform 0.2s",

    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));

const contracts = [
  {
    name: "Indianapolis Neighborhood Resource Center",
    img: "https://res.cloudinary.com/chickennuggets/image/upload/v1675010151/sartorial/INRC_horizontal_vector_l4g5u2.png",
    link: "http://www.inrc.org/",
  },
  {
    name: "Americorps",
    img: "https://res.cloudinary.com/chickennuggets/image/upload/v1675010151/sartorial/Americorps_Stackedlogo_Crimson_qtotd1.jpg",
    link: "https://americorps.gov/",
  },
  {
    name: "Zionsville Community Schools",
    img: "https://res.cloudinary.com/chickennuggets/image/upload/v1675010151/sartorial/OfficialZCSLogo_nv2lmz.png",
    title: "https://www.zcs.k12.in.us/",
  },
  {
    name: "Indiana University Women's Basketball",
    img: "https://res.cloudinary.com/chickennuggets/image/upload/v1675010151/sartorial/AfVfd2fW_400x400_vof53h.png",
    link: "https://iuhoosiers.com/sports/womens-basketball",
  },
];

const images = [
  {
    img: "https://res.cloudinary.com/chickennuggets/image/upload/v1675022695/sartorial/68766027759__3DAD42D2-AFC4-4AD1-81B6-071F78A7D056_igm5zv.jpg",
  },
  {
    img: "https://res.cloudinary.com/chickennuggets/image/upload/v1675022695/sartorial/IMG_9017_fumdg8.jpg",
  },
  {
    img: "https://res.cloudinary.com/chickennuggets/image/upload/v1675010151/sartorial/8-4-22HabSatconcert-117_nx2rln_irhzon.jpg",
  },
  {
    img: "https://res.cloudinary.com/chickennuggets/image/upload/v1675010151/sartorial/image1_dnwiln.png",
  },
  {
    img: "https://res.cloudinary.com/chickennuggets/image/upload/v1675010151/sartorial/IMG_59B21D8747A5-1.jpeg_m5ms0c.jpg",
  },
];

const Contracting = () => {
  const classes = useStyles();

  const onClickPricing = () => {
    var link = document.createElement("a");
    link.href = "habitatsartorial_pricingguide.pdf";

    document.body.appendChild(link);

    link.click();

    return null;
  };

  return (
    <Grid container>
      <Grid item container className={classes.contentBlock} spacing={4}>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            color="initial"
            gutterBottom
            className={classes.title}
          >
            Contracting
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            Habitat Sartorial has collaborated with others to make high quality,
            ethically-sourced clothing. Here are some of our satisfied
            customers:
          </Typography>
          <Grid
            container
            spacing={3}
            style={{ padding: "0 30%" }}
            alignItems="center"
          >
            {contracts.map((data, id) => (
              <Grid item xs={12} md={6} lg={3} key={id}>
                <img src={data.img} width="100%" alt={id}/>
              </Grid>
            ))}
          </Grid>
          <Divider style={{ margin: "20px 30%" }} />
          <Typography
            variant="caption"
            className={classes.caption}
            gutterBottom
          >
            Would you like to join this list? Check out our pricing document:
          </Typography>
          <Button variant="outlined" color="primary" onClick={onClickPricing}>
            Download Pricing PDF
          </Button>
          <Divider style={{ margin: "20px 30%" }} />
        </Grid>
        <Grid
          item
          xs={12}
          container
          className={classes.profileBlock}
          spacing={4}
        >
          {images.map((data, id) => (
            <Grid
              item
              xs={12}
              md={6}
              key={id}
              className={classes.img}
              style={{ backgroundImage: `url(${data.img})` }}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contracting;
