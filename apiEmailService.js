require('dotenv').config(); // Load environment variables from .env file
const nodeMailer = require("nodemailer");

// Load environment variables
const {
  TRANSPORTER_PORT,
  TRANSPORTER_HOST,
  TRANSPORTER_USER,
  TRANSPORTER_PASSWORD,
  SENDER_EMAIL,
  API_KEY
} = process.env;

// Sends the email
async function apiSendEmail({title, subject, message, email}) {
  try {
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

function checkApiKey(req, res, next) {
  const apiKey = req.headers['authorization'];

  if (!apiKey || apiKey !== API_KEY) {
    return res.status(403).send(`Forbidden: Invalid API key`);
  }
  next(); // Proceed to the next middleware/route handler
};

module.exports = { apiSendEmail, checkApiKey };
