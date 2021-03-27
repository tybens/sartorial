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
  }

}));
