document.addEventListener("DOMContentLoaded", async () => {
  const grid = document.getElementById("projectsGrid");
  try {
    const response = await fetch("/api/projects");
    const payload = await response.json();
    if (!response.ok || !payload.success) throw new Error(payload.message || "Could not load projects");
    grid.replaceChildren();

    payload.data.forEach((project) => {
      const card = document.createElement("article");
      card.className = "project-card";
      const icon = document.createElement("div");
      icon.className = "project-icon";
      icon.textContent = "</>";
      const title = document.createElement("h3");
      title.textContent = project.title;
      const description = document.createElement("p");
      description.textContent = project.description;
      const tags = document.createElement("div");
      tags.className = "tags";
      (project.technologies || []).forEach((technology) => {
        const tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = technology;
        tags.append(tag);
      });
      const actions = document.createElement("div");
      actions.className = "project-links";
      if (project.githubUrl) actions.append(makeLink(project.githubUrl, "GitHub ↗"));
      if (project.liveUrl) actions.append(makeLink(project.liveUrl, "Live demo ↗"));
      card.append(icon, title, description, tags, actions);
      grid.append(card);
    });

    if (!payload.data.length) grid.textContent = "Projects will be added soon.";
  } catch (error) {
    grid.textContent = "Unable to load projects. Please refresh the page.";
    console.error(error);
  }
});

function makeLink(url, label) {
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = label;
  return link;
}
