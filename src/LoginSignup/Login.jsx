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
import { Visibility, VisibilityOff, Person, Lock } from "@mui/icons-material";

import logo from "../assets/images/logo1.png";
import logo1 from "../assets/images/logo2.png";

export default function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
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
          width: "50%",
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
          alignItems: "center", // vertical center
          justifyContent: "center",
          height: "100vh",
          float: "left",
          width: "50%",
        }}
      >
        <Box sx={{ maxWidth: 400, width: "100%", px: { xs: 3, sm: 6 } }}>
          {/* Logo */}

          <img src={logo1} alt="logo" sx={{ marginBottom: "20px;" }} />

          {/* Title */}
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontSize: "37px",
              color: "#453c3d",
              fontWeight: "400",
            }}
          >
            Welcome Login with credentials
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={3}>
            Sign in by entering details below
          </Typography>

          {/* Username */}
          <TextField
            fullWidth
            margin="normal"
            placeholder="Username"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              ),
            }}
          />

          {/* Password */}
          <TextField
            fullWidth
            margin="normal"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Remember Me + Forgot Password */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              my: 1,
            }}
          >
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember me"
            />
            <Link href="#" variant="body2" underline="hover">
              Forgot Password?
            </Link>
          </Box>

          {/* Login Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              py: 1.5,
              borderRadius: 3,
              background: "linear-gradient(135deg, #7b2ff7, #f107a3)",
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Login
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
