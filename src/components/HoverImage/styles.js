import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  hoverImage: {
    overflow: "hidden",
    visibility: "hidden",
    opacity: "0",
    width: "540px",
    height: "400px",
    position: "absolute",
    transform: "translate(-50%, -50%) scale(0.7)",
    zIndex: "9",
    backgroundSize: "cover !important",
    transition: "opacity 0.1s, visibility 0.1s, transform 0.2s",
    left: "-100%",
    top: "-100%"
  },

  hovered: {
    display: "block",
    visibility: "visible",
    opacity: "0.85",
    transform: "translate(-50%, -50%) scale(1.1)",
  }


}));
