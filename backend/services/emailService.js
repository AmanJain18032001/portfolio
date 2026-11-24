const nodemailer = require("nodemailer");

async function sendContactNotification(contact) {
  const required = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS", "MAIL_FROM", "MAIL_TO"];
  const configured = required.every((key) => Boolean(process.env[key]));
  if (!configured) return; // Email is optional for local development.

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: String(process.env.SMTP_SECURE).toLowerCase() === "true",
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  });

  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    replyTo: contact.email,
    subject: `Portfolio contact: ${contact.subject}`,
    text: `Name: ${contact.name}\nEmail: ${contact.email}\n\n${contact.message}`
  });
}

module.exports = { sendContactNotification };
