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

async function getEmailTemplate(data) {
  try {
    const html = await fs.readFile(path.join(__dirname, "templates", "emailTemplate.html"), "utf8");
    return html
      .replace(/{{text}}/g, data.text || "")
      .replace(/{{text2}}/g, data.text2 || "")
      .replace(/{{text3}}/g, data.text3 || "");
  } catch (error) {
    console.error(`Error reading HTML template: ${error}`);
    throw error;
  }
}

// Sends the email
async function sendEmail({ name, email, message }) {
  try {
    // Prepare dynamic content
    const htmlData = { 
        text: name, 
        text2: email,
        text3: message
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
