// 🔹 GÉNÉRATION AUTOMATIQUE DU SOMMAIRE
document.addEventListener("DOMContentLoaded", function () {
  const toc = document.getElementById("toc-list");
  if (!toc) return;

  const headers = document.querySelectorAll("h2, h3");
  headers.forEach(header => {
      const id = header.id || header.textContent.replace(/\s+/g, "-").toLowerCase();
      header.id = id;

      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#" + id;
      a.textContent = header.textContent;
      li.appendChild(a);
      toc.appendChild(li);
  });

  if (headers.length === 0) {
      document.getElementById("table-of-contents").style.display = "none";
  }
});
