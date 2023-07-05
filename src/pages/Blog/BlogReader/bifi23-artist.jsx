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
      margin: "0 30%",
    },
    display: "inline-block",
    lineHeight: 1.3,
  },

  img: {
    backgroundSize: "cover",
    backgroundPosition: "top",
  },
}));

const artists = [
  {
    name: "midwxst",
    blurb:
      "Indianapolis in my eyes is the birth place of both midwxst and Edgar. The first city I ever had real, genuine friends in. I have memories attached to specific streets, the parking lot right off College Road near Park Tudor, Monument Circle, and so much more in each and every corner of the city. The city means more to me than any other place out of the various neighborhoods I’ve lived in from state to state because it's helped shape so many things in myself that I wouldn’t have been able to attain in any other location in the world. I wanted to truly give back to the community and show kids that they can be whoever they want, from whatever part of the world, with whatever walk of life they may walk from as long they believe and embrace the unique experiences and things engrained in themselves. I want those black kids who felt too ashamed to be themselves to embrace the things that make them different because those are their superpowers. I’m very blessed and thankful for the opportunity to do what I love and give back to the community at the same time. Thank you.",
    img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1688497818/bifi23/317habitat1._001_x0xulz.jpg",
    title: "",
  },
  {
    name: "TopView",
    blurb:
      "Indianapolis has become a special part of our lives, a place where we've fostered a remarkable community through our Artist Development and Media platform. As we witness the city's rapid growth, we are filled with immense gratitude for being able to contribute to its vibrant tapestry. This charity show holds a profound significance for us, as it brings together a diverse and influential group of artists, all with deep ties to Indianapolis. Their presence and willingness to give back to their hometown amplifies the show's importance. It serves as a powerful testament to the artists' commitment to their community, showcasing their desire to uplift and support the place that shaped their creative journey.",
    img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1688573135/bifi23/1234._001_y8qieg.jpg",
    title: "Taylor Hall, OCC TAEE, & Norriethegoat",
  },
  {
    name: "Henryd",
    blurb:
      "Indiana is my home. This place made me who I am today and it has always been a dream of mine to represent the state that built me. Playing this show is a dream come true. It’s an opportunity to give back to the city I love, while supporting the charities that help our city grow. I can’t wait to be back at the Hifi doing what I love for the people I love.",
    img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1688497816/bifi23/317habitat1._002_p5rfgs.jpg",
    title: "with JusMari and Kenny Morrell",
  },
  {
    name: "Arboretum",
    blurb:
      "Growing up together outside of Indy has been so formative for us as a band. It's a very natural and freeing space to grow up, build connections, and work together creatively, which we've been very lucky to do since we were childhood friends in band class. These foundations help shape our music, which seeks to reflect on the present or nostalgic experiences of growing up. There's always been people and environments around us that inspire our collaboration and continued pursuit of our dreams, and recognizing these supports is so important to us. We are so excited to help give back to the Indianapolis community through this second edition of the By Indy, For Indy concert!",
    img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1688497810/bifi23/317habitat1._003_ojdm0e.jpg",
    title: "Cooper Davenport, Evan Emsley, & Jack Schrepferman",
  },
];

const BifiArtistApparel = () => {
  const classes = useStyles();

  return (
    <Grid container>
          {artists.map((data, id) => {
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
                  sm={12}
                  md={6}
                  className={classes.img}
                  >
                    <img src={data.img} height="auto" width="100%" alt={`artist apparel ${data.name}`} />
                </Grid>
                <Grid
                  item
                  container
                  className={classes.textBlock}
                  direction="column"
                  sm={12}
                  md={6}
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
                  <Typography
                    variant="body1"
                    align={even ? "right" : "left"}
                    className={classes.blurb}
                  >
                    {data.blurb}
                  </Typography>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
  );
};

export default BifiArtistApparel;
