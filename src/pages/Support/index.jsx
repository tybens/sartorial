import React from "react";
import useStyles from "./styles";
import { Grid, Typography } from "@material-ui/core";

const Support = () => {
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
          style={bold ? { fontWeight: 600 } : {fontWeight: 300}}
        >
          {content}
          {children}
        </Typography>
      </Grid>
    );
  };

  const data = [
    {
      header: "Shipping",
      text: [
        "All shipping is free.",
        "Orders are printed on weekends and shipped via USPS First Class each Monday.",
      ],
    },
    {
      header: "Returns",
      text: [
        "If you believe you’ve received a faulty or damaged item, send an email to payne@habitatsartorial.org.",
        "Include your name and photos of the defect and we’ll get back to you within the week.",
      ],
    },
    {
      header: "Questions",
      text: [
        "If you have any further questions, send a text to (317) 469-8797.",
        "Include your name and your question and we’ll get back to you the same day.",
      ],
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
      {data.map(({ header, text }, id) => (
        <Grid
          item
          key={id}
          xs={12}
          className={classes.containerInner}
          id="content"
          container
        >
          <MyTypography bold={true} header={true}>{header}</MyTypography>
          {text.map((text, id) => (
            <MyTypography key={id}>{text}</MyTypography>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default Support;
