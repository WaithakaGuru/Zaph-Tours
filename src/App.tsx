import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./theme/theme";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import DestinationsPage from "./pages/DestinationsPage";
import TripTypesPage from "./pages/TripTypesPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/destinations" Component={DestinationsPage} />
          <Route path="/trip-types" Component={TripTypesPage} />
          <Route path="/blog" Component={BlogPage} />
          <Route path="/contact" Component={ContactPage} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
