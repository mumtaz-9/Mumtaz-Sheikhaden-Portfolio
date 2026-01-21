// Get the project ID from URL
const params = new URLSearchParams(window.location.search);
const projectKey = params.get("id"); // e.g., "studybuddy"

// Lookup the project
const project = PROJECTS[projectKey];

if (!project) {
  document.body.innerHTML = "<p>Project not found.</p>";
  throw new Error("Project not found: " + projectKey);
}

// Fill the page
document.getElementById("project-title").textContent = project.title;
document.getElementById("project-tagline").textContent = project.tagline;
document.querySelector(".project-hero img").src = project.hero || "";

// Meta info
document.querySelector(".project-meta").innerHTML = `
  <div><strong>ROLE</strong><br>${project.role || "-"}</div>
  <div><strong>DURATION</strong><br>${project.duration || "-"}</div>
  <div><strong>TOOLS</strong><br>${(project.tools || []).join(", ")}</div>
  <div><strong>STATUS</strong><br>${project.status || "-"}</div>
`;

// Overview
document.getElementById("project-overview").querySelector("p").textContent = project.overview || "";

// Add this at the bottom of your project-page.js file

// Video Logic
if (project.video) {
  const videoSection = document.getElementById("project-video-section");
  const videoPlayer = document.getElementById("project-video");

  videoPlayer.src = project.video;
  videoSection.style.display = "block"; // Only show section if video exists
}

// PDF Logic
if (project.pdf) {
  const pdfSection = document.getElementById("project-pdf-section");
  const pdfFrame = document.getElementById("project-pdf");
  const pdfLink = document.getElementById("pdf-download-link");

  pdfFrame.src = project.pdf;
  pdfLink.href = project.pdf;
  pdfSection.style.display = "block"; // Only show section if PDF exists
}

// Add this logic to the bottom of your script
if (project.liveSite) {
  const siteSection = document.getElementById("project-site-section");
  const siteEmbed = document.getElementById("project-site-embed");
  const siteLink = document.getElementById("site-external-link");

  siteEmbed.src = project.liveSite;
  siteLink.href = project.liveSite;
  siteSection.style.display = "block"; // Show the section only if a URL exists
}

// Process
const processList = document.getElementById("project-process").querySelector("ul");
processList.innerHTML = "";
(project.process || []).forEach(step => {
  const li = document.createElement("li");
  li.textContent = step;
  processList.appendChild(li);
});

// Gallery
const gallery = document.querySelector(".project-gallery");
gallery.innerHTML = "";
(project.gallery || []).forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  gallery.appendChild(img);
});

// Outcome
document.getElementById("project-outcome").querySelector("p").textContent = project.outcome || "";