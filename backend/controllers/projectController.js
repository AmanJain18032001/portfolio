const mongoose = require("mongoose");
const Project = require("../models/Project");

exports.getProjects = async (_req, res, next) => {
  try {
    const projects = await Project.find().sort({ featured: -1, sortOrder: 1, createdAt: -1 }).lean();
    res.json({ success: true, count: projects.length, data: projects });
  } catch (error) {
    next(error);
  }
};

exports.getProjectById = async (req, res, next) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "Invalid project ID." });
    }
    const project = await Project.findById(req.params.id).lean();
    if (!project) return res.status(404).json({ success: false, message: "Project not found." });
    res.json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
};
