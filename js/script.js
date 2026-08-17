document.getElementById("year").textContent = new Date().getFullYear();

const header = document.getElementById("header");
const navToggle = document.getElementById("navToggle");

navToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 500);
});

document.querySelectorAll("section, .card, .step").forEach((el) => {
  el.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const photosInput = document.getElementById("photosInput");
const photosHint = document.getElementById("photosHint");
const MAX_PHOTOS = 5;

photosInput.addEventListener("change", () => {
  const files = Array.from(photosInput.files);
  if (files.length > MAX_PHOTOS) {
    photosHint.textContent = `Please select up to ${MAX_PHOTOS} photos (you selected ${files.length}).`;
    photosHint.style.color = "#e2836b";
    return;
  }
  photosHint.style.color = "";
  photosHint.textContent = files.length
    ? `${files.length} photo${files.length > 1 ? "s" : ""} selected: ${files.map((f) => f.name).join(", ")}`
    : "No files selected";
});

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const note = document.getElementById("formNote");
  note.textContent =
    "Thanks! (Demo only — connect this form to a file-upload-capable backend to actually receive submissions and photos.)";
});
