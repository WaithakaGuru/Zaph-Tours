import { createTheme } from "@mui/material";
import { green, orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: green[700],
    },
    secondary: {
      main: orange[600],
    },
    text: {
      primary: "#222",
      secondary: "#555",
      disabled: "#ddd",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 680,
      md: 990,
      lg: 1200,
      xl: 1400,
    },
  },
});

export default theme;
