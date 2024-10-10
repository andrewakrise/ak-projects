// src/components/FullScreenSection.js
import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(({ isDarkBackground, backgroundColor }) => ({
  backgroundColor: backgroundColor || (isDarkBackground ? "#000" : "#fff"),
  color: isDarkBackground ? "#fff" : "#000",
  minHeight: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 1rem",
  margin: 0,
  overflowX: "hidden",
  "@media (max-width: 1000px)": {
    padding: 0,
  },
}));

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <StyledBox isDarkBackground={isDarkBackground} {...boxProps}>
      {children}
    </StyledBox>
  );
};

export default FullScreenSection;
