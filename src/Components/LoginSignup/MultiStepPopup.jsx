// MultiStepPopup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  IconButton,
  Button,
  Checkbox,
  TextField,
  Box,
  Typography,
  Stack,
  Grid,
  Fade,
  Backdrop,
  styled,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MailOutlineIcon from "../../assets/images/email.png";
import SmartphoneIcon from "../../assets/images/phone.png";
import SuccessImage from "../../assets/images/successimage.png";
import checkedImg from "../../assets/images/checked.png";
import uncheckedImg from "../../assets/images/unchecked.png";

/* -----------------------------------------------------------
   Custom Styled Components
----------------------------------------------------------- */

const PopupWrapper = styled(Box)(() => ({
  width: "520px",
  background: "white",
  borderRadius: "28px",
  padding: "32px 42px",
  position: "relative",
  boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
}));

const CloseButton = styled(IconButton)(() => ({
  position: "absolute",
  top: "-18px",
  right: "-18px",
  background: "#A259FF",
  width: 60,
  height: 60,
  color: "white",
  borderRadius: "50%",
  "&:hover": {
    background: "#8A3FEA",
  },
}));

const GradientButton = styled(Button)(() => ({
  background: "linear-gradient(90deg,#7F00FF,#E100FF)",
  color: "white",
  padding: "10px 24px",
  borderRadius: "10px",
  fontSize: "15px",
  textTransform: "none",
  width: "100%",
  "&:hover": {
    background: "linear-gradient(90deg,#7000E6,#CC00E6)",
  },
}));

