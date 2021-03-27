import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  resultMessage: {
  lineHeight: "22px",
  fontSize: "16px;",

  a: {
    color: "rgb(89, 111, 214);",
    fontWeight:" 600;",
    textDecoration: "none;"
  }
},

hidden: {
  display: "none;"
},

spinner: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
},

cardError: {
  color: "rgb(105, 115, 134);",
  fontWeight: "575",

  fontSize: "16px;",

  lineHeight: "20px;",

  marginTop: "12px;",

  textAlign: "center;"
},

cardElement: {
  borderRadius: "4px 4px 0 0;",

  padding: "12px;",
  border: "1px solid rgba(50, 50, 93, 0.1);",
  maxHeight: "44px;",
  width: "100%;",

  background: "white;",

  boxSizing: "border-box;"
},

disabled: {
  opacity: "0.5;",
  cursor: "default;"
},

stateCode: {
  width: "100%",
  height: "100%",
  borderColor: "rgba(107, 114, 128, 1)",
  borderWidth: "0 0 1px 0",
  paddingTop: "0.75rem",
  color: "rgba(107, 114, 128, 1)",
  fontSize: "1rem"
}
}));