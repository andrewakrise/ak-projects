// src/App.js
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import ChatbotDialog from "./components/ChatbotDialog";
import "./App.css";
import { Fab, Tooltip } from "@mui/material";
import { Chat, Close } from "@mui/icons-material";

function App() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [highlightChatbot, setHighlightChatbot] = useState(true);

  const toggleChatbot = () => {
    setIsChatbotVisible((prev) => !prev);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setHighlightChatbot(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

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
            top: "10%",
            right: 16,
            zIndex: 1000,
            width: "7.5rem",
            height: "7.5rem",
          }}
          aria-label="chatbot-toggle"
          className={highlightChatbot ? "pulse-highlight" : ""}
        >
          {isChatbotVisible ? (
            <Close sx={{ fontSize: "5rem" }} />
          ) : (
            <Chat sx={{ fontSize: "5rem" }} />
          )}
        </Fab>
      </Tooltip>
      <ChatbotDialog
        isChatbotVisible={isChatbotVisible}
        toggleChatbot={toggleChatbot}
      />
    </main>
  );
}

export default App;