const OtpBox = styled(TextField)(() => ({
  width: "66px",
  height: "66px",

  // REMOVE ALL default MUI padding
  "& .MuiInputBase-root": {
    padding: 0,
    width: "66px",
    height: "66px",
    borderRadius: "20px",
    //border: "1px solid #E8DADA",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 4px 50px rgba(61, 44, 69, 0.10)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  // INPUT styling
  "& input": {
    textAlign: "center",
    fontSize: "22px",
    fontWeight: 500,
    padding: 0,
    width: "66px",
    height: "66px",
  },

  // Border override (default MUI uses fieldset)
  "& fieldset": {
    borderRadius: "20px",
    borderColor: "#E8DADA",
    borderWidth: "1px",
  },

  "&:hover fieldset": {
    borderColor: "#E8DADA",
  },

  "&.Mui-focused fieldset": {
    borderColor: "#7F00FF", // Light purple focus (optional)
    borderWidth: "1px",
  },
}));

/* -----------------------------------------------------------
   MAIN COMPONENT
----------------------------------------------------------- */

export default function MultiStepPopup({ open, onClose }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [checked, setChecked] = useState(false);

  const handleNext = () => setStep((prev) => prev + 1);

  const handleClosePopup = () => {
    setStep(1);
    onClose();
  };
  const handleAccept = () => {
    handleClosePopup(); // If you want the popup to close
    navigate("/dashboard"); // Redirect user to dashboard page
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClosePopup}
        maxWidth="md"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 400,
          style: {
            background: "rgb(19 11 82 / 60%)",
            backdropFilter: "blur(6px)",
          },
        }}
        PaperProps={{
          style: {
            background: "transparent",
            boxShadow: "none",
            overflow: "visible",
          },
        }}
        TransitionComponent={Fade}
      >
        <DialogContent
          style={{
            display: "flex",
            justifyContent: "center",
            padding: 0,
          }}
        >
          {" "}
          <CloseButton onClick={handleClosePopup} className="closeBtn">
            <CloseIcon />
          </CloseButton>
          <PopupWrapper>
            {/* ------------------------------------------------
                Step 1 — Choose Verification Method
            ------------------------------------------------ */}
            {step === 1 && (
              <>
                {step === 1 && (
                  <>
                    <Typography
                      textAlign="center"
                      mb={1}
                      className="popup-title"
                    >
                      2–step Verification
                    </Typography>

                    <Typography
                      textAlign="center"
                      fontSize={14}
                      mb={4}
                      className="welcome-subtitle"
                    >
                      Choose How You’d Like To Verify Your Profile
                    </Typography>

                    {/* EMAIL CARD */}
                    <Box
                      onClick={handleNext}
                      sx={{
                        padding: "18px 20px",
                        borderRadius: "16px",
                        border: "1px solid #EEE",
                        boxShadow: "0 4px 18px rgba(0,0,0,0.05)",
                        mb: 2,
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        "&:hover": { background: "#faf7ff" },
                      }}
                    >
                      <Box display="flex" alignItems="center" gap={2}>
                        <Box
                          sx={{
                            width: 42,
                            height: 42,
                            background: "#F4E8FF",
                            borderRadius: "12px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img src={MailOutlineIcon} alt="MailOutlineIcon" />
                        </Box>

                        <Box>
                          <Typography fontWeight={700} className="type-text">
                            Email
                          </Typography>
                          <Typography fontSize={13} color="#666">
                            We’ll send a verification code to your email
                            address.
                          </Typography>
                        </Box>
                      </Box>

                      <ArrowForwardIosIcon
                        fontSize="small"
                        sx={{ color: "#777" }}
                      />
                    </Box>

                    {/* PHONE CARD */}
                    <Box
                      onClick={handleNext}
                      sx={{
                        padding: "18px 20px",
                        borderRadius: "16px",
                        border: "1px solid #EEE",
                        boxShadow: "0 4px 18px rgba(0,0,0,0.05)",
                        mb: 2,
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        "&:hover": { background: "#faf7ff" },
                      }}
                    >
                      <Box display="flex" alignItems="center" gap={2}>
                        <Box
                          sx={{
                            width: 42,
                            height: 42,
                            background: "#F4E8FF",
                            borderRadius: "12px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img src={SmartphoneIcon} alt="SmartphoneIcon" />
                        </Box>

                        <Box>
                          <Typography fontWeight={700} className="type-text">
                            Phone
                          </Typography>
                          <Typography fontSize={13} color="#666">
                            We’ll send an SMS verification to your phone.
                          </Typography>
                        </Box>
                      </Box>

                      <ArrowForwardIosIcon
                        fontSize="small"
                        sx={{ color: "#777" }}
                      />
                    </Box>
                  </>
                )}
              </>
            )}

            {/* ------------------------------------------------
                Step 2 — OTP Screen
            ------------------------------------------------ */}
            {step === 2 && (
              <>
                <Typography textAlign="center" mb={1} className="popup-title">
                  Check Your Phone
                </Typography>

                <Typography
                  textAlign="center"
                  fontSize={14}
                  mb={4}
                  className="welcome-subtitle"
                >
                  Enter the 6-digit verification code sent to <br />{" "}
                  <strong>+1 ****** 4567</strong>
                </Typography>

                <Grid container spacing={1} justifyContent="center" mb={3}>
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Grid item key={i}>
                      <OtpBox inputProps={{ maxLength: 1 }} />
                    </Grid>
                  ))}
                </Grid>
                <Grid size={12} className="PopupBtn">
                  <GradientButton onClick={handleNext} width="auto">
                    Verify
                  </GradientButton>
                </Grid>

                <label className="resendTimer">
                  Resend Code in <b>00:14</b>
                </label>
              </>
            )}

            {/* ------------------------------------------------
                Step 3 —  Successful 
            ------------------------------------------------ */}
            {step === 3 && (
              <>
                <Box textAlign="center" mb={3}>
                  <img src={SuccessImage} alt="successimage" />
                  <Typography textAlign="center" mb={1} className="popup-title">
                    Successful!
                  </Typography>
                  <Typography
                    textAlign="center"
                    fontSize={14}
                    mb={4}
                    className="welcome-subtitle"
                  >
                    You're in! Explore your dashboard.
                  </Typography>
                </Box>
                <Grid size={12} className="PopupBtn">
                  <GradientButton onClick={handleNext}>
                    Go To Dashboard
                  </GradientButton>
                </Grid>
              </>
            )}

            {/* ------------------------------------------------
                Step 4 — Terms & Conditions 
            ------------------------------------------------ */}
            {step === 4 && (
              <>
                <Typography textAlign="left" mb={1} className="popup-title">
                  Terms & Conditions
                </Typography>

                <Typography
                  fontSize={16}
                  color="#272A2F"
                  lineHeight={1.7}
                  mb={3}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </Typography>

                <Typography
                  fontSize={16}
                  color="#272A2F"
                  lineHeight={1.7}
                  mb={3}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Typography>

                <Stack direction="row" alignItems="center" spacing={1} mb={3}>
                  {/* Custom image toggle on click */}
                  <img
                    src={checked ? checkedImg : uncheckedImg}
                    alt="check-icon"
                    style={{ width: 20, height: 20, cursor: "pointer" }}
                    onClick={() => setChecked(!checked)}
                  />

                  <Typography fontSize={16} color="#5F6D7E">
                    I Agree to the Terms & Conditions
                  </Typography>
                </Stack>

                <GradientButton disabled={!checked} onClick={handleAccept}>
                  Accept and Continue
                </GradientButton>
              </>
            )}
          </PopupWrapper>
        </DialogContent>
      </Dialog>
    </>
  );
}
