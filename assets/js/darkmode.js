document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById("toggle-darkmode");
  const body = document.body;

  // Vérifier le mode enregistré dans le localStorage
  if (localStorage.getItem("dark-mode") === "enabled") {
      body.classList.add("dark-mode");
      toggleButton.textContent = "☀️ Activer le mode clair";
  }

  toggleButton.addEventListener("click", function() {
      if (body.classList.contains("dark-mode")) {
          body.classList.remove("dark-mode");
          localStorage.setItem("dark-mode", "disabled");
          toggleButton.textContent = "🌙 Activer le mode sombre";
      } else {
          body.classList.add("dark-mode");
          localStorage.setItem("dark-mode", "enabled");
          toggleButton.textContent = "☀️ Activer le mode clair";
      }
  });
});