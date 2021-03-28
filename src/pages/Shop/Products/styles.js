import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: 'inherit',
    padding: `${theme.spacing(3)}px ${theme.spacing(7)}px`,
  },
  root: {
    flexGrow: 1,
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
