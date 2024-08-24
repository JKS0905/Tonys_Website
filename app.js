require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const nodeMailer = require("nodemailer");
const path = require('path');

// ENV Vaiabels
const SERVER_PORT = process.env.SERVER_PORT;
const TRANSPORTER_PORT = process.env.TRANSPORTER_PORT;
const TRANSPORTER_HOST = process.env.TRANSPORTER_HOST;
const TRANSPORTER_USER = process.env.TRANSPORTER_USER;
const TRANSPORTER_PASSWORD = process.env.TRANSPORTER_PASSWORD;
const SENDER_EMAIL = process.env.SENDER_EMAIL;


const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Custom 404 page
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

function sendEmail() {
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
    from: SENDER_EMAIL,
    to: "j.kenneth@hvs.as",
    subject: "Test from Node.js",
    text: "Hei denne emailen er send ifra Node.js"
  });

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log(`Message sent: %s, ${info.messageId}`);
    console.log(`Preview URL: %s, ${nodeMailer.getTestMessageUrl(info)}`);
  }
)}



// Start the server
app.listen(SERVER_PORT, () => {
  console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});

sendEmail();