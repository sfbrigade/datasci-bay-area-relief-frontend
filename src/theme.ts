import "./assets/fonts/bree-serif.css";
import "./assets/fonts/source-sans-pro.css";
import {createMuiTheme} from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import { CenterFocusStrong } from "@material-ui/icons";

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
      fontSize: "10vw",
      textAlign: "center",
      color: colors.text,
      ['@media (min-width: 30rem)']:{
        fontSize: "4.1vw"
      }
    },
    h4: {
      fontSize: "34px",
      lineHeight: "43px",
      letterSpacing: "0.25px",
    },
    h5: {
      fontFamily: "Source Sans Pro",
      fontSize: "8vw",
      lineHeight: "8vw",
      color: colors.text,
      ['@media (min-width: 30rem)']:{
        fontSize: "2.2vw",
        lineHeight: "2.7vw"
      }

    },
    h6: {
      fontFamily: "Source Sans Pro",
      fontSize: "20px",
      lineHeight: "25px",
      letterSpacing: "0.15px"
    },
    body1: {
      
      //lineHeight: "7.1vw",
      letterSpacing: "0.05vw",
      ['@media (min-width: 30rem)']:{
        
        //lineHeight: "2vw"
      }
    },
    subtitle1: {
      color: "darkblue",
      fontSize: "12px",
      lineHeight: "12px",
      letterSpacing: "0.25px",
    },
    button: {
      fontWeight: 600
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

