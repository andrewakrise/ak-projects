// routes/chatbotRoute.js
const express = require("express");
const router = express.Router();
const { chatbot } = require("../controllers/chatbotController");

// POST /chatbot
router.post("/", chatbot);

module.exports = router;
