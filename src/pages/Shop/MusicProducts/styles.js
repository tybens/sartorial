import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  parentWrap: {
    minHeight: "100vh",
    maxWidth: "2000px",
    margin: "auto",
    padding: "0 15%",
    zIndex: 3,
    position: "relative",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },

  content: {
    minHeight: "40vh",
  },
  
  clickable: {
    overflow: "hidden",
    transition: "transform 0.2s ease",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },

  containerInner: {
    zIndex: 3,
    background: "white",
    borderRadius: 10,
    border: "2px solid black",
    maxWidth: 500,
    width: "calc(75% - 0.5em)",
    margin: "0.25em",
    minWidth: 280,
    // minHeight: 200,
    padding: 30,
  },

  selectionName: {
    marginTop: 0,
  },

  stepTrackerDiv: {
    marginTop: -20,
  },

  button: {
    overflow: "hidden",
    transition: "transform 0.2s ease",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));
