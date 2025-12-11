import React from "react";
import {
  Stack,
  Avatar,
  Typography,
  Paper,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Header({ onToggle }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openProfile = Boolean(anchorEl);

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ mb: 2 }}
    >
      {/* --------------------- SIDEBAR TOGGLE BUTTON --------------------- */}
      <IconButton
        onClick={onToggle}
        sx={{
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          width: 44,
          height: 44,
          "&:hover": { background: "#f1edff" },
        }}
      >
        <MenuIcon sx={{ fontSize: 26, color: "#6c4bd9" }} />
      </IconButton>

      {/* --------------------- PROFILE DROPDOWN --------------------- */}
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "8px 16px",
          borderRadius: "20px",
          cursor: "pointer",
        }}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <Avatar sx={{ width: 36, height: 36, mr: 1 }} src="/profile.jpg" />
        <Typography fontWeight={600}>Jason Ranti</Typography>
        <KeyboardArrowDownIcon sx={{ ml: 1 }} />
      </Paper>

      <Menu
        anchorEl={anchorEl}
        open={openProfile}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem>My Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Stack>
  );
}
