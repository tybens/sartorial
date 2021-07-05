import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: "5%",
  },
  emptyButton: {
    fontWeight: "normal",
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    minWidth: "150px",
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",
    marginTop: "10%",
  },

  cartWrapper: {
    padding: "10rem 0",
  },

  noPadding: {
    padding: 0,
  },

  modalWrap: {
    position: "fixed",
    right: "50%",
    top: "50%",
  },

  modal: {
    margin: 40,
    boxShadow: "0px 5px 8px 0px rgba(0,0,0,0.14)",
    opacity: 0,
    transition: "opacity 0.5s ease",
  },

  underline: {
borderBottom: `2px solid ${theme.palette.secondary.main}`
  },

  opaque: {
    opacity: 1,
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
