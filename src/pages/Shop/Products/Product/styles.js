import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  landing: {
    display: "block",
    margin: 20,
    position: "relative",
    fontSize: 20,
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      // margin: 0,
    },
    transition: "transform 0.2s ease",
    "&:hover": {
      transform: "scale(1.025)",
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

  disabled: {
    cursor: "default !important",
    WebkitFilter: "grayscale(100%)",
    filter: "grayscale(100%)",
    "&:hover": {
      transform: "none",
    },
  },

  soldOutText: {
    position: "relative",
    padding: 0,
  },

  price: {
    marginTop: 0,
    opacity: 0.3,
  },
}));
