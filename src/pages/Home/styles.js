import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  firstBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: 500,
  },
  firstRow: {
    maxWidth: 700,
  },
  header: {
    margin: "1em 0",
  },
  img: {
    marginBottom: "-10px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  rotaryImg: {
    marginBottom: "-10px",
    padding: "100px",
    background: "white",
  },
  imgWrapper: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
