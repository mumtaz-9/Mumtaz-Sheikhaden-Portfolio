const HOBBIES = {
  sports: {
    title: "Sports",
    description: "Take a lot at me playing various sports.",
    gallery: [
      "assets/hs-basketball.jpg",
      "assets/basketball-tourney.png"
    ]
  },
  poetry: {
    title: "Poetry",
    description: "Expressing my experiences and emotions through poems.",
    gallery: []
  },
  teaching: {
    title: "Teaching & Mentorship",
    description: "Helping students learn design, tech, and problem-solving.",
    gallery: []
  },
  traveling: {
    title: "Traveling",
    description: "Take a lot at me exploring new places and cultures.",
    gallery: []
  }
};

const params = new URLSearchParams(window.location.search);
const key = params.get("id");
const hobby = HOBBIES[key];

if (!hobby) {
  document.body.innerHTML = "<p>Hobby not found.</p>";
}

document.getElementById("hobby-title").textContent = hobby.title;
document.getElementById("hobby-description").textContent = hobby.description;

const gallery = document.getElementById("hobby-gallery");
hobby.gallery.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  gallery.appendChild(img);
});

document.querySelectorAll('.hobby-card').forEach(card => {
  card.addEventListener('click', () => {
    // Check if the card has the 'disabled' attribute
    if (card.hasAttribute('disabled')) {
      return; // Do nothing if it's disabled
    }

    // Otherwise, run your normal code
    const hobbyId = card.getAttribute('data-hobby');
    window.location.href = `project-page.html?id=${hobbyId}`;
  });
});