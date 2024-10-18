// src/App.js
import React, { useState } from "react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import "./App.css";
import {
  Fab,
  Dialog,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Tooltip,
} from "@mui/material";
import { Chat, Close } from "@mui/icons-material";

function App() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotVisible((prev) => !prev);
  };

  return (
    <main className="main-app">
      <Header />
      <div className="main-app-body">
        <LandingSection />
        <ProjectsSection />
        <ContactMeSection />
      </div>
      <Footer />
      <Tooltip
        title={`${
          isChatbotVisible
            ? ""
            : "Open Chatbot to Talk About Andrew's as a Professional"
        }`}
        placement="top"
      >
        <Fab
          color="primary"
          onClick={toggleChatbot}
          sx={{
            position: "fixed",
            bottom: "10%",
            right: 16,
            zIndex: 1000,
            width: "7.5rem",
            height: "7.5rem",
          }}
          aria-label="chatbot-toggle"
        >
          {isChatbotVisible ? (
            <Close sx={{ fontSize: "5rem" }} />
          ) : (
            <Chat sx={{ fontSize: "5rem" }} />
          )}
        </Fab>
      </Tooltip>
      <Dialog
        fullScreen
        open={isChatbotVisible}
        onClose={toggleChatbot}
        aria-labelledby="chatbot-dialog-title"
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleChatbot}
              aria-label="close"
            >
              <Close />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Andrew's Career Chatbot
            </Typography>
          </Toolbar>
        </AppBar>
        <Chatbot />
      </Dialog>
    </main>
  );
}

export default App;
