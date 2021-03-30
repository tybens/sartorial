import { makeStyles, fade } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    padding: "20px 40px 10px 40px",
    boxShadow: "none",
    borderBottom: "none",
    color: "inherit",
    backgroundColor: "inherit",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      padding: "40px 40px 0 40px",
      marginLeft: drawerWidth,
      backgroundColor: "transparent",
    },
  },
  titleDiv: {
    height: 35,
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
    [theme.breakpoints.up("xs")]: {
      height: 50,
    },
    [theme.breakpoints.up("sm")]: {
      height: 75,
    },
    
  },
  title: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    textDecoration: "none",
    fontSize: "56px",
    letterSpacing: "-0.01em",
    fontWeight: "bold !important",
    marginTop: "0",
  },

  image: {
    height: "100%",
    display: "flex",
    alignItems: "center"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  button: {
    margin: "-10px 0 -10px 0",
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
