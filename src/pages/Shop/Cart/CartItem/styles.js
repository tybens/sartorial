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
    padding: theme.spacing(2),
    border: "",
    margin: 'auto',
    maxWidth: 500,
    heigth: "150px",
    width: "500px",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));
