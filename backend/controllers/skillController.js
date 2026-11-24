const Skill = require("../models/Skill");

exports.getSkills = async (_req, res, next) => {
  try {
    const skills = await Skill.find().sort({ sortOrder: 1, name: 1 }).lean();
    res.json({ success: true, count: skills.length, data: skills });
  } catch (error) {
    next(error);
  }
};
