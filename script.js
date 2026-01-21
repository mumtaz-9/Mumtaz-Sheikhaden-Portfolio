const bootScreen = document.getElementById("boot-screen");
const projects = document.getElementById("projects");
const hero = document.getElementById("hero");

let started = false;

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !started) {
    started = true;

    // Mark boot screen as inactive (but keep it!)
    bootScreen.classList.add("inactive");

    // Scroll to projects anchor
    document.getElementById("projects-anchor").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    // Start character intro
    startIntro();
  }
});

function startIntro() {
  let x = -80;
  hero.style.left = x + "px";

  const walkIn = setInterval(() => {
    x += 4;
    hero.style.left = x + "px";

    if (x >= 120) {
      clearInterval(walkIn);
      hero.style.backgroundImage = "url('assets/sprites/hijab_idle.png')";
      hero.style.animation = "idle 1s steps(1) infinite";
    }
  }, 30);
}