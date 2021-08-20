import { Grid, IconButton, Typography, Button } from "@material-ui/core";
import StepTracker from "components/StepTracker";
import React, { useState } from "react";
import useStyles from "./styles";
import { ArrowBack } from "@material-ui/icons";
const MusicProducts = ({ collection, onAddToCart }) => {
  const classes = useStyles();
  const [step, setStep] = useState(0);
  const [checkout, setCheckout] = useState(false);
  //   const imageManip = "w_300,h_300,q_auto:best,c_fill";

  const steps = [
    {
      name: "piece",
      data: [
        {
          name: "Rhythm for the Restless",
          img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1629416157/Summer%202021%20Music%20Collection/317habitat.003_c5fcmb.jpg",
        },
        {
          name: "Hip Hop for the Homeless",
          img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1629416161/Summer%202021%20Music%20Collection/317habitat.002_dd7nuh.jpg",
        },
        {
          name: "Music for Mothers",
          img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1629416157/Summer%202021%20Music%20Collection/317habitat.001_fempgp.jpg",
        },
      ],
    },
    {
      name: "color",
      data: [
        {
          name: "Blue",
          img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1629418217/Summer%202021%20Music%20Collection/DSC08998_1_bttwdz.jpg",
        },
        {
          name: "Green",
          img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1629418218/Summer%202021%20Music%20Collection/DSC08998_2_tm5r8o.jpg",
        },
        {
          name: "Yellow",
          img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1629418217/Summer%202021%20Music%20Collection/DSC08998_opqtxu.jpg",
        },
        {
          name: "Red",
          img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1629418217/Summer%202021%20Music%20Collection/DSC08998_3_fqpymn.jpg",
        },
      ],
    },
    {
      name: "type",
      data: [
        {
          name: "LS Tee",
          img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1629418044/Summer%202021%20Music%20Collection/317habitat.002_whdos3.jpg",
        },
        {
          name: "Tee",
          img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1629418042/Summer%202021%20Music%20Collection/317habitat.001_spchcl.jpg",
        },
        {
          name: "Hoodie",
          img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1629418044/Summer%202021%20Music%20Collection/317habitat.003_hbxbat.jpg",
        },
        {
          name: "Cropped Hoodie",
          img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1629418044/Summer%202021%20Music%20Collection/317habitat.004_pny2et.jpg",
        },
      ],
    },
    {
      name: "size",
      data: [
        {
          name: "SM",
          img: ``,
        },
        { name: "MD", img: "" },
        { name: "LG", img: "" },
        { name: "XL", img: "" },
      ],
    },
  ];

  //   const finalStepPrints = {
  //     "Hip Hop for the Homeless":
  //       "https://res.cloudinary.com/habitatsartorial/image/upload/v1629403091/Summer%202021%20Music%20Collection/DSC08969_jsfdqy.jpg",
  //     "Music for Mothers":
  //       "https://res.cloudinary.com/habitatsartorial/image/upload/v1629403091/Summer%202021%20Music%20Collection/DSC08873_ecpl6n.jpg",
  //     "Rhythm for the Restless":
  //       "https://res.cloudinary.com/habitatsartorial/image/upload/v1629403090/Summer%202021%20Music%20Collection/DSC08979_ompn1n.jpg",
  //   };

  const defaultVariables = {
    type: "",
    piece: "",
    color: "",
    size: "",
  };

  const [variables, setVariables] = useState(defaultVariables);

  const setOrderVariables = (name, e) => {
    setVariables({ ...{ ...variables, ...{ [name]: e } } });
  };

  const handleNextStep = () => {
    let nextStep = step + 1;
    if (nextStep > 3) {
      setStep(4);
      setCheckout(true);
    } else {
      setStep(nextStep);
    }
  };
  const handlePreviousStep = () => {
    let nextStep = step - 1;
    if (nextStep < 0) {
      setStep(0);
    } else {
      setCheckout(false);
      setStep(nextStep);
    }
  };

  const Selection = ({ stepData }) => {
    return (
      <>
        <Grid item xs={12} container justify="center">
          <Typography
            variant="h2"
            color="primary"
            style={{ textTransform: "capitalize" }}
          >
            {stepData.name}
          </Typography>
          {/* {stepData.name === "color" && (
            <img
              src="https://res.cloudinary.com/habitatsartorial/image/upload/v1629403088/Summer%202021%20Music%20Collection/DSC08998_wyiaug.jpg"
              alt="colors"
            />
          )} */}
        </Grid>
        {stepData.data.map(({ name, img }, id) => (
          <Grid
            item
            xs={12}
            sm={6}
            key={id}
            className={classes.clickable}
            onClick={() => {
              setOrderVariables(stepData.name, name);
              handleNextStep();
            }}
          >
            {stepData.name !== "piece" && (
              <Typography
                variant="h3"
                color="primary"
                align="center"
                className={classes.selectionName}
              >
                {name}
              </Typography>
            )}
            {img !== "" && (
              <img src={img} alt={name} width="200px" height="auto" />
            )}
          </Grid>
        ))}
      </>
    );
  };

  const Checkout = () => (
    <>
      <Grid item container xs={12} justify="center">
        <Grid item container justify="center" xs={12}>
          <Typography
            variant="h2"
            color="primary"
            style={{ textTransform: "capitalize" }}
          >
            Review {"&"} Add
          </Typography>
        </Grid>

        <Grid item xs={12} className={classes.containerInner} container>
          {steps.map(({ name }, id) => (
            <Grid
              item
              xs={12}
              key={id}
              container
              justify="center"
              alignItems="center"
            >
              <Typography variant="h5" color="primary" key={id}>
                {variables[name]}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} container alignItems="center" justify="center">
        <Button
          size="large"
          variant="outlined"
          color="secondary"
          className={classes.button}
          onClick={() =>
            onAddToCart(
              `${variables.piece}${variables.color}${variables.type}${variables.size}`,
              1,
              {
                collection: "s21-music",
                size: variables.size,
                product: {
                  name: `${variables.piece}, ${variables.type}, ${variables.color}, ${variables.size}`,
                  ...variables,
                },
              }
            )
          }
        >
          Add to Cart!
        </Button>
      </Grid>
    </>
  );

  return (
    <Grid container className={classes.parentWrap}>
      <Grid item xs={12} container justify="center" className={classes.content}>
        {checkout ? <Checkout /> : <Selection stepData={steps[step]} />}
      </Grid>
      <Grid item xs={12} className={classes.stepTrackerDiv}>
        {step !== 0 && (
          <IconButton
            variant="contained"
            color="primary"
            onClick={handlePreviousStep}
          >
            <ArrowBack />
          </IconButton>
        )}

        <StepTracker steps={5} currentStep={step + 1} />
      </Grid>
    </Grid>
  );
};

export default MusicProducts;
