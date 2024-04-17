import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';
import LaunchIcon from '@mui/icons-material/Launch';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "calc(4vw + 1rem)",
    paddingTop: 10,

  },
  videoEmbed: {
    width: '100%',
    height: '100%',
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
  [theme.breakpoints.down('sm')]: {
    padding: "16px !important",
  }
}

}));

const Guatemala = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} style={{marginBottom: "4rem"}}>
          <Typography variant="h1" gutterBottom>
            (anywhere)
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className={classes.border} style={{height: "25rem"}}>
          <iframe
            className={classes.videoEmbed}
            src="https://www.youtu.be/y7Q_jCgdW4U"
            title="Project Video"
            allowFullScreen
          ></iframe>
        </Grid>
        <Grid item xs={12} md={6} className={classes.containerInner}>
          <Typography variant="h2" gutterBottom>
            Long Way Home's Hero School
          </Typography>
          <Typography variant="body1">
            In San Juan Comalapa, Guatemala, Long Way Home's Hero School (recipient of the 2023 UNESCO prize for Education for Sustainable Development) provides work for teachers, peace of mind for parents, and schooling for hundreds of local students.
          </Typography>
        </Grid>
        <Grid item xs={12} className={classNames(classes.border, classes.text)} >
          <Typography variant="body1">
            Long Way Home has broken the cycle of poverty for thousands of Guatemalans by implementing infrastructure projects such as water, housing, and sanitation.
            LWH is the 3rd biggest employer in the area and have provided a steady job for hundreds of Guatemalans spanning nearly two decades.
            LWH has built sustainable homes, clinics, schools and much more on three continents. 
            LWH has upcycled over 100,000 used-tires and hundreds of tons of plastic rubbish.
            175 low income students currently attend our primary, middle, and high school. This is our 12 year of operation. 
            LWH has open sourced all of our green building techniques at lwhomegreen.org.
            4000 international volunteers have learned grassroots sustainable development with LWH.
            LWH have pioneered a relevant, replicable and scalable poverty fighting education model.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} className={classes.border}>
          <Typography variant="h4" gutterBottom>
            What We've Given
          </Typography>
          <ul style={{textAlign: "left"}}>
            <li>Work shirts for LWH's building staff</li>
            <li>Labcoats for all students in the School's new science wing</li>
          </ul>
          <Button variant="contained" color="primary" href="/collection/anywhere" className={classes.linkButton}>
            Visit Collection
          </Button>
        </Grid>
        <Grid item md={2} />
        <Grid item xs={12} md={5} className={classes.border}>
          <Typography variant="h4" gutterBottom >
            What Else They Need
          </Typography>
          <ul style={{textAlign: "left"}}>
            <li>Recurring monthly donations to pay teachers salaries.</li>
            <li>15 laptops for our computer lab</li>
            <li>A volunteer CPA</li>
            <li>School uniforms (classroom & Sports)</li>
            <li>Equipment and furniture for our cafeteria (fridge, counters, cabinets, etc.)</li>
          </ul>
          <Button target="_blank" variant="contained" color="primary" href="https://lwhome.org/fundraise" className={classes.linkButton}>
            Donate Directly <LaunchIcon />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Guatemala;