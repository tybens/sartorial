import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const inputRoot = {
  border: "1px solid #f1f1f1",
  color: "#000",
  borderRadius: "5px",
  backgroundColor: "#f1f1f1",
  "&:hover": {
    background: "#f9f9f9",
    borderColor: "#f9f9f9",
  },
  "&:focus": {
    background: "#fff",
    borderColor: "#f2f3f5",
    border: "1px solid #334AC0 !important",
    boxShadow: "0 0px 1px 2px #acb6f0",
  },
  "&::placeholder": {
    color: "#999",
  },
};

const breakpoints = createBreakpoints({
  values: {
    xs: 475,
    sm: 600,
    smmd: 760,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
});

const theme = createMuiTheme({

  breakpoints: breakpoints,

  palette: {
    type: "light",
    primary: { main: "#000", contrastText: "#fff" },
    secondary: { main: "#334AC0" },
    typography: {
      main: "#000",
      almostWhite: "#ccc",
      lightGray: "#999",
      gray: "#222",
    },

    backgrounds: {
      primary: "#f2f3f5",
      baseColor: "#fff",
      darkGray: "#d3d7db",
      lightGray: "#eaedef",
      secondary: "#e2e5e8",
    },
    menus: {
      lightBaseColor: "#f2f3f5",
      white: "#fff",
      black: "#111",
    },
    modals: {
      gray: "#d3d7db",
      black: "#111",
      white: "#fff",
    },
    lines: {
      dark: "#202225",
      black: "#72767d",
      gray: "#4f545b",
      white: "#f1f1f1",
    },

    buttons: {
      primary: "#334AC0",
      dark: "#292b2f",
      white: "#fff",
      light: "#eaedef",
      alert: "#fff3cd",
      warn: "#f05050",
    },

    buttonsText: {
      primary: "#000",
      dark: "#fff",
      white: "#000",
      light: "#000",
      alert: "#000",
      warn: "#fff",
    },
  },

  typography: {
    button: {
      textTransform: "none",
    },
  },

  overrides: {
    MuiTab: {
      textColorPrimary: {
        color: "inherit",
      },
    },

    MuiAccordion: {
      root: {
        backgroundColor: "#2c2f33",
        lineHeight: "1.4rem",
      },
    },

    MuiRadio: {
      root: {
        color: "inherit",
      },
    },

    MuiButton: {
      root: {
        border: "none",
        borderRadius: "5px",
        color: "white",
        "&:hover": {
          opacity: "0.9",
        },
      },
      contained: {
        background: "#334AC0",
        border: "none",
        borderRadius: "5px",
        color: "white",
        fontWeight: "bold",
        "&:hover": {
          opacity: "0.9",
        },
        "&:disabled": {
          color: "white",
          background: "#ACB6F0",
        },
      },
    },

    MuiBackdrop: {
      root: {
        background: "rgba(0, 0, 0, 0.5)",
      },
    },

    MuiInputBase: {
      root: inputRoot,
    },

    MuiInput: {
      root: inputRoot,
    },

    MuiSelect: {
      root: {
        ...inputRoot,
        color: "inherit",
        border: "none",
        "&:focus": { border: "none", background: "#fff" },
      },
    },

    MuiBadge: {
      root: {
        border: "none",
        borderRadius: "50%",
      },
    },

    MuiOutlinedInput: {
      root: {
        backgroundColor: "#f1f1f1",
        "&:hover": {
          backgroundColor: "#f9f9f9",
        },
        "&.Mui-focused": {
          backgroundColor: "white",
        },

        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#f9f9f9",
        },
        "&$disabled .MuiOutlinedInput-notchedOutline": {
          borderColor: "#202225",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#f2f3f5",
          border: "1px solid #334AC0 !important",
          boxShadow: "0 0px 1px 2px #acb6f0",
        },
      },
      notchedOutline: {
        border: "1px solid",
        borderColor: "#f1f1f1",
        borderRadius: "5px",
      },
    },

    MuiTypography: {
      
        caption: {
          fontSize: "0.65rem",
          fontWeight: 400,
          lineHeight: "1.66",
          letterSpacing: "0.03333em",
        },
        h1: {
          fontSize: "4em",
          fontWeight: "700",
          fontStyle: "italic",
          letterSpacing: "0.03em",
      },
      h2: {
        [breakpoints.down("md")]: {
          fontSize: "3.25em",
        },
        [breakpoints.down("sm")]: {
          lineHeight: "55px",
          fontSize: "2.5em",
        },
        [breakpoints.down("xs")]: {
          lineHeight: "40px",
          fontSize: "2em",
        },
        maxWidth: 1150,
        position: "relative",
        zIndex: 1,
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "4em",
        lineHeight: "75px",
      },
      h4: {
        paddingBottom: "10px",
        paddingLeft: "10px",
        fontWeight: 600,
        fontSize: "1.3rem",
        textTransform: "uppercase",
        letterSpacing: "0.01071em",
        lineHeight: 1.43,
      },
      h3: {
        [breakpoints.down("xs")]: {
          fontSize: "1em",
          lineHeight: "1em",
        },
        marginTop: "1em",
        fontWeight: 300,
        fontSize: "1.4em",
        fontFamily: "inherit",
      },
    },

    MuiListItemIcon: {
      root: {
        color: "inherit",
      },
    },

    MuiMenu: {
      paper: {
        border: "none",
        padding: "5px",
        background: "#f2f3f5",
        color: "#111",
        boxShadow:
          "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)",
      },
      list: {
        "&:hover": {
          background: "#fff",
        },
      },
    },

    MuiListItem: {
      root: {
        Mui: {
          selected: {
            color: "initial",
          },
        },
      },

      button: {
        transition: "all 0.25s ease",
        "&:hover": {
          color: "white",
          backgroundColor: "#334AC0",
        },
      },
    },

    //@ts-ignore
    MUIDataTable: {
      paper: {
        backgroundColor: "#37393f",
        width: "100%",
      },
    },

    MuiMenuItem: {
      root: {
        whiteSpace: "normal",
      },
    },

    MuiTableCell: {
      stickyHeader: {
        backgroundColor: "#37393f",
        fontWeight: 600,
      },
      root: {
        borderBottom: "1px solid #4f545b",
      },
    },

    MuiPaper: {
      root: {
        color: "#ccc",
        background: "#f2f3f5",
      },
      elevation4: {
        boxShadow: "none",
      },
    },

    MuiPopover: {
      paper: {
        background: "black",
        color: "#ccc",
      },
    },

    MUIDataTableBodyCell: {
      root: {
        wordBreak: "break-all",
      },
    },

    MuiAutocomplete: {
      root: {
        border: "none",
      },
    },

    MuiCheckbox: {
      root: {
        border: "1px solid #f2f3f5",
        background: "#f2f3f5",
      },
    },

    MuiDivider: {
      root: {
        color: "#fff",
      },
    },

    MuiGrid: {
      root: {
        outline: "none",
      },
    },

    //*********************************************************************
    //* body styling
    //*********************************************************************

    MUIDataTableHeadCell: {
      root: {
        fontWeight: "600",
      },

      fixedHeader: {
        backgroundColor: "#37393f",
      },
    },

    MuiDialog: {
      paperFullScreen: {
        overflow: "hidden",
      },
    },

    MuiDialogContent: {
      root: {
        background: "#37393f",
        border: "2px solid #111",
        borderRadius: "4px",
        color: "#fff",
        boxShadow:
          "Box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)",
      },
    },

    MuiCssBaseline: {
      "@global": {
        a: {
          color: "#334AC0",
        },
        body: {
          "scrollbar-base-color": "#efefef",
          "scrollbar-face-color": "gray",
          "scrollbar-3dlight-color": "gray",
          "scrollbar-highlight-color": "gray",
          "scrollbar-track-color": "black",
          "scrollbar-arrow-color": "gray",
          "scrollbar-shadow-color": "gray",
          "scrollbar-dark-shadow-color": "gray",
          backgroundColor: "white",
        },
        "*::-webkit-scrollbar": {
          width: "0.89em",
        },
        "*:hover::-webkit-scrollbar": {
          width: "0.8rem",
        },
        "*::-webkit-scrollbar-track": {
          background: "#111",
          borderRadius: "6px",
          "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
        },
        "*::-webkit-scrollbar-thumb": {
          outline: "1px solid slategrey",
          backgroundColor: "gray",
          borderRadius: "6px",
          border: "1px solid #111",
          "&:hover": {
            backgroundColor: "#ccc",
            border: "3px solid #ccc",
          },
        },
      },
    },
  },
});

export default theme;
