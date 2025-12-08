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

import "../assets/css/LoginSignup.css";

import girlImg from "../assets/images/Loginimage.png";
import brandLogo from "../assets/images/logo2.png";
import eyeOpen from "../assets/images/showpassword.png";
import eyeClose from "../assets/images/hidepassword.png";
import checkedImg from "../assets/images/checked.png";
import uncheckedImg from "../assets/images/unchecked.png";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

              <Box className="passwordWrapper">
                <input
                  type="text"
                  className="passwordInput"
                  value={showPassword ? password : "*".repeat(password.length)}
                  onChange={(e) => {
                    const newValue = e.target.value;

                    if (showPassword) {
                      // When visible: store the real password
                      setPassword(newValue);
                    } else {
                      // When hidden: detect NEW characters typed
                      const typedChar = newValue[newValue.length - 1];
                      if (typedChar) {
                        setPassword(password + typedChar);
                      }
                    }
                  }}
                />

                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  <img src={showPassword ? eyeOpen : eyeClose} alt="toggle" />
                </IconButton>
              </Box>
            </Box>
            {/* Remember + Forgot */}
            <Box className="remember-forgot">
              <Checkbox
                icon={<img src={uncheckedImg} width={18} />}
                checkedIcon={<img src={checkedImg} width={18} />}
              />
              <span className="remember-text">Remember Me</span>

              <Link to="/new-password" className="forgot-link">
                Forgot Password?
              </Link>
            </Box>

            {/* Sign In Button */}
            <Button fullWidth className="signInBtn">
              Sign In
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
