import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  collection: {
    fontSize: "20px",
  },

  parentWrap: {
    minHeight: "100vh",
    maxWidth: "2000px",
    margin: "auto",
    padding: "30px",
    paddingBottom: 20,
    zIndex: 3,
    position: "relative",
  },

  header: {
    zIndex: 3,
    minWidth: "100%",
    padding: 0,
    margin: "35px 0",
    color: "white",
  },

  landing: {
    display: "block",
    width: "100%",
    position: "relative",
  },

  landingImage: {
    backgroundPosition: "50% 50%",
    height: "56.25vw",
    position: "relative",
    display: "block",
    zIndex: "1101",
    backgroundSize: "cover",
  },

  landingContent: {
    textAlign: "right",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    padding: "1.5rem",
    pointerEvents: "none",
    color: "white",
    fontWeight: "bold",
    zIndex: "1103",
  },

  landingSubName: {
    fontWeight: "normal",
    color: "inherit",
  },

  landingName: {
    fontWeight: "bold",
  },

  otherCollectionsImage: {
    backgroundPosition: "50% 50%",
    height: "30vw",
    width: "50%",
    position: "relative",
    display: "block",
    zIndex: "2",
    backgroundSize: "cover",
  },

  form: {

  }
}));
