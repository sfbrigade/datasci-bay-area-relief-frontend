import "./assets/fonts/bree-serif.css";
import "./assets/fonts/source-sans-pro.css";
import {createMuiTheme} from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

export const colors = {
  primaryRed: red[400],
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
    },
    h5: {
      fontFamily: "Source Sans Pro",
      fontSize: "24px"
    },
    body1: {
      fontSize: "18px",
      letterSpacing: "0.5px",
    },
    button: {
      fontWeight: 600,
    },
  },
});
