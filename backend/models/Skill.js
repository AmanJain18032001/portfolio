const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  category: { type: String, default: "Other", trim: true },
  level: { type: Number, min: 0, max: 100, default: 70 },
  sortOrder: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("Skill", skillSchema);
