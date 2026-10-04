const header = document.getElementById("siteHeader");
const nav = document.getElementById("mainNav");
const menuToggle = document.getElementById("menuToggle");
const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 3500);
}

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 25);

  const sections = ["home", "contact", "explore", "about"];
  let current = "home";
  sections.forEach(id => {
    const section = document.getElementById(id);
    if (section && window.scrollY >= section.offsetTop - 150) current = id;
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-link, .main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});



document.querySelector("[data-action='premium']").addEventListener("click", () => {
  showToast("Premium Test Series selected — connect this to your payment/test-series page.");
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  showToast(`Thanks${name ? ", " + name : ""}! Your message is ready to be connected to email/backend.`);
  event.target.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
