import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography } from "@material-ui/core";
import LaunchIcon from "@mui/icons-material/Launch";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "calc(4vw + 1rem)",
    paddingTop: 10,
  },
  videoEmbed: {
    width: "100%",
    height: "100%",
  },
  linkButton: {
    marginTop: theme.spacing(1),
  },

  border: {
    border: "3px solid black",
    borderRadius: "3px",
    marginBottom: "10px",
  },
  text: {
    padding: "16px 15vw !important",
    [theme.breakpoints.down("sm")]: {
      padding: "16px !important",
    },
  },
}));

const Tanzania = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} style={{ marginBottom: "4rem" }}>
          <Typography variant="h1" gutterBottom>
            (anywhere)
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className={classes.border}
          style={{ height: "25rem" }}
        >
          <iframe
            className={classes.videoEmbed}
            src="https://www.youtube.com/embed/joh4PpQZnp4?si=u1A3DMpi-kI1Wlau"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Grid>
        <Grid item xs={12} md={6} className={classes.containerInner}>
          <Typography variant="h2" gutterBottom>
            Attraction Birds Conservation Arusha
          </Typography>
          <Typography variant="body1">
            In Arusha, Tanzania, in the shadows of Mt. Kilimanjaro, Attraction Birds Conservation trains young Tanzanians in wildlife preservation, giving the local bird populations a safer future and local guides a path to steady income and stability. 
          </Typography>
        </Grid>
        <Grid item xs={12} className={classNames(classes.border, classes.text)}>
          <Typography variant="body1">
            ABC Arusha (Attraction Birds Conservation) is an organization dedicated to empowering youth through conservation education, with a special focus on bird studies and wildlife preservation. We aim to inspire young people, especially girls, by providing them with opportunities to learn about nature and develop practical skills in birding, environmental awareness, and conservation. Our programs create a pathway for youth to engage with and protect the natural world while fostering future conservation leaders in Tanzania.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} className={classes.border}>
          <Typography variant="h4" gutterBottom>
            What We've Given
          </Typography>
          <ul style={{ textAlign: "left" }}>
            <li>Two computers for ABC's training program</li>
          </ul>
          <Button
            variant="contained"
            color="primary"
            href="/collection/anywhere"
            className={classes.linkButton}
          >
            Visit Collection
          </Button>
        </Grid>
        <Grid item md={2} />
        <Grid item xs={12} md={5} className={classes.border}>
          <Typography variant="h4" gutterBottom>
            What Else They Need
          </Typography>
          <ul style={{ textAlign: "left" }}>
            <li>Transportation costs for youth to attend birding trips and conservation training</li>
            <li>Equipment such as binoculars and field guides</li>
            <li>Funds for educational materials and access to learning spaces</li>
            <li>Support for workshops and training sessions to expand our reach</li>
          </ul>
          <Button
            target="_blank"
            variant="contained"
            color="primary"
            href="https://www.facebook.com/birding4life/"
            className={classes.linkButton}
          >
            Donate Directly: Stanbic Bank Account #9120002423950 <LaunchIcon />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Tanzania;