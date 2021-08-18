import { makeStyles } from "@material-ui/core/styles";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  container: {
    padding: " 0 5% 5% 5%",
    // maxWidth: 1000,
    [theme.breakpoints.down("md")]: {
      padding: "5% 25px",
    },
  },

  authorBox: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-start",
    },
  },

  authorShareBox: {
    marginTop: "2.5%",
  },

  contentBox: {
    // marginTop: "2.5%",
  },

  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },

  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },

  paragraph: {
    padding: "2.5% 0",
  },

  colorGray: {
    color: "gray",
  },

  thickDivider: {
    height: 3,
    margin: "2rem 0",
  },

  lookbookImageDiv: {
    overflow: "hidden",
  },

  lookbookImage: {
    transition: "transform 0.2s",

    "&:hover": {
      transform: "scale(1.1)",
    },
  },

  videoContainer: {
    minHeight: "50vw",
  },
}));
