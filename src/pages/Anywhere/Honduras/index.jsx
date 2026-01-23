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

const Honduras = () => {
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
            src=src="https://www.youtube.com/embed/S_QucAZNXCY?si=c6e-e-VF1x_r_W2r"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Grid>
        <Grid item xs={12} md={6} className={classes.containerInner}>
          <Typography variant="h2" gutterBottom>
            Children of Soledad at Centro Educativo Jairo Castellanos in Sabá, Colón
          </Typography>
          <Typography variant="body1">
            Children of Soledad is an organisation which supports the children 
            of Honduras through water sanitation infrastructure, schooling and 
            education, and mission trips. So far, Children of Soledad has given 
            over $100,000 in support, building a new preschool building and a 
            sanitation system in the Colón region of Honduras, as well as 
            providing school supplies to all the children.
          </Typography>
        </Grid>
        <Grid item xs={12} className={classNames(classes.border, classes.text)}>
          <Typography variant="body1">
            At one of their supported schools in Sabá, Colón, the children's 
            uniforms were wearing down too quickly because of dirt and sweat at 
            recess. To allow the kids to play to their heart's content and keep 
            clean uniforms, Habitat Sartorial and Children of Soledad donated 
            150 recess shirts in children's sizes. To continue their work in Sabá,
            Children of Soledad needs ongoing support of school supplies and 
            uniforms, as well as general financial support to fund their next 
            project: a well and water tower to guarantee clean water to the region.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} className={classes.border}>
          <Typography variant="h4" gutterBottom>
            What We've Given
          </Typography>
          <ul style={{ textAlign: "left" }}>
            <li>Recess uniforms for 150 students at the school</li>
          </ul>
          <Button
            variant="contained"
            color="primary"
            href="/shop/collections/anywhere"
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
            <li>School Supplies for the children</li>
            <li>School uniforms (classroom & Sports)</li>
            <li>Recurring monthly donations for their well and water tower</li>
          </ul>
          <Button
            target="_blank"
            variant="contained"
            color="primary"
            href="https://www.childrenofsoledad.org/general-5"
            className={classes.linkButton}
          >
            Donate Directly <LaunchIcon />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Honduras;
