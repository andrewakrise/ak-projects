// src/components/LandingSection.js
import React from "react";
import { Avatar, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import FullScreenSection from "./FullScreenSection";
import logo from "../ak-logo.png";

const GreetingBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2),
}));

const BioBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(3),
}));

const greeting = "Hello, I am Andrew!";
const bio1 = "A Software Developer";
const bio2 = "Specialized in React, Node.js, JavaScript, and more...";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <GreetingBox>
      <Avatar src={logo} sx={{ width: 120, height: 120 }} alt="A K" />
      <Typography variant="h5" component="h3">
        {greeting}
      </Typography>
    </GreetingBox>
    <BioBox>
      <Typography variant="h4" component="h1">
        {bio1}
      </Typography>
      <Typography variant="h6" component="h2">
        {bio2}
      </Typography>
    </BioBox>
  </FullScreenSection>
);

export default LandingSection;
