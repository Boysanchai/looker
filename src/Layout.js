import { useState, useMemo } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import {
  AppBar, Toolbar, Typography, Drawer, List, ListItemButton,
  ListItemIcon, ListItemText, CssBaseline, Box, IconButton, Switch
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import DashboardIcon from "@mui/icons-material/Dashboard";
import WaterIcon from '@mui/icons-material/Water';
import BarChartIcon from "@mui/icons-material/BarChart";
import MenuIcon from "@mui/icons-material/Menu";
import OpacityIcon from "@mui/icons-material/Opacity";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import CastIcon from '@mui/icons-material/Cast';

import ROSystems from "./pages/ROSystems";
import AirCompressor from "./pages/Aircompressor";
import Watermeter from "./pages/Watermeter";
import Orders from "./pages/Orders";
import Dashboard from "./pages/Dashboard";

const drawerWidth = 240;
const collapsedWidth = 64;

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
    { text: "Orders", icon: <WaterIcon />, path: "/orders" },
    { text: "RO Systems", icon: <OpacityIcon />, path: "/ro" },
    { text: "Water Meter", icon: <BarChartIcon />, path: "/water" },
    { text: "Air Compressor", icon: <CastIcon />, path: "/aircompressor" }
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ display: "flex", width: "100vw", height: "100vh" }}>

        {/* AppBar */}
        <AppBar
          position="fixed"
          sx={{
            zIndex: 1201,
            background: "linear-gradient(90deg, #1e3a8a, #2563eb)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)"
          }}
        >
          <Toolbar>
            <IconButton
              onClick={() => setOpen(!open)}
              sx={{
                color: "#fff",
                mr: 2,
                bgcolor: "rgba(255,255,255,0.18)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.28)" }
              }}
            >
              <MenuIcon />
            </IconButton>

            <Typography sx={{ flexGrow: 1, fontWeight: 600 }}>
              Admin Dashboard
            </Typography>

            <LightModeIcon />
            <Switch
              checked={mode === "dark"}
              onChange={() => setMode(mode === "light" ? "dark" : "light")}
            />
            <DarkModeIcon />
          </Toolbar>
        </AppBar>

        {/* Sidebar */}
        <Drawer
          variant="persistent"
          open={open}
          sx={{
            width: open ? drawerWidth : collapsedWidth,
            "& .MuiDrawer-paper": {
              width: open ? drawerWidth : collapsedWidth,
              top: 64,
              height: "calc(100% - 64px)",
              transition: "0.3s",
              overflowX: "hidden",
              borderRight: "1px solid rgba(0,0,0,0.08)",
              background:
                mode === "light"
                  ? "linear-gradient(180deg, #ffffff, #f1f5f9)"
                  : "linear-gradient(180deg, #020617, #020617)"
            }
          }}
        >
          <List>
            {menu.map(item => (
              <ListItemButton
                key={item.text}
                selected={location.pathname === item.path}
                onClick={() => navigate(item.path)}
                sx={{
                  py: 1.2,
                  "&.Mui-selected": {
                    bgcolor: "rgba(37,99,235,0.15)"
                  }
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
                {open && <ListItemText primary={item.text} />}
              </ListItemButton>
            ))}
          </List>
        </Drawer>

        {/* Main */}
        <Box component="main" sx={{
          flexGrow: 1,
          minHeight: "100vh",
          pt: "64px",
          pl: open ? `${drawerWidth}px` : `${collapsedWidth}px`,
          pr: 2,
          transition: "0.3s",
          overflow: "auto"
        }}>
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
