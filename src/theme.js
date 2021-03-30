import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    breakpoints: {
        values: {
          xs: 475,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
      },
  });

  export default theme;