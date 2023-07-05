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
    fontSize: "calc(0.35vw + 1.1rem)",
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


  profileBlock: {
    margin: "0 15%",
    [theme.breakpoints.down("sm")]: {
      margin: "0 5%",
    },
  },

  content: {
    margin: "0 15%",
  },

  textBlock: {
    padding: "15px",
  },

  title: {
    fontWeight: "300",
  },
  
  blurb: {
    fontSize: "calc(0.3vw + 13px)",

  },

  margin: {
    margin: "5% 0",
  },

  caption: {
    fontSize: "calc(0.5vw + 10px)",
    margin: "0 20%",
    [theme.breakpoints.up("md")]: {
      margin: "0 30%"
    },
    display: "inline-block",
    lineHeight: 1.3,
  },

  img: {
    height: "35vh",
    backgroundSize: "cover",
    backgroundPosition: "top",
  },
}));
