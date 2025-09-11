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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import "../assets/css/LoginSignup.css";
import logo from "../assets/images/logo1.png";
import logo1 from "../assets/images/logo2.png";
import user from "../assets/images/name.svg";
import password from "../assets/images/password.svg";

import Visibility from "../assets/images/showpassword.svg";
import VisibilityOff from "../assets/images/hidepassword.svg";
import checkedImg from "../assets/images/checked.svg";
import uncheckedImg from "../assets/images/unchecked.svg";

export default function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showModal, setshowModal] = React.useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClickOpen = () => {
    setshowModal(true);
  };

  const handleClose = () => {
    setshowModal(false);
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
            Welcome Login with credentials
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            mb={3}
            sx={{
              fontSize: "23px",
              color: "#9e9092",
              fontWeight: "400",
            }}
          >
            Sign in by entering details below
          </Typography>

          <div className="formRow">
            <TextField
              fullWidth
              margin="normal"
              placeholder="Username"
              className="inputFields"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={user} alt="user" />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              margin="normal"
              placeholder="************"
              className="inputFields"
              type={showPassword ? "text" : "password"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={password} alt="password" />
                  </InputAdornment>
                ),
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

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                my: 1,
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    icon={
                      <img
                        src={uncheckedImg}
                        alt="checked"
                        width={22}
                        height={22}
                      />
                    }
                    checkedIcon={
                      <img
                        src={checkedImg}
                        alt="checked"
                        width={22}
                        height={22}
                      />
                    }
                  />
                }
                label="Remember me"
              />
              <Link
                href="/new-password"
                variant="body2"
                underline="hover"
                sx={{
                  fontSize: "17px",
                  color: "#383737",
                  fontWeight: "300",
                }}
              >
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
                background: "linear-gradient(94deg, #c958fd 0%, #290fa0 100%)",
                textTransform: "none",
                fontWeight: "400",
                height: "53px",
                borderRadius: "26px",
                fontSize: "17px",
              }}
            >
              Login
            </Button>
            <Box
              sx={{
                textAlign: "center",
                my: 3,
                fontSize: "17px",
                color: "#383737",
                fontWeight: "300",
              }}
            >
              By clicking Login , you agree to our
              <Link
                onClick={handleClickOpen}
                variant="body2"
                underline="hover"
                sx={{
                  fontSize: "17px",
                  color: "#383737",
                  fontWeight: "300",
                  marginLeft: "5px;",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Terms and Conditions
              </Link>
            </Box>
          </div>
        </Box>

        <Dialog
          open={showModal}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{
            borderRadius: "20px",
          }}
        >
          <DialogTitle id="alert-dialog-title">
            Terms and Conditions
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <p>
                By using this application, you acknowledge and agree that your
                call activities, performance metrics, and productivity data may
                be tracked and recorded. This information will be used only for
                internal purposes such as quality assurance, training, and
                performance improvement. All personal data will be kept secure
                and confidential, accessible only to authorized personnel. You
                are responsible for safeguarding your login credentials, and any
                activity carried out through your account will be treated as
                your own.
              </p>
              <p>
                Misuse of this application—including sharing accounts, disabling
                monitoring features, tampering with data, or attempting
                unauthorized access—may result in disciplinary action as per
                company policy. The company reserves the right to update,
                modify, or revise these Terms & Conditions at any time, and your
                continued use of the application indicates your acceptance of
                the most recent version. The company is not liable for issues
                arising from negligence in protecting login credentials or from
                unauthorized third-party use.
              </p>
            </DialogContentText>
          </DialogContent>
          <DialogActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              my: 1,
            }}
          >
            <Button onClick={handleClose}>Accept and Continue</Button>
            <img src={logo1} />
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  );
}
