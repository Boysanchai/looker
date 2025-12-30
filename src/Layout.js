import { useState, useMemo } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import {
  AppBar, Toolbar, Typography, Drawer, List, ListItemButton,
  ListItemIcon, ListItemText, CssBaseline, Box, IconButton, Switch
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import MenuIcon from "@mui/icons-material/Menu";
import OpacityIcon from "@mui/icons-material/Opacity";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import ROSystems from "./pages/ROSystems";
import AirCompressor from "./pages/Aircompressor";
import Watermeter from "./pages/Watermeter";
import Orders from "./pages/Orders";

function Dashboard() {
  return <Typography variant="h4">Dashboard Page</Typography>;
}

const drawerWidth = 240;

export default function Layout() {
  const [open, setOpen] = useState(true);
  const [mode, setMode] = useState("light");
  const navigate = useNavigate();
  const location = useLocation();

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode,
        primary: { main: "#2563eb" },
        background: {
          default: mode === "light" ? "#f8fafc" : "#020617",
          paper: mode === "light" ? "#ffffff" : "#020617"
        }
      }
    }), [mode]);

  const menu = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
    { text: "Orders", icon: <ShoppingCartIcon />, path: "/orders" },
    { text: "RO Systems", icon: <OpacityIcon />, path: "/ro" },
    { text: "Water Meter", icon: <BarChartIcon />, path: "/water" },
    { text: "Air Compressor", icon: <DashboardIcon />, path: "/aircompressor" }
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ display: "flex" }}>
        <AppBar
  position="fixed"
  sx={{
    background: "linear-gradient(90deg, #1e3a8a, #2563eb)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.25)"
  }}
>
          <Toolbar>
                      <IconButton
            onClick={() => setOpen(!open)}
            sx={{
              color: "#fff",
              bgcolor: "rgba(255,255,255,0.15)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.25)" }
            }}
          >
            <MenuIcon />
          </IconButton>


            <Typography sx={{ flexGrow: 1 }}>Admin Dashboard</Typography>

            <LightModeIcon />
            <Switch
              checked={mode === "dark"}
              onChange={() => setMode(mode === "light" ? "dark" : "light")}
            />
            <DarkModeIcon />
          </Toolbar>
        </AppBar>

        <Drawer
  variant="persistent"
  open={open}
  sx={{
    width: open ? drawerWidth : 64,
    "& .MuiDrawer-paper": {
      width: open ? drawerWidth : 64,
      transition: "0.3s",
      borderRight: "1px solid rgba(0,0,0,0.08)",
      background:
        mode === "light"
          ? "linear-gradient(180deg, #ffffff, #f1f5f9)"
          : "linear-gradient(180deg, #020617, #020617)"
    }
  }}
>

          <Toolbar />
          <List>
            {menu.map(item => (
              <ListItemButton
                key={item.text}
                selected={location.pathname === item.path}
                onClick={() => navigate(item.path)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                {open && <ListItemText primary={item.text} />}
              </ListItemButton>
            ))}
          </List>
        </Drawer>

        <Box component="main" sx={{
          flexGrow: 1,
          height: "100vh",
          p: 2,
          ml: open ? `${drawerWidth}px` : "64px",
          transition: "0.3s"
        }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/ro" element={<ROSystems />} />
            <Route path="/water" element={<Watermeter />} />
            <Route path="/aircompressor" element={<AirCompressor />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
