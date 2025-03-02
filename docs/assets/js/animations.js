// 🔹 Apparition des éléments au scroll
document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
          }
      });
  }, { threshold: 0.3 });

  fadeElements.forEach(el => observer.observe(el));
});