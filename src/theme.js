import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 475,
      sm: 600,
      smmd: 760,
      md: 960,
      lg: 1280,
      xl: 1920,

    },
  },
  overrides: {
    MuiTypography: {
      caption: {
        fontSize: "0.65rem",
        fontWeight: 400,
        lineHeight: "1.66",
        letterSpacing: "0.03333em",
      },
      h1: {
          fontSize: '4em',
          fontWeight: '700',
          fontStyle: 'italic',
          letterSpacing: '0.03em',
      }
     
    },
  }
});

export default theme;