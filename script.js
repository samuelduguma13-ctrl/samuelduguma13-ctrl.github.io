const words = [
  "Computer Science Student",
  "Web Developer",
  "Automotive Restoration"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeText() {
  const word = words[wordIndex];

  typing.textContent = word.substring(0, letterIndex);

  if (!deleting) {
    letterIndex++;

    if (letterIndex > word.length) {
      deleting = true;
      setTimeout(typeText, 1200);
      return;
    }
  } else {
    letterIndex--;

    if (letterIndex < 0) {
      letterIndex = 0;
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeText, deleting ? 45 : 90);
}

typeText();

/* MOBILE MENU */

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", function () {
  const isOpen = nav.classList.toggle("active");

  menu.setAttribute("aria-expanded", isOpen);
  menu.textContent = isOpen ? "✕" : "☰";
});

/* CLOSE MENU AFTER CLICKING A LINK */

document.querySelectorAll("#nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("active");
    menu.setAttribute("aria-expanded", "false");
    menu.textContent = "☰";
  });
});

/* HIGHLIGHT NAVIGATION */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#nav a");

window.addEventListener("scroll", function () {
  let current = "home";

  sections.forEach(function (section) {
    if (window.scrollY >= section.offsetTop - 150) {
      current = section.id;
    }
  });

  navLinks.forEach(function (link) {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + current
    );
  });
});

/* FOOTER YEAR */

document.getElementById("year").textContent =
  new Date().getFullYear();