import { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import {
  AppBar, Toolbar, Typography, Drawer, List, ListItemButton,
  ListItemIcon, ListItemText, CssBaseline, Box, IconButton
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import MenuIcon from "@mui/icons-material/Menu";
import ROSystems from "./pages/ROSystems";
import OpacityIcon from "@mui/icons-material/Opacity";


import Orders from "./pages/Orders";

function Dashboard() {
  return <Typography variant="h4">Dashboard Page</Typography>;
}

function Analytics() {
  return <Typography variant="h4">Analytics Page</Typography>;
}

const drawerWidth = 240;

export default function Layout() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { text: "Orders", icon: <ShoppingCartIcon />, path: "/orders" },
  { text: "RO Systems", icon: <OpacityIcon />, path: "/ro" },
  { text: "Water Meter", icon: <BarChartIcon />, path: "/water" }
];


  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar>
          <IconButton color="inherit" onClick={() => setOpen(!open)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Admin Dashboard</Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="persistent" open={open} sx={{
        width: open ? drawerWidth : 64,
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : 64,
          transition: "0.3s"
        }
      }}>
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
        marginLeft: open ? `${drawerWidth}px` : "64px",
        transition: "0.3s",
        p: 2
      }}>
        <Toolbar />

        <Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/orders" element={<Orders />} />
  <Route path="/ro" element={<ROSystems />} />
  <Route path="/water" element={<Watermeter />} />
</Routes>

      </Box>
    </Box>
  );
}
