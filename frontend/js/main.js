const API_BASE = "/api";

async function fetchJSON(endpoint) {
  const response = await fetch(`${API_BASE}${endpoint}`);
  const payload = await response.json();
  if (!response.ok || !payload.success) throw new Error(payload.message || "Request failed");
  return payload.data;
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element && value) element.textContent = value;
}

async function loadProfile() {
  try {
    const profile = await fetchJSON("/profile");
    setText("profileName", profile.name);
    setText("profileRole", profile.role);
    setText("profileTagline", profile.tagline);
    setText("profileBio", profile.bio);
    setText("profileLocation", profile.location);
    setText("profileEmail", profile.email);

    const emailLink = document.getElementById("contactEmail");
    if (emailLink && profile.email) {
      emailLink.href = `mailto:${profile.email}`;
      emailLink.textContent = `${profile.email} ↗`;
    }

    const resumeLink = document.getElementById("resumeLink");
    if (resumeLink && profile.resumeUrl) {
      resumeLink.href = profile.resumeUrl;
      resumeLink.target = "_blank";
      resumeLink.rel = "noreferrer";
      resumeLink.textContent = "Download résumé ↗";
    }

    const social = document.getElementById("socialLinks");
    if (social && profile.socialLinks) {
      social.replaceChildren();
      for (const [label, url] of Object.entries(profile.socialLinks)) {
        if (!url) continue;
        const link = document.createElement("a");
        link.href = url;
        link.target = "_blank";
        link.rel = "noreferrer";
        link.textContent = `${label[0].toUpperCase()}${label.slice(1)} ↗`;
        social.append(link);
      }
    }

    document.title = `${profile.name} | ${profile.role}`;
  } catch (error) {
    console.error("Profile could not be loaded:", error.message);
  }
}

async function loadSkills() {
  const grid = document.getElementById("skillsGrid");
  try {
    const skills = await fetchJSON("/skills");
    grid.replaceChildren();
    if (!skills.length) grid.textContent = "Skills will be added soon.";
    skills.forEach((skill) => {
      const card = document.createElement("article");
      card.className = "skill-card";
      const top = document.createElement("div");
      top.className = "skill-top";
      const nameWrap = document.createElement("div");
      const name = document.createElement("strong");
      name.textContent = skill.name;
      const category = document.createElement("span");
      category.className = "skill-category";
      category.textContent = skill.category;
      nameWrap.append(name, category);
      const level = document.createElement("span");
      level.textContent = `${skill.level}%`;
      top.append(nameWrap, level);
      const track = document.createElement("div");
      track.className = "skill-track";
      const fill = document.createElement("div");
      fill.className = "skill-fill";
      fill.style.width = `${Math.max(0, Math.min(100, skill.level))}%`;
      track.append(fill);
      card.append(top, track);
      grid.append(card);
    });
  } catch (error) {
    grid.textContent = "Unable to load skills. Please refresh the page.";
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const links = document.getElementById("navLinks");
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.textContent = isOpen ? "×" : "☰";
  });
  links.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "☰";
  }));
  loadProfile();
  loadSkills();
});
