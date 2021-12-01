import React from "react";
import useStyles from "./styles";
import { Grid, Typography } from "@material-ui/core";

const Measurements = () => {
  const classes = useStyles();

  const MyTypography = ({
    content = "",
    children = "",
    align = "left",
    bold = false,
    header = false,
  }) => {
    return (
      <Grid item xs={12}>
        <Typography
          variant={header ? "h3" : "h6"}
          id="content--inner"
          className={classes.noMargin}
          gutterBottom
          color="primary"
          align={align}
          style={bold ? { fontWeight: 600 } : { fontWeight: 300 }}
        >
          {content}
          {children}
        </Typography>
      </Grid>
    );
  };

  const data = [
    {
      header: "Measurements",
      text: [
        "All measurements are standard.",
        "Each item has the same measurements regardless of its color or the collection it is in.",
      ],
    },
    {
      header: "Shortsleeve Tee",

      text: [],
      img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1629994879/Measurements/Fall%20Winter%202021/SS_measurements_fnkj0q.jpg",
    },
    {
      header: "Longsleeve Tee",
      img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1629994880/Measurements/Fall%20Winter%202021/LS_measurements_bj0iuj.jpg",
      text: [],
    },
    {
      header: "Mockneck",
      img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1629994879/Measurements/Fall%20Winter%202021/MN_measurements_lh0iqi.jpg",
      text: [],
    },
    {
      header: "Hoodie",
      img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1629994879/Measurements/Fall%20Winter%202021/H_measurements_pyatfi.jpg",
      text: [],
    },
    {
      header: "Cropped Hoodie",
      img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1629994879/Measurements/Fall%20Winter%202021/CH_measurements_ue4x1g.jpg",
      text: [],
    },
    {
      header: "Sweatshorts",
      img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1629994879/Measurements/Fall%20Winter%202021/SS_measurements_fnkj0q.jpg",
      text: [
        "The inseam on sweatshorts from our F/W21 Classics Collection can be customized to any length between 1.5 and 8 inches.",
      ],
    },
    {
      header: "Sweatpants",
      img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1629994879/Measurements/Fall%20Winter%202021/SP_measurements_ck45mt.jpg",
      text: [],
    },
  ];
  return (
    <Grid
      container
      justify="space-around"
      alignItems="center"
      className={classes.container}
      direction="column"
    >
      {data.map(({ header, text, img }, id) => (
        <Grid
          item
          key={id}
          xs={12}
          className={classes.containerInner}
          id="media"
          container
        >
          <MyTypography bold={true} header={true}>
            {header}
          </MyTypography>
          {text.map((text, id) => (
            <MyTypography key={id}>{text}</MyTypography>
          ))}
          {img && (
            <img src={img} alt="sizing layout" width="100%" height="100%" />
          )}
        </Grid>
      ))}
    </Grid>
  );
};
export default Measurements;
