// src/components/ContactMeSection.js
import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import FullScreenSection from "./FullScreenSection";
import Alert from "./Alert";

const serverUrl =
  process.env.NODE_ENV === "production" ? "" : process.env.REACT_APP_SERVER_URL;

const ContactMeSection = () => {
  const [notification, setNotification] = useState({
    open: false,
    message: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const isValid = () => {
    let valid = true;
    let tempErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    for (const key in formData) {
      if (!formData[key]) {
        tempErrors[key] = "This field is required";
        valid = false;
      }
    }

    if (formData.message.length < 25) {
      tempErrors.message = "Message should be at least 25 characters";
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  const inputStyles = {
    "& label": { color: "white" },
    "& label.Mui-focused": { color: "white" },
    "& .MuiInputBase-input": { color: "white" },
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#512DA8",
      "& fieldset": { borderColor: "white" },
      "&:hover fieldset": { borderColor: "white" },
      "&.Mui-focused fieldset": { borderColor: "white" },
    },
    "& .MuiFormHelperText-root": { color: "white" },
    "& .MuiInputBase-input::placeholder": { color: "white" },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isValid()) {
      const result = await fetch(`${serverUrl}/send-email/contactus`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      if (result?.status === 201 || result?.status === 200) {
        setNotification({
          open: true,
          message: `Form submitted! Andrew will contact you soon`,
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        console.error("FAILED...");
        setNotification({
          open: true,
          message: `Failed to send email. Please try again!`,
        });
      }
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setNotification({ ...notification, open: false });
  };

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      className="full-screen-section"
    >
      <Box className="contact-me-section">
        <Typography
          variant="h4"
          component="h1"
          id="contactme-section"
          gutterBottom
          sx={{ color: "white" }}
        >
          Contact me
        </Typography>
        <Box width="100%">
          <form onSubmit={handleSubmit} width="100%">
            <TextField
              fullWidth
              required
              error={Boolean(errors.name)}
              helperText={errors.name}
              margin="normal"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              sx={inputStyles}
              placeholder="Enter your name"
            />
            <TextField
              fullWidth
              required
              error={Boolean(errors.email)}
              helperText={errors.email}
              margin="normal"
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              sx={inputStyles}
              placeholder="Enter your email"
            />
            <TextField
              fullWidth
              required
              error={Boolean(errors.subject)}
              helperText={errors.subject}
              margin="normal"
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              sx={inputStyles}
              placeholder="Enter the subject, like: Hiring propasal, Project proposal, etc"
            />
            <TextField
              fullWidth
              multiline
              rows={4}
              required
              error={Boolean(errors.message)}
              helperText={errors.message}
              margin="normal"
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              sx={inputStyles}
              placeholder="Enter your message"
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </form>
        </Box>
        <Alert
          open={notification.open}
          message={notification.message}
          onClose={handleClose}
        />
      </Box>
    </FullScreenSection>
  );
};

export default ContactMeSection;
