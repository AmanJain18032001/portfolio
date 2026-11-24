const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  role: { type: String, required: true, trim: true },
  tagline: { type: String, default: "" },
  bio: { type: String, default: "" },
  location: { type: String, default: "" },
  email: { type: String, lowercase: true, trim: true },
  avatarUrl: { type: String, default: "" },
  resumeUrl: { type: String, default: "" },
  socialLinks: {
    github: { type: String, default: "" },
    linkedin: { type: String, default: "" }
  }
}, { timestamps: true });

module.exports = mongoose.model("Profile", profileSchema);
