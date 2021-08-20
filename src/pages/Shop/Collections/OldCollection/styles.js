import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  landing: {
    display: "block",
    margin: 20,
    position: "relative",
    fontSize: 20,
    [theme.breakpoints.down("md")]: {
      // margin: 0,
    },
  },

  title: {
    position: "relative",
    fontWeight: "bold",
    marginTop: 0,
  },

  landingImage: {
    backgroundPosition: "50% 50%",
    // height: "100%",
    width: "100%",
  },

  price: {
    opacity: 0.3,
  },
  
}));
