import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  buttons: {
    display: "flex",
    alignItems: "center",
  },
  content: {
    flexGrow: 1,
  },
  paper: {
    maxWidth: 500,
    width: "500px",
    textAlign: "left"
  
  },
  description: {
    color: "grey",
    fontSize: 15
  },
  image: {
    width: 200,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  buttonTextSize: {
    fontSize: 25,
  },
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
