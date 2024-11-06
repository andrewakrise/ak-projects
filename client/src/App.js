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
import { Close } from "@mui/icons-material";

function App() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [highlightChatbot, setHighlightChatbot] = useState(true);
  const [typingText, setTypingText] = useState("ask me");
  const [fade, setFade] = useState(true);

  const toggleChatbot = () => {
    setIsChatbotVisible((prev) => !prev);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setHighlightChatbot(false);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const textSequence = ["ask me", "about", "andrew's", "career"];
    let index = 0;

    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setTypingText(textSequence[index]);
        index = (index + 1) % textSequence.length;
        setFade(true);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
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
            width: "5rem",
            height: "5rem",
          }}
          aria-label="chatbot-toggle"
          className={highlightChatbot ? "pulse-highlight" : ""}
        >
          {isChatbotVisible ? (
            <Close sx={{ fontSize: "5rem" }} />
          ) : (
            <div className="typing-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="5rem"
                height="5rem"
                fill="currentColor"
              >
                <text
                  x="50%"
                  y="55%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="typing-text"
                  style={{ opacity: fade ? 1 : 0 }}
                >
                  {typingText}
                </text>
              </svg>
            </div>
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
