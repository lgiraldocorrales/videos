// Obtén la referencia al elemento div con la clase "relative"
var videoContainer = document.querySelector('.vtex-slider-layout-0-x-videoContainer');

// Crea una etiqueta 'a' y establece el atributo 'href'
var link = document.createElement('a');
link.href = '/wellness-club'; // Reemplaza con la URL de destino que deseas

// Inserta la etiqueta 'a' antes de la etiqueta 'video' dentro del div
videoContainer.insertBefore(link, videoContainer.querySelector('video'));
