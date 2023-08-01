const imagenesNombres = [
  { url: "Imagenes/img-1.jpeg", texto: "Arte" },
  { url: "Imagenes/img-2.webp", texto: "Auto" },
  { url: "Imagenes/img-3.jpg", texto: "Paisaje" },
  { url: "Imagenes/img-4.webp", texto: "Ciudad" },
  { url: "Imagenes/img-5.jpg", texto: "Universo" },
];


function renderImages(images) {
  return images.map(item => `
  <div class="img-texts">
  <img src="${item.url}" alt="Imagen">
  <p>${item.texto}</p>
  </div>
  `).join("");
}


const img = document.getElementById("img");


img.innerHTML = renderImages(imagenesNombres);
