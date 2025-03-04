import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.addEventListener("DOMContentLoaded", () => {
  // Botón de prueba de geolocalización
  const geoButton = document.getElementById("geoButton");
  if (geoButton) {
      geoButton.addEventListener("click", () => {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition((position) => {
                  alert(`Ubicación: Lat ${position.coords.latitude}, Lng ${position.coords.longitude}`);
              }, () => {
                  alert("No se pudo obtener la ubicación.");
              });
          } else {
              alert("Geolocalización no soportada en este navegador.");
          }
      });
  }

  // Cargar libros desde una API ficticia
  const bookList = document.getElementById("bookList");
  if (bookList) {
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
          .then(response => response.json())
          .then(data => {
              data.forEach(post => {
                  const bookItem = document.createElement("div");
                  bookItem.classList.add("post-section");
                  bookItem.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
                  bookList.appendChild(bookItem);
              });
          })
          .catch(error => console.error("Error cargando libros:", error));
  }
});
