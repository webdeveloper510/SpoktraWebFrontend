import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Checkbox,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";

import "../../assets/css/LoginSignup.css";

import girlImg from "../../assets/images/Loginimage.png";
import brandLogo from "../../assets/images/logo3.png";
import eyeOpen from "../../assets/images/showpassword.png";
import eyeClose from "../../assets/images/hidepassword.png";
import checkedImg from "../../assets/images/checked.png";
import uncheckedImg from "../../assets/images/unchecked.png";
import MultiStepPopup from "./MultiStepPopup"; // path to component

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <Box
      className="login-container"
      sx={{
        display: "block",
        minHeight: "100vh",
      }}
    >
      <Box
        p={0}
        sx={{
          display: "flex",
          minHeight: "100vh",
          justifyContent: "space-between",
        }}
      >
        {/* Left Section */}
        <Box
          className="left-section"
          sx={{
            flex: 1,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={girlImg} className="girl-img" alt="agent" />
          <img src={brandLogo} className="brand-logo" alt="logo" />
        </Box>

        {/* Right Section */}
        <Box
          className="right-section"
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
          }}
        >
          <Box className="login-box">
            {/* TITLE */}
            <Typography className="welcome-title">Welcome!</Typography>

            <Typography className="welcome-subtitle">
              Sign In By Entering New Password Below
            </Typography>

            {/* Email */}
            <Box className="customInput">
              <span className="customInputLabel">Email</span>
              <TextField
                fullWidth
                variant="standard"
                InputProps={{ disableUnderline: true }}
                placeholder="Enter Email"
              />
            </Box>

            {/* Password */}
            <Box className="customInput">
              <span className="customInputLabel">Current Password</span>
              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                variant="standard"
                placeholder="Enter Password"
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      <img
                        src={showPassword ? eyeOpen : eyeClose}
                        alt="toggle"
                      />
                    </IconButton>
                  ),
                }}
              />
            </Box>
            {/* Remember + Forgot */}
            <Box className="remember-forgot">
              <div>
                <Checkbox
                  icon={<img src={uncheckedImg} width={18} />}
                  checkedIcon={<img src={checkedImg} width={18} />}
                />
                {""}
                <span className="remember-text">Remember Me</span>
              </div>

              <Link to="/new-password" className="forgot-link">
                Forgot Password?
              </Link>
            </Box>

            {/* Sign In Button */}
            <Button
              fullWidth
              className="signInBtn"
              onClick={() => setOpenPopup(true)}
            >
              Sign In
            </Button>

            {/* Multi Step Popup */}
            <MultiStepPopup
              open={openPopup}
              onClose={() => setOpenPopup(false)}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
