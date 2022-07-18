import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  firstBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: 500,
  },
  firstRow: {
    maxWidth: 700,
  },
  header: {
    margin: "1em 0",
  },
  contentWrap: {
    minHeight: "50vh",
  },
  flyerText: {
    fontSize: "1.1em",
    marginBottom: "50px",
    maxWidth: "625px",
    margin: "0 10% 0 10%"
  },
  
  concertText: {
    margin: "50px 0 0 0 ",
    fontStyle: "normal",
  },

  gutterBottom: {
    paddingBottom: "70px",
    fontWeight: "400px",
  },
  img: {
    marginBottom: "-10px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  flyer: {
    minWidth: 300,
    maxWidth: 600,
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.05)",
      cursor: "pointer",
    },
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
  parentWrap: {
    minHeight: "100vh",
    maxWidth: "2000px",
    margin: "auto",
    padding: "30px",
    zIndex: 3,
    position: "relative",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
}));
