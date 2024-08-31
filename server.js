// server.js
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const path = require('path');
const rateLimit = require("express-rate-limit");
const { sendEmail } = require('./emailService');  // Import the sendEmail function

const isEmailServiceActive = true;

// ENV Variables
const SERVER_PORT = process.env.SERVER_PORT;

server.set("trust proxy", 1);

// Rate Limiting Middleware
const rateLimitMiddleware = rateLimit({
  windowMs: 60 * 60 * 20 * 1000,
  max: 5,
  message: "You have exceeded your 10 requests in 2 minutes limit!",
  keyGenerator: (req) => {
    return req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for']?.split(',')[0] || req.ip;
  },
  header: true,
});

// Serve static files from the 'public' directory
server.use(express.static(path.join(__dirname, 'public')));

server.use(bodyParser.json());

server.post("/send-email", rateLimitMiddleware, async (req, res) => {
  if (!isEmailServiceActive) {
    return res.status(503).send(`Email service is not active`);
  }

  const clientIP = req.headers["cf-connecting-ip"];

  const { title, message, name, email } = req.body;

  // Send Email function from module
  const result = await sendEmail({ title, message, clientIP, name, email });

  if (result.success) {
    res.status(200).send(`Email sent successfully!`);
  } else {
    res.status(500).send(`Error sending email: ${result.error}`);
  }
});

// Custom 404 page
server.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Start the server
server.listen(SERVER_PORT, () => {
  console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});
