import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    zIndex: 3,
    background: "white",
    borderRadius: 10,
    border: "2px solid black",
    maxWidth: 500,
    width: "calc(75% - 0.5em)",
    margin: "0.25em",
    minWidth: 280,
    minHeight: 200
  },

  errorLogin: {
    color: "#dc3545",
    margin: "0 0 5px 15px",
    fontSize: "0.8rem"
  },

  paragraph: {
    fontWeight: "normal",
    fontSize: "0.8rem"
  },

}));
