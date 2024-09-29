const nodeMailer = require("nodemailer");
const juice = require('juice');
const fs = require('fs').promises;
const path = require('path');

// Load environment variables
const {
  TRANSPORTER_PORT,
  TRANSPORTER_HOST,
  TRANSPORTER_USER,
  TRANSPORTER_PASSWORD,
  SENDER_EMAIL,
  RECIVING_EMAIL,
} = process.env;

// Sends the email
async function apiSendEmail({title, subject, message, email}) {
  try {
    console.log(title)
    // SMTP credentials
    let transporter = nodeMailer.createTransport({
      host: TRANSPORTER_HOST,
      port: TRANSPORTER_PORT,
      secure: false,
      auth: {
        user: TRANSPORTER_USER,
        pass: TRANSPORTER_PASSWORD
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Sender and Receiver information
    let mailOptions = {
      from: `${title} <${SENDER_EMAIL}>`,
      to: email,
      subject: subject,
      text: message
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error(`Error sending email: ${error}`);
    return { success: false, error: error.message };
  }
}

module.exports = { apiSendEmail };
