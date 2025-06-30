import {useState, type FC} from "react";
import { useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import { grey } from "@mui/material/colors";
const navLinks = [
  { label: "Home", path: "/" },
  { label: "Destinations", path: "/destinations" },
  { label: "Trip Types", path: "/trip-types" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Navbar: FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => setDrawerOpen((open) => !open);

  return (
    <>
      <AppBar position="static" elevation={2} sx={{backgroundColor: grey[700]}}>
        <Toolbar>
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{ flexGrow: 1 }}
            component={RouterLink}
            to="/"
            color="inherit"
            style={{ textDecoration: "none" }}
          >
            Zaph Tours
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link.path}
                component={RouterLink}
                to={link.path}
                color={
                  location.pathname === link.path ? "secondary" : "inherit"
                }
                sx={{ fontWeight: 600 }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={handleDrawerToggle}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { md: "none" } }}
      >
        <Box
          sx={{ width: 220 }}
          role="presentation"
          onClick={handleDrawerToggle}
        >
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.path} disablePadding>
                <ListItemButton
                  component={RouterLink}
                  to={link.path}
                  selected={location.pathname === link.path}
                >
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
