import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  firstBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: 500,
  },
  container: {
    zIndex: 3,
    background: "white",
    borderRadius: 10,
    maxWidth: 500,
    width: "calc(75% - 0.5em)",
    margin: "0.25em",
  },


  firstRow: {
    maxWidth: 700,
  },
  header: {
    margin: "1em 0",
  },
  img: {
    marginBottom: "-10px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  rotaryImg: {
    marginBottom: "-10px",
  },
  imgWrapper: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  waveUp: {
    marginBottom: "-10px",
    background: "white",
    display: "flex",
  },

  paragraph: {
    fontSize: "1.2rem",
  },

  waveDown: {
    background: "#000",
    marginTop: "-10px",
    marginBottom: "-20px",
    display: "flex",
  },
  waveDownColorCorrect: {
    background: "#ffffff",
    height: "20px",
    width: "100%",
  },
  waveUpColorCorrect: {
    background: "#000",
    height: "20px",
    width: "100%",
  },
}));
