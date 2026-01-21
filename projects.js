const modal = document.getElementById("project-modal");
const closeBtn = document.querySelector(".modal-close");

const titleEl = document.getElementById("modal-title");
const descEl = document.getElementById("modal-description");
const progressEl = document.getElementById("modal-progress");
const linkEl = document.getElementById("modal-link");

/* PROJECT DATA FOR MODAL */
const projects = {
  studybuddy: {
    title: "StudyBuddy",
    description: "A peer to peer student collaboration platform.",
    progress: "30%"
  },
  bioinformatics: {
    title: "Strain Specific Primers @UW SEFS - Bioinformatics Research",
    description: "Advancing Crop Health: Developing strain-specific primers (SSPs) for endophyte identification using PCR Methodologies.",
    progress: "100%"
  },
  changeability: {
    title: "Changeability",
    description: "Empowering Personal Sustainability: Scanning Waste and Tracking Footprints for a Greener Tomorrow.",
    progress: "100%"
  },
  /*chique: {
    title: "Chique",
    description: "Skeleton description for Chique project.",
    progress: "80%"
  },*/
  eatTogether: {
    title: "Eat Together",
    description: "Building Community Through Food: Leading the Design and Strategy for UW’s Social Dining App.",
    progress: "100%"
  }/*,
  "mlh-tech-together-hackathon": {
    title: "MLH Tech Together Hackathon",
    description: "Skeleton description for MLH Hackathon project.",
    progress: "80%"
  },
  "info-hackathon": {
    title: "INFO Hackathon",
    description: "Skeleton description for INFO Hackathon project.",
    progress: "80%"
  },
  "truck-calculator": {
    title: "Truck Calculator",
    description: "Skeleton description for Truck Calculator project.",
    progress: "80%"
  },
  "password-generator": {
    title: "Password Generator",
    description: "Skeleton description for Password Generator project.",
    progress: "80%"
  }*/
};

/* OPEN MODAL */
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.project;
    const data = projects[key];

    if (!data) return;

    titleEl.textContent = data.title;
    descEl.textContent = data.description;
    progressEl.style.width = data.progress;

    // Dynamically set the modal link to the skeleton project page
    linkEl.href = `project-information.html?id=${key}`;

    modal.classList.remove("hidden");
  });
});

/* CLOSE MODAL */
closeBtn.addEventListener("click", () => modal.classList.add("hidden"));

modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.add("hidden");
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") modal.classList.add("hidden");
});