import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  fullHeightContainer: {
      textAlign: "left",
    overflow: "hidden",
    padding: `${theme.spacing(10)}px 0`,
    background: "white",
    zIndex: 10,
    position: "relative",
  },
  colorBlack: {
    color: "#000",
  },
  padding: {
    paddingTop: theme.spacing(3),
  },

  followUs: {
    marginLeft: "-13px",
  },

  linkStyle: {
    textDecoration: "none",
    cursor: "pointer",
    color: "black",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  requestButton: {
    width: "170px",
    borderRadius: "8px",
    whiteSpace: "nowrap",
  },
  textfield: {
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: "10px",
    "&:hover": {
      color: "#222",
    },
  },
  disclaimer: {
    color: theme.palette.text.secondary,
    fontStyle: "italic",
  },
  description: {
    color: "#ddd",
  },
  
  titleLinkText: {
    fontWeight: 700,
    fontSize: "3em",
  },
  titleDiv1: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    }
  },
  titleDiv2: {
    marginTop: "100px",
    [theme.breakpoints.up("md")]: {
      display: "none",
    }
  },

  footerLinkText: {
    fontWeight: 600,
  },
  copyrightText: {
    fontSize: "1.1em",
  },

  subLinks: {
    fontSize: "1em",
  }

}));

export default styles;
