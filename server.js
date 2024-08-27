require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const server = express();
const nodeMailer = require("nodemailer");
const bodyParser = require('body-parser');
const path = require('path');
const rateLimit = require("express-rate-limit");
const isEmailServiceActive = true;

const rateLimitMiddleware = rateLimit({
  windowMs: 120 * 1000,
  max: 2,
  message: "You have exceeded your 5 requests in 24 hours limit!",
  header: true,
});


// ENV Vaiabels
const SERVER_PORT = process.env.SERVER_PORT;
const TRANSPORTER_PORT = process.env.TRANSPORTER_PORT;
const TRANSPORTER_HOST = process.env.TRANSPORTER_HOST;
const TRANSPORTER_USER = process.env.TRANSPORTER_USER;
const TRANSPORTER_PASSWORD = process.env.TRANSPORTER_PASSWORD;
const SENDER_EMAIL = process.env.SENDER_EMAIL;
const RECIVING_EMAIL = process.env.RECIVING_EMAIL;

// Serve static files from the 'public' directory
server.use(express.static(path.join(__dirname, 'public')));

server.use(bodyParser.urlencoded({ extended: true }));

server.post("/send-email", rateLimitMiddleware, (req, res) => {
  
  if (!isEmailServiceActive) {
    return res.status(503).send(`Email service is not active`);
  }

  const clientIP = req.header["'x-forwarded-for"] || req.connection.remoteAddress;
  console.error(`Client IP: ${clientIP}`);

  const { name, email, message } = req.body;

  // SMTP credentials
  let transporter = nodeMailer.createTransport({
    host: TRANSPORTER_HOST,
    port: TRANSPORTER_PORT,
    secure: false,
    auth: {
      user: TRANSPORTER_USER,
      pass: TRANSPORTER_PASSWORD
    }
  });

  // Sender and Reciver information
  let mailOptions = ({
    from: `My Website <${SENDER_EMAIL}>`,
    to: RECIVING_EMAIL,
    subject: `New message from: ${name}`,
    text: message
  });

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(`Error sending email: ${error}`)
      return res.status(500).send(`Error sending email`);
    }
      res.status(200).send(`Email sent successfully!`);
  });
});

// Custom 404 page
server.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Start the server
server.listen(SERVER_PORT, () => {
  console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});