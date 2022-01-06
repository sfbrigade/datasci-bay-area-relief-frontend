import "./assets/fonts/bree-serif.css";
import "./assets/fonts/source-sans-pro.css";
import {createMuiTheme} from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

const defaultTheme = createMuiTheme();

export const colors = {
  primaryRed: red[400],
  text: defaultTheme.palette.text.primary,
};

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primaryRed,
    },
  },
  typography: {
    fontFamily: "Source Sans Pro",
    h3: {
      fontFamily: "Bree Serif",
      fontSize: "48px",
      color: colors.text,
    },
    h4: {
      fontSize: "34px",
      lineHeight: "43px",
      letterSpacing: "0.25px",
    },
    h5: {
      fontFamily: "Source Sans Pro",
      fontSize: "24px",
      lineHeight: "30px",
      color: colors.text,
    },
    h6: {
      fontFamily: "Source Sans Pro",
      fontSize: "20px",
      lineHeight: "25px",
      letterSpacing: "0.15px"
    },
    body1: {
      fontSize: "18px",
      lineHeight: "28px",
      letterSpacing: "0.5px",
    },
    body2: {
      fontSize: "12px",
      lineHeight: "20px",
      letterSpacing: "0.25px",
    },
    subtitle1: {
      color: "darkblue",
      fontSize: "12px",
      lineHeight: "12px",
      letterSpacing: "0.25px",
    },
    button: {
      fontWeight: 600,
    },
    overline: {
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "1.5px",
      textTransform: "uppercase",
      color: colors.text,
    }
  },
});

