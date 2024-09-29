require('dotenv').config(); // Load environment variables from .env file
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

const currenDateTime = () => {
  const currentDate = new Date();
  const formattedDate = `${String(currentDate.getDate()).padStart(2, '0')}.${String(currentDate.getMonth() + 1).padStart(2, '0')}.${String(currentDate.getFullYear()).slice(-2)} -`;
  const formattedTime = `${String(currentDate.getHours()).padStart(2, '0')}:${String(currentDate.getMinutes()).padStart(2, '0')}`;
  const dateTimeString = `${formattedDate} ${formattedTime}`;
  return dateTimeString;
}

async function getEmailTemplate(htmlData) {
  try {
    const html = await fs.readFile(path.join(__dirname, "templates", "emailTemplate.html"), "utf8");
    return html
      .replace(/{{dateTime}}/g, htmlData.dateTime || "")
      .replace(/{{title}}/g, htmlData.title || "")
      .replace(/{{message}}/g, htmlData.message || "")
      .replace(/{{clientIP}}/g, htmlData.clientIP || "Kunne ikke vises")
      .replace(/{{name}}/g, htmlData.name || "")
      .replace(/{{email}}/g, htmlData.email || "");
  } catch (error) {
    console.error(`Error reading HTML template: ${error}`);
    throw error;
  }
}

// Sends the email
async function sendEmail({ title, message, clientIP, name, email }) {
  try {
    // Prepare dynamic content
    const htmlData = { 
        dateTime: currenDateTime(), 
        title: title,
        message: message,
        clientIP: clientIP,
        name: name,
        email
     };

    // Fetch and render email template
    const renderedHtml = await getEmailTemplate(htmlData);
    const inlinedHtml = juice(renderedHtml);

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
      from: `My Website <${SENDER_EMAIL}>`,
      to: RECIVING_EMAIL,
      subject: `New message from: ${name}`,
      html: inlinedHtml
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error(`Error sending email: ${error}`);
    return { success: false, error: error.message };
  }
}

module.exports = { sendEmail };
