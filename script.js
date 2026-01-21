// Dark Mode
const btn = document.getElementById("darkModeBtn");
const body = document.body;

if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark");
}

btn.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});

// Mobile Menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Project Filter
const filterButtons = document.querySelectorAll(".filter button");
const projects = document.querySelectorAll(".project");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");

    projects.forEach(p => {
      if (filter === "all" || p.getAttribute("data-category") === filter) {
        p.style.display = "block";
      } else {
        p.style.display = "none";
      }
    });
  });
});

// Contact Form Validation
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    form.reset();
  });
}
