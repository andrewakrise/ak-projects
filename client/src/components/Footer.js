// src/components/Footer.js
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#18181b", py: 2 }}>
      <Container maxWidth="md">
        <Typography variant="body1" color="white" align="center">
          Andrew K • © 2022
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
