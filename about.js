// Hobby card navigation
document.querySelectorAll(".hobby-card").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.hobby;
    window.location.href = `hobby.html?id=${key}`;
  });
});