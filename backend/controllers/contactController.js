const Contact = require("../models/Contact");
const { sendContactNotification } = require("../services/emailService");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

exports.createContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body || {};
    const values = { name, email, subject, message };

    for (const [field, value] of Object.entries(values)) {
      if (typeof value !== "string" || !value.trim()) {
        return res.status(400).json({ success: false, message: `${field} is required.` });
      }
    }

    if (name.trim().length > 80 || subject.trim().length > 120 ||
        message.trim().length > 3000 || email.trim().length > 254) {
      return res.status(400).json({ success: false, message: "One or more fields are too long." });
    }
    if (!emailPattern.test(email.trim())) {
      return res.status(400).json({ success: false, message: "Please enter a valid email address." });
    }

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim()
    });

    // Email is best-effort: a mail-provider outage should not discard the saved message.
    try {
      await sendContactNotification(contact);
    } catch (mailError) {
      console.error("Contact email could not be sent:", mailError.message);
    }

    res.status(201).json({
      success: true,
      message: "Thank you! Your message has been received.",
      data: { id: contact._id }
    });
  } catch (error) {
    next(error);
  }
};
