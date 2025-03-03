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

document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll(".pole-card");

    function revealCards() {
        let windowHeight = window.innerHeight;
        cards.forEach(card => {
            let cardTop = card.getBoundingClientRect().top;
            if (cardTop < windowHeight - 50) {
                card.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealCards);
    revealCards(); // Lancer au chargement
});