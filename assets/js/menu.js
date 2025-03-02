// 🔹 GESTION DU MENU RESPONSIVE
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  menuBtn.addEventListener("click", function () {
      menu.classList.toggle("show");
      menuBtn.setAttribute("aria-expanded", menu.classList.contains("show"));
  });

  document.addEventListener("click", function (event) {
      if (!menu.contains(event.target) && event.target !== menuBtn) {
          menu.classList.remove("show");
          menuBtn.setAttribute("aria-expanded", "false");
      }
  });
});

// 🔹 GESTION DU BOUTON RETOUR EN HAUT
document.addEventListener("DOMContentLoaded", function () {
  const scrollTopBtn = document.getElementById("scrollTop");

  window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
          scrollTopBtn.classList.add("show");
      } else {
          scrollTopBtn.classList.remove("show");
      }
  });
});
