
const imagenesUrls = [
    'Imagenes/img-1.jpeg',
    'Imagenes/img-2.webp',
    'Imagenes/img-3.jpg',
    'Imagenes/img-4.webp',
    'Imagenes/img-5.jpg'
];

// Función para generar el código HTML de las imágenes
function renderImages(images) {
    return images.map(url => `<img src="${url}" alt="Imagen">`).join('');
}

// Obtener el contenedor donde se renderizarán las imágenes
const imageContainer = document.getElementById('img');

// Inyectar el código HTML generado en el contenedor
imageContainer.innerHTML = renderImages(imagenesUrls);
