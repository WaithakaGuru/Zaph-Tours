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
});

export default theme;
