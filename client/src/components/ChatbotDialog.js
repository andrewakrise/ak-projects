// src/App.js
import React from "react";
import Chatbot from "./Chatbot";
import { Dialog, IconButton, AppBar, Toolbar, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

function ChatbotDialog({ isChatbotVisible, toggleChatbot }) {
  return (
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
  );
}

export default ChatbotDialog;
