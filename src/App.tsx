import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme/theme";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/homepage";
import { Css } from "@mui/icons-material";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Homepage />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
