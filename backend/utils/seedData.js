const Profile = require("../models/Profile");
const Skill = require("../models/Skill");
const Project = require("../models/Project");

async function seedPortfolioData() {
  if (await Profile.countDocuments() === 0) {
    await Profile.create({
      name: "Alex Morgan",
      role: "Full-Stack Developer",
      tagline: "I build thoughtful digital experiences.",
      bio: "I enjoy turning complex problems into simple, useful and beautiful web experiences. I work across frontend interfaces, backend APIs and databases.",
      location: "Your City, India",
      email: "hello@example.com",
      avatarUrl: "",
      resumeUrl: "",
      socialLinks: { github: "https://github.com/", linkedin: "https://linkedin.com/" }
    });
  }

  if (await Skill.countDocuments() === 0) {
    await Skill.insertMany([
      { name: "HTML5", category: "Frontend", level: 95, sortOrder: 1 },
      { name: "CSS3", category: "Frontend", level: 90, sortOrder: 2 },
      { name: "JavaScript", category: "Frontend", level: 85, sortOrder: 3 },
      { name: "Node.js", category: "Backend", level: 78, sortOrder: 4 },
      { name: "Express.js", category: "Backend", level: 75, sortOrder: 5 },
      { name: "MongoDB", category: "Database", level: 72, sortOrder: 6 }
    ]);
  }

  if (await Project.countDocuments() === 0) {
    await Project.insertMany([
      {
        title: "Weather Dashboard",
        description: "A responsive weather dashboard that displays current conditions and forecast information for searched cities.",
        technologies: ["HTML", "CSS", "JavaScript", "REST API"],
        githubUrl: "https://github.com/",
        liveUrl: "",
        featured: true,
        sortOrder: 1
      },
      {
        title: "Task Manager",
        description: "A clean task management interface for creating, organizing and tracking everyday work.",
        technologies: ["JavaScript", "Node.js", "Express"],
        githubUrl: "https://github.com/",
        liveUrl: "",
        featured: false,
        sortOrder: 2
      },
      {
        title: "Notes Website",
        description: "A structured learning website with topic pages and searchable programming notes.",
        technologies: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/",
        liveUrl: "",
        featured: false,
        sortOrder: 3
      }
    ]);
  }

  console.log("Portfolio seed data checked.");
}

module.exports = seedPortfolioData;
