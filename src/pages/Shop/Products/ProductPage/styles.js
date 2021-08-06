import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  wrapper: {
    padding: "0 5%",
    minHeight: "60vh",
  },

  sizeWrap: {
    //   marginLeft: "0.25rem",
  },

  noSelect: {
    WebkitTouchCallout: "none",
    WebkitUserSelect: "none",
    KhtmlUserSelect: "none",
    MozUserSelect: "none",
    MsUserSelect: "none",
    userSelect: "none ",
  },

  sizeBox: {
    display: "flex",
    padding: "0.5rem",
    width: "5rem",
    height: "2.5rem",
    border: "2px solid",
    justifyContent: "center",
    boxSizing: "border-box",
    transition: "border-color 0.5s ease, background 0.25s ease",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      background: "lightgrey",
    },
    "&:active": {
      background: "grey",
    },
    [theme.breakpoints.down("md")]: {
      width: "2.5rem",
    }
  },
  title: {
    fontStyle: "normal",
  },
  type: {
    fontStyle: "italic",
  },
}));
