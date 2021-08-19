import { Grid } from "@material-ui/core";
import { FiberManualRecord } from "@material-ui/icons";
import React from "react";
import useStyles from "./styles";

const StepTracker = ({ steps, currentStep }: any) => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      spacing={1}
      className={classes.stepTrack}
    >
      {Array.from(Array(steps), (_, id): any => (
        <Grid item key={id}>
          <FiberManualRecord
            color={id + 1 === currentStep ? "secondary" : "inherit"}
            fontSize="inherit"
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default StepTracker;
