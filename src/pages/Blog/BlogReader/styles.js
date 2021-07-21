import { makeStyles } from "@material-ui/core/styles";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  container: {
    padding: "5%",
    maxWidth: 1000,
    [theme.breakpoints.down("md")]: {
      padding: "5% 25px",
    },
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
  },
}));
