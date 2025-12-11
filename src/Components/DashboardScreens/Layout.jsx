import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

import Sidebar from "../DashboardScreens/Siderbar";
import Header from "../DashboardScreens/Header";
import "../../assets/css/Dashboard.css";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <Box
      className="dahboardImage"
      sx={{
        display: "flex",
        minHeight: "100vh",
        padding: "30px",
        backgroundColor: "#f5f5f8",
        boxSizing: "border-box",
      }}
    >
      {/* SIDEBAR */}
      <Sidebar open={sidebarOpen} onSelect={(path) => navigate(path)} />

      {/* RIGHT SIDE CONTENT */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          marginLeft: "20px",
        }}
      >
        <Header onToggle={() => setSidebarOpen(!sidebarOpen)} />

        <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
