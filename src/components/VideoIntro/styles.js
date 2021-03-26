import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  videoPreloader: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    zIndex: "900",
    background: "#fff",
    transition: "0.7s"
  },

  videoPreloaderText: {
    fontSize: "24px",
    position: "absolute",
    top: "15%",
    left: "15%",
    zIndex: "10",
    transform: "translate(30px)",
    webkitTransform: "0.7s ease-out",
    transition: "0.7s ease-out"
  }
}));
