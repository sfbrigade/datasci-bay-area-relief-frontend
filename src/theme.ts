import "./assets/fonts/bree-serif.css";
import "./assets/fonts/source-sans-pro.css";
import {createTheme} from "@mui/material/styles";
import {red} from "@mui/material/colors";

const defaultTheme = createTheme();

export const colors = {
  primaryRed: red[400],
  text: defaultTheme.palette.text.primary,
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primaryRed,
    },
  },
  typography: {
    fontFamily: "Source Sans Pro",
    h3: {
      fontFamily: "Bree Serif",
      fontSize: "3.0rem",
      color: colors.text,
    },
    h4: {
      fontSize: "2.125rem",
      lineHeight: "2.688rem",
      letterSpacing: "0.025rem",
    },
    h5: {
      fontFamily: "Source Sans Pro",
      fontSize: "1.5rem",
      lineHeight: "1.875rem",
      color: colors.text,
    },
    h6: {
      fontFamily: "Source Sans Pro",
      fontSize: "1.25rem",
      lineHeight: "1.562rem",
      letterSpacing: "0.015rem",
    },
    body1: {
      fontSize: "1.125rem",
      lineHeight: "1.75rem",
      letterSpacing: "0.05rem",
    },
    body2: {
      fontSize: "0.75rem",
      lineHeight: "1.25rem",
      letterSpacing: "0.025rem",
    },
    subtitle1: {
      color: "darkblue",
      fontSize: "0.75rem",
      lineHeight: "0.75rem",
      letterSpacing: "0.025rem",
    },
    button: {
      fontWeight: 600,
    },
    overline: {
      fontSize: "0.75rem",
      lineHeight: "1.0rem",
      letterSpacing: "0.0625rem",
      textTransform: "uppercase",
      color: colors.text,
    },
  },
});
