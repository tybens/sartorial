import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';
import LaunchIcon from '@mui/icons-material/Launch';

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

}));

const ProjectPage = () => {
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
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Project Video"
            allowFullScreen
          ></iframe>
        </Grid>
        <Grid item xs={12} md={6} className={classes.containerInner}>
          <Typography variant="h2" gutterBottom>
            Project Title
          </Typography>
          <Typography variant="body1">
            A brief paragraph about the project mission.
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.border}>
          <Typography variant="body1">
            A longer paragraph about what the project has accomplished.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} className={classes.border}>
          <Typography variant="h4" gutterBottom>
            What We've Given
          </Typography>
          <ul style={{textAlign: "left"}}>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            {/* Add more items as needed */}
          </ul>
          <Button variant="contained" color="primary" href="/collection/anywhere" className={classes.linkButton}>
            Visit Collection
          </Button>
        </Grid>
        <Grid item xs={0} md={2} />
        <Grid item xs={12} md={5} className={classes.border}>
          <Typography variant="h4" gutterBottom >
            What Else They Need
          </Typography>
          <ul style={{textAlign: "left"}}>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
          <Button variant="contained" color="primary" href="/collection/anywhere" className={classes.linkButton}>
            Donate Directly <LaunchIcon />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectPage;
