import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    minHeight: "60vh",
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
    minHeight: 200,
    padding: 30,
  },

  noMargin: {
    margin: 0,
  },
}));
