import React from "react";
import {
  Grid,
  Box,
  Paper,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  InputAdornment,
  IconButton,
} from "@mui/material";
import "../assets/css/LoginSignup.css";
import logo from "../assets/images/logo1.png";
import logo1 from "../assets/images/logo2.png";

import Visibility from "../assets/images/showpassword.png";
import VisibilityOff from "../assets/images/hidepassword.png";

export default function NewPassword() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        className="loginBg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          height: "100vh",
          float: "left",
          width: "45%",
        }}
      >
        <img src={logo} alt="logo" width="300px" />
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        component={Paper}
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
          float: "left",
          width: "55%",
          paddingLeft: "6%",
        }}
      >
        <Box sx={{ maxWidth: "90%", width: "100%", px: { xs: 3, sm: 0 } }}>
          <img src={logo1} alt="logo" className="ColorLogo" />

          <Typography
            variant="h5"
            sx={{
              fontSize: "37px",
              color: "#453c3d",
              fontWeight: "400",
            }}
          >
            Setup New Password
          </Typography>

          <div className="formRow">
            {/* new Password */}
            <TextField
              fullWidth
              margin="normal"
              placeholder="New Passowrd"
              className="inputFields"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end">
                      {showPassword ? (
                        <img src={Visibility} alt="Visibility" />
                      ) : (
                        <img src={VisibilityOff} alt="VisibilityOff" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* confirm Password */}
            <TextField
              fullWidth
              margin="normal"
              placeholder="Confirm New Passowrd"
              className="inputFields"
              type={showConfirmPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleToggleConfirmPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? (
                        <img src={Visibility} alt="Visibility" />
                      ) : (
                        <img src={VisibilityOff} alt="VisibilityOff" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Remember Me + Forgot Password */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                my: 1,
                padding: "0px 20px;",
              }}
            >
              <p>
                Password must be at least 8 characters and include uppercase,
                lowercase, a number, and a special character.
              </p>
            </Box>

            {/* Login Button */}
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                py: 1.5,
                background: "linear-gradient(94deg, #c958fd 0%, #290fa0 100%)",
                textTransform: "none",
                fontWeight: "400",
                height: "53px",
                borderRadius: "26px",
                fontSize: "17px",
              }}
            >
              Done
            </Button>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}
