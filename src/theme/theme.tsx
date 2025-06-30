import { createTheme } from "@mui/material";
import { green, orange, yellow } from "@mui/material/colors";


const theme = createTheme({
    palette: {
        primary: {
            main: green[700],
        },
        secondary: {
            main: orange[600]
        },
    },
    typography: {
        fontFamily: "Montserrat"
    }
})

export default theme;