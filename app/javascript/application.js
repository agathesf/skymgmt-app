// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"

const trigger1 = document.getElementById("index"); //INDEX
const trigger2 = document.getElementById("about"); //ABOUT
const indexModal = document.getElementById("indexModalCenter");
const aboutModal = document.getElementById("aboutModalCenter");

// Ajouter des event listeners pour les deux triggers
trigger1.addEventListener("click", () => {
  if (indexModal.classList.contains("show")) {
    trigger1.textContent = "Close";
    // Fermer la modal about si elle est ouverte
    if (aboutModal.classList.contains("show")) {
      aboutModal.classList.remove("show");
      trigger2.textContent = "About";
    }
    // if (trigger2.textContent === "Close") {
    // 	 trigger2.textContent = "About";
    // }
  }
});

trigger2.addEventListener("click", () => {
  if (aboutModal.classList.contains("show")) {
    trigger2.textContent = "Close";
    // Fermer la modal about si elle est ouverte
    if (indexModal.classList.contains("show")) {
      indexModal.classList.remove("show");
      trigger1.textContent = "Index";
    }
    // if (trigger1.textContent === "Close") {
    // 	trigger1.textContent = "Index";
    // }
  }
});

