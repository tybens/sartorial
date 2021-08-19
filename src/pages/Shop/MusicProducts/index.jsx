import { Grid, Button } from "@material-ui/core";
import StepTracker from "components/StepTracker";
import React, { useState } from "react";
import useStyles from "./styles";

const MusicProducts = ({ collection, onAddToCart }) => {
  const classes = useStyles();
  const [step, setStep] = useState(0);
  const handleNextStep = () => {
    let nextStep = step+1;
    if (nextStep > 4) {
      setStep(1);
    } else {
      setStep(nextStep);
    }
  };
  return (
    <Grid container className={classes.parentWrap} justify="space-between">
      <Grid item xs={12} className={classes.content}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNextStep}
        >
          Set step to next step
        </Button>
      </Grid>
      <Grid item xs={12}>
        <StepTracker steps={4} currentStep={step + 1} />
      </Grid>
    </Grid>
  );
};

export default MusicProducts;
