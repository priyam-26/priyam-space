// TUBES CURSOR INIT

import TubesCursor from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";

const canvas = document.getElementById("canvas");

const app = TubesCursor(canvas, {
  tubes: {
    colors: ["#f967fb", "#53bc28", "#6958d5"],
    lights: {
      intensity: 200,
      colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
    }
  }
});

// RANDOM COLORS FUNCTION

function randomColors(count) {
  return new Array(count)
    .fill(0)
    .map(() =>
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
    );
}

// EVENTS - TUBES

document.body.addEventListener("click", () => {
  const colors = randomColors(3);
  const lightsColors = randomColors(4);

  app.tubes.setColors(colors);
  app.tubes.setLightsColors(lightsColors);
});

window.addEventListener("resize", () => {
  app.resize();
});

// NAVBAR (HAMBURGER)

const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// TYPEWRITER EFFECT

const fullText = "[ CS_Student ]   [ Web_Dev ]   [ CyberSec ]";
const textElement = document.getElementById("text");

let index = 0;
const speed = 165;

function type() {
  if (index < fullText.length) {
    textElement.textContent += fullText.charAt(index);
    index++;
    setTimeout(type, speed);
  }
}

setTimeout(type, 400);

// SCROLL ANIMATION (INTERSECTION OBSERVER)

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll("section").forEach((section) => {
  section.classList.add("section-hidden");
  observer.observe(section);
});