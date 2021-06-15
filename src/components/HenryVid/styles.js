import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  videoPreloader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 900,
    zIndex: '0',
    MsTransform: 'translateX(-50%) translateY(-50%)',
    MozTransform: 'translateX(-50%) translateY(-50%)',
    WebkitTransform: 'translateX(-50%) translateY(-50%)',
    transform: 'translateX(-50%) translateY(-50%)',
    background: 'url(../../assets/vids/henryvid.webm) no-repeat',
    backgroundSize: 'cover',
    [theme.breakpoints.up("md")]: {
      height: 1100,
      marginTop: 100,
    }
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
