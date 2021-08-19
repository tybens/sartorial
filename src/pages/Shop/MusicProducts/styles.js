import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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

  content: {
      minHeight:"60vh",
  },

}));
