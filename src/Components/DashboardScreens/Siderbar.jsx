import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import CallIcon from "@mui/icons-material/Call";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import PeopleIcon from "@mui/icons-material/People";
import logo from "../../assets/images/logo2.png";

import dashboardIcon from "../../assets/images/icon1.png";
import agentIcon from "../../assets/images/icon2.png";
import callIcon from "../../assets/images/icon3.png";
import improvementIcon from "../../assets/images/icon4.png";
import userIcon from "../../assets/images/icon5.png";

const menuList = [
  { label: "Dashboard", icon: dashboardIcon, path: "/dashboard" },
  { label: "Agent Performance", icon: agentIcon, path: "/agent-performance" },
  { label: "Call Overview", icon: callIcon, path: "/call-overview" },
  {
    label: "Improvement Suggestions",
    icon: improvementIcon,
    path: "/improvement",
  },
  { label: "User Management", icon: userIcon, path: "/user-management" },
];

export default function Sidebar({ open = true }) {
  const location = useLocation();

  return (
    <Box
      sx={{
        width: open ? "315px" : "80px",
        transition: "0.25s ease",
        background: "linear-gradient(180deg, #ffffff, #f5f0ff)",
        borderRadius: "20px",
        padding: open ? "15px" : "15px 8px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* logo */}
      <Box
        sx={{
          mb: 3,
          textAlign: open ? "center" : "center",
          background: "rgb(232 218 218 / 20%)",
          p: 2,
          borderRadius: "10px",
        }}
      >
        {/* <img
          src="/assets/logo.png"
          alt="Spoktra"
          style={{
            width: open ? 140 : 40,
            transition: "0.25s",
            display: "inline-block",
            objectFit: "contain",
          }}
        /> */}

        <img src={logo} alt="Spoktra" />
      </Box>

      <List>
        {menuList.map((item) => {
          const active = location.pathname === item.path;

          return (
            <Tooltip
              key={item.path}
              title={!open ? item.label : ""}
              placement="right"
            >
              <ListItemButton
                component={NavLink}
                to={item.path}
                sx={{
                  mb: 1,
                  borderRadius: "60px",
                  padding: open ? "14px 16px" : "12px",
                  transition: "0.3s",
                  justifyContent: open ? "flex-start" : "center",

                  // ACTIVE STATE
                  background: active
                    ? "linear-gradient(90deg,#8a5dff,#b28dff)"
                    : "linear-gradient(90deg, rgba(215,205,235,0.2) 0%, rgba(255,255,255,0.2) 100%)",

                  boxShadow: active
                    ? "0 4px 12px rgba(140, 90, 255, 0.3)"
                    : "0px 2px 4px rgba(0,0,0,0.03)",

                  // NON-ACTIVE HOVER
                  "&:hover": {
                    background: active
                      ? "linear-gradient(90deg,#8a5dff,#b28dff)"
                      : "linear-gradient(90deg, rgba(215,205,235,0.4) 0%, rgba(255,255,255,0.4) 100%)",
                  },
                }}
              >
                {/* ICON */}
                <ListItemIcon
                  sx={{
                    minWidth: 36,
                    mr: open ? 1.5 : 0,
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    style={{
                      objectFit: "contain",
                      transition: "0.3s",
                    }}
                  />
                </ListItemIcon>

                {/* LABEL */}
                {open && (
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: 15,
                      fontWeight: 600,
                      transition: "0.3s",
                      color: active ? "#fff" : "#4a3f69",
                    }}
                  />
                )}
              </ListItemButton>
            </Tooltip>
          );
        })}
      </List>
    </Box>
  );
}
