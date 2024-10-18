// client/src/components/Chatbot.js
import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import Alert from "./Alert";

const serverUrl =
  process.env.NODE_ENV === "production" ? "" : process.env.REACT_APP_SERVER_URL;

const Chatbot = () => {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("chatbotMessages");
    // console.log("Loaded messages from localStorage:", savedMessages);
    try {
      return savedMessages
        ? JSON.parse(savedMessages)
        : [
            {
              sender: "bot",
              text: "Hello! I'm Andrew's assistant. How can I help you today?",
            },
          ];
    } catch (error) {
      console.error("Failed to parse messages from localStorage:", error);
      return [
        {
          sender: "bot",
          text: "Hello! I'm Andrew's assistant. How can I help you today?",
        },
      ];
    }
  });

  const [notification, setNotification] = useState({
    open: false,
    message: "",
  });
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    try {
      localStorage.setItem("chatbotMessages", JSON.stringify(messages));
      // console.log("Saved messages to localStorage:", messages);
    } catch (error) {
      console.error("Failed to save messages to localStorage:", error);
    }
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) {
      setNotification({
        open: true,
        message: `Please, enter the message first...`,
      });
      return;
    }

    const userMessage = { sender: "user", text: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(`${serverUrl}/chatbot`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });
      // console.log("response", response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const botReply = { sender: "bot", text: data.reply };
      setMessages((prevMessages) => [...prevMessages, botReply]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = {
        sender: "bot",
        text: "Sorry, I couldn't process that. Please try again.",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setNotification({ ...notification, open: false });
  };

  const clearChat = () => {
    setMessages([
      {
        sender: "bot",
        text: "Hello! I'm Andrew's assistant. How can I help you today?",
      },
    ]);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 5rem)",
        paddingTop: 2,
        backgroundColor: "#C2C2C2",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          marginBottom: 2,
          padding: 2,
          backgroundColor: "#ffffff",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      >
        {messages?.map((msg, index) => (
          <Box
            key={index}
            sx={{
              textAlign: msg.sender === "bot" ? "left" : "right",
              marginBottom: "10px",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                display: "inline-block",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: msg.sender === "bot" ? "#e0e0e0" : "#1976d2",
                color: msg.sender === "bot" ? "#000" : "#fff",
                maxWidth: "80%",
                wordBreak: "break-word",
              }}
            >
              {msg.text}
            </Typography>
          </Box>
        ))}
        {isLoading && (
          <Box
            sx={{
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <CircularProgress size={20} />
            <Typography
              variant="body1"
              sx={{ display: "inline-block", marginLeft: "10px" }}
            >
              Typing...
            </Typography>
          </Box>
        )}
        <div ref={messagesEndRef} />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          fullWidth
          multiline
          minRows={2}
          maxRows={4}
          variant="outlined"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          sx={{
            marginBottom: "10px",
            backgroundColor: "#ffffff",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button
            variant="text"
            color="secondary"
            onClick={clearChat}
            sx={{ marginBottom: "10px" }}
          >
            Clear Chat
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSend}
            disabled={isLoading}
            fullWidth
          >
            {isLoading ? "Sending..." : "Send"}
          </Button>
        </Box>
      </Box>
      <Alert
        open={notification.open}
        message={notification.message}
        onClose={handleClose}
      />
    </Container>
  );
};

export default Chatbot;
